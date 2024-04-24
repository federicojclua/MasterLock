import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <img src="src/assets/img/logo-nav-bar.png" alt="Logo" style={{ width: '100px', borderRadius: '10%'  }} />
          </div>
          <div className="col text-left">
            <a href="https://www.facebook.com/nortepa" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/cerrajeria.master.lock/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://wa.link/tn5bc4" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;