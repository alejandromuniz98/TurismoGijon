import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Ver from './components/Ver';
import Actividades from './components/Actividades';
import Comer from './components/Comer';
import Moverse from './components/Moverse';
import Planes from './components/Planes';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Footer from './components/Footer';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Inicio />} />
          <Route path="/ver" element={<Ver />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/comer" element={<Comer />} />
          <Route path="/moverse" element={<Moverse />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
