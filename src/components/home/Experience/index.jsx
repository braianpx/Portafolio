import React from "react";
import { Container } from "react-bootstrap";
import ExperienceCompany from "./ExperienceCompany";

const Experience = ({ experiences }) => {
  if (!experiences?.show) return null;

  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <h2 className="display-5 fw-bold text-center mb-5">
          {experiences.heading}
        </h2>

        {experiences.data.map((company) => (
          <ExperienceCompany key={company.id} company={company} />
        ))}
      </Container>
    </section>
  );
};

export default Experience;
