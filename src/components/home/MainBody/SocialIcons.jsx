import React from "react";

const SocialIcons = ({ icons }) => (
  <div className="p-5">
    {icons.map((icon, index) => (
      <a
        key={`social-icon-${index}`}
        target="_blank"
        rel="noopener noreferrer"
        href={icon.url}
        aria-label={`My ${icon.image.split("-")[1]}`}
      >
        <i
          className={`fab ${icon.image} fa-3x socialicons-${icon.image.split("-")[1]}`}
        />
      </a>
    ))}
  </div>
);

export default SocialIcons;
