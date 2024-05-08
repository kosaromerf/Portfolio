import React from "react";

const Case = ({ prewiew, name, detail, techs, codeLink, prewiewLink }) => {
  let labels = techs.map((tech, index) => (
    <p key={index} className="label">
      {tech}
    </p>
  ));

  return (
    <div className="case">
      <section className="casePrewiew">{prewiew}</section>
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
          href={prewiewLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Review
        </a>
      </section>
    </div>
  );
};

export default Case;
