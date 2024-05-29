import React from "react";
import Contact from "./Contact";
import Documents from "./Documents";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="footerMain">
      <div id="outLinks">
        <Contact />
        <Documents />
      </div>
      <p>
        <FaRegCopyright /> 2024 Omer F. Kosar
      </p>
    </footer>
  );
};

export default Footer;
