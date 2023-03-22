import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    link,
    rol,
    technologies,
    image,
    repo,
    color,
    responsive
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h4" >{name} </Card.Title>
          <Card.Title as="h5" className="my-2" style={{color:`${color}`}}>{rol}</Card.Title>
          <Description description={description} />
          <ImgCard image={image || require('../../assets/img/projects/Proceso.png')} />
          <Technologies technologies={technologies} />
          <p className="text mt-2"><span style={{fontWeight:'500'}}>Responsive:</span>{responsive? ' Yes':' No'}</p>
          <CardButtons link={link} repo={repo || 'https://github.com/braianpx'} color={color} />
          <hr />
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({link,repo,color}) => {
  return (
    <div className="d-grid gap-2 d-md-flex justify-content-end mt-4">
      <a
        id={`id_a_${color}`}
        href={repo} 
        target=" _blank" 
        style={{fontWeight:'400'}}
        className="btn mx-2"
      >
       Repositorio
      </a>
      <a
        id={`id_a_${link?color:'disabled'}`} 
        href={link}
        target=" _blank" 
        style={{fontWeight:'400'}}
        className="btn mx-2"
      >
        {link?'Ver App':'En Proceso'}
      </a>
    </div>
  );
};

const ImgCard = ({image}) => {
  return(
    <>
      <img
          className="img-thumbnail mb-3"
          src={image}
          height={'100%'}
          width={'100%'}
          alt='imgProject'
          />
    </>
  )
}

const Technologies = ({technologies}) => {
  return(
    <>
    <Card.Subtitle as='h5' className="mt-2">Tecnologias</Card.Subtitle>
      
    {technologies.frontEnd[0] &&  
      <div className="mt-2"> 
        <Card.Text className='d-flex-inline'>
          <span style={{fontWeight:'500'}}>
            Front End: 
          </span>
          {` ${technologies?.frontEnd.join(', ')}`}.
        </Card.Text>
      </div>
      }
      {technologies.backEnd[0] &&
        <div className="mt-2"> 
          <Card.Text className='d-flex-inline'>
            <span style={{fontWeight:'500'}}>
              Back End: 
            </span>
            {` ${technologies?.backEnd.join(', ')}`}.
          </Card.Text>
        </div>
      }
    </>
    )
}

const Description = ({description}) =>{
  return(
    <>
      {
        description?.map(el=>  <Card.Text>{el} </Card.Text>)
      }
    </>
  )
} 

export default ProjectCard;
