# 🎹 Kaatru-Mozhi

### A Gesture-Controlled Virtual Piano Using Computer Vision and Hand Tracking

Kaatru-Mozhi transforms any flat surface into an interactive virtual piano using computer vision, real-time hand tracking, and gesture recognition. By leveraging OpenCV, MediaPipe, FastAPI, and React, the system allows users to play piano notes without physically touching a keyboard.

The project aims to provide an innovative, touchless musical experience where fingertips become piano keys and gestures become music.

---

## 🌟 Project Overview

Traditional musical instruments require dedicated hardware and physical interaction. Kaatru-Mozhi reimagines this experience by using a webcam and computer vision to detect hand movements and fingertip interactions on any calibrated surface.

Users can:

* Play a virtual piano using hand gestures.
* Record performances.
* Replay recorded sessions.
* View playing statistics and analytics.
* Download recorded performances.
* Interact with a modern web-based dashboard.

---

## 🚀 Key Features

### 🎹 Virtual Piano

* Converts any flat surface into a piano.
* Supports multiple notes and finger interactions.
* Real-time note triggering.

### ✋ Gesture-Based Interaction

* MediaPipe-powered fingertip tracking.
* Touch detection without physical contact.
* Smooth and responsive note recognition.

### 📹 Surface Calibration

* User-defined calibration using four corner points.
* Dynamic piano key generation.
* Flexible deployment on walls, tables, or screens.

### 🎵 Recording & Playback

* Record entire piano sessions.
* Store performances as JSON files.
* Replay recordings while preserving timing and sequence.
* Stop playback at any time.

### 📊 Analytics Dashboard

* Track total notes played.
* Identify most frequently played notes.
* Generate note usage statistics.
* Visualize performance data.

### 🌐 Frontend Dashboard

* Modern React-based user interface.
* Live backend integration.
* Recording management.
* Analytics visualization.
* Camera and recording controls.

---

## 🏗️ System Architecture

```text
User Gestures
      │
      ▼
 Webcam Feed
      │
      ▼
 OpenCV Processing
      │
      ▼
 MediaPipe Hand Tracking
      │
      ▼
 Touch Detection Engine
      │
      ▼
 Piano Note Mapping
      │
      ▼
 Sound Playback
      │
      ├────────► Recording Engine
      │
      ├────────► Statistics Engine
      │
      └────────► FastAPI Backend
                        │
                        ▼
                  React Frontend
```

---

## 🛠️ Technology Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Python
* FastAPI
* Uvicorn

### Computer Vision

* OpenCV
* MediaPipe

### Storage

* JSON-based recording storage
* JSON-based analytics persistence

---

## 📂 Project Structure

```text
Kaatru-Mozhi/
│
├── backend/
│   ├── api.py
│   ├── app.py
│   ├── calibration.py
│   ├── piano.py
│   ├── recording.py
│   ├── playback.py
│   ├── sound_engine.py
│   ├── stats.py
│   ├── heatmap.py
│   ├── recordings/
│   └── stats_data.json
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── App.jsx
│
├── public/
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/n-j-m06/Kaatru-Mozhi.git
cd Kaatru-Mozhi
```

---

## Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
pip install fastapi uvicorn opencv-python mediapipe numpy
```

Start API server:

```bash
uvicorn api:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

API Documentation:

```text
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

Navigate to project root:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Running the Virtual Piano

From the backend directory:

```bash
python app.py
```

Workflow:

1. Launch camera.
2. Press SPACE to calibrate.
3. Select four corners of the target surface.
4. Use fingertips to interact with the virtual piano.
5. Press R to start/stop recording.
6. Press P to replay recordings.
7. Press Q to exit.

---

## 📡 API Endpoints

| Endpoint               | Method | Description         |
| ---------------------- | ------ | ------------------- |
| `/api/status`          | GET    | Backend status      |
| `/api/stats`           | GET    | Piano analytics     |
| `/api/recordings`      | GET    | List recordings     |
| `/api/play/{file}`     | POST   | Play recording      |
| `/api/stop`            | POST   | Stop playback       |
| `/api/download/{file}` | GET    | Download recording  |
| `/api/start-recording` | POST   | Start recording     |
| `/api/stop-recording`  | POST   | Stop recording      |
| `/api/start-camera`    | POST   | Launch piano system |

---

## 📊 Current Capabilities

✅ Real-time hand tracking

✅ Surface calibration

✅ Gesture-controlled piano

✅ Audio playback

✅ Session recording

✅ Recording playback

✅ Playback control

✅ Download recordings

✅ Performance analytics

✅ Frontend-backend integration

✅ FastAPI REST APIs

---

## 🔮 Future Enhancements

* Live note streaming to frontend.
* Browser-embedded camera feed.
* Multi-octave piano support.
* MIDI export functionality.
* User profiles and authentication.
* Cloud storage integration.
* AI-assisted gesture recognition.
* Mobile device compatibility.

---

## 🎯 Project Goal

Kaatru-Mozhi demonstrates how computer vision and gesture recognition can transform everyday surfaces into interactive musical instruments. The project bridges technology and creativity, making music more accessible, immersive, and touchless.

---

### Transforming gestures into music, one note at a time 🎹✨
