import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-gijon.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
      <Link to="/"><h1 className="title"><a> TURISMO EN GIJÓN </a></h1></Link>
        <div className="extras">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
      <nav className="nav-bar">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/ver">¿Qué ver?</Link></li>
          <li><Link to="/actividades">¿Qué hacer?</Link></li>
          <li><Link to="/comer">¿Qué comer?</Link></li>
          <li><Link to="/moverse">¿Cómo moverse?</Link></li>
          <li><Link to="/planes">Planes</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
