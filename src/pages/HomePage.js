import React from "react";
import { Link } from "react-router-dom";

import SEO from "../components/seo/SEO";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import AdSlot from "../components/ads/AdSlot";

import { articles } from "../data/articleRegistry";

import {
  SITE_NAME,
  SITE_URL,
  SITE_TAGLINE,
  absoluteUrl,
} from "../config/site";

import {
  SITE_MEDIA,
  HOME_GASTRO_STRIP,
  HOME_HUB_CARD_IMAGES,
} from "../images/assets";

import "../styles/HomePage.css";

const HOME_HUB_NAV = [
  {
    to: "/que-ver-gijon",
    tag: "Patrimonio",
    title: "Qué ver en Gijón",
    text: "Los lugares imprescindibles, barrios históricos, miradores y rutas para descubrir la ciudad.",
  },
  {
    to: "/playas-gijon",
    tag: "Costa",
    title: "Playas de Gijón",
    text: "San Lorenzo, Poniente, Arbeyal y otras playas: cuál elegir según el tipo de día.",
  },
  {
    to: "/restaurantes-gijon",
    tag: "Gastronomía",
    title: "Dónde comer",
    text: "Sidrerías, restaurantes, pescado, marisco y platos asturianos que merece la pena probar.",
  },
  {
    to: "/guias",
    tag: "Planificación",
    title: "Guías de viaje",
    text: "Itinerarios de 1 y 2 días, planes con niños, días de lluvia y consejos para organizar la visita.",
  },
  {
    to: "/rutas-en-gijon",
    tag: "A pie",
    title: "Rutas en Gijón",
    text: "Recorridos por la ciudad, el litoral y los rincones más interesantes para descubrir caminando.",
  },
  {
    to: "/mapa-turistico-gijon",
    tag: "Mapa",
    title: "Mapa turístico",
    text: "Localiza playas, monumentos, barrios, museos y otros lugares de interés antes de tu visita.",
  },
  {
    to: "/blog",
    tag: "Actualidad",
    title: "Blog de Gijón",
    text: "Guías y artículos para descubrir Gijón con información práctica y recomendaciones.",
  },
];

const featuredSlugs = [
  "que-ver-gijon-1-dia",
  "mejores-playas-gijon",
  "donde-comer-gijon",
  "gijon-con-ninos",
];

