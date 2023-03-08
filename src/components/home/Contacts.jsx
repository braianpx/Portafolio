import React, { useState } from 'react';
import { Jumbotron } from './migration';
import {
  Container,
  Form,
} from "react-bootstrap";
import emailjs from '@emailjs/browser'
import Modal from './Modal.jsx'

const Contacts = ({ contacts, messages, heading }) => {

const [ form, setForm ] = useState({
  from_name:'',
  email_id:'',
  message:'',
})
const [ modalMessages, setModalMessages ] = useState({
  message: '',
  title:'',
  view:false
})

const handleOnSubmit = (event) => {
  event.preventDefault();
  if(Object.values(form).some(data => data === ''))
    return  setModalMessages({
              title:'Error al enviar el mensaje',
              message:'Porfavor llene los campos del formulario',
              view: true
            })
  const btn = document.getElementById('buttonEmail');
  btn.value = 'Sending...';
  btn.disabled = true;

  const serviceID = 'default_service';
  const templateID = 'template_v1z8qiw';
  const publicKey = '-SjlEPnOxqKA_2dWA'

  const formEmail = document.getElementById('formEmail')
  emailjs.sendForm(serviceID, templateID, formEmail, publicKey)
      .then(() => {
          btn.value = 'Enviar';
          btn.disabled = false;
          setModalMessages({
            title:'Mensaje enviado',
            message:'Su mensaje fue enviado correctamente, gracias por contactarse.',
            view: true
          })
      }, (err) => {
          btn.value = 'Enviar';
          btn.disabled = false;
          setModalMessages({
            title:'Error al enviar el mensaje',
            message:'Alparecer ocurrion un error inesperado, si el error persiste intente enviar el mensaje mas tarde.',
            view: true
          })
      });
  setForm({from_name:'', email_id:'', message:''});
};
const handleInputChange = (e) => {
  setForm({
    ...form,
    [e.target.name] : e.target.value
  })
}
  return (
    <>
    <Jumbotron className="bg-light m-0" id='contacts' >
      <Container>
        <h2 className="display-4 mb-5 text-center">
          {heading}
        </h2>
            <Container>
            <h4 className='text text-center mb-5' >Puedes contactarme via:</h4>
                <p className='text text-center mb-2 fs-5 md-fs-1'>{messages.tel}<span className='text text ms-1 fs-5'>{contacts.tel}.</span></p>
                <p className='text text-center mb-2 fs-5'>{messages.wp}<span className='text text ms-1 fs-5'>{contacts.whatsApp}.</span></p>
                <p className='text text-center mb-2 fs-5'>{messages.email}<span className='text text ms-1 fs-5'>{contacts.email}.</span></p>
            <h4 className='text text-center my-5'> O puedes dejarme un mensaje via mail </h4>
              <Form onSubmit={handleOnSubmit} id='formEmail'>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                  <Form.Label>Nombre y Apellido</Form.Label>
                  <Form.Control 
                  type="text" 
                  name='from_name'
                  placeholder="Ingrese su nombre y apellido" 
                  value={form.from_name} 
                  onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                  type="email" 
                  name='email_id'
                  placeholder="Ingrese su mail" 
                  value={form.email_id} 
                  onChange={handleInputChange}/>
                  <Form.Text className="text-muted">
                    Porfavor verificar que el mail este bien ingresado.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Mensaje</Form.Label>
                  <textarea
                    style={{"height":"10rem", "max-height":"10rem"}}
                    className='form-control'
                    type="text" 
                    name='message'
                    placeholder="Deja tu mensaje" 
                    value={form.message} 
                    onChange={handleInputChange}
                    />
                </Form.Group>
                <div className='text-center w-100'>
                  <input
                  value='Enviar'
                  id='buttonEmail' 
                  type="submit" 
                  className="btn btn-outline-dark btn-lg"
                  /> 
                </div>
              </Form>
            </Container>
      </Container>
    </Jumbotron>
    {modalMessages.view && 
      <Modal 
      title={modalMessages.title} 
      message={modalMessages.message} 
      view={modalMessages.view} 
      setModalMessages={setModalMessages}
      />
    }
    </>
  );
}

export default Contacts;