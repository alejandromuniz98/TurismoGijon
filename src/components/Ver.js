import React from 'react';
import '../styles/Ver.css';
import puertoDeportivo from '../images/PuertoDeportivo.jpg';
import playa from '../images/playa.jpg';
import cerro from '../images/cerro.jpg';
import parque from '../images/parque.jpg';
import acuario from '../images/acuario.jpg';
import teatro from '../images/teatro.jpg';
import jardin from '../images/jardin.jpg';
import molinon from '../images/estadio.jpg';
import laboral from '../images/laboral.jpg';
import providencia from '../images/providencia.jpg';

const destinos = [
  { img: playa, title: "Playa de San Lorenzo", desc: "La playa más emblemática de Gijón. Perfecta para pasear y surfear en cualquier época del año." },
  { img: puertoDeportivo, title: "Puerto Deportivo", desc: "Situado en pleno centro, con vistas espectaculares y una variada oferta gastronómica." },
  { img: cerro, title: "Cerro de Santa Catalina", desc: "Un mirador con una panorámica increíble de la costa gijonesa y el famoso 'Elogio del Horizonte'." },
  { img: parque, title: "Parque Isabel la Católica", desc: "El pulmón verde de Gijón, ideal para pasear entre lagos y aves exóticas." },
  { img: teatro, title: "Teatro Jovellanos", desc: "Un referente cultural con teatro, conciertos y eventos de primer nivel durante todo el año." },
  { img: jardin, title: "Jardín Botánico Atlántico", desc: "Un espacio natural de 30 hectáreas con rutas temáticas sobre la flora atlántica." },
  { img: molinon, title: "Estadio El Molinón", desc: "El estadio más antiguo de España y casa del Real Sporting de Gijón." },
  { img: laboral, title: "Universidad Laboral de Gijón", desc: "El edificio más grande de España, con una arquitectura imponente y una historia fascinante." },
  { img: providencia, title: "Mirador de la Providencia", desc: "Uno de los mejores puntos para disfrutar de las vistas al mar Cantábrico." }
];

const Ver = () => {
  return (
    <section id="ver">
      <header className='ver-header'>
        <h2>¿Qué ver en Gijón?</h2>
        <p>Descubre los lugares más emblemáticos de Gijón y sumérgete en su historia, cultura y paisajes únicos.</p>
      </header>
      <div className="destinos">
        {destinos.map((destino, index) => (
          <div className="destino" key={index}>
            <img src={destino.img} alt={destino.title} className="destino-img" />
            <div className="destino-info">
              <h3>{destino.title}</h3>
              <p>{destino.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ver;