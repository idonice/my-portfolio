import React from "react";
import "../style/About.css";
import Skills from "./Skills";

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <h2>About Me</h2>
      <p>
        Innovative and motivated Software Developer & Product Manager with a
        deep passion for taking initiative,
        <br />
        assuming responsibility, and thriving as a collaborative team member.
        <br />
        I bring strong technical skills in building scalable web applications,
        combined with a deep understanding of product strategy and user-centered
        design.
        <br />
        Currently i'm during a{" "}
        <span className="bsc">
          BSc in Computer Science at The Open University
        </span>
        , I am fueled by a proactive approach to problem-solving and a genuine
        enthusiasm for working collectively on innovative projects.
      </p>
      <Skills />
    </section>
  );
};

export default About;
