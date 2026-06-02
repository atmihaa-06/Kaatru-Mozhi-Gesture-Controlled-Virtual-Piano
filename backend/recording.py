import time

recording = False
recorded_notes = []
record_start_time = 0


def start_recording():
    global recording
    global recorded_notes
    global record_start_time

    recording = True
    recorded_notes = []
    record_start_time = time.time()

    print("Recording Started")


def stop_recording():
    global recording

    recording = False

    print("Recording Stopped")


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