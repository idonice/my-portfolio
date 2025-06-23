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
  comingSoon,
  children,
}) => {
  const [comingSoonRender, setComingSoonRender] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <div
        className="project"
        onClick={() => setComingSoonRender(!comingSoonRender)}
      >
        {children}
        <span className="project-name">{name}</span>
        <span className="project-description">{description}</span>
      </div>
    </div>
  );
};

export default Project;
