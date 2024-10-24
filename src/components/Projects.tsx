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
                <Project name='Real-time Tic-Tac-Toe' link='https://tic-tac-g1plz2v4e-idonices-projects.vercel.app'>
                    <GiTicTacToe size={80} color='black' />
                </Project>
            </div>
        </section>
    );
};

export default Projects;
