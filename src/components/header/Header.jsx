import React from 'react'
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
      <Nav className="ms-auto">
        <Nav.Link href="#home">INICIO</Nav.Link>
        <Nav.Link href="#About">SERVICIOS</Nav.Link>
        <Nav.Link href="#Contact">ACERCA DE NOSOTROS</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


    </div>
  )
}

export default Header
