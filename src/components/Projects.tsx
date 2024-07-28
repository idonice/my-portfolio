import React from 'react';
import '../style/Projects.css';
import { PacmanLoader } from 'react-spinners';
import { BsEggFried } from "react-icons/bs";
import { GiTicTacToe } from "react-icons/gi";

import Project from './Project';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <Project name='Real-time Tic-Tac-Toe' link=''>
                    <GiTicTacToe size={80} color='black' />
                </Project>
                <Project name='Smart meal planner' link=''>
                    <BsEggFried size={80} color='yellow' />
                </Project>

            </div>
        </section>
    );
};

export default Projects;
