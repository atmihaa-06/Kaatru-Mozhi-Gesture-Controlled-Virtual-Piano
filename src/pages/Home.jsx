import Piano from "../components/Piano";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="hero">

      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="sound-wave"></div>

      <h1 className="hero-title">
        KAATRU-MOZHI
      </h1>

      <p className="hero-subtitle">
        Virtual Piano Powered By Vision.
        Played By Gestures.
      </p>

      <button
        className="launch-btn"
        onClick={() => navigate("/piano")}
      >
        Launch Piano
      </button>

      <Piano />

    </div>

  );
}

export default Home;