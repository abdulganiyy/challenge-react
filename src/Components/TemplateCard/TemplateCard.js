import React from "react";
import "./TemplateCard.css";

const TemplateCard = ({ template }) => {
  return (
    <div className="templatecard">
      <div className="templatecard-header">
        <h3 className="templatecard-title">{template.name}</h3>
        <p className="templatecard-body">{template.description}</p>
      </div>
      <div className="templatecard-footer">
        <a className="templatecard-link" href={template.link}>
          Use template
        </a>
      </div>
    </div>
  );
};

export default TemplateCard;
