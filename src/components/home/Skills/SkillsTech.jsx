import React from "react";
import Col from "react-bootstrap/Col";
import { IconContext } from "react-icons";
import { motion } from "framer-motion"; // Importamos motion
import { iconMap } from "../../../editable-stuff/config";
import { cardVariants } from "../../../utils/FrameMotion";

const SkillsTech = ({ technologies = [] }) => {
  return (
    <>
      {technologies.map((group, index) => (
        // Usamos motion.div para animar el Col de Bootstrap
        <Col key={index} md={6} lg={4} as={motion.div}
             variants={cardVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }} // Animación solo una vez al entrar en vista
        >
          <section className="tech-card">
            <h5 className="tech-card-title">{group.category}</h5>
            <div className="tech-badges">
              {group.items.map((item, idx) => {
                const IconComponent = iconMap[item];
                return (
                  <span key={idx} className="tech-badge">
                    {IconComponent && (
                      <IconContext.Provider value={{ className: "tech-badge-icon" }}>
                        <IconComponent />
                      </IconContext.Provider>
                    )}
                    {item}
                  </span>
                );
              })}
            </div>
          </section>
        </Col>
      ))}
    </>
  );
};

export default SkillsTech;
