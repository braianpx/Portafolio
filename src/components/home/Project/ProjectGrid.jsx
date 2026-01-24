import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects }) => {
  return (
    <Row>
      {projects.map((project) => (
        <Col key={project.id} lg={4} md={6} sm={12} className="mb-4">
          <ProjectCard project={project} />
        </Col>
      ))}
    </Row>
  );
};

export default ProjectGrid;
