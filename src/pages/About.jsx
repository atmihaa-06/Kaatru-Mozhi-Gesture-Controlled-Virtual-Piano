import {
  FaMusic,
  FaHandPaper,
  FaChartBar,
  FaMicrophone,
  FaReact
} from "react-icons/fa";

import {
  SiPython,
  SiOpencv,
  SiMediapipe,
  SiVite
} from "react-icons/si";

function About() {

  const features = [
    {
      icon: <FaMusic />,
      title: "Virtual Piano",
      desc: "Play piano notes on any flat surface using computer vision."
    },
    {
      icon: <FaHandPaper />,
      title: "Hand Tracking",
      desc: "Detect fingertips in real-time with MediaPipe."
    },
    {
      icon: <FaMicrophone />,
      title: "Recording",
      desc: "Record and replay your piano performances."
    },
    {
      icon: <FaChartBar />,
      title: "Analytics",
      desc: "Track note usage and playing statistics."
    }
  ];

  const technologies = [
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <SiVite />,
      name: "Vite"
    },
    {
      icon: <SiPython />,
      name: "Python"
    },
    {
      icon: <SiOpencv />,
      name: "OpenCV"
    },
    {
      icon: <SiMediapipe />,
      name: "MediaPipe"
    }
  ];

  return (

    <div className="about-page">

      <h1 className="page-title">
        About Kaatru-Mozhi
      </h1>

      <p className="about-subtitle">
        A gesture-controlled virtual piano that transforms any flat
        surface into an interactive musical instrument using
        computer vision and real-time hand tracking.
      </p>

      <div className="about-section">

        <h2 className="section-title">
          Project Features
        </h2>

        <div className="features-section">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="feature-card"
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

      <div className="about-section">

        <h2 className="section-title">
          Technology Stack
        </h2>

        <div className="tech-grid">

          {technologies.map((tech) => (

            <div
              key={tech.name}
              className="tech-card"
            >

              <div className="tech-icon">
                {tech.icon}
              </div>

              <h3>
                {tech.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

      <div className="about-section">

        <h2 className="section-title">
          Developer
        </h2>

        <div className="developer-card">

          <h2>
            Kaatru-Mozhi Project
          </h2>

          <p>
            Developed as an innovative gesture-controlled piano
            system combining React, OpenCV and MediaPipe.
          </p>

          <p style={{ marginTop: "15px" }}>
            VIT University
          </p>

        </div>

      </div>

    </div>

  );
}

export default About;