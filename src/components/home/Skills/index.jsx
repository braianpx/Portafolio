import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { Jumbotron } from "../migration";
import SkillsTech from "./SkillsTech";
import SkillsList from "./SkillsList";
import "./index.css";

const Skills = React.forwardRef(
  ({ heading, technologies, hardSkills, softSkills }, ref) => {
    return (
      <Jumbotron ref={ref} fluid className="bg-white mt-0 pt-0" id="skills">
        <Container className="skills-container">
          <header className="skills-header">
            <h2 className="skills-title display-5 fw-bold text-center">{heading}</h2>
            <p className="skills-subtitle">
              Tecnologías, capacidades técnicas y habilidades interpersonales
              aplicadas en proyectos reales.
            </p>
          </header>

          <Tabs defaultActiveKey="tech" fill className="skills-tabs">
            <Tab eventKey="tech" title="Tecnologías">
              <Row className="pt-4 g-4">
                <SkillsTech technologies={technologies} />
              </Row>
            </Tab>

            <Tab eventKey="hard" title="Hard Skills">
              <Row className="pt-4 justify-content-center">
                <Col lg={9}>
                  <SkillsList items={hardSkills} variant="hard" />
                </Col>
              </Row>
            </Tab>

            <Tab eventKey="soft" title="Soft Skills">
              <Row className="pt-4 justify-content-center">
                <Col lg={9}>
                  <SkillsList items={softSkills} variant="soft" />
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </Jumbotron>
    );
  }
);

export default Skills;
