import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const Project = ({ heading, username, projects }) => {

  const [projectsArray, setProjectsArray] = useState([]);
  useEffect(()=>{
    console.log(projects)
    const filteredProjects = projects?.filter(el => el.completed === true)
    setProjectsArray(filteredProjects)
  },[projects])

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray?.at(0) &&
             projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
          }
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
