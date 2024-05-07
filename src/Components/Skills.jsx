import React from "react";
import ListItem from "./ListItem";
import HTML5 from "../Assets/icons/HTML5.png";
import CSS3 from "../Assets/icons/CSS3.png";
import JavaScript from "../Assets/icons/JavaScript.png";
import TypeScript from "../Assets/icons/TypeScript.png";
import ReactJS from "../Assets/icons/React.png";
import NodeJs from "../Assets/icons/NodeJs.png";
import ExpressJs from "../Assets/icons/ExpressJs.png";
import MongoDB from "../Assets/icons/MongoDB.png";
import PostgreSQL from "../Assets/icons/PostgreSQL.png";
import Bootstrap from "../Assets/icons/Bootstrap.png";
import Sass from "../Assets/icons/Sass.png";
import jQuery from "../Assets/icons/jQuery.png";
import Git from "../Assets/icons/Git.png";
import GitHub from "../Assets/icons/GitHub.png";
import VSCode from "../Assets/icons/VSCode.png";
import Excel from "../Assets/icons/Excel.png";
import Word from "../Assets/icons/Word.png";
import PowerPoint from "../Assets/icons/PowerPoint.png";

const Skills = () => {
  return (
    <div id="skills">
      <h2>My Skills</h2>
      <div>
        <section className="divided">
          <div id="technos">
            <h4>Technologies</h4>
            <ul>
              <ListItem img={HTML5} content={"HTML5"} />
              <ListItem img={CSS3} content={"CSS3"} />
              <ListItem img={JavaScript} content={"JavaScript"} />
              <ListItem img={TypeScript} content={"TypeScript"} />
              <ListItem img={ReactJS} content={"React"} />
              <ListItem img={NodeJs} content={"NodeJs"} />
              <ListItem img={MongoDB} content={"MongoDB"} />
              <ListItem img={PostgreSQL} content={"PostgreSQL"} />
              <ListItem img={Bootstrap} content={"Bootstrap"} />
            </ul>
          </div>
          <div id="tools">
            <h4>Tools</h4>
            <ul>
              <ListItem img={Git} content={"Git"} />
              <ListItem img={GitHub} content={"GitHub"} />
              <ListItem img={VSCode} content={"VSCode"} />
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
