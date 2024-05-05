import React from "react";
import welcomeLight from "../Assets/welcomeLight.jpeg";
import { useEffect } from "react";
import animationDelay from "../Utils/animationDelay";

const Welcome = () => {
  useEffect(() => {
    animationDelay();
  });
  return (
    <div className="typewriterContainer" id="welcome">
      <img
        src={welcomeLight}
        alt="a illistruation of a penguan listening music and coding"
        id="welcomeMop"
      />
      <h1 className="typewriter">Hi , I am Omer</h1>
      <h2 className="typewriter">Designer and Frontend Developer</h2>
      <ul>
        <li className="typewriter">-Responsive</li>
        <li className="typewriter">-Accesible</li>
        <li className="typewriter">-SEO compatible</li>
        <li className="typewriter">-Unique or Templated</li>
        <li className="typewriter">-Interactive</li>
        <li className="typewriter">-Dynamic</li>
        <li className="typewriter">-Single or Multi Page</li>
      </ul>
    </div>
  );
};

export default Welcome;
