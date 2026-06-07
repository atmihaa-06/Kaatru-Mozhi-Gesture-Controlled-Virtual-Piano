import RecordingCard from "../components/RecordingCard";

function Recordings() {

  const recordings = [
    {
      id: 1,
      name: "Session 1",
      duration: "00:23",
      date: "07 Jun 2026"
    },
    {
      id: 2,
      name: "Session 2",
      duration: "00:15",
      date: "07 Jun 2026"
    },
    {
      id: 3,
      name: "Session 3",
      duration: "00:34",
      date: "07 Jun 2026"
    }
  ];

  return (

    <div className="recordings-page">

      <h1 className="page-title">
        Recordings
      </h1>

      <div className="recordings-container">

        {recordings.map((recording) => (

          <div
            key={recording.id}
            className="recording-card"
          >

            <div>

              <h2>{recording.name}</h2>

              <p>
                Duration: {recording.duration}
              </p>

              <p>
                Recorded: {recording.date}
              </p>

            </div>

            <div className="recording-actions">

              <button>
                ▶ Play
              </button>

              <button>
                ⬇ Download
              </button>

              <button>
                🗑 Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Recordings;