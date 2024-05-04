import React from "react";
import styles from "../Styles/Header.module.css";
import logoDarkBg from "../Assets/logoDarkBg.png";

const Header = () => {
  return (
    <div id="header">
      <img src={logoDarkBg} alt="log" id="logo" />

      <nav id="navbar">
        <a href="#" id="about-lnk" className="link">
          About
        </a>
        <a href="#" id="skill-lnk" className="link">
          Skills
        </a>
        <a href="#" id="project-lnk" className="link">
          Projects
        </a>
        <a href="#" id="contact-lnk" className="link">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
