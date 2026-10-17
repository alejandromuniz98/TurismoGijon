import React from "react";
import { Link } from "react-router-dom";
import AdSlot from "./ads/AdSlot";
import { openCookiePreferences } from "./privacy/CookieConsent";
import { FOOTER_STRIP } from "../images/assets";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <AdSlot variant="footer" unitKey="footer" />

        <figure className="site-footer__photo">
          <img src={FOOTER_STRIP.src} alt={FOOTER_STRIP.alt} width={1200} height={360} loading="lazy" decoding="async" />
        </figure>

        <div className="site-footer__grid">
          <div>
            <h2 className="site-footer__heading">Secciones</h2>
            <ul className="site-footer__list">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/que-ver-gijon">Qué ver en Gijón</Link>
              </li>
              <li>
                <Link to="/playas-gijon">Playas</Link>
              </li>
              <li>
                <Link to="/restaurantes-gijon">Restaurantes</Link>
              </li>
              <li>
                <Link to="/guias">Guías</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/rutas-en-gijon">Rutas</Link>
              </li>
              <li>
                <Link to="/mapa-turistico-gijon">Mapa turístico</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="site-footer__heading">Guías útiles</h2>
            <ul className="site-footer__list">
              <li>
                <Link to="/que-ver-gijon-1-dia">Gijón en 1 día</Link>
              </li>
              <li>
                <Link to="/mejores-playas-gijon">Mejores playas</Link>
              </li>
              <li>
                <Link to="/donde-comer-gijon">Dónde comer</Link>
              </li>
              <li>
                <Link to="/gijon-con-ninos">Con niños</Link>
              </li>
              <li>
                <Link to="/gijon-cuando-llueve">Si llueve</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="site-footer__heading">Legal y contacto</h2>
            <ul className="site-footer__list">
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
              <li>
                <Link to="/politica-privacidad">Política de privacidad</Link>
              </li>
              <li>
                <Link to="/politica-cookies">Política de cookies</Link>
              </li>
              <li>
                <Link to="/aviso-legal">Aviso legal</Link>
              </li>
              <li>
                <button type="button" className="site-footer__text-btn" onClick={openCookiePreferences}>
                  Gestionar cookies
                </button>
              </li>
            </ul>
            <p className="site-footer__note">
              Información orientativa sobre turismo en Gijón. Verifica horarios y normas en fuentes oficiales antes de
              viajar.
            </p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; {new Date().getFullYear()} Turismo Gijón. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
