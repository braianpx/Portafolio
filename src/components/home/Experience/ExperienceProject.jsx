import React from "react";
import { Badge } from "react-bootstrap";

const ExperienceProject = ({ project }) => {
  return (
    <div className="mb-4 ps-3 border-start">
      <h6 className="fw-semibold mb-1">{project.name}</h6>

      {project.period && (
        <small className="text-muted d-block mb-1">
          {project.period}
        </small>
      )}

      <p className="mb-2">{project.description}</p>

      <ul className="mb-2">
        {project.highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="d-flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge bg="secondary" key={tech}>
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ExperienceProject;
