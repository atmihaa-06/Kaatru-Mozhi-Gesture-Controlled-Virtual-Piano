from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from recording import (
    start_recording,
    stop_recording,
    is_recording
)
import subprocess
import json
import os
import threading
import time
from sound_engine import play_note

app = FastAPI()

playback_active = False
camera_process = None

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def play_recording_file(filename):

    global playback_active

    path = os.path.join(
        "recordings",
        filename
    )

    if not os.path.exists(path):
        return

    with open(path, "r") as f:
        notes = json.load(f)

    playback_active = True

    previous_time = 0

    for item in notes:

        if not playback_active:
            print("Playback Stopped")
            return

        note = item["note"]
        current_time = item["time"]

        delay = current_time - previous_time

        if delay > 0:
            time.sleep(delay)

        play_note(note)

        previous_time = current_time

    playback_active = False


@app.get("/api/status")
def status():

    return {
        "status": "ACTIVE"
    }


@app.get("/api/stats")
def stats():

    with open("stats_data.json", "r") as file:
        data = json.load(file)

    return data


@app.get("/api/recordings")
def recordings():

    recordings_folder = "recordings"

    if not os.path.exists(recordings_folder):
        return []

    files = sorted(
        os.listdir(recordings_folder),
        reverse=True
    )

    result = []

    for file in files:

        if not file.endswith(".json"):
            continue

        path = os.path.join(
            recordings_folder,
            file
        )

        with open(path, "r") as f:
            notes = json.load(f)

        duration = 0

        if len(notes) > 0:
            duration = round(
                notes[-1]["time"],
                2
            )

        result.append({
            "name": file,
            "notes": len(notes),
            "duration": duration
        })

    return result


@app.post("/api/play/{filename}")
def play_recording(filename):

    threading.Thread(
        target=play_recording_file,
        args=(filename,),
        daemon=True
    ).start()

    return {
        "message": f"Playing {filename}"
    }


@app.post("/api/stop")
def stop_playback():

    global playback_active

    playback_active = False

    return {
        "message": "Playback stopped"
    }


@app.get("/api/download/{filename}")
def download_recording(filename):

    path = os.path.join(
        "recordings",
        filename
    )

    if not os.path.exists(path):

        return {
            "error": "File not found"
        }

    return FileResponse(
        path,
        media_type="application/json",
        filename=filename
    )

@app.post("/api/start-camera")
def start_camera():

    global camera_process

    if camera_process is None:

        camera_process = subprocess.Popen(
            ["python", "app.py"]
        )

        return {
            "message": "Camera Started"
        }

    return {
        "message": "Camera Already Running"
    }

@app.post("/api/stop-camera")
def stop_camera():

    global camera_process

    if camera_process is not None:

        camera_process.terminate()

        camera_process = None

        return {
            "message": "Camera Stopped"
        }

    return {
        "message": "No Camera Running"
    }

@app.post("/api/start-recording")
def start_recording_api():

    if not is_recording():

        start_recording()

        return {
            "message": "Recording Started"
        }

    return {
        "message": "Already Recording"
    }

@app.post("/api/stop-recording")
def stop_recording_api():

    if is_recording():

        stop_recording()

        return {
            "message": "Recording Stopped"
        }

    return {
        "message": "Not Recording"
    }