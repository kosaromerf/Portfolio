import React from "react";
import logoDarkBg from "../Assets/Logo/logoDarkBg.webp";
import { useEffect } from "react";
import headerVisibility from "../Utils/headerVisibility";

const Header = () => {
  useEffect(() => {
    headerVisibility();
  }, []);
  return (
    <div id="header">
      <a href="#welcome">
        <img src={logoDarkBg} alt="logo" id="logo" />
      </a>
      <nav id="navbar">
        <a href="#about" id="about-link" className="nav-link">
          About
        </a>
        <a href="#skills" id="skill-link" className="nav-link">
          Skills
        </a>
        <a href="#projects" id="project-link" className="nav-link">
          Projects
        </a>
        <a href="#footerMain" id="contact-link" className="nav-link">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
