import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import "./Marcas.css";

function Marcas() {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      <h1 className="text-center mb-4">ALGUNAS MARCAS QUE TRABAJAMOS</h1>
      <div className="row">
      <Card className="m-2" style={{ width: '18rem', opacity: 1, backgroundImage: 'linear-gradient(135deg, #021203, #ffc100, #021203)' }}>
        <Card.Img variant="top" src="src/assets/img/candex.png" />
        <Card.Body>
        </Card.Body>
      </Card>

      <Card className="m-2" style={{ width: '18rem', opacity: 1, backgroundImage: 'linear-gradient(135deg, #021203, #ffc100, #021203)' }}>
        <Card.Img variant="top" src="src/assets/img/jaque-cerraduras.png" />
        <Card.Body>
        </Card.Body>
      </Card>
      
      <Card className="m-2" style={{ width: '18rem', opacity: 1, backgroundImage: 'linear-gradient(135deg, #021203, #ffc100, #021203)' }}>
        <Card.Img variant="top" src="src/assets/img/kallay.png" />
        <Card.Body>
        </Card.Body>
      </Card>
      </div>
      <div className="row">
      <Card className="m-2" style={{ width: '18rem', opacity: 1, backgroundImage: 'linear-gradient(135deg, #021203, #ffc100, #021203)' }}>
        <Card.Img variant="top" src="src/assets/img/mul-t-lock.png" />
        <Card.Body>
        </Card.Body>
      </Card>
      <Card className="m-2" style={{ width: '18rem', opacity: 1, backgroundImage: 'linear-gradient(135deg, #021203, #ffc100, #021203)' }}>
        <Card.Img variant="top" src="src/assets/img/prive.png" />
        <Card.Body>
        </Card.Body>
      </Card>
      <Card className="m-2" style={{ width: '18rem', opacity: 1, backgroundImage: 'linear-gradient(135deg, #021203, #ffc100, #021203)' }}>
        <Card.Img variant="top" src="src/assets/img/puertas-pentagono.png" />
        <Card.Body>
        </Card.Body>
      </Card>
      <Card className="m-2" style={{ width: '18rem', opacity: 1, backgroundImage: 'linear-gradient(135deg, #021203, #ffc100, #021203)' }}>
        <Card.Img variant="top" src="src/assets/img/stanley.png" />
        <Card.Body>
        </Card.Body>
      </Card>
      </div>
      {/* Agrega el resto de las tarjetas aquí */}

    </div>
  );
}

export default Marcas;
