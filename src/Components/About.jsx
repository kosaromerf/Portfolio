import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <div>
        <section className="divided">
          <img src="#" alt="working man ilistruation" id="aboutImg" />
          <p id="aboutText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            vero illo quas magnam dolores mollitia doloremque voluptas adipisci
            veniam quisquam voluptate velit alias aliquid aspernatur
            perspiciatis quaerat doloribus nostrum iste.
          </p>
        </section>
      </div>
      <a href="#" target="#" id="resumeLink">
        Details
      </a>
    </div>
  );
};

export default About;
