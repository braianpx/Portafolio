import React from "react";
import PrivateImagesNotice from "./PrivateImagesNotice";
import ProjectCarousel from "./ProjectCarousel";
import "./ExperienceProject.css"; // Importación del archivo CSS que creamos

const ExperienceProject = ({ project }) => {
  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="experience-project-item mb-5">
      {/* Encabezado: Título y Periodo */}
      <div className="d-flex flex-wrap align-items-baseline gap-3 mb-2">
        <h5 className="project-title mb-0">
          {project.name}
        </h5>
        
        {project.period && (
          <span className="project-period-badge">
            {project.period}
          </span>
        )}
      </div>

      {/* Descripción del proyecto */}
      <p className="project-description mb-3">
        {project.description}
      </p>

      {/* Highlights / Puntos clave */}
      {project.highlights && (
        <ul className="project-highlights-list mb-3">
          {project.highlights.map((item, index) => (
            <li key={index} className="project-highlight-item">
              <span className="project-highlight-bullet">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Badges de Tecnologías Mejorados */}
      {project.techStack && (
        <div className="tech-stack-container">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Área Multimedia (Carrusel o Aviso de Privacidad) */}
      <div className="project-media-wrapper">
        {!hasImages ? (
          <div className="p-3">
            <PrivateImagesNotice />
          </div>
        ) : (
          <ProjectCarousel images={project.images} />
        )}
      </div>
    </div>
  );
};

export default ExperienceProject;
