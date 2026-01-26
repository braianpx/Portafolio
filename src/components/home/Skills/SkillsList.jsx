import React from "react";

const SkillsList = ({ items = [], variant = "hard" }) => {
  return (
    <ul className={`skills-list skills-list-${variant}`}>
      {items.map((item, index) => (
        <li key={index} className="skills-list-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
