import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import AdSlot from "../components/ads/AdSlot";
import PageHero from "../components/layout/PageHero";
import { absoluteUrl } from "../config/site";
import "../styles/HubPage.css";

/**
 * @param {Object} props
 * @param {string} props.title - H1 y parte del title SEO
 * @param {string} props.metaTitle
 * @param {string} props.metaDescription
 * @param {string} props.canonicalPath
 * @param {{ label: string, to?: string }[]} props.breadcrumbTrail
 * @param {string[]} props.keywords
 * @param {{ src: string, alt: string }} [props.heroImage]
 * @param {{ slug: string, title: string, metaDescription: string, heroSrc: string, heroAlt: string, readMinutes: number }[]} props.cards
 * @param {React.ReactNode} [props.extra]
 */
export default function SectionHubPage({
  title,
  metaTitle,
  metaDescription,
  canonicalPath,
  breadcrumbTrail,
  keywords,
  heroImage,
  cards,
  extra,
}) {
  return (
    <main className="page hub-page">
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonicalPath={canonicalPath}
        keywords={keywords}
        ogImage={heroImage ? absoluteUrl(heroImage.src) : undefined}
      />
      <div className="hub-inner">
        <Breadcrumbs trail={breadcrumbTrail} />
        {heroImage && <PageHero src={heroImage.src} alt={heroImage.alt} priority />}
        <header className="hub-header">
          <h1>{title}</h1>
          <p className="hub-lead">{metaDescription}</p>
        </header>

        {extra}

        <div className="article-cards article-cards--hub">
          {cards.map((a) => (
            <article key={a.slug} className="article-card">
              <Link to={`/${a.slug}`} className="article-card__link">
                <div className="article-card__media">
                  <img
                    src={a.heroSrc}
                    alt={a.heroAlt}
                    width={640}
                    height={360}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="article-card__body">
                  <h3 className="article-card__title">{a.title}</h3>
                  <p className="article-card__excerpt">{a.metaDescription.slice(0, 155)}…</p>
                  <span className="article-card__meta">{a.readMinutes} min lectura</span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <AdSlot variant="inline" slotKey={`hub-${canonicalPath}`} />
      </div>
    </main>
  );
}
