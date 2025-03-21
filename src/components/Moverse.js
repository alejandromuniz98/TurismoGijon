import React, { useState } from 'react';
import '../styles/Moverse.css';
import busLines from '../images/busLines.jpg';
import bikeImage from '../images/bike.jpg';
import parkingMap from '../images/parkingMap.png';
import guppyImage from '../images/guppy.jpg';
import walkingImage from '../images/walking.jpg';

const Moverse = () => {
  const [activeTab, setActiveTab] = useState('bici');

  return (
    <section id="moverse">
      <header className="moverse-header">
      <h2>¿Cómo moverse?</h2>
      <p>Gijón es una ciudad que ofrece una gran variedad de opciones de transporte para que los residentes y turistas puedan moverse cómodamente. Desde la opción más ecológica y sostenible, como la bicicleta, hasta servicios rápidos y accesibles como el autobús y el taxi. Además, si prefieres caminar, la ciudad tiene rutas y paseos agradables que te permiten disfrutar del paisaje mientras te desplazas.</p>
      </header>
      
      <div className="moverse-card">
        <div className="tabs">
          <button className={activeTab === 'bici' ? 'active' : ''} onClick={() => setActiveTab('bici')}>Bicicleta</button>
          <button className={activeTab === 'autobus' ? 'active' : ''} onClick={() => setActiveTab('autobus')}>Autobús</button>
          <button className={activeTab === 'taxi' ? 'active' : ''} onClick={() => setActiveTab('taxi')}>Taxi</button>
          <button className={activeTab === 'coche' ? 'active' : ''} onClick={() => setActiveTab('coche')}>Coche</button>
          <button className={activeTab === 'guppy' ? 'active' : ''} onClick={() => setActiveTab('guppy')}>Guppy</button>
          <button className={activeTab === 'caminar' ? 'active' : ''} onClick={() => setActiveTab('caminar')}>Caminar</button>
        </div>

        <div className={`tab-content ${activeTab}`}>
          {activeTab === 'bici' && (
            <div className="tab-section">
              <p>Para los amantes del ciclismo, Gijón cuenta con una red de carriles bici y el servicio de alquiler Gijón Bici. Se pueden alquilar bicicletas fácilmente a través de la app oficial. Además, el paseo marítimo y parques urbanos hacen que moverse en bici sea una opción agradable y sostenible.</p>
              <img src={bikeImage} alt="Bicicletas en Gijón" className="transport-img" />
            </div>
          )}
          {activeTab === 'autobus' && (
            <div className="tab-section">
              <p>Gijón dispone de una amplia red de autobuses urbanos operados por EMTUSA. Con tarifas accesibles desde 1.25€, abonos mensuales y descuentos para estudiantes y jubilados, es una opción cómoda y económica. Las líneas cubren toda la ciudad y el servicio nocturno (Búho) permite desplazamientos seguros durante la madrugada.</p>
              <img src={busLines} alt="Líneas de autobús en Gijón" className="transport-img" />
            </div>
          )}
          {activeTab === 'taxi' && (
            <div className="tab-section">
              <p>Los taxis en Gijón están disponibles las 24 horas. Puedes tomarlos en paradas específicas o pedirlos por teléfono. Es una alternativa rápida para desplazamientos urgentes o para llegar a zonas sin cobertura de transporte público. Aceptan pago con tarjeta y algunos permiten reservas por aplicación.</p>
              <ul>
                <li>Radio Taxi Gijón: 985 34 34 34</li>
                <li>Tele Taxi Gijón: 985 16 16 16</li>
                <li>Taxi Gijón 24h: 985 30 00 30</li>
                <li>Gijón Taxi Express: 985 45 78 78</li>
              </ul>
            </div>
          )}
          {activeTab === 'coche' && (
            <div className="tab-section">
              <p>Si viajas en coche, Gijón dispone de varios parkings en el centro con tarifas que varían según la ubicación y el tiempo de estacionamiento. Entre ellos destacan: Plaza del Humedal, Plaza Europa, Jardines de Begoña, Cimadevilla y el parking de Fomento, situado cerca del puerto deportivo. Las tarifas suelen rondar entre 1,50 y 2 euros por hora, aunque algunos ofrecen bonos diarios o descuentos para largas estancias. Además, hay zonas de estacionamiento regulado (ORA) con precios más económicos y algunos parkings gratuitos en las afueras, como el de la Universidad Laboral o el del Parque de Los Pericones.</p>
              <img src={parkingMap} alt="Mapa de parkings en Gijón" className="transport-img" />
            </div>
          )}
          {activeTab === 'guppy' && (
            <div className="tab-section">
              <p>El servicio Guppy permite alquilar coches eléctricos por minutos a través de su app. Es ideal para desplazamientos cortos dentro de la ciudad sin necesidad de preocuparse por el aparcamiento, ya que se pueden dejar en las zonas habilitadas sin coste adicional.</p>
              <img src={guppyImage} alt="Coche Guppy en Gijón" className="transport-img" />
            </div>
          )}
          {activeTab === 'caminar' && (
            <div className="tab-section">
              <p>Gijón es una ciudad perfecta para recorrer a pie. Sus paseos marítimos, parques y calles peatonales permiten disfrutar del paisaje urbano sin necesidad de transporte motorizado. Además, la cercanía entre puntos turísticos hace que caminar sea la mejor forma de descubrir la ciudad.</p>
              <img src={walkingImage} alt="Paseo marítimo en Gijón" className="transport-img" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Moverse;
