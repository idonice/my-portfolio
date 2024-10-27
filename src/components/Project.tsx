import React, { useState } from 'react';
import { PacmanLoader } from 'react-spinners';

import '../style/Projects.css';

interface ProjectProps {
    name: string;
    link?: string;
    description: string
    children: ReactNode;
}

const Project: React.FC<ProjectProps> = ({ name, description, link, children }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            <div className='project'>
                {children}
                <span className='project-name'>{name}</span>
                <span className='project-description'>{description}</span>
            </div>
        </a>
    );
};

export default Project;