import React from "react";

const ProjectsHeader = ({ heading, subtitle }) => {
  return (
    <div className="projects-header text-center mb-4">
      <h2 className="display-5 mb-2">{heading}</h2>
      <p className="text-muted projects-subtitle">
        {subtitle}
      </p>
    </div>
  );
};

export default ProjectsHeader;
