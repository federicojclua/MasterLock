import React from 'react';
import { Form, Button } from 'react-bootstrap';

function FormularioConsulta() {
  return (
    <div className="container">
      <div className="text-center"> {/* Contenedor centrado */}
        <h1 style={{ color: '' }}>POR CUALQUIER COTIZACION</h1> {/* Cambia el color del texto a blanco */}
        <Form style={{ maxWidth: '500px', margin: 'auto', color: 'white' }}> {/* Establece un ancho máximo y centra horizontalmente */}
          <Form.Group className="mb-3 d-flex align-items-center" controlId="nombre"> {/* Alinea verticalmente */}
            <Form.Label style={{ color: 'white', width: '150px' }}>Nombre</Form.Label> {/* Cambia el color del texto a blanco */}
            <Form.Control type="text" placeholder="Ingrese su nombre" style={{ width: '200px' }} />
          </Form.Group>

          <Form.Group className="mb-3 d-flex align-items-center" controlId="apellido"> {/* Alinea verticalmente */}
            <Form.Label style={{ color: 'white', width: '150px' }}>Apellido</Form.Label> {/* Cambia el color del texto a blanco */}
            <Form.Control type="text" placeholder="Ingrese su apellido" style={{ width: '200px' }} />
          </Form.Group>

          <Form.Group className="mb-3 d-flex align-items-center" controlId="email"> {/* Alinea verticalmente */}
            <Form.Label style={{ color: 'white', width: '150px' }}>Email</Form.Label> {/* Cambia el color del texto a blanco */}
            <Form.Control type="email" placeholder="Ingrese su email" style={{ width: '200px' }} />
          </Form.Group>

          <Form.Group className="mb-3 d-flex align-items-center" controlId="consulta"> {/* Alinea verticalmente */}
            <Form.Label style={{ color: 'white', width: '150px' }}>Consulta</Form.Label> {/* Cambia el color del texto a blanco */}
            <Form.Control as="textarea" rows={3} placeholder="Ingrese su consulta" style={{ width: '400px' }} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FormularioConsulta;
