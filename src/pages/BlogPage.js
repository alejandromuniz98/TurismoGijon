import React from "react";
import SEO from "../components/seo/SEO";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import PageHero from "../components/layout/PageHero";
import AdSlot from "../components/ads/AdSlot";
import { articles } from "../data/articleRegistry";
import { Link } from "react-router-dom";
import { absoluteUrl } from "../config/site";
import { PAGE_HERO } from "../images/assets";
import "../styles/HubPage.css";

export default function BlogPage() {
  const sorted = [...articles].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
  const hero = PAGE_HERO.blog;

  return (
    <main className="page hub-page">
      <SEO
        title="Blog de turismo en Gijón: guías largas y consejos"
        metaDescription="Archivo del blog sobre turismo Gijón: playas, restaurantes, itinerarios, errores a evitar y rincones con encanto. Artículos con FAQs y enlaces internos."
        canonicalPath="/blog"
        keywords={["blog Gijón", "turismo Gijón", "guías viaje", "Asturias"]}
        ogImage={absoluteUrl(hero.src)}
      />
      <div className="hub-inner">
        <Breadcrumbs trail={[{ label: "Blog" }]} />
        <PageHero src={hero.src} alt={hero.alt} priority />
        <header className="hub-header">
          <h1>Blog: turismo Gijón</h1>
          <p className="hub-lead">
            Artículos extensos pensados para buscadores y para lectores reales: listas, tablas comparativas, preguntas
            frecuentes y enlaces entre guías.
          </p>
        </header>

        <AdSlot variant="banner" unitKey="blogTop" />

        <ul className="blog-archive">
          {sorted.map((a) => (
            <li key={a.slug} className="blog-archive__item">
              <article className="blog-archive__article">
                <Link to={`/${a.slug}`} className="blog-archive__thumb-link" aria-hidden tabIndex={-1}>
                  <img
                    className="blog-archive__thumb"
                    src={a.heroSrc}
                    alt=""
                    width={140}
                    height={100}
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
                <div className="blog-archive__body">
                  <time className="blog-archive__date" dateTime={a.datePublished}>
                    {a.datePublished}
                  </time>
                  <h2 className="blog-archive__title">
                    <Link to={`/${a.slug}`}>{a.title}</Link>
                  </h2>
                  <p className="blog-archive__excerpt">{a.metaDescription}</p>
                  <Link className="blog-archive__read" to={`/${a.slug}`}>
                    Leer guía →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <AdSlot variant="footer" unitKey="blogFooter" />
      </div>
    </main>
  );
}
