import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "../migration";
import ProjectCard from "./ProjectCard";
import ProjectsFilters from "./ProjectsFilters";
import { motion, AnimatePresence } from "framer-motion"; // Importamos Framer Motion
import "./index.css";
import { containerVariants } from "../../../utils/FrameMotion";

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
      <Container className="container_project">
        {/* Título animado al entrar en vista */}
        <motion.h2 
          layout="position"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut"  }}
          className="display-5 fw-bold text-center pt-0"
        >
          {heading}
        </motion.h2>

        <ProjectsFilters
          activeStack={activeStack}
          activeType={activeType}
          onStackChange={setActiveStack}
          onTypeChange={setActiveType}
        />

        {/* Contenedor de la cuadrícula animado */}
        <motion.div 
          layout="position"
          className="row mt-4" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* AnimatePresence permite animar las cards cuando desaparecen por los filtros */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Jumbotron>
  );
};

export default Project;
