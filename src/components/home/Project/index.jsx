import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "../migration";
import ProjectCard from "./ProjectCard";
import ProjectsFilters from "./ProjectsFilters";
import "./index.css"
const Project = ({ heading, projects }) => {
  const [activeStack, setActiveStack] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (!projects) return;

    const result = projects
      .filter((project) => project.completed)
      .filter((project) => {
        const stackMatch =
          activeStack === "all" || project.scope === activeStack;

        const typeMatch =
          activeType === "all" || project.modality === activeType;

        return stackMatch && typeMatch;
      });

    setFilteredProjects(result);
  }, [projects, activeStack, activeType]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-3 text-center">{heading}</h2>

        <ProjectsFilters
          activeStack={activeStack}
          activeType={activeType}
          onStackChange={setActiveStack}
          onTypeChange={setActiveType}
        />

        <Row className="mt-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
