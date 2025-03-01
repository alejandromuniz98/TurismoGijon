import React from 'react';
import logo from '../images/logo-gijon.png';
import '../styles/Header.css'; 

const Planes = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <h1 className="title">TURISMO EN GIJÓN</h1>
        <div className="extras">
          <img src={logo} className="logo" />
        </div>
      </div>
      <nav className="nav-bar">
        <ul>
          <li><a href="#">¿Qué ver?</a></li>
          <li><a href="#">¿Qué hacer?</a></li>
          <li><a href="#">¿Qué comer?</a></li>
          <li><a href="#">¿Cómo moverse?</a></li>
          <li><a href="#">Planes</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Planes;
