import React, { useState, useRef } from 'react';
import { Form, Button, Card } from "react-bootstrap";
import emailjs from '@emailjs/browser';

/**
 * Componente que maneja el estado y la lógica del formulario de contacto
 * Recibe 'setModal' como prop para mostrar la notificación al usuario
 */
const ContactForm = ({ setModal }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ from_name: '', email_id: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // Validación básica de campos no vacíos
    if (Object.values(formData).some(val => val.trim() === '')) {
      setModal({ view: true, title: 'Atención', message: 'Por favor, rellena todos los campos.' });
      return;
    }
    setLoading(true);

    try {
      // Envío del formulario usando EmailJS y la referencia ref
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        formRef.current, 
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      
      setModal({ view: true, title: '¡Mensaje enviado!', message: 'Tu mensaje ha sido enviado correctamente.' });
      setFormData({ from_name: '', email_id: '', message: '' }); // Reset del formulario
    } catch (error) {
      console.log(error)
      setModal({ view: true, title: 'Error de envío', message: 'Ocurrió un error inesperado. Inténtalo más tarde.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-4 shadow-lg border-0">
      <Form ref={formRef} onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="small fw-bold">Nombre y Apellido</Form.Label>
          <Form.Control type="text" name='from_name' placeholder="Tu nombre completo" value={formData.from_name} onChange={handleChange} className="py-2" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="small fw-bold">Email de contacto</Form.Label>
          <Form.Control type="email" name='email_id' placeholder="nombre@ejemplo.com" value={formData.email_id} onChange={handleChange} className="py-2" />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="small fw-bold">Mensaje</Form.Label>
          <Form.Control as="textarea" rows={5} name='message' placeholder="¿En qué puedo ayudarte?" value={formData.message} onChange={handleChange} style={{ resize: 'none' }} />
        </Form.Group>

        <Button 
          variant="dark" 
          type="submit" 
          size="lg" 
          className="w-100 fw-bold shadow"
          disabled={loading} // Desactiva el botón mientras se envía
        >
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </Form>
    </Card>
  );
};

export default ContactForm;