export default function HomePage() {
  const featured = featuredSlugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter(Boolean);

  const touristLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Gijón",
    description:
      "Guía turística de Gijón, Asturias, con información sobre playas, lugares de interés, gastronomía, rutas y planes para descubrir la ciudad.",
    touristType: [
      "Turismo cultural",
      "Turismo de playa",
      "Gastronomía",
      "Turismo familiar",
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.5322,
      longitude: -5.6611,
    },
    containsPlace: {
      "@type": "Place",
      name: "Playa de San Lorenzo",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gijón",
        addressRegion: "Asturias",
        addressCountry: "ES",
      },
    },
    url: SITE_URL,
    image: absoluteUrl(SITE_MEDIA.homeHero.src),
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    inLanguage: "es-ES",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <main className="page home-page">
      <SEO
        title="Turismo en Gijón: qué ver, playas, restaurantes y rutas"
        description={`${SITE_TAGLINE} Descubre qué ver en Gijón, sus mejores playas, dónde comer, rutas y planes para disfrutar de la ciudad.`}
        canonicalPath="/"
        keywords={[
          "turismo Gijón",
          "qué ver en Gijón",
          "playas de Gijón",
          "dónde comer en Gijón",
          "rutas en Gijón",
          "viaje a Gijón",
        ]}
        jsonLd={[touristLd, websiteLd]}
        appendSiteName={false}
        ogImage={absoluteUrl(SITE_MEDIA.homeHero.src)}
      />

      {/* HERO */}
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__media">
          <img
            className="home-hero__img"
            src={SITE_MEDIA.homeHero.src}
            alt={SITE_MEDIA.homeHero.alt}
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
          />
          <div className="home-hero__overlay" />
        </div>

        <div className="home-hero__content">
          <p className="home-hero__eyebrow">
            Guía de viaje · Asturias
          </p>

          <h1 id="home-title" className="home-hero__title">
            Turismo en Gijón
          </h1>

          <p className="home-hero__lead">
            Descubre qué ver, dónde comer y qué hacer en Gijón.
            Una guía práctica para disfrutar de sus playas, barrios,
            gastronomía, rutas y principales lugares de interés.
          </p>

          <div className="home-hero__cta">
            <Link className="btn btn--primary" to="/que-ver-gijon">
              Qué ver en Gijón
            </Link>

            <Link className="btn btn--ghost" to="/guias">
              Planifica tu visita
            </Link>
          </div>
        </div>
      </section>

      <div className="home-inner">
        <Breadcrumbs trail={[]} />

        {/* HUB PRINCIPAL */}
        <section
          className="home-sections"
          aria-labelledby="sec-hub"
        >
          <div className="section-heading">
            <div>
              <span className="section-kicker">Descubre la ciudad</span>

              <h2 id="sec-hub" className="section-title">
                Explora Gijón por temas
              </h2>
            </div>

            <p className="section-heading__description">
              Encuentra rápidamente la información que necesitas
              para organizar tu visita.
            </p>
          </div>

          <div className="hub-cards">
            {HOME_HUB_NAV.map((item) => {
              const shot = HOME_HUB_CARD_IMAGES[item.to];

              return (
                <Link
                  key={item.to}
                  className="hub-card"
                  to={item.to}
                >
                  {shot && (
                    <div className="hub-card__media">
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        width={640}
                        height={360}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}

                  <div className="hub-card__content">
                    <span className="hub-card__tag">
                      {item.tag}
                    </span>

                    <h3 className="hub-card__title">
                      {item.title}
                    </h3>

                    <p className="hub-card__text">
                      {item.text}
                    </p>

                    <span className="hub-card__arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <AdSlot variant="banner" unitKey="homeMid" />

        {/* ARTÍCULOS */}
        <section
          className="home-featured"
          aria-labelledby="feat-title"
        >
          <div className="section-heading">
            <div>
              <span className="section-kicker">
                Para empezar
              </span>

              <h2 id="feat-title" className="section-title">
                Guías imprescindibles
              </h2>
            </div>

            <Link
              className="section-heading__link"
              to="/blog"
            >
              Ver todas las guías →
            </Link>
          </div>

          <div className="article-cards">
            {featured.map((article) => (
              <article
                key={article.slug}
                className="article-card"
              >
                <Link
                  to={`/${article.slug}`}
                  className="article-card__link"
                >
                  <div className="article-card__media">
                    <img
                      src={article.heroSrc}
                      alt={article.heroAlt}
                      width={640}
                      height={360}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="article-card__body">
                    <h3 className="article-card__title">
                      {article.title}
                    </h3>

                    <p className="article-card__excerpt">
                      {article.metaDescription.length > 140
                        ? `${article.metaDescription.slice(0, 140)}…`
                        : article.metaDescription}
                    </p>

                    <div className="article-card__footer">
                      <span>
                        {article.readMinutes} min de lectura
                      </span>

                      <span aria-hidden="true">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          className="home-intro prose"
          aria-labelledby="intro-gijon"
        >
          <span className="section-kicker">
            Conoce Gijón
          </span>

          <h2 id="intro-gijon">
            Una ciudad para disfrutar del mar, la gastronomía y la cultura
          </h2>

          <div
            className="home-gastro-strip"
            role="group"
            aria-label="Gastronomía asturiana en Gijón"
          >
            {HOME_GASTRO_STRIP.map((item) => (
              <figure
                key={item.alt}
                className="home-gastro-strip__item"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={260}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>

          <p>
            Gijón reúne en pocos kilómetros muchos de los atractivos
            que hacen especial a Asturias. La <strong>playa de San Lorenzo</strong>,
            el barrio histórico de <strong>Cimavilla</strong>, el
            <strong> Cerro de Santa Catalina</strong> y el
            <strong> Elogio del Horizonte</strong> son algunos de los
            lugares imprescindibles para una primera visita.
          </p>

          <p>
            Pero la ciudad también merece tiempo para descubrir su
            gastronomía, pasear por el litoral, visitar la
            <strong> Universidad Laboral</strong> o conocer espacios como
            el <strong>Jardín Botánico Atlántico</strong>. Y cuando el
            tiempo no acompaña, Gijón ofrece museos y propuestas culturales
            que permiten seguir disfrutando de la ciudad.
          </p>

          <p>
            En esta guía encontrarás itinerarios para visitar Gijón en
            <strong> un día o un fin de semana</strong>, recomendaciones
            para comer, información sobre sus playas, rutas a pie y
            propuestas para viajar en familia o descubrir la ciudad
            tranquilamente en pareja.
          </p>

          <div className="home-intro__links">
            <Link to="/que-ver-gijon">
              Qué ver en Gijón
            </Link>

            <Link to="/playas-gijon">
              Mejores playas
            </Link>

            <Link to="/restaurantes-gijon">
              Dónde comer
            </Link>

            <Link to="/rutas-en-gijon">
              Rutas
            </Link>
          </div>
        </section>

        <AdSlot variant="footer" unitKey="homeFooter" />
      </div>
    </main>
  );
}

