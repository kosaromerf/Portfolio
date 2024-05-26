import React from "react";
import welcomeLight from "../Assets/welcomeLight.webp";
import { useEffect } from "react";
import animationDelay from "../Utils/animationDelay";

const Welcome = () => {
  useEffect(() => {
    animationDelay();
  });
  return (
    <div id="welcome">
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
          Frontend focused <span>Web Developer</span> who loves building
          <span> efficent</span>, <span>clean</span> and
          <span> scalable</span> projects
        </p>

        <h4 className="typewriter" id="projectQuality">
          Project Qualities
        </h4>
        <ul id="qualityList">
          <li className="typewriter">-Responsive</li>
          <li className="typewriter">-Accessible</li>
          <li className="typewriter">-SEO friendly</li>
          <li className="typewriter">-Custom or Templated</li>
          <li className="typewriter">-Interactive</li>

          <li className="typewriter">-Single or MultiPage</li>
        </ul>
      </div>
    </div>
  );
};

export default Welcome;
