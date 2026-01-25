import React, { useState } from "react";
import { Jumbotron } from "../migration";
import "./index.css";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import AboutToggle from "./AboutToggle";
import DownloadButton from "./DownloadButton";

/* Componente principal AboutMe */
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
          <AboutImage imageLink={imageLink} />

          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-4">{heading}</h2>

            <AboutContent
              showSummary={showSummary}
              highlights={highlights}
              message={message}
            />

            <AboutToggle
              showSummary={showSummary}
              onClick={() => setShowSummary(!showSummary)}
            />

            <DownloadButton resume={resume} />
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
