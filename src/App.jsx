import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Marcas from './components/marcas/Marcas';
import FormularioConsulta from './components/FormularioConsulta/FormularioConsulta';
import RedesSociales from './components/RedesSociales/RedesSociales';

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Servicios from './page/Servicios';
import AcercaDeNosotros from './page/AcercaDeNosotros';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home route */}
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
          <Route path="/about" element={<About />} />  {/* About route */}
        </Routes>
        <About />
        <WhatsAppButton />
        <Marcas />
        <RedesSociales/>
        <FormularioConsulta/>
       
        <Footer />
       
      </div>
    </BrowserRouter>
  );
}

export default App;