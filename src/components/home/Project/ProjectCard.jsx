import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProjectDetailModal from "../Modals/ProjectDetailModal"; // <- importamos el modal
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  // Hook declarado siempre, antes de cualquier condicional
  const [showModal, setShowModal] = useState(false);

  if (!project) return null; // aquí ya está seguro usar el hook

  const {
    name,
    shortDescription,
    image,
    technologies,
    rol,
    repo,
    link
  } = project;

  return (
    <Col xl={4} lg={4} md={6} sm={12} className="mb-4">
      <Card className="project-card__container h-100">
        {/* Imagen */}
        <div className="project-card__image-wrapper">
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <div className="project-card__image-placeholder" />
          )}
        </div>

        <Card.Body className="project-card__body">
          {/* Rol */}
          <span className="project-card__role">{rol}</span>

          {/* Título */}
          <h5 className="project-card__title">{name}</h5>

          {/* Descripción */}
          <p className="project-card__description">{shortDescription}</p>

          {/* Tecnologías */}
          <div className="project-card__stack">
            {technologies?.frontEnd?.length > 0 && (
              <div className="project-card__stack-row">
                <span className="project-card__stack-label">Frontend</span>
                <div className="project-card__stack-tags">
                  {technologies.frontEnd.slice(0, 4).map((tech) => (
                    <span key={tech} className="project-card__stack-tag">{tech}</span>
                  ))}
                  {technologies.frontEnd.length > 4 && (
                    <span className="project-card__stack-more">
                      +{technologies.frontEnd.length - 4}
                    </span>
                  )}
                </div>
              </div>
            )}

            {technologies?.backEnd?.length > 0 && (
              <div className="project-card__stack-row">
                <span className="project-card__stack-label">Backend</span>
                <div className="project-card__stack-tags">
                  {technologies.backEnd.slice(0, 4).map((tech) => (
                    <span key={tech} className="project-card__stack-tag">{tech}</span>
                  ))}
                  {technologies.backEnd.length > 4 && (
                    <span className="project-card__stack-more">
                      +{technologies.backEnd.length - 4}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </Card.Body>

        {/* Acciones */}
        <div className="project-card__actions">
          <Button
            className="project-card__btn-details"
            onClick={() => setShowModal(true)}
          >
            Ver detalles →
          </Button>

          <div className="project-card__links">
            {repo && (
              <a href={repo} target="_blank" rel="noreferrer">
                Repositorio
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                Aplicación
              </a>
            )}
          </div>
        </div>
      </Card>

      {/* Modal reutilizando el componente que creamos */}
      <ProjectDetailModal
        show={showModal}
        onHide={() => setShowModal(false)}
        project={project}
      />
    </Col>
  );
};

export default ProjectCard;
