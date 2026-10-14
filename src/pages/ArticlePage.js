import React, { Suspense, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import AdSlot from "../components/ads/AdSlot";
import { getArticleBySlug, getRelatedArticles } from "../data/articleRegistry";
import { articleLoaders } from "../content/articleLoaders";
import { SITE_NAME, SITE_URL, absoluteUrl } from "../config/site";
import PageHero from "../components/layout/PageHero";
import { PAGE_HERO } from "../images/assets";
import "../styles/ArticlePage.css";

function ArticleFallback() {
  return (
    <p className="article-loading" role="status">
      Cargando artículo…
    </p>
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const meta = getArticleBySlug(slug);
  const loader = slug ? articleLoaders[slug] : null;
  const Body = useMemo(() => (loader ? React.lazy(loader) : null), [loader]);

  if (!meta || !Body) {
    return (
      <main className="page article-page">
        <SEO
          title="Artículo no encontrado"
          description="El contenido solicitado no existe o ha sido movido."
          noIndex
          appendSiteName
        />
        <div className="article-page__inner">
          <PageHero src={PAGE_HERO.notFound.src} alt={PAGE_HERO.notFound.alt} />
          <h1>No encontrado</h1>
          <p>
            Esa guía no existe. Vuelve al <Link to="/blog">blog</Link> o a la{" "}
            <Link to="/">portada</Link>.
          </p>
        </div>
      </main>
    );
  }

  const path = `/${meta.slug}`;
  const categoryLabel =
    meta.category === "playas"
      ? "Playas"
      : meta.category === "restaurantes"
        ? "Restaurantes"
        : meta.category === "blog"
          ? "Blog"
          : "Guías";

  const categoryPath =
    meta.category === "playas"
      ? "/playas-gijon"
      : meta.category === "restaurantes"
        ? "/restaurantes-gijon"
        : meta.category === "blog"
          ? "/blog"
          : "/guias";

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.metaDescription,
    image: [absoluteUrl(meta.heroSrc)],
    datePublished: meta.datePublished,
    dateModified: meta.dateModified,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: meta.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const related = getRelatedArticles(meta.relatedSlugs);

  return (
    <main className="page article-page">
      <SEO
        title={meta.metaTitle}
        description={meta.metaDescription}
        canonicalPath={path}
        ogImage={absoluteUrl(meta.heroSrc)}
        ogType="article"
        keywords={meta.keywords}
        jsonLd={[articleLd, faqLd]}
      />

      <div className="article-page__inner">
        <Breadcrumbs
          trail={[
            { label: categoryLabel, to: categoryPath },
            { label: meta.title },
          ]}
        />

        <article itemScope itemType="https://schema.org/Article">
          <header className="article-header">
            <p className="article-meta">
              <time dateTime={meta.datePublished}>{meta.datePublished}</time>
              <span aria-hidden> · </span>
              <span>{meta.readMinutes} min de lectura</span>
            </p>
            <h1 className="article-h1" itemProp="headline">
              {meta.title}
            </h1>
            <p className="article-lead" itemProp="description">
              {meta.metaDescription}
            </p>
          </header>

          <figure className="article-hero">
            <img
              src={meta.heroSrc}
              alt={meta.heroAlt}
              width={1280}
              height={720}
              fetchPriority="high"
              decoding="async"
              itemProp="image"
            />
          </figure>

          <AdSlot variant="banner" slotKey={`article-${meta.slug}-top`} />

          <div className="article-layout">
            <div className="article-body prose" itemProp="articleBody">
              <Suspense fallback={<ArticleFallback />}>
                <Body />
              </Suspense>
            </div>

            <aside className="article-aside" aria-label="Publicidad y enlaces">
              <AdSlot variant="sidebar" slotKey={`article-${meta.slug}-side`} />
              {related.length > 0 && (
                <div className="related-box">
                  <h2 className="related-box__title">Artículos relacionados</h2>
                  <ul className="related-box__list">
                    {related.map((a) => (
                      <li key={a.slug}>
                        <Link className="related-box__row" to={`/${a.slug}`}>
                          <img
                            className="related-box__thumb"
                            src={a.heroSrc}
                            alt=""
                            width={56}
                            height={56}
                            loading="lazy"
                            decoding="async"
                          />
                          <span className="related-box__row-title">{a.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>

          <AdSlot variant="inline" slotKey={`article-${meta.slug}-mid`} />

          <section className="article-faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Preguntas frecuentes</h2>
            <dl className="faq-list">
              {meta.faqs.map((f) => (
                <div key={f.q} className="faq-item">
                  <dt>{f.q}</dt>
                  <dd>{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>
      </div>
    </main>
  );
}
