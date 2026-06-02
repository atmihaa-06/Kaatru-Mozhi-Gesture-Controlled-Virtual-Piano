import cv2
import numpy as np

NOTES = [
    "C", "C#",
    "D", "D#",
    "E",
    "F", "F#",
    "G", "G#",
    "A", "A#",
    "B"
]

WHITE_KEYS = ["C", "D", "E", "F", "G", "A", "B"]

BLACK_KEYS = [
    ("C#", 0),
    ("D#", 1),
    ("F#", 3),
    ("G#", 4),
    ("A#", 5)
]


def draw_piano(
    frame,
    wall_points,
    active_notes=None
):

    if active_notes is None:
        active_notes = []

    if len(wall_points) != 4:
        return []

    tl, tr, br, bl = wall_points

    width = tr[0] - tl[0]
    height = bl[1] - tl[1]

    white_key_width = width / 7

    keys = []

    # ==========================
    # White Key Outlines
    # ==========================
    for i, note in enumerate(WHITE_KEYS):

        x1 = int(tl[0] + i * white_key_width)
        x2 = int(tl[0] + (i + 1) * white_key_width)

        border_color = (40, 40, 40)

        if note in active_notes:

            # Glow when pressed
            cv2.rectangle(
                frame,
                (x1, tl[1]),
                (x2, bl[1]),
                (255, 180, 0),
                6
            )

            border_color = (255, 180, 0)

        cv2.rectangle(
            frame,
            (x1, tl[1]),
            (x2, bl[1]),
            border_color,
            3
        )

        cv2.putText(
            frame,
            note,
            (x1 + 15, bl[1] - 15),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.7,
            border_color,
            2
        )

        keys.append({
            "note": note,
            "x1": x1,
            "x2": x2,
            "y1": tl[1],
            "y2": bl[1]
        })

    # ==========================
    # Black Key Outlines
    # ==========================
    black_height = int(height * 0.60)
    black_width = int(white_key_width * 0.45)

    for note, white_index in BLACK_KEYS:

        center_x = int(
            tl[0] +
            (white_index + 1) * white_key_width
        )

        x1 = center_x - black_width // 2
        x2 = center_x + black_width // 2

        border_color = (40, 40, 40)

        if note in active_notes:

            cv2.rectangle(
                frame,
                (x1, tl[1]),
                (x2, tl[1] + black_height),
                (255, 180, 0),
                6
            )

            border_color = (255, 180, 0)

        cv2.rectangle(
            frame,
            (x1, tl[1]),
            (x2, tl[1] + black_height),
            border_color,
            3
        )

        cv2.putText(
            frame,
            note,
            (x1 + 2, tl[1] + black_height - 10),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.45,
            border_color,
            1
        )

        keys.append({
            "note": note,
            "x1": x1,
            "x2": x2,
            "y1": tl[1],
            "y2": tl[1] + black_height
        })

    return keys