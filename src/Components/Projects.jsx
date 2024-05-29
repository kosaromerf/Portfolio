import React from "react";
import Case from "./Case";
import image1 from "../Assets/PersonalWebsite/image1.png";
import image2 from "../Assets/PersonalWebsite/image2.png";
import image3 from "../Assets/PersonalWebsite/image3.png";
import image4 from "../Assets/PersonalWebsite/image4.png";
import image5 from "../Assets/PersonalWebsite/image5.png";

const Projects = () => {
  const portfolio = [
    { alt: "Home page with a navigation bar", image: image1 },
    { alt: "Project page with severel projects displayed", image: image2 },
    {
      alt: "Closable modal with extra images and information about project",
      image: image3,
    },
    { alt: "Responsive Tablet wiew of project page", image: image4 },
    { alt: "Responsive Mobile wiew of Home page", image: image5 },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <Case
        preview={portfolio}
        name={"Profesional Personal Website"}
        detail={
          "A professional website to showcase the skills and portfolio of a frontend web developer."
        }
        techs={["HTML", "CSS", "JavaScript", "React"]}
        codeLink={"https://github.com/kosaromerf/Personal-Website"}
        previewLink={"https://personalwebsite-rouge.vercel.app/"}
      />
    </section>
  );
};

export default Projects;
