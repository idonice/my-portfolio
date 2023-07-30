import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Header.scss";

const Header = () => {
  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={handleScrollToTop}>
              HOME
            </Link>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              ABOUT ME
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500}>
              PROJECTS
            </ScrollLink>
          </li>
          <li>
            <a href="/resume.pdf" download>
              RESUME
            </a>
          </li>
          <li>
            <a
              href="https://github.com/idonice"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ido-nice/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
