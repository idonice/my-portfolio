import React from "react";
import yoopLogo from "../assets/images/yoopLogo.png";
import urlScannerLogo from "../assets/images/urlScannerLogo.png";

import "../style/Projects.css";
import { GiTicTacToe } from "react-icons/gi";

import Project from "./Project";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-list">
        <Project
          name="Real-time Tic-Tac-Toe"
          description="React | Node | Socket.io"
          link="https://tic-tac-toe-acvm.onrender.com/"
        >
          <GiTicTacToe size={80} color="black" />
        </Project>
        <Project
          name="YOOP - Connect player together"
          description="Next.js"
          comingSoon={true}
        >
          <div
            style={{
              backgroundColor: "#0088ed",
              height: "80px",
              width: "80px",
              backgroundImage: `url(${yoopLogo})`,
              backgroundSize: "80%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "50%",
            }}
          />
        </Project>
        <Project
          name="URL Scanner web app"
          description="Next.js | Puppeteer | Redis"
          comingSoon={true}
        >
          <div
            style={{
              height: "80px",
              width: "80px",
              backgroundImage: `url(${urlScannerLogo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "50%",
            }}
          />
        </Project>
      </div>
    </section>
  );
};

export default Projects;
