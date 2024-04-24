import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import "./RedesSociales.css";

function RedesSociales() {
  return (
    <div className="redes-sociales">
      <Container fluid>
        <Row className="justify-content-end">
          <Col xs="auto">
            <a href="https://www.facebook.com/nortepa">
              <FaFacebook size={30} color="white" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.instagram.com/cerrajeria.master.lock/">
              <FaInstagram size={30} color="white" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RedesSociales;
