import React from "react";
import Case from "./Case";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <Case
        prewiew={"#"}
        name={"Spice Shop"}
        detail={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut velit minus eum ad accusamus nemo,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut velit minus eum ad accusamus nemo, id sapiente ratione? Veniam. id sapiente ratione? Veniam. Details"
        }
        techs={["HTML", "CSS", "JavaScript", "React"]}
        codeLink={"#"}
        prewiewLink={"#"}
      />
      <Case
        prewiew={"#"}
        name={"Battleship Game"}
        detail={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut velit minus eum ad accusamus nemo,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut velit minus eum ad accusamus nemo, id sapiente ratione? Veniam. id sapiente ratione? Veniam. Details"
        }
        techs={["HTML", "CSS", "JavaScript", "React"]}
        codeLink={"#"}
        prewiewLink={"#"}
      />
      <Case
        prewiew={"#"}
        name={"Inventory Application"}
        detail={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut velit minus eum ad accusamus nemo,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut velit minus eum ad accusamus nemo, id sapiente ratione? Veniam. id sapiente ratione? Veniam. Details"
        }
        techs={["HTML", "CSS", "JavaScript", "NodeJS"]}
        codeLink={"#"}
        prewiewLink={"#"}
      />
    </div>
  );
};

export default Projects;
