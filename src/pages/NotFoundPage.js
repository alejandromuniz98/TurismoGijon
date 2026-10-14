import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import PageHero from "../components/layout/PageHero";
import { PAGE_HERO } from "../images/assets";
import "../styles/NotFoundPage.css";

export default function NotFoundPage() {
  const hero = PAGE_HERO.notFound;

  return (
    <main className="page not-found-page">
      <SEO
        title="Página no encontrada"
        description="La página solicitada no existe en Turismo Gijón."
        noIndex
        appendSiteName
      />
      <div className="not-found-inner">
        <PageHero src={hero.src} alt={hero.alt} priority />
        <h1>404 — No encontrada</h1>
        <p className="not-found-text">
          Esa URL no corresponde a ninguna guía. Prueba la <Link to="/">portada</Link>, el <Link to="/blog">blog</Link> o
          el <Link to="/mapa-turistico-gijon">mapa turístico</Link>.
        </p>
      </div>
    </main>
  );
}
