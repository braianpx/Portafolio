import React from "react";

const HeroMessage = ({ role, specialization, tagline }) => (
  <div className="lead fade-in-fast">
    <div className="fs-4">
      {role}
    </div>

    <div className="mt-1 fs-5">
      {specialization}
    </div>

    <div className="mt-2 fst-italic text-light opacity-75">
      {tagline}
    </div>
  </div>
);

export default HeroMessage;
