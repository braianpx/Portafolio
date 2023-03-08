import {
    Modal, 
} from "react-bootstrap";
import { useState } from 'react'

const ModalView =  (props) => {
    const [show, setShow] = useState(props.view);

    const handleClose = () => {
        setShow(false);
        props.setModalMessages(false); 
    };
    
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.message}</Modal.Body>
          <Modal.Footer>
            <input 
            className="btn btn-outline-dark btn-lg"
            value='Cerrar'
            type='button'
            onClick={handleClose}
            />
            <input 
            className="btn btn-outline-dark btn-lg"
            value='Aceptar'
            type='button'
            onClick={handleClose}
            />
          </Modal.Footer>
        </Modal>
      </>
    );
};
export default ModalView;
