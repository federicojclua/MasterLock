import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="logo-brand">
            <img src="src/assets/img/logo-nav-bar.png" alt="Logo" className="logo-image" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">INICIO</Link>
              <Link to="/servicios" className="nav-link">SERVICIOS</Link>
              <Link to="/acerca-de-nosotros" className="nav-link">ACERCA DE NOSOTROS</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
