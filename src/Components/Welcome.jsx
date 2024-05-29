import React from "react";
import welcomeLight from "../Assets/Images/welcomeLight.webp";
import { useEffect } from "react";
import animationDelay from "../Utils/animationDelay";

const Welcome = () => {
  useEffect(() => {
    animationDelay();
  });
  return (
    <section id="welcome">
      <img
        src={welcomeLight}
        alt="a illistruation of a penguan listening music and coding"
        id="welcomeMop"
      />
      <div id="typewriterContainer">
        <h1 className="typewriter" id="greetings">
          Hi ,I'm <span id="name">Omer</span>
        </h1>
        <p id="whoIAm">
          <span>Frontend</span> focused <span>Web Developer</span> who loves
          building
          <span> efficent</span> and <span>clean </span>
          projects
        </p>
        <ul id="qualityList">
          <li className="typewriter">-Responsive</li>
          <li className="typewriter">-Performant</li>
          <li className="typewriter">-SEO friendly</li>
          <li className="typewriter">-Custom </li>
          <li className="typewriter">-Scalable </li>
          <li className="typewriter">-Interactive</li>
          <li className="typewriter">-Accessible </li>
        </ul>
      </div>
    </section>
  );
};

export default Welcome;
