import React, { useState } from "react";
import { Card, Button, Collapse, Badge } from "react-bootstrap";
import ExperienceProject from "./ExperienceProject";

const ExperienceCompany = ({ company }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-4 shadow-sm border-0">
      <Card.Body>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div>
            <div className="d-flex align-items-center mb-2">
              {company.image && (
                <img
                  src={company.image}
                  alt={company.company}
                  style={{ width: 50, height: 50, objectFit: "cover", marginRight: 10, borderRadius: 5 }}
                />
              )}
              <h4 className="fw-bold mb-0">{company.company}</h4>
            </div>
            
            <p className="mb-1 text-muted">{company.role}</p>
            <small className="text-secondary">{company.period}</small>

            <div className="mt-2">
              {company.linkedin && (
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3"
                >
                  LinkedIn
                </a>
              )}
              {company.web && (
                <a
                  href={company.web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web
                </a>
              )}
            </div>
          </div>

          <div className="mt-3 mt-md-0">
            <Button
              variant="outline-dark"
              size="md"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
            >
              {open ? "Ocultar proyectos" : "Ver proyectos"}
            </Button>
          </div>
        </div>

        <p className="mt-3">{company.description}</p>

        <Collapse in={open}>
          <div className="mt-4">
            {company.projects.map((project) => (
              <ExperienceProject key={project.id} project={project} />
            ))}
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default ExperienceCompany;
