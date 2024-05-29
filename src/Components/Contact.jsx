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
            target="_blank"
          >
            <TfiEmail className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kosaromerf/"
            className="iconLink"
            title="Linkedin"
            aria-label="Go to Linkedin Profile"
            target="_blank"
          >
            <GrLinkedinOption className="icon" />
          </a>
          <a
            href="https://github.com/kosaromerf"
            className="iconLink"
            title="GitHub"
            target="_blank"
            aria-label="Go to GitHub Profile"
          >
            <FiGithub className="icon" />
          </a>
          <a
            href="https://www.fiverr.com/kosaromer"
            className="iconLink"
            title="Fiverr"
            target="_blank"
            aria-label="Go to Fiverr Profile"
          >
            <TbBrandFiverr className="icon" />
          </a>
          <a
            href="https://www.freelancer.com/u/KosarOmer?sb=t"
            className="iconLink"
            title="Freelancer"
            target="_blank"
            aria-label="Go to Freelancer Profile"
          >
            <SiFreelancer className="icon" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~015701b0dec58e4016"
            className="iconLink"
            title="Upwork"
            target="_blank"
            aria-label="Go to Upwork Profile"
          >
            <FaUpwork className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
