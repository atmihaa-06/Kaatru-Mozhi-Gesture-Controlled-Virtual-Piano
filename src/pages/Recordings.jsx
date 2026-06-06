import RecordingCard from "../components/RecordingCard";

function Recordings() {

  return (

    <div className="page">

      <h1 className="page-title">
        Recordings
      </h1>

      <div className="recordings-container">

        <RecordingCard
          title="Session 1"
          duration="00:23"
        />

        <RecordingCard
          title="Session 2"
          duration="00:15"
        />

        <RecordingCard
          title="Session 3"
          duration="00:34"
        />

      </div>

    </div>

  );

}

export default Recordings;