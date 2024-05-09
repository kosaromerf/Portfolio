import React from "react";
import Contact from "./Contact";
import Documents from "./Documents";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <Contact />
        <Documents />
      </footer>
      <p id="copyright">copyright</p>
    </div>
  );
};

export default Footer;
