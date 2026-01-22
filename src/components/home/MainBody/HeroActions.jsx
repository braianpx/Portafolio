import React from "react";

const HeroActions = ({ resume }) => (
  <>
    <a
      className="btn btn-outline-light btn-lg"
      href="#experience"
      role="button"
      aria-label="View experience"
    >
      Ver experiencia
    </a>

    <a
      className="btn btn-outline-light btn-lg ms-3"
      href={resume}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Resume/CV"
      role="button"
    >
      Descargar CV
    </a>
  </>
);

export default HeroActions;
