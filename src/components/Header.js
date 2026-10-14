import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BRAND, SITE_MEDIA } from "../images/assets";
import "../styles/Header.css";

const nav = [
  { to: "/", label: "Inicio", end: true },
  { to: "/que-ver-gijon", label: "Qué ver" },
  { to: "/playas-gijon", label: "Playas" },
  { to: "/restaurantes-gijon", label: "Restaurantes" },
  { to: "/guias", label: "Guías" },
  { to: "/blog", label: "Blog" },
  { to: "/rutas-en-gijon", label: "Rutas" },
  { to: "/mapa-turistico-gijon", label: "Mapa" },
  { to: "/contacto", label: "Contacto" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div
        className="site-header__bg"
        style={{ backgroundImage: `url(${SITE_MEDIA.headerBackground.src})` }}
        aria-hidden
      />
      <div className="site-header__inner">
        <div className="site-header__bar">
          <Link to="/" className="site-header__brand" onClick={() => setOpen(false)}>
            <img src={BRAND.logo} width={48} height={48} alt="" className="site-header__logo" decoding="async" />
            <span className="site-header__title">Turismo Gijón</span>
          </Link>
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">Menú</span>
            <span className="site-header__burger" aria-hidden />
          </button>
        </div>
        <nav id="site-nav" className={`site-nav ${open ? "site-nav--open" : ""}`} aria-label="Principal">
          <ul className="site-nav__list">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `site-nav__link${isActive ? " site-nav__link--active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
