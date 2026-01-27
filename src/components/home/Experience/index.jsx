import React from "react";
import { Container } from "react-bootstrap";
import ExperienceCompany from "./ExperienceCompany";
import { motion, LayoutGroup } from "framer-motion";
import "./index.css";

const Experience = ({ experiences }) => {
  if (!experiences?.show) return null;

  return (
    <section id="experience" className="experience-section">
      <Container>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="experience-heading text-center"
        >
          {experiences.heading}
        </motion.h2>

        <LayoutGroup>
          {/* Eliminamos clases extra que puedan interferir con el ancho */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {experiences.data.map((company) => (
              <ExperienceCompany key={company.id} company={company} />
            ))}
          </motion.div>
        </LayoutGroup>
      </Container>
    </section>
  );
};

export default Experience;
