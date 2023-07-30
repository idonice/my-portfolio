import React from "react";
import "../styles/About.scss";
import Skill from "./Skill";
const skills = ["HTML", "CSS", "JS", "REACT", "C#", ".NET"];

const About = () => {
  return (
    <div id="about" className="about-me">
      <h2>About me</h2>
      <p>
        I am a passionate full stack engineer that looking for my next
        challenge.
        <br />
        I enjoy working on challenging projects and continuously improving my
        skills to stay up-to-date with the latest technologies. <br />
        When I'm not coding, you can find me playing soccer or enjoying a good
        cup of coffee.
      </p>
      <h2>My skills</h2>
      <div className="skills-wrapper">
        {skills.map((skill, index) => (
          <Skill key={index} content={skill} />
        ))}
      </div>
    </div>
  );
};
export default About;
