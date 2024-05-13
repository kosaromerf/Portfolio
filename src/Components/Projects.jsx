import React from "react";
import { useState } from "react";
import Case from "./Case";
import name1 from "../Assets/placeholder/name1.jpg";
import name2 from "../Assets/placeholder/name2.jpg";
import name3 from "../Assets/placeholder/name3.jpg";
import name4 from "../Assets/placeholder/name4.jpg";
import name5 from "../Assets/placeholder/name5.jpg";

const Projects = () => {
  const placeholder = [
    { alt: "1", image: name1 },
    { alt: "2", image: name2 },
    { alt: "3", image: name3 },
    { alt: "4", image: name4 },
    { alt: "5", image: name5 },
  ];
  return (
    <div id="projects">
      <h2>Projects</h2>
      <Case
        preview={placeholder}
        name={"E-Commerce for Local Business"}
        detail={
          "An online platform for a local spice shop where customers can browse and purchase products remotely."
        }
        techs={["HTML", "CSS", "JavaScript", "React"]}
        codeLink={"#"}
        previewLink={"#"}
      />
      <Case
        preview={placeholder}
        name={"Profesional Personal Website"}
        detail={
          "A professional website to showcase the skills and portfolio of a frontend web developer."
        }
        techs={["HTML", "CSS", "JavaScript", "React"]}
        codeLink={"#"}
        previewLink={"#"}
      />
      <Case
        preview={placeholder}
        name={"Messaging Application"}
        detail={
          "This project focuses on creating a basic messaging application similar to WhatsApp, providing users with a platform to exchange messages."
        }
        techs={["HTML", "CSS", "JavaScript", "NodeJS"]}
        codeLink={"#"}
        previewLink={"#"}
      />
      <Case
        preview={placeholder}
        name={"Temp Case"}
        detail={
          "temporibus, laboriosam repudiandae dolor minus vero, iure debitis soluta maxime rerum nesciunt fugiat excepturi ab omnis facilis unde odit nemo aliquid. Molestiae accusamus doloribus voluptates blanditiis corporis vel eaque, iusto eveniet. Praesentium molestiae beatae rerum numquam dolorem deleniti explicabo cum libero omnis et quisquam accusamus nostrum, in maiores facere quidem quis consectetur architecto. Labore, assumenda dicta soluta sint possimus quam autem itaque ipsam tempora id quibusdam placeat qui, optio voluptate fugit dolores. Distinctio reprehenderit eligendi pariatur incidunt cumque esse quos culpa doloribus officia aperiam eos vero ipsam consequuntur, possimus, debitis cupiditate? Voluptatum vel natus aspernatur magnam nisi, laborum iste reprehenderit neque deserunt odit suscipit quibusdam deleniti earum aliquam voluptas, corporis cumque nam hic esse illo animi? Explicabo suscipit rem, natus voluptatibus, facilis odit sequi voluptates nisi non ex eos error ut, beatae dolorem cupiditate consequuntur accusamus iure laboriosam ratione. Id quae dignissimos, architecto nobis dicta nulla numquam amet sunt ab quisquam sint. Beatae, veniam ipsum, optio molestias consectetur corrupti aliquam possimus sint libero modi facere illum quo iste totam sunt nobis voluptates ut, ad adipisci reiciendis sapiente numquam exercitationem? Ea deleniti illo tempora veritatis iste beatae, ratione explicabo amet voluptate ut sed blanditiis consectetur?"
        }
        techs={["HTML", "CSS", "JavaScript", "NodeJS"]}
        codeLink={"#"}
        previewLink={"#"}
      />
    </div>
  );
};

export default Projects;
