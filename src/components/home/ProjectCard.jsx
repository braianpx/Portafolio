import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    link,
    rol,
    technologies,
    image,
    repo
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name} </Card.Title>
          <Card.Text>{ description } </Card.Text>
          <CardButtons link={link} repo={repo || 'https://github.com/braianpx'}/>
          <hr />
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({link,repo}) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a 
      href={repo} 
      target=" _blank" 
      className="btn btn-outline-secondary mx-2"
      >
       Repositorio
      </a>
      <a
        href={link}
        target=" _blank" 
        className="btn btn-outline-secondary mx-2"
      >
        Ver App
      </a>
    </div>
  );
};

export default ProjectCard;
