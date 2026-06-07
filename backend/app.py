import cv2
import mediapipe as mp

from calibration import calibrate_surface
from piano import draw_piano
from sound_engine import play_note
from playback import start_playback

from stats import (
    update_stats,
    get_most_played
)

from heatmap import (
    register_hit,
    get_hits
)
from recording import (
    start_recording,
    stop_recording,
    save_note,
    get_recording,
    is_recording,
    save_recording_to_file
)

import threading
import time

# ==========================
# MediaPipe Setup
# ==========================
mp_hands = mp.solutions.hands

FINGERTIPS = [4, 8, 12, 16, 20]

hands = mp_hands.Hands(
    static_image_mode=False,
    max_num_hands=2,
    model_complexity=1,
    min_detection_confidence=0.6,
    min_tracking_confidence=0.6
)

last_played_notes = set()

# ==========================
# Find Key Under Finger
# ==========================
def get_note_from_position(x, y, keys):

    for key in keys:

        if (
            key["x1"] <= x <= key["x2"]
            and
            key["y1"] <= y <= key["y2"]
        ):
            return key["note"]

    return None


# ==========================
# Touch Detection
# ==========================
def is_touching(hand_landmarks, tip_id):

    if tip_id == 4:
        joint_id = 3
    else:
        joint_id = tip_id - 2

    tip = hand_landmarks.landmark[tip_id]
    joint = hand_landmarks.landmark[joint_id]

    return abs(tip.y - joint.y) < 0.045


# ==========================
# Build Piano Key Map
# ==========================
def build_key_map(wall_points):

    keys = []

    width = wall_points[1][0] - wall_points[0][0]
    key_width = width / 12

    notes = [
        "C", "C#",
        "D", "D#",
        "E",
        "F", "F#",
        "G", "G#",
        "A", "A#",
        "B"
    ]

    for i, note in enumerate(notes):

        x1 = int(
            wall_points[0][0] +
            i * key_width
        )

        x2 = int(
            wall_points[0][0] +
            (i + 1) * key_width
        )

        keys.append({
            "note": note,
            "x1": x1,
            "x2": x2,
            "y1": wall_points[0][1],
            "y2": wall_points[3][1]
        })

    return keys

def playback():

    notes = get_recording()

    if not notes:
        print("No recording found")
        return

    previous_time = 0

    for item in notes:

        note = item["note"]
        current_time = item["time"]

        delay = current_time - previous_time

        if delay > 0:
            time.sleep(delay)

        play_note(note)
        register_hit(note)
        previous_time = current_time
# ==========================
# Main
# ==========================
def main():

    global last_played_notes

    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        print("Could not open webcam")
        return

    print()
    print("Press SPACE to calibrate wall")
    print("Press Q to quit")

    wall_points = None

    while True:

        success, frame = cap.read()

        if not success:
            break

        frame = cv2.flip(frame, 1)

        h, w, _ = frame.shape

        active_notes = []
        currently_touching = set()

        keys = []

        if wall_points:
            keys = build_key_map(wall_points)

        # ==========================
        # Hand Tracking
        # ==========================
        rgb = cv2.cvtColor(
            frame,
            cv2.COLOR_BGR2RGB
        )

        results = hands.process(rgb)

        if results.multi_hand_landmarks:

            for hand_landmarks in results.multi_hand_landmarks:

                for tip_id in FINGERTIPS:

                    tip = hand_landmarks.landmark[tip_id]

                    x = int(tip.x * w)
                    y = int((tip.y * h) + 8)

                    note = None

                    if wall_points:

                        note = get_note_from_position(
                            x,
                            y,
                            keys
                        )

                    touching = is_touching(
                        hand_landmarks,
                        tip_id
                    )

                    if note and touching:

                        currently_touching.add(
                            note
                        )

                        active_notes.append(
                            note
                        )

                        if note not in last_played_notes:

                          play_note(note)

                          save_note(note)
                          register_hit(note)

                          update_stats(note)
                          last_played_notes.add(note)

        # ==========================
        # Reset Released Notes
        # ==========================
        last_played_notes.intersection_update(
            currently_touching
        )

        active_notes = list(
            dict.fromkeys(active_notes)
        )

        # ==========================
        # Draw Piano
        # ==========================
        if wall_points:

            keys = draw_piano(
                frame,
                wall_points,
                active_notes
            )

        # ==========================
        # Draw Fingertips ON TOP
        # ==========================
        if results.multi_hand_landmarks:

            for hand_landmarks in results.multi_hand_landmarks:

                for tip_id in FINGERTIPS:

                    tip = hand_landmarks.landmark[tip_id]

                    x = int(tip.x * w)
                    y = int((tip.y * h) + 8)

                    note = None

                    if wall_points:

                        note = get_note_from_position(
                            x,
                            y,
                            keys
                        )

                    color = (0, 255, 255)

                    if note in active_notes:
                        color = (0, 255, 0)

                    cv2.circle(
                        frame,
                        (x, y),
                        5,
                        color,
                        -1
                    )

                    cv2.circle(
                        frame,
                        (x, y),
                        8,
                        (255, 255, 255),
                        1
                    )

        # ==========================
        # Status Display
        # ==========================
        if active_notes:

            cv2.putText(
                frame,
                f"Active: {' '.join(active_notes)}",
                (20, 40),
                cv2.FONT_HERSHEY_SIMPLEX,
                1,
                (0, 255, 0),
                2
            )

        else:

            cv2.putText(
                frame,
                "Active: None",
                (20, 40),
                cv2.FONT_HERSHEY_SIMPLEX,
                1,
                (0, 255, 255),
                2
            )

        if not wall_points:

            cv2.putText(
                frame,
                "SPACE = Calibrate Wall",
                (20, 80),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.8,
                (255, 255, 255),
                2
            )

        cv2.putText(
            frame,
            "Q = Quit",
            (20, 120),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.8,
            (255, 255, 255),
            2
        )
        if is_recording():

            cv2.circle(
                frame,
                (w - 50, 40),
                10,
                (0, 0, 255),
                -1
            )

        cv2.putText(
            frame,
            "REC",
            (w - 90, 48),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.8,
            (0, 0, 255),
            2
        )
       
        # ==========================
        # Heatmap Display
        # ==========================

        hits = get_hits()

        y_pos = 220

        

        y_pos += 30

       

        y_pos += 22
        cv2.imshow(
            "Kaatru-Mozhi Virtual Piano",
            frame
        )

        key = cv2.waitKey(1) & 0xFF
        if key != 255:
            print("KEY PRESSED:", chr(key))

        if key == ord(" "):

            wall_points = calibrate_surface(
                frame.copy()
            )

            print("\nWall Calibrated")

        elif key == ord("r"):

            if not is_recording():

                start_recording()
                print("Recording Started")

            else:

                stop_recording()
                save_recording_to_file()
                print("Recording Stopped")

        elif key == ord("p"):

            threading.Thread(
                target=playback,
                daemon=True
            ).start()

        elif key == ord("q"):
            break
    #save_recording()

    most_played = get_most_played()

    if most_played:

        print()
        print(
            "Most Played Note:",
            most_played
        )

    cap.release()
    cv2.destroyAllWindows()


if __name__ == "__main__":
    main()