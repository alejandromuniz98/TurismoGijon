import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../../config/site";
import { BRAND } from "../../images/assets";
import "../../styles/Breadcrumbs.css";

/**
 * Migas de pan para UX y SEO.
 * @param {{ label: string, to?: string }[]} trail - sin Inicio; la última entrada sin `to` es la página actual.
 */
function Breadcrumbs({ trail = [] }) {
  const location = useLocation();
  const chain = [{ label: "Inicio", to: "/" }, ...trail];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: chain.map((entry, i) => {
      const isLast = i === chain.length - 1;
      const path = isLast ? location.pathname : entry.to || "/";
      const url = `${SITE_URL}${path === "/" ? "/" : path}`;
      return {
        "@type": "ListItem",
        position: i + 1,
        name: entry.label,
        item: url,
      };
    }),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav className="breadcrumbs" aria-label="Migas de pan">
        <img className="breadcrumbs__mark" src={BRAND.logo} alt="" width={22} height={22} decoding="async" />
        <ol className="breadcrumbs__list">
          {chain.map((entry, i) => {
            const isLast = i === chain.length - 1;
            return (
              <li key={`${entry.label}-${i}`} className="breadcrumbs__item">
                {!isLast && entry.to ? (
                  <>
                    <Link to={entry.to}>{entry.label}</Link>
                    <span className="breadcrumbs__sep" aria-hidden>
                      /
                    </span>
                  </>
                ) : (
                  <span className="breadcrumbs__current" aria-current="page">
                    {entry.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumbs;
