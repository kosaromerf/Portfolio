import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { TbBrandFiverr } from "react-icons/tb";
import { SiFreelancer } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h3>Contact</h3>
      <p id="contactLinks">
        <p id="myemail">
          kosaromerf@gmail.com <MdOutlineContentCopy id="mailicon" />
        </p>
        <div id="icons">
          <a href="mailto:kosaromerf@gmail.com" className="iconLink">
            <TfiEmail className="icon" />
          </a>
          <a href="#" className="iconLink" title="Linkedin">
            <GrLinkedinOption className="icon" />
          </a>
          <a href="#" className="iconLink">
            <FiGithub className="icon" />
          </a>
          <a href="#" className="iconLink">
            <TbBrandFiverr className="icon" />
          </a>
          <a href="#" className="iconLink">
            <SiFreelancer className="icon" />
          </a>
          <a href="#" className="iconLink">
            <FaUpwork className="icon" />
          </a>
        </div>
      </p>
    </section>
  );
};

export default Contact;
