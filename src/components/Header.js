import React from 'react';
import logo from '../images/logo-gijon.png';
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <h1 className="title">TURISMO EN GIJÓN</h1>
        <div className="extras">
          <img src={logo} className="logo" alt='logo'/>
        </div>
      </div>
      <nav className="nav-bar">
        <ul>
    <li><a href="#que-ver">¿Qué ver?</a></li>
    <li><a href="#que-hacer">¿Qué hacer?</a></li>
    <li><a href="#que-comer">¿Qué comer?</a></li>
    <li><a href="#como-moverse">¿Cómo moverse?</a></li>
    <li><a href="#planes">Planes</a></li>
    <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
