import React from "react";
import Modal from "react-bootstrap/Modal";
import "./index.css"; // nuevo CSS con mejoras de diseño

const ProjectDetailModal = ({ show, onHide, project }) => {
  if (!project) return null;

  const {
    name,
    description,
    rol,
    modality,
    scope,
    responsive,
    features,
    technologies,
    image,
    link,
    repo,
    completed
  } = project;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="project-detail-modal">
      <Modal.Header closeButton style={{ borderBottom: `2px solid ${"#000"}` }}>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Imagen */}
        {image && (
          <div className="project-detail-modal__image-wrapper">
            <img src={image} alt={name} />
          </div>
        )}

        {/* Información general mejorada */}
        <div className="project-detail-modal__info-chips">
          <span className="info-chip">Rol: {rol}</span>
          <span className="info-chip">Modalidad: {modality}</span>
          <span className="info-chip">Alcance: {scope}</span>
          <span className="info-chip">Responsive: {responsive ? "Sí" : "No"}</span>
          <span
            className={`info-chip ${completed ? "completed" : "in-progress"}`}
          >
            Estado: {completed ? "Finalizado" : "En desarrollo"}
          </span>
        </div>


        {/* Descripción */}
        <div className="project-detail-modal__section">
          <h5 className="section-title">Descripción</h5>
          {description.map((desc, idx) => (
            <p key={idx}>{desc}</p>
          ))}
        </div>

        {/* Tecnologías */}
        <div className="project-detail-modal__section">
          <h5 className="section-title">Tecnologías</h5>
          <div className="project-detail-modal__tech-group">
            {technologies.frontEnd?.length > 0 && (
              <div className="tech-category">
                <strong>Frontend: </strong>
                {technologies.frontEnd.map((tech) => (
                  <span key={tech} className="project-detail-modal__tech-tag">{tech}</span>
                ))}
              </div>
            )}
            {technologies.backEnd?.length > 0 && (
              <div className="tech-category">
                <strong>Backend: </strong>
                {technologies.backEnd.map((tech) => (
                  <span key={tech} className="project-detail-modal__tech-tag">{tech}</span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="project-detail-modal__section">
          <h5 className="section-title">Features</h5>
          <ul className="project-detail-modal__features-list">
            {features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </div>
      </Modal.Body>

      <Modal.Footer className="project-detail-modal__footer">
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="custom-btn custom-btn-secondary"
          >
            Repositorio
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="custom-btn custom-btn-primary"
          >
            Ver Aplicación
          </a>
        )}
        <button onClick={onHide} className="custom-btn custom-btn-outline">
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectDetailModal;
