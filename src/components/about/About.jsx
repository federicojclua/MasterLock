import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className="container py-5 ">
    <div className="row">
      {/* Columna de la Card 1 (Derecha) */}
      <div className="col-md-6 ">
        <div className="card mb-4 bg-dark">
        <h5 className="card-title text-white">SAN MIGUEL DE TUCUMAN</h5>
            <p className="card-text text-white">CORRIENTES 385 </p>
          <img src="src/assets/img/sucursal.jpeg" className="card-img-top" alt="sucursal-Masterlock" />
          <div className="card-body">
            
          </div>
        </div>
        {/* Columna de la Card 1 (Derecha) */}
        <div className="col-md-12 ">
        <div className="card mb-4 bg-dark">
           <img src="src/assets/img/manotarjeta.jpeg" className="card-img-top" alt="tarjeta-presentacion" />
          <div className="card-body">
            
          </div>
        </div>
      </div>
      </div>
      

      {/* Columna de la Cerrajería (Izquierda) */}
      <div className="col-md-6">
        <section className="bg-dark text-white py-5">
          <div className="container">
            <h2 className="text-center mb-4">Cerrajería Masterlock</h2>
            <p className="lead">En Cerrajería Masterlock, entendemos la importancia de la seguridad en tu hogar, negocio o vehículo. Es por eso que nos comprometemos a estar disponibles las 24 horas del día, los 7 días de la semana, para atender cualquier emergencia que puedas tener. Ya sea que necesites cambiar una cerradura, abrir una puerta o cualquier otra situación que requiera atención inmediata, nuestro equipo de cerrajeros expertos está aquí para ayudarte.</p>
            <p className="lead">Nos encontramos convenientemente ubicados en el corazón de la zona céntrica de Corrientes, en Corrientes 385, lo que nos permite llegar rápidamente a cualquier destino dentro de la ciudad y sus alrededores. Tu seguridad y tranquilidad son nuestra prioridad número uno, y nos esforzamos por brindarte un servicio confiable y profesional en todo momento.</p>
            <p className="lead">No importa la hora del día o de la noche, puedes confiar en Cerrajería Masterlock para resolver tus problemas de seguridad de manera rápida y eficiente. ¡Contáctanos hoy mismo al teléfono <a href="tel:3814167412" className="text-white">3814167412</a> y deja que nos encarguemos de proteger lo que más valoras!</p>
          </div>
        </section>
      </div>
    </div>
  </div>
  );
}

export default About;