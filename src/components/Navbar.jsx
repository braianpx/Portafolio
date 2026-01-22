import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, projects, about, skills, contact } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navbarMenuRef = React.useRef(null);
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ currPos }) => {
      if (!navbarDimensions) return;
      if (!ref?.current) return;

      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);

      setScrollPosition(currPos.y);
    },
    [navBottom, navbarDimensions, ref]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    if (!ref?.current) return;

    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand
        className="navbar-brand text-white"
        href={process.env.PUBLIC_URL + "/#home"}
      >
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {projects.show && (
            <NavLink
              className="nav-item lead text-white"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Proyectos
            </NavLink>
          )}

          <NavLink
            className="nav-item lead text-white"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resumen
          </NavLink>

          {about.show && (
            <NavLink
              className="nav-item lead text-white"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              Sobre Mi
            </NavLink>
          )}

          {skills.show && (
            <NavLink
              className="nav-item lead text-white"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Habilidades
            </NavLink>
          )}

          {contact.show && (
            <NavLink
              className="nav-item lead text-white"
              href={process.env.PUBLIC_URL + "/#contacts"}
            >
              Contactos
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
