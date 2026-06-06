import json
import os
import time

recording = False
recorded_notes = []
record_start_time = 0


def start_recording():
    global recording, recorded_notes, record_start_time

    recording = True
    recorded_notes = []
    record_start_time = time.time()


def stop_recording():
    global recording
    recording = False


def is_recording():
    return recording


def save_note(note):

    if not recording:
        return

    recorded_notes.append({
        "note": note,
        "time": time.time() - record_start_time
    })


def get_recording():
    return recorded_notes


def save_recording_to_file():

    if not recorded_notes:
        return

    os.makedirs("recordings", exist_ok=True)

    filename = f"recordings/recording_{int(time.time())}.json"

    with open(filename, "w") as f:
        json.dump(recorded_notes, f, indent=4)

    print(f"Saved: {filename}")