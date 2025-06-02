import React from "react";
import yoopLogo from "../assets/images/yoopLogo.png";
import urlScannerLogo from "../assets/images/urlScannerLogo.png";
import urlScannerPreview from "../assets/urlScannerPreview.mov";
import yoopPreview from "../assets/yoopPreview.mp4";

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
          previewVideoUrl={yoopPreview}
        >
          <div
            className="project-img"
            style={{
              backgroundSize: "80%",
              backgroundColor: "#0088ed",
              backgroundImage: `url(${yoopLogo})`,
            }}
          />
        </Project>
        <Project
          name="URL Scanner web app"
          description="Next.js | Puppeteer | Redis"
          comingSoon={true}
          previewVideoUrl={urlScannerPreview}
        >
          <div
            className="project-img"
            style={{
              backgroundImage: `url(${urlScannerLogo})`,
            }}
          />
        </Project>
      </div>
    </section>
  );
};

export default Projects;
