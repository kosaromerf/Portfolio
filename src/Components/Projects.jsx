import React from "react";
import Case from "./Case";
import name1 from "../Assets/PersonalWebsite/name1.jpg";
import name2 from "../Assets/PersonalWebsite/name2.jpg";
import name3 from "../Assets/PersonalWebsite/name3.jpg";
import name4 from "../Assets/PersonalWebsite/name4.jpg";
import name5 from "../Assets/PersonalWebsite/name5.jpg";
import image1 from "../Assets/PersonalWebsite/image1.png";
import image2 from "../Assets/PersonalWebsite/image2.png";
import image3 from "../Assets/PersonalWebsite/image3.png";
import image4 from "../Assets/PersonalWebsite/image4.png";
import image5 from "../Assets/PersonalWebsite/image5.png";

const Projects = () => {
  const placeholder = [
    { alt: "1", image: name1 },
    { alt: "2", image: name2 },
    { alt: "3", image: name3 },
    { alt: "4", image: name4 },
    { alt: "5", image: name5 },
  ];

  const portfolio = [
    { alt: "1", image: image1 },
    { alt: "2", image: image2 },
    { alt: "3", image: image3 },
    { alt: "4", image: image4 },
    { alt: "5", image: image5 },
  ];

  return (
    <div id="projects">
      <h2>Projects</h2>
      {/*       <Case
        preview={placeholder}
        name={"E-Commerce for Local Business"}
        detail={
          "An online platform for a local spice shop where customers can browse and purchase products remotely."
        }
        techs={["HTML", "CSS", "JavaScript", "React"]}
        codeLink={"#"}
        previewLink={"#"}
      /> */}
      <Case
        preview={portfolio}
        name={"Profesional Personal Website"}
        detail={
          "A professional website to showcase the skills and portfolio of a frontend web developer."
        }
        techs={["HTML", "CSS", "JavaScript", "React"]}
        codeLink={"#"}
        previewLink={"#"}
      />
      {/*       <Case
        preview={placeholder}
        name={"Messaging Application"}
        detail={
          "This project focuses on creating a basic messaging application similar to WhatsApp, providing users with a platform to exchange messages."
        }
        techs={["HTML", "CSS", "JavaScript", "NodeJS"]}
        codeLink={"#"}
        previewLink={"#"}
      /> */}
    </div>
  );
};

export default Projects;
