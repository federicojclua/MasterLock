import React from 'react';
import "./Home.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <Carousel >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="src/assets/img/SLIDER 1.jpg"
        alt="First slide"
      />
      <Carousel.Caption style={{ color: 'black' }}>
        <h3> "En momentos de urgencia, confía en los expertos. Estamos disponibles las 24 horas para atender tus necesidades de seguridad."</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="src/assets/img/SLIDER 2.jpg"
        alt="Second slide"
      />
      <Carousel.Caption style={{ color: 'black' }}> 
        <h3>"Tu tranquilidad es nuestra prioridad. Estamos aquí para resolver tus emergencias de manera rápida y eficiente."</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="src/assets/img/SLIDER 3.jpg"
        alt="Third slide"
      />
      <Carousel.Caption style={{ color: 'black' }}>
        <h3>"Seguridad sin límites. Confía en nuestros servicios para proteger lo que más valoras."</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default Home;
