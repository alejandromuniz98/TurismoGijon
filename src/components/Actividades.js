import React from 'react';
import '../styles/Actividades.css';
import surf from '../images/surf.jpg';
import sidra from '../images/sidra.jpg';
import ruta from '../images/ruta.jpg';
import museo from '../images/museo.jpg';
import noche from '../images/noche.jpg';
import spa from '../images/spa.jpg';

const actividades = [
  { img: surf, title: "Surf en la Playa de San Lorenzo", desc: "Gijón es un destino ideal para los amantes del surf, con olas perfectas y escuelas para todos los niveles. La Playa de San Lorenzo, con sus 1.5 km de arena dorada y sus aguas ideales para surfistas de todos los niveles, es uno de los lugares más emblemáticos de la ciudad. Ya seas principiante o un surfista experimentado, encontrarás la escuela adecuada y las olas perfectas para disfrutar del deporte." },
  { img: sidra, title: "Ruta de la Sidra Asturiana", desc: "Descubre la tradición sidrera visitando llagares y degustando la mejor sidra natural en Gijón. Durante esta ruta, podrás conocer los procesos de producción de la sidra, desde la recolección de las manzanas hasta la fermentación en las tradicionales toneles de madera. Además, tendrás la oportunidad de visitar varios llagares, degustar diferentes tipos de sidra y aprender sobre la historia cultural que ha acompañado a esta bebida durante siglos." },
  { img: ruta, title: "Rutas de Senderismo", desc: "Explora la naturaleza con rutas espectaculares en el Monte Deva o la Senda del Cervigón con vistas al mar Cantábrico. Gijón cuenta con diversas rutas de senderismo que se adaptan a todos los niveles. Desde las rutas fáciles y accesibles en el Monte Deva hasta los recorridos más exigentes por la costa, cada sendero ofrece paisajes únicos, desde bosques frondosos hasta panorámicas impresionantes del mar Cantábrico." },
  { img: museo, title: "Visita Museos", desc: "Sumérgete en la historia visitando el Museo del Ferrocarril, el Museo Evaristo Valle y el Museo del Pueblo de Asturias. Gijón es una ciudad rica en historia y cultura, y sus museos te permitirán conocer más sobre la vida y tradiciones de Asturias. El Museo del Ferrocarril ofrece una experiencia interactiva sobre el desarrollo ferroviario de la región, mientras que el Museo Evaristo Valle alberga una de las colecciones de arte contemporáneo más importantes de la región." },
  { img: noche, title: "Vida Nocturna en Cimavilla", desc: "Disfruta de la mejor vida nocturna en Cimavilla, el barrio más auténtico de Gijón con bares y terrazas con vistas al mar. Cimavilla es un barrio pintoresco lleno de vida, donde puedes disfrutar de su vibrante oferta de bares, restaurantes y terrazas con vistas espectaculares al mar Cantábrico. Ideal para una noche de copas, paseos por sus estrechas calles llenas de historia, o disfrutar de música en vivo en sus bares más emblemáticos." },
  { img: spa, title: "Relax en un Balneario", desc: "Disfruta de un día de spa y relax en las termas romanas o en modernos centros de bienestar en el centro de la ciudad. Gijón ofrece diversas opciones para el relax y el bienestar, desde las termas romanas que te transportan a tiempos antiguos, hasta modernos centros de bienestar que cuentan con servicios como masajes, saunas, baños termales y tratamientos de belleza. El lugar perfecto para desconectar y recargar energías." }
];

function Actividades() {
  return (
    <div className="actividades">
      <section id="que-hacer">

      <header className="actividades-header">
        <h2>Actividades Imperdibles</h2>
        <p>Desde surf en la playa hasta rutas culturales, explora todo lo que Gijón tiene para ofrecerte en esta maravillosa ciudad.</p>
      </header>

      <div className="actividades-list">
        {actividades.map((actividad, index) => (
          <div key={index} className="actividad">
            <img src={actividad.img} alt={actividad.title} className="actividad-img" />
            <div className="actividad-texto">
              <h3>{actividad.title}</h3>
              <p>{actividad.desc}</p>
            </div>
          </div>
        ))}
      </div>
            </section>
    </div>
  );
}

export default Actividades;
