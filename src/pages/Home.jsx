import Piano from "../components/Piano";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="hero">

      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      <h1 className="hero-title">
        KAATRU-MOZHI
      </h1>

      <p className="hero-subtitle">
        Transform any flat surface into a virtual piano using
        computer vision, gesture tracking, and real-time audio feedback.
      </p>

      <button
        className="launch-btn"
        onClick={() => navigate("/piano")}
      >
        Launch Piano
      </button>

      <Piano />

      <div className="features-section">

        <div className="feature-card">
          <h3>Hand Tracking</h3>
          <p>
            Detect fingertips in real time using MediaPipe.
          </p>
        </div>

        <div className="feature-card">
          <h3>Virtual Piano</h3>
          <p>
            Play notes on any calibrated surface.
          </p>
        </div>

        <div className="feature-card">
          <h3>Recording</h3>
          <p>
            Record and replay your performances.
          </p>
        </div>

        <div className="feature-card">
          <h3>Analytics</h3>
          <p>
            View note usage and piano heatmaps.
          </p>
        </div>

      </div>

    </div>

  );
}

export default Home;