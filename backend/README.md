# Kaatru-Mozhi Backend

## Overview

The Kaatru-Mozhi Backend powers the gesture-controlled virtual piano system by handling computer vision processing, hand tracking, note detection, recording management, playback, analytics, and communication with the React frontend through FastAPI APIs.

The backend combines OpenCV, MediaPipe, and FastAPI to transform any flat surface into a playable virtual piano controlled entirely through hand gestures.

---

## Features

### Virtual Piano Detection

* Converts any calibrated flat surface into a piano keyboard.
* Maps finger positions to piano notes.
* Supports real-time note triggering.

### Hand Tracking

* Uses MediaPipe Hands for accurate fingertip detection.
* Supports multiple fingers simultaneously.
* Real-time gesture recognition with low latency.

### Surface Calibration

* Allows users to calibrate a wall or flat surface.
* Generates a virtual keyboard layout based on selected corner points.

### Audio Playback

* Plays piano notes instantly upon fingertip interaction.
* Supports note playback during live performance and recordings.

### Recording System

* Record complete piano performances.
* Stores notes with precise timestamps.
* Saves recordings as JSON files for future playback.

### Playback System

* Replay previously recorded sessions.
* Preserves original timing and note sequence.
* Supports stopping playback at any time.

### Analytics Engine

* Tracks total notes played.
* Identifies the most frequently played note.
* Maintains note usage statistics.
* Generates data for frontend visualizations and heatmaps.

### REST API

* Provides endpoints for frontend integration.
* Controls camera operations, recordings, playback, analytics, and file management.

---

## Technology Stack

| Technology | Purpose                              |
| ---------- | ------------------------------------ |
| Python     | Core backend development             |
| FastAPI    | REST API framework                   |
| OpenCV     | Computer vision processing           |
| MediaPipe  | Hand tracking and landmark detection |
| NumPy      | Mathematical computations            |
| JSON       | Recording and analytics storage      |
| Threading  | Background playback operations       |

---

## Project Structure

```text
backend/
│
├── api.py                 # FastAPI server
├── app.py                 # Main virtual piano application
├── calibration.py         # Surface calibration
├── piano.py               # Piano rendering
├── sound_engine.py        # Note playback engine
├── recording.py           # Recording management
├── playback.py            # Recording playback
├── stats.py               # Analytics and statistics
├── heatmap.py             # Note heatmap tracking
│
├── recordings/            # Saved recordings
│   ├── recording_xxx.json
│
└── stats_data.json        # Persistent note statistics
```

---

## API Endpoints

### Backend Status

```http
GET /api/status
```

Response:

```json
{
  "status": "ACTIVE"
}
```

---

### Analytics Data

```http
GET /api/stats
```

Response:

```json
{
  "total_notes": 91,
  "most_played": "E",
  "note_stats": {
    "C": 12,
    "D": 10,
    "E": 16
  }
}
```

---

### List Recordings

```http
GET /api/recordings
```

Returns all saved recordings with note count and duration.

---

### Play Recording

```http
POST /api/play/{filename}
```

Starts playback of a selected recording.

---

### Stop Playback

```http
POST /api/stop
```

Stops currently active playback.

---

### Download Recording

```http
GET /api/download/{filename}
```

Downloads the selected recording file.

---

### Start Recording

```http
POST /api/start-recording
```

Starts a new recording session.

---

### Stop Recording

```http
POST /api/stop-recording
```

Stops the current recording session.

---

### Start Camera

```http
POST /api/start-camera
```

Launches the OpenCV-based virtual piano system.

---

## Running the Backend

### Install Dependencies

```bash
pip install fastapi uvicorn opencv-python mediapipe numpy
```

### Start API Server

```bash
uvicorn api:app --reload
```

Server:

```text
http://127.0.0.1:8000
```

Interactive Documentation:

```text
http://127.0.0.1:8000/docs
```

### Launch Virtual Piano

```bash
python app.py
```

---

## Workflow

1. Start the FastAPI backend.
2. Launch the virtual piano camera system.
3. Calibrate the target surface.
4. Play notes using fingertip gestures.
5. Record sessions if required.
6. Replay recordings through the frontend.
7. Analyze note statistics and usage patterns.

---

## Future Enhancements

* Live note streaming to frontend.
* Browser-based camera feed.
* Multi-octave piano support.
* MIDI export functionality.
* Cloud storage for recordings.
* User authentication and profiles.
* AI-powered gesture recognition improvements.

---

## Final Note

Transforming gestures into music, one note at a time 🎹✨
