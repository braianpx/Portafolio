import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import FilterGroup from "./FilterGroup";

const STACK_FILTERS = [
  { label: "Todos", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" }
];

const TYPE_FILTERS = [
  { label: "Todos", value: "all" },
  { label: "Individual", value: "individual" },
  { label: "Grupal", value: "group" }
];

const ProjectsFilters = ({ activeStack, activeType, onStackChange, onTypeChange }) => {
  return (
    <motion.section
      layout="position"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="projects-filters-wrapper"
    >
      <FilterGroup
        title="Stack tecnológico"
        filters={STACK_FILTERS}
        activeValue={activeStack}
        onChange={onStackChange}
      />

      <FilterGroup
        title="Tipo de proyecto"
        filters={TYPE_FILTERS}
        activeValue={activeType}
        onChange={onTypeChange}
      />
    </motion.section>
  );
};

export default ProjectsFilters;
