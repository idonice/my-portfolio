import React, { useState } from 'react';
import { PacmanLoader } from 'react-spinners';

import '../style/Projects.css';

interface ProjectProps {
    name: string;
    link?: string;
    children: ReactNode;
}

const Project: React.FC<ProjectProps> = ({ name, link, children }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            <div className='project'>
                {children}
                <span className='project-name'>{name}</span>
            </div>
        </a>
    );
};

export default Project;