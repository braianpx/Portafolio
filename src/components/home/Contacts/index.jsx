import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Jumbotron } from '../migration';
import Modal from '../Modal.jsx';
import ContactForm from './ContactForm.jsx'; // Importamos el nuevo componente
import ContactDetail from './ContactDetail.jsx';

const Contacts = ({ contacts, messages, heading }) => {
  // El estado del modal se queda aquí para mostrar la notificación globalmente
  const [modal, setModal] = useState({ view: false, title: '', message: '' });

  const waNumber = contacts.tel.replace(/[^0-9]/g, '');

  return (
    <Jumbotron className="bg-light m-0 py-5" id='contacts'>
      <Container>
        <Row className="justify-content-center mt-5">
          {/* Título centrado horizontal y verticalmente dentro de esta columna */}
          <h2 data-aos="fade-top" data-aos-delay="100" className="display-4 mb-4 text-center fw-bold text-dark" style={{ marginTop: 0 }}>
            {heading}
          </h2>

          {/* Columna de Información Directa (Animación desde la izquierda) */}
          <Col lg={4} className="mb-5" data-aos="fade-right" data-aos-delay="200">
            <Card className="p-4 shadow-lg h-100 border-0">
              <h3 className="h5 mb-4 text-black">Información de Contacto</h3>
              
              <ContactDetail 
                label={messages.email} 
                value={contacts.email} 
                href={`mailto:${contacts.email}`} 
              />
              
              <ContactDetail 
                label={messages.wp} 
                value={contacts.tel} 
                href={`https://wa.me/${waNumber}?text=Hola%20Braian,%20vi%20tu%20portafolio...`} 
              />

              <ContactDetail 
                label="Ubicación" 
                value={contacts.address} 
                isLink={false} 
              />
            </Card>
          </Col>

          {/* Columna del Formulario de Email (Centrada verticalmente) */}
          <Col lg={7} data-aos="fade-left" data-aos-delay="400" className="d-flex flex-column justify-content-center">
            {/* Renderizamos el componente aislado del formulario y le pasamos el handler del modal */}
            <ContactForm setModal={setModal} />
            
          </Col>
        </Row>
      </Container>

      {/* Modal de feedback */}
      {modal.view && (
        <Modal 
          title={modal.title} 
          message={modal.message} 
          view={modal.view} 
          setModalMessages={(status) => setModal(prev => ({ ...prev, view: status.view }))} 
        />
      )}
    </Jumbotron>
  );
}

export default Contacts;
