import React from 'react';
import '../styles/Planes.css';
import feriaMuestras from '../images/feriaMuestras.jpg'; 
import diaBegoña from '../images/diaBegoña.jpg'; 
import semanaNegra from '../images/semanaNegra.jpg'; 
import cineGijon from '../images/cineGijon.png'; 
import escanciado from '../images/escanciado.jpg'; 
import navidadGijon from '../images/navidadGijon.jpg';


const eventos = [
  {
    nombre: "Feria de Muestras de Gijón",
    fecha: "Agosto",
    descripcion: "La Feria de Muestras de Gijón es una de las principales citas de la ciudad en verano. Con exposiciones, actividades comerciales y shows en vivo, atrae a miles de personas cada año. Las empresas locales e internacionales presentan sus productos, mientras el público disfruta de la oferta cultural y recreativa.",
    imagen: feriaMuestras
  },
  {
    nombre: "Día de Begoña",
    fecha: "15 de agosto",
    descripcion: "El Día de Begoña es el día grande de Gijón. En honor a la Virgen de Begoña, patrona de la ciudad, se celebran desfiles, conciertos, actividades culturales y deportivas, creando una atmósfera festiva con miles de personas en las calles.",
    imagen: diaBegoña
  },
  {
    nombre: "Semana Negra",
    fecha: "Julio",
    descripcion: "La Semana Negra de Gijón es un festival literario centrado en el género negro y policiaco. Se realizan exposiciones, conferencias y conciertos, creando un ambiente único donde la literatura y el entretenimiento se fusionan.",
    imagen: semanaNegra
  },
  {
    nombre: "Festival Internacional de Cine de Gijón",
    fecha: "Noviembre",
    descripcion: "Este festival es uno de los más importantes del norte de España, destacando el cine independiente. En noviembre, la ciudad se llena de proyecciones de películas internacionales y encuentros con cineastas.",
    imagen: cineGijon
  },
  {
    nombre: "Concurso de Escanciado de Sidra",
    fecha: "Agosto",
    descripcion: "El Concurso de Escanciado es un evento único en el que los participantes intentan batir el récord Guinness del mayor volumen de sidra escanciada en un tiempo determinado. Esta actividad es una de las más populares de la Fiesta de la Sidra y se realiza en el mes de agosto.",
    imagen: escanciado
  },
  {
    nombre: "Navidad en Gijón",
    fecha: "Diciembre",
    descripcion: "Durante la Navidad, Gijón se transforma en un paraíso invernal con luces y decoraciones por toda la ciudad. Además, se realizan mercados navideños, conciertos y actividades para todos los públicos, especialmente en el puerto deportivo.",
    imagen: navidadGijon
  }
];

const Planes = () => {
  return (
    <section id="planes">
      <header className='planes-header'>
      <h2>Planes y Eventos</h2>
      <p>Descubre algunos de los eventos más destacados de Gijón a lo largo del año. Desde festivales hasta celebraciones locales, cada uno de ellos ofrece una experiencia única para disfrutar en esta vibrante ciudad.</p>
      </header>
      <div className="eventos">
        {eventos.map((evento, index) => (
          <div className="evento" key={index}>
            <img src={evento.imagen} alt={evento.nombre} className="evento-img" />
            <div className="evento-info">
              <h3>{evento.nombre}</h3>
              <p><strong>Fecha:</strong> {evento.fecha}</p>
              <p>{evento.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Planes;
