import React from 'react';
import '../styles/Inicio.css';
import gijonImage from '../images/foto-gijon.jpg';

function Inicio() {
  return (
    <div className="inicio">
      <div className="intro">
        <h1>Descubre Gijón</h1>
        <p>
          Gijón, una joya escondida en la costa norte de España, es la ciudad perfecta para los amantes de la naturaleza, 
          la cultura y la historia. Con su impresionante puerto, playas de ensueño y una rica tradición industrial, Gijón 
          ofrece un sinfín de oportunidades para explorar y disfrutar. A lo largo de esta web, descubrirás todos los secretos 
          que esta ciudad tiene para ofrecerte.
        </p>
      </div>
      <div className="image-section">
        <img src={gijonImage} alt="Gijón" />
        <p>Gijón, una ciudad que lo tiene todo: mar, historia y cultura.</p>
      </div>
      
      <div className="section-preview">
        <h2>Explora</h2>
        <div className="preview">
          <div className="preview-item">
            <h3>Ver</h3>
            <p>
            Gijón combina historia, playas y naturaleza. El casco antiguo, con sus calles llenas de encanto, se mezcla con hermosas playas y parques que invitan al relax. Una ciudad que ofrece cultura, belleza y tranquilidad en cada rincón.</p>
          </div>
          <div className="preview-item">
            <h3>Actividades</h3>
            <p>
              ¿Te gustan las aventuras al aire libre? Gijón te ofrece una gran variedad de actividades, tanto en la playa como 
              en sus parques y alrededores. Descubre nuestras recomendaciones para una experiencia inolvidable.
            </p>
          </div>
          <div className="preview-item">
            <h3>Comer</h3>
            <p>
              La gastronomía asturiana es una de las más destacadas de España. En Gijón podrás disfrutar de platos típicos 
              como el cachopo y la sidra, en un ambiente único que te hará sentirte como en casa.
            </p>
          </div>
        </div>
      </div>



      <div className="cta">
        <h2>¿Estás listo para descubrir más?</h2>
        <p>
          Cada rincón de Gijón tiene algo especial. Navega por nuestras secciones y empieza tu aventura en esta ciudad única. 
          ¡Sigue explorando y no te pierdas nada!
        </p>
      </div>
    </div>
  );
}

export default Inicio;
