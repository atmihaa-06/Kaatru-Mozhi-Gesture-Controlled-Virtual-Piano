import { useEffect, useState } from "react";

function Recordings() {

  const [recordings, setRecordings] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/recordings")
      .then((res) => res.json())
      .then((data) => {
        setRecordings(data);
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  const playRecording = async (filename) => {

    try {

      const response = await fetch(
        `http://127.0.0.1:8000/api/play/${filename}`,
        {
          method: "POST"
        }
      );

      const data = await response.json();

      console.log(data);

    } catch (error) {

      console.error(error);

    }

  };

  const downloadRecording = (filename) => {

    window.open(
      `http://127.0.0.1:8000/api/download/${filename}`,
      "_blank"
    );

  };

  const stopPlayback = async () => {

  try {

    const response = await fetch(
      "http://127.0.0.1:8000/api/stop",
      {
        method: "POST"
      }
    );

    const data = await response.json();

    console.log(data);

  } catch (error) {

    console.error(error);

  }

};

  return (

    <div className="recordings-page">

      <h1 className="page-title">
        Recordings
      </h1>

      <div className="recordings-container">

        {recordings.length === 0 ? (

          <p>No recordings found.</p>

        ) : (

          recordings.map((recording, index) => (

            <div
              key={index}
              className="recording-card"
            >

              <div>

                <h2>{recording.name}</h2>

                <p>
                  Notes Recorded: {recording.notes}
                </p>

              </div>

              <div className="recording-actions">

                <button
                  onClick={() =>
                    playRecording(recording.name)
                  }
                >
                  ▶ Play
                </button>

                <button
                  onClick={() =>
                    downloadRecording(recording.name)
                  }
                >
                  ⬇ Download
                </button>

                <button
                  onClick={stopPlayback}
                >
                  ⏹ Stop
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );
}

export default Recordings;