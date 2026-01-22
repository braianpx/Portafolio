import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "../migration";

import HeroTitle from "./HeroTitle";
import HeroMessage from "./HeroMessage";
import SocialIcons from "./SocialIcons";
import HeroActions from "./HeroActions";

const MainBody = React.forwardRef(
  (
    {
      gradient,
      title,
      role,
      specialization,
      tagline,
      icons,
      resume,
    },
    ref
  ) => {
    return (
      <Jumbotron
        ref={ref}
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars" />
        <Container className="text-center">
          <HeroTitle title={title} />
          <HeroMessage
            role={role}
            specialization={specialization}
            tagline={tagline}
          />
          <SocialIcons icons={icons} />
          <HeroActions resume={resume} />
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
