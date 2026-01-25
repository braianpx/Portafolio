import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  mainBody,
  projects,
  about,
  skills,
  contact,
  experiences,
} from "../../../editable-stuff/config.js";
import { NavLink } from "../migration.jsx";

const Navigation = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY < 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = `nav-link-custom ${
    isTop ? "text-white" : "text-dark"
  }`;

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={`px-4 py-3 transition ${
        isTop ? "navbar-transparent" : "navbar-white shadow-sm"
      }`}
    >
      <Navbar.Brand
        href="/#home"
        className={`fw-semibold fs-5 letter-spacing ${
          isTop ? "text-white" : "text-dark"
        }`}
      >
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center gap-lg-4 gap-3 text-center">
          {experiences?.show && (
            <NavLink className={linkClass} href="/#experience">
              Experiencia
            </NavLink>
          )}

          {projects.show && (
            <NavLink className={linkClass} href="/#projects">
              Proyectos
            </NavLink>
          )}

          {about.show && (
            <NavLink className={linkClass} href="/#aboutme">
              Sobre mí
            </NavLink>
          )}

          {skills.show && (
            <NavLink className={linkClass} href="/#skills">
              Habilidades
            </NavLink>
          )}

          {contact.show && (
            <NavLink className={linkClass} href="/#contacts">
              Contacto
            </NavLink>
          )}

          <NavLink
            className={`btn btn-sm px-3 rounded-pill ms-lg-3 ${
              isTop ? "btn-outline-light" : "btn-outline-dark"
            }`}
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Descargar CV
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
