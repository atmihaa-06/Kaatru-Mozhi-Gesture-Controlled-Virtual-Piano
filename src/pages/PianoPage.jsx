import { useState } from "react";

function PianoPage() {

  const [status, setStatus] = useState("Ready");
  const [note, setNote] = useState("--");

  const startCamera = async () => {

  try {

    const response = await fetch(
      "http://127.0.0.1:8000/api/start-camera",
      {
        method: "POST"
      }
    );

    const data = await response.json();

    setStatus(data.message);

  } catch {

    setStatus("Failed");

  }

};

  const stopCamera = async () => {

  try {

    const response = await fetch(
      "http://127.0.0.1:8000/api/stop-camera",
      {
        method: "POST"
      }
    );

    const data = await response.json();

    setStatus(data.message);

  } catch {

    setStatus("Failed");

  }

};

const startRecording = async () => {

  try {

    const response = await fetch(
      "http://127.0.0.1:8000/api/start-recording",
      {
        method: "POST"
      }
    );

    const data = await response.json();

    setStatus(data.message);

  } catch {

    setStatus("Failed");

  }

};

const stopRecording = async () => {

  try {

    const response = await fetch(
      "http://127.0.0.1:8000/api/stop-recording",
      {
        method: "POST"
      }
    );

    const data = await response.json();

    setStatus(data.message);

  } catch {

    setStatus("Failed");

  }

};
  return (

    <div className="piano-page">

      <h1 className="page-title">
        Gesture Piano
      </h1>

      <p className="piano-subtitle">
        Control the piano using hand gestures and play on any flat surface.
      </p>

      <div className="status-card">
        <span className="status-dot"></span>
        Backend Status: {status}
      </div>

      <div className="camera-box">
        Camera Feed Window Opens Separately
      </div>

      <div className="piano-controls">

        <button
          className="control-btn"
          onClick={startCamera}
        >
          Start Camera
        </button>

        <button
          className="control-btn"
          onClick={stopCamera}
        >
          Stop Camera
        </button>

        <button
          className="control-btn"
          onClick={startRecording}
        >
          Start Recording
        </button>

        <button
          className="control-btn"
          onClick={stopRecording}
        >
          Stop Recording
        </button>

        <button className="control-btn">
          Playback
        </button>

      </div>

      <div className="note-display">
        Detected Note: {note}
      </div>

      <div className="instructions-card">

        <h3>Instructions</h3>

        <ol>
          <li>Run the backend server.</li>
          <li>Click Start Camera.</li>
          <li>Press SPACE to calibrate.</li>
          <li>Select 4 wall corners.</li>
          <li>Play using your fingertips.</li>
        </ol>

      </div>

    </div>

  );
}

export default PianoPage;