import React, { useState } from "react";
import yoopLogo from "../assets/images/yoopLogo.png";
import urlScannerLogo from "../assets/images/urlScannerLogo.png";
import { GiTicTacToe } from "react-icons/gi";
import "../style/Projects.css";

import Project from "./Project";
import ProjectModal from "./ProjectModal";
import YoopDescription from "./YoopDescription";
import TicTacToeDescription from "./TicTacToeDescription";

const Projects: React.FC = () => {
  const [modalData, setModalData] = useState<{
    title: string;
    children: React.ReactNode;
  } | null>(null);

  const openModal = (title: string, children: React.ReactNode) => {
    setModalData({ title, children });
  };

  const closeModal = () => setModalData(null);
  const yoopDescription =
    "אפליציה לחיבור שחקנים ותיאום מגרשים. משתמשים לדוגמה: ";
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div
          style={{ width: "100%" }}
          onClick={() =>
            openModal("YOOP - Connect player together", <YoopDescription />)
          }
        >
          <Project name="YOOP - Connect player together" description="Next.js">
            <div
              className="project-img"
              style={{
                backgroundSize: "80%",
                backgroundColor: "#0088ed",
                backgroundImage: `url(${yoopLogo})`,
              }}
            />
          </Project>
        </div>
        <div
          style={{ width: "100%" }}
          onClick={() =>
            openModal("Real-time Tic-Tac-Toe", <TicTacToeDescription />)
          }
        >
          <Project
            name="Real-time Tic-Tac-Toe"
            description="React | Node | Socket.io"
          >
            <GiTicTacToe size={80} color="black" />
          </Project>
        </div>

        <div
          style={{ width: "100%" }}
          onClick={() => openModal("URL Scanner web app", <p>coming soon</p>)}
        >
          <Project
            name="URL Scanner web app"
            description="Next.js | Puppeteer | Redis"
          >
            <div
              className="project-img"
              style={{
                backgroundImage: `url(${urlScannerLogo})`,
              }}
            />
          </Project>
        </div>
      </div>

      {modalData && (
        <ProjectModal
          isOpen={true}
          onClose={closeModal}
          title={modalData.title}
        >
          {modalData.children}
        </ProjectModal>
      )}
    </section>
  );
};

export default Projects;
