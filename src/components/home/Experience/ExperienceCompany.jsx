import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ExperienceProject from "./ExperienceProject";
import { motion, AnimatePresence } from "framer-motion";
import "./ExperienceCompany.css"; // Importación del nuevo CSS

const ExperienceCompany = ({ company }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card 
      as={motion.div} 
      layout 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mb-4 shadow-sm border-0 company-card"
    >
      <Card.Body className="p-4">
        <motion.div layout="position" className="d-flex flex-column flex-md-row justify-content-between align-items-start">
          <div className="w-100">
            {/* CABECERA: Logo + Nombre */}
            <div className="d-flex align-items-center mb-3">
              {company.image && (
                <img
                  src={company.image}
                  alt={company.company}
                  className="company-logo"
                />
              )}
              <div>
                <h4 className="fw-bold mb-0 company-name">
                  {company.company}
                </h4>
                <div className="d-flex flex-wrap align-items-center gap-2 mt-1">
                  <span className="fw-semibold text-dark company-role-text">
                    {company.role}
                  </span>
                </div>
              </div>
            </div>
            
            {/* INFO SECUNDARIA: Fechas y Links */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
              <span className="badge bg-light text-secondary border px-2 py-1 company-period-badge">
                {company.period}
              </span>
              
              <div className="d-flex gap-3 company-links-group">
                {company.linkedin && (
                  <a
                    href={company.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none company-link"
                  >
                    LinkedIn ↗
                  </a>
                )}
                {company.web && (
                  <a
                    href={company.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none company-link"
                  >
                    Web ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* BOTÓN DE ACCIÓN */}
          <div className="mt-2 mt-md-0 flex-shrink-0">
            <Button
              variant={open ? "dark" : "outline-dark"}
              size="sm"
              onClick={() => setOpen(!open)}
              className="rounded-pill px-4 py-2 fw-medium company-toggle-btn"
              aria-expanded={open}
            >
              {open ? "Cerrar" : "Ver Proyectos"}
            </Button>
          </div>
        </motion.div>

        {/* DESCRIPCIÓN */}
        <motion.p 
          layout="position" 
          className="mt-2 text-secondary company-description"
        >
          {company.description}
        </motion.p>

        {/* CONTENEDOR DE PROYECTOS */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              style={{ overflow: "hidden" }} // Se mantiene inline para el cálculo de Framer
            >
              <div className="mt-4 pt-4 border-top">
                <h6 className="text-uppercase text-muted fw-bold mb-3 projects-container-header">
                  Proyectos en esta empresa
                </h6>
                {company.projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <ExperienceProject project={project} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card.Body>
    </Card>
  );
};

export default ExperienceCompany;
