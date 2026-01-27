import React, { useState } from "react";
import { Jumbotron } from "../migration";
import { motion, AnimatePresence } from "framer-motion"; // Importamos Motion
import "./index.css";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import AboutToggle from "./AboutToggle";
import DownloadButton from "./DownloadButton";

const AboutMe = ({ heading, message, imageLink, resume }) => {
  const [showSummary, setShowSummary] = useState(false);

  const highlights = [
    "Full Stack & Software Developer con foco en arquitectura, mantenibilidad y performance",
    "Desarrollo de aplicaciones web, mobile y de escritorio, incluyendo soluciones e-commerce y SaaS",
    "Construcción de aplicaciones completas y microservicios escalables",
    "Experiencia sólida en React y NestJS utilizando JavaScript y TypeScript",
    "Trabajo con bases de datos relacionales y NoSQL (PostgreSQL, MongoDB)",
    "Responsable y comprometido, orientado al trabajo en equipo y a aportar valor en proyectos de mayor escala."
  ];

  return (
    <Jumbotron id="aboutme" className="m-0 py-0 bg-light">
      <div className="container p-0">
        <div className="row align-items-start">
          
          {/* Animación lateral para la imagen */}
          <motion.div 
            className="col-lg-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AboutImage imageLink={imageLink} />
          </motion.div>

          {/* Animación para el contenido del texto */}
          <motion.div 
            className="col-lg-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="display-5 fw-bold mb-4">{heading}</h2>

            {/* AnimatePresence para que el cambio entre resumen y highlights sea fluido */}
            <div className="about-content-wrapper" style={{ position: "relative" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={showSummary ? "summary" : "highlights"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <AboutContent
                    showSummary={showSummary}
                    highlights={highlights}
                    message={message}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <AboutToggle
              showSummary={showSummary}
              onClick={() => setShowSummary(!showSummary)}
            />

            <DownloadButton resume={resume} />
          </motion.div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
