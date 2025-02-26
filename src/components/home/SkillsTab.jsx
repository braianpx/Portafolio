import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          img={skill.img}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills }) {
  return (
    <>
      <Col xs={12} sm={6} xl={3}>
        <SkillsSection
          skills={skills.slice(0, Math.floor(skills.length / 4))}
        />
      </Col>
      <Col xs={12} sm={6} xl={3}>
        <SkillsSection
          skills={skills.slice(Math.floor(skills.length / 4), Math.floor(skills.length / 2))}
        />
      </Col>
      <Col xs={12} sm={6} xl={3}>
        <SkillsSection
          skills={skills.slice(Math.floor(skills.length / 2), (Math.floor(skills.length / 4) + Math.floor(skills.length / 2)))}
        />
      </Col>
      <Col xs={12} sm={6} xl={3}>
        <SkillsSection
          skills={skills.slice((Math.floor(skills.length / 4) + Math.floor(skills.length / 2)), skills.length)}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
