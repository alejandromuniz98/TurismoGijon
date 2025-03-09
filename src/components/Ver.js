import React, { useState } from 'react';
import '../styles/Ver.css';
import puertoDeportivo from '../images/PuertoDeportivo.jpg';
import playa from '../images/playa.jpg';
import cerro from '../images/cerro.jpg';
import parque from '../images/parque.jpg';
import acuario from '../images/acuario.jpg';
import teatro from '../images/teatro.jpg';
import jardín from '../images/jardin.jpg';
import molinon from '../images/estadio.jpg';
import laboral from '../images/laboral.jpg';
import providencia from '../images/providencia.jpg';

const destinos = [
  { img: playa, title: "Playa de San Lorenzo", desc: "La playa más emblemática de Gijón. Perfecta para pasear y surfear en cualquier época del año. Su extenso arenal y su paseo marítimo la convierten en uno de los lugares más visitados de la ciudad." },
  { img: puertoDeportivo, title: "Puerto Deportivo", desc: "Situado en pleno centro, con vistas espectaculares y una variada oferta gastronómica. Un lugar ideal para disfrutar del ambiente marítimo de Gijón y pasear entre embarcaciones deportivas." },
  { img: cerro, title: "Cerro de Santa Catalina", desc: "Un mirador con una panorámica increíble de la costa gijonesa y el famoso 'Elogio del Horizonte'. Este espacio verde es perfecto para relajarse y contemplar el mar Cantábrico en todo su esplendor." },
  { img: parque, title: "Parque Isabel la Católica", desc: "El pulmón verde de Gijón, ideal para pasear entre lagos y aves exóticas. Cuenta con zonas de juego para niños y áreas de descanso donde desconectar del bullicio de la ciudad." },
  { img: acuario, title: "Acuario de Gijón", desc: "Más de 60 ecosistemas marinos con especies del Cantábrico, el Atlántico y los océanos tropicales. Una experiencia educativa y fascinante para todas las edades." },
  { img: teatro, title: "Teatro Jovellanos", desc: "Un referente cultural con teatro, conciertos y eventos de primer nivel durante todo el año. Su arquitectura clásica y su programación variada lo convierten en un punto de encuentro imprescindible." },
  { img: jardín, title: "Jardín Botánico Atlántico", desc: "Un espacio natural de 30 hectáreas con rutas temáticas sobre la flora atlántica. Un paraíso para los amantes de la naturaleza y la biodiversidad." },
  { img: molinon, title: "Estadio El Molinón", desc: "El estadio más antiguo de España y casa del Real Sporting de Gijón. Un símbolo del fútbol asturiano donde se han vivido momentos históricos del deporte." },
  { img: laboral, title: "Universidad Laboral de Gijón", desc: "El edificio más grande de España, con una arquitectura imponente y una historia fascinante. Actualmente alberga actividades culturales, exposiciones y una torre con vistas panorámicas de la ciudad." },
  { img: providencia, title: "Mirador de la Providencia", desc: "Uno de los mejores puntos para disfrutar de las vistas al mar Cantábrico. Su entorno natural y su fácil acceso lo convierten en un lugar perfecto para paseos al aire libre y atardeceres inolvidables." }
];

const Ver = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < destinos.length - 3) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <main>
      <section id="que-ver">
        <header className="ver-header">
          <h2>Visitar</h2>
          <p>Explora los lugares más emblemáticos de la ciudad y vive la esencia de Gijón en cada rincón. Desde playas y parques hasta teatros y miradores, Gijón tiene una oferta turística que combina naturaleza, cultura e historia.</p>
        </header>
        <div className="carousel-container">
          <button className="arrow left" onClick={prevSlide}>&#9665;</button>
          <div className="destinos-wrapper">
            <div
              className="destinos-grid"
              style={{ transform: `translateX(-${index * 33.33}%)` }}
            >
              {destinos.map((destino, i) => (
                <div className="destino-item" key={i}>
                  <img src={destino.img} alt={destino.title} className="destino-img" />
                  <h3>{destino.title}</h3>
                  <p>{destino.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="arrow right" onClick={nextSlide}>&#9655;</button>
        </div>
      </section>
    </main>
  );
};

export default Ver;
