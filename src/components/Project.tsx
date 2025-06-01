import React, { ReactNode, useState } from "react";
import "../style/Projects.css";

interface ProjectProps {
  name: string;
  link?: string;
  description: string;
  comingSoon?: boolean;
  previewVideoUrl?: string;
  children: ReactNode;
}

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  link,
  comingSoon,
  previewVideoUrl,
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <div className="project">
          {children}
          <span className="project-name">{name}</span>
          <span className="project-description">{description}</span>
          {comingSoon && (
            <span className="project-description">
              coming soon |{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                click here for preview
              </a>
            </span>
          )}
        </div>
      </a>

      {isModalOpen && previewVideoUrl && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <video width="100%" height="auto" controls autoPlay>
              <source src={previewVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
