import React from "react";
import "../styles/Projects.scss";

const toApp = () => {
  alert("coming soon");
};
const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1>My projects</h1>
      <div className="projects-wrapper">
        {/* {projects.map((project) => (
          <div key={project.id} className="project">
            {project.name}
          </div>
        ))} */}
        <div className="gym-screenshot"></div>
        <div className="project-contnet">
          <h2>Gym Management Web App</h2>
          <p>
            The web app includes a variety of features such as managing a
            training diary, registering for classes, tracking activity and more.
            <br />
            The system includes a management interface for a gym manager.
          </p>
          <button onClick={toApp}>GO TO APP</button>
        </div>
      </div>
    </div>
  );
};
export default Projects;
