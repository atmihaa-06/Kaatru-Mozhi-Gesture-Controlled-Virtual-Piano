function Piano() {
  return (
    <div className="piano-page">

      <h1 className="piano-title">
        Gesture Piano
      </h1>

      <p className="piano-subtitle">
        Control the piano using your hand movements.
      </p>

      <div className="camera-box">
        Camera Feed
      </div>

      <div className="piano-controls">
        <button className="control-btn">
          Start Camera
        </button>

        <button className="control-btn">
          Start Recording
        </button>
      </div>

      <div className="note-display">
        Detected Note: --
      </div>

    </div>
  );
}

export default Piano;