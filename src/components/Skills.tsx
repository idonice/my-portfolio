import React from 'react';
import { FaReact, FaGithub } from 'react-icons/fa';
import { DiNodejsSmall } from 'react-icons/di';
import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { ReactComponent as MongoDBIcon } from '../assets/icons/mongodb.svg';
import '../style/About.css';

const Skills: React.FC = () => {
    return <div className='section skills'>
        <FaReact style={{ color: '#61dafb' }} title="React" />
        <IoLogoHtml5 style={{ color: '#e34f26' }} title="HTML5" />
        <IoLogoCss3 style={{ color: '#1572b6' }} title="CSS3" />
        <DiNodejsSmall style={{ color: '#68a063' }} title="Node.js" />
        <FaGithub style={{ color: '#333' }} title="GitHub" />
        <SiTypescript title="TypeScript" style={{ color: '#007acc' }} />
        <MongoDBIcon title="MongoDB" />    </div>
}

export default Skills;