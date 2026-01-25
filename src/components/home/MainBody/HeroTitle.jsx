import React from "react";

const HeroTitle = React.forwardRef(({ title }, ref) => (
  <h1 ref={ref} className="display-1">
    {title}
  </h1>
));

export default HeroTitle;
