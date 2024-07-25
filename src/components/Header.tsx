import React from 'react';
import '../style/Header.css';

const Header: React.FC = () => {
    const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    };
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
                    <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                    <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
                    <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
                    <li className='cv'><a href="/cv.pdf" download="Ido_Nice_CV.pdf">Download CV</a></li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;
