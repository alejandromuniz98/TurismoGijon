import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import PageHero from "../components/layout/PageHero";
import AdSlot from "../components/ads/AdSlot";
import { absoluteUrl } from "../config/site";
import { INLINE_IMAGES, PAGE_HERO } from "../images/assets";
import "../styles/HubPage.css";

const GijonMap = lazy(() => import("../components/map/GijonMap"));

export default function MapPage() {
  const hero = PAGE_HERO.mapa;
  const jardinImg = INLINE_IMAGES.mapaJardin;
  const acuarioImg = INLINE_IMAGES.mapaAcuario;

  return (
    <main className="page hub-page">
      <SEO
        title="Mapa turístico de Gijón: playas, Cimavilla, Laboral y más"
        metaDescription="Mapa interactivo de Gijón con playas, Cimavilla, Elogio del Horizonte, Acuario, Laboral, Jardín Botánico y otros puntos clave. OpenStreetMap."
        canonicalPath="/mapa-turistico-gijon"
        keywords={[
          "mapa Gijón",
          "turismo Gijón",
          "Playa San Lorenzo",
          "Cimavilla mapa",
          "Universidad Laboral",
          "Elogio del Horizonte",
        ]}
        ogImage={absoluteUrl(hero.src)}
      />
      <div className="hub-inner prose">
        <Breadcrumbs trail={[{ label: "Mapa turístico" }]} />
        <PageHero src={hero.src} alt={hero.alt} priority />
        <header className="hub-header">
          <h1>Mapa turístico de Gijón</h1>
          <p className="hub-lead">
            Más de 20 puntos reales sobre cartografía <strong>OpenStreetMap</strong>: playas, miradores, cultura y
            espacios verdes. Úsalo como orientación; para navegación crítica combina con señalización local y apps
            oficiales.
          </p>
        </header>

        <Suspense
          fallback={
            <p className="map-fallback" role="status">
              Cargando mapa…
            </p>
          }
        >
          <GijonMap />
        </Suspense>

        <div className="map-page__figures">
          <figure className="hub-inline-figure hub-inline-figure--compact">
            <img src={jardinImg.src} alt={jardinImg.alt} width={640} height={400} loading="lazy" decoding="async" />
            <figcaption className="hub-inline-figure__cap">
              El Jardín Botánico es uno de los grandes espacios verdes; combínalo con{" "}
              <Link to="/gijon-en-2-dias">itinerarios de dos días</Link>.
            </figcaption>
          </figure>
          <figure className="hub-inline-figure hub-inline-figure--compact">
            <img src={acuarioImg.src} alt={acuarioImg.alt} width={640} height={400} loading="lazy" decoding="async" />
            <figcaption className="hub-inline-figure__cap">
              Cerca del litoral urbano, el <Link to="/gijon-con-ninos">Acuario</Link> encaja en rutas con niños.
            </figcaption>
          </figure>
        </div>

        <h2>Enlaces útiles</h2>
        <ul>
          <li>
            <Link to="/que-ver-gijon-1-dia">Itinerario de un día</Link>
          </li>
          <li>
            <Link to="/rutas-en-gijon">Rutas a pie</Link>
          </li>
          <li>
            <Link to="/mejores-playas-gijon">Guía de playas</Link>
          </li>
        </ul>

        <AdSlot variant="banner" unitKey="mapBottom" />
      </div>
    </main>
  );
}
