import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { TbBrandFiverr } from "react-icons/tb";
import { SiFreelancer } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";
import addClipboard from "../Utils/addClipboard";

const Contact = () => {
  return (
    <section id="contact">
      <h3>Contact</h3>
      <div id="contactLinks">
        <p id="myemail">
          kosaromerf@gmail.com{" "}
          <button id="clipBoard" aria-label="copyMail">
            <MdOutlineContentCopy id="mailicon" onClick={addClipboard} />
          </button>
        </p>
        <div id="icons">
          <a
            href="mailto:kosaromerf@gmail.com"
            className="iconLink"
            title="E-Mail"
          >
            <TfiEmail className="icon" />
          </a>
          <a href="#" className="iconLink" title="Linkedin">
            <GrLinkedinOption className="icon" />
          </a>
          <a href="#" className="iconLink" title="GitHub">
            <FiGithub className="icon" />
          </a>
          <a href="#" className="iconLink" title="Fiverr">
            <TbBrandFiverr className="icon" />
          </a>
          <a href="#" className="iconLink" title="Freelancer">
            <SiFreelancer className="icon" />
          </a>
          <a href="#" className="iconLink" title="Upwork">
            <FaUpwork className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
