import React from "react";
import Preview from "./Preview";
import PropTypes from "prop-types";

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

Case.propTypes = {
  preview: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
  codeLink: PropTypes.string.isRequired,
  previewLink: PropTypes.string.isRequired,
};

export default Case;
