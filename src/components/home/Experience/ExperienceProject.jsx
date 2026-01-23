import React from "react";
import { Badge } from "react-bootstrap";
import PrivateImagesNotice from "./PrivateImagesNotice";
import ProjectCarousel from "./ProjectCarousel";

const ExperienceProject = ({ project }) => {
  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="mb-5 ps-3 border-start">
      <h6 className="fw-semibold mb-1">{project.name}</h6>

      {project.period && (
        <small className="text-muted d-block mb-2">{project.period}</small>
      )}

      <p className="mb-2">{project.description}</p>

      {project.highlights && (
        <ul className="mb-2">
          {project.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {project.techStack && (
        <div className="d-flex flex-wrap gap-2 mb-3">
          {project.techStack.map((tech) => (
            <Badge bg="secondary" key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      )}

      {/* Si no hay imágenes */}
      {!hasImages && <PrivateImagesNotice />}

      {/* Carrusel si hay imágenes */}
      {hasImages && <ProjectCarousel images={project.images} />}
    </div>
  );
};

export default ExperienceProject;
