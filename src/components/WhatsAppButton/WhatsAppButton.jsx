import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./WhatsAppButton.css";

function WhatsAppButton() {
  const [showDialog, setShowDialog] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890'; // Reemplaza con tu número de teléfono de WhatsApp
    const message = encodeURIComponent('Hola, tengo una consulta urgente.'); // Mensaje predefinido
    const whatsappURL = `https://wa.link/tn5bc4`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="whatsapp-button-container">
      <Button variant="success" onClick={() => setShowDialog(true)}>
        <img src="src/assets/img/logo-whatapp.png" alt="WhatsApp Logo" />
        ¿TENES UNA URGENCIA?<br />
        LLAMANOS O CHATEA CON NOSOTROS
      </Button>

      <Modal show={showDialog} onHide={() => setShowDialog(false)}>
        <Modal.Header closeButton>
          <Modal.Title>¿TENES UNA URGENCIA?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>LLAMANOS O CHATEA CON NOSOTROS a través de WhatsApp.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDialog(false)}>Cerrar</Button>
          <Button variant="primary" onClick={handleWhatsAppClick}>Chatear por WhatsApp</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default WhatsAppButton;