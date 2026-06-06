import threading
import time

from recording import get_recording
from sound_engine import play_note


def playback_song():

    notes = get_recording()

    if len(notes) == 0:
        print("No recording found")
        return

    print("Playing Recording")

    start_time = time.time()

    for item in notes:

        target_time = item["time"]

        while (
            time.time() - start_time
            < target_time
        ):
            time.sleep(0.001)

        play_note(item["note"])

    print("Playback Finished")


def start_playback():

    thread = threading.Thread(
        target=playback_song,
        daemon=True
    )

    thread.start()