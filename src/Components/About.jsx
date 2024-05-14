import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p id="aboutText">
        I'm Omer Kosar, a budding Frontend Web developer with a Mechanical
        Engineering background. I have a passion for crafting user-friendly web
        applications. You can check my{" "}
        <span>
          <a href="#skills">skillset</a>
        </span>
        .
        <br />
        <br />
        As a voracious learner, I devour knowledge to fuel my journey. Eager to
        channel my analytical skills and passion into innovative{" "}
        <span>
          <a href="#projects">projects</a>
        </span>
        , I'm on a quest to create impactful digital experiences.
      </p>
    </div>
  );
};

export default About;
