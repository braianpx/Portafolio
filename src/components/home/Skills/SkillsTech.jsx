import React from "react";
import Col from "react-bootstrap/Col";

const SkillsTech = ({ technologies = [] }) => {
  return (
    <>
      {technologies.map((group, index) => (
        <Col key={index} md={6} lg={4}>
          <section className="tech-card">
            <h5 className="tech-card-title">{group.category}</h5>

            <div className="tech-badges">
              {group.items.map((item, idx) => (
                <span key={idx} className="tech-badge">
                  {item}
                </span>
              ))}
            </div>
          </section>
        </Col>
      ))}
    </>
  );
};

export default SkillsTech;
