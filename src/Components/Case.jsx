import React from "react";
import Preview from "./Preview";

const Case = ({ preview, name, detail, techs, codeLink, previewLink }) => {
  let labels = techs.map((tech, index) => (
    <p key={index} className="label">
      {tech}
    </p>
  ));

  return (
    <div className="case">
      <Preview preview={preview} />
      <section className="caseInfo">
        <h3 className="caseName">{name}</h3>
        <p className="caseDetail">{detail}</p>
        <div className="labels">{labels}</div>
        <a
          className="codeLink"
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="prewiewLink"
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Preview
        </a>
      </section>
    </div>
  );
};

export default Case;
