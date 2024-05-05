import React from "react";
import styles from "../Styles/Header.module.css";
import logoDarkBg from "../Assets/logoDarkBg.png";
import { useEffect } from "react";
import headerVisibility from "../Utils/headerVisibility";

const Header = () => {
  useEffect(() => {
    headerVisibility();
  }, []);
  return (
    <div id="header">
      <img src={logoDarkBg} alt="logo" id="logo" />

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
