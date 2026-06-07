function RecordingCard({

  title,
  duration

}) {

  return (

    <div className="recording-card">

      <h2>{title}</h2>

      <p>
        Duration: {duration}
      </p>

      <div className="recording-buttons">

        <button>
          ▶ Play
        </button>

        <button>
          Delete
        </button>

      </div>

    </div>

  );

}

export default RecordingCard;