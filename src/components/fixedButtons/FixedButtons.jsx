import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './FixedButtons.css';


const FixedButtons = () => {
  return (
    <div className="fixed-buttons">
      <div className="fixed-button facebook">
        <a href="https://www.facebook.com/tucuenta" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
      </div>
      <div className="fixed-button instagram">
        <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
      <div className="fixed-button whatsapp">
        <a href="https://wa.me/tunumerodetelefono?text=Tenes%20una%20emergencia" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          <span className="tooltip">¿Tenés una emergencia?</span>
        </a>
      </div>
    </div>
  );
}

export default FixedButtons;
