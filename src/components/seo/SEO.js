import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "../../config/site";

/**
 * @param {Object} props
 * @param {string} props.title - Título único (sin marca) o completo si noCanonicalTitle
 * @param {string} props.description
 * @param {string} [props.canonicalPath]
 * @param {string} [props.ogImage]
 * @param {string} [props.ogType]
 * @param {string[]} [props.keywords]
 * @param {Object|Object[]} [props.jsonLd] - JSON-LD object(s)
 * @param {boolean} [props.appendSiteName]
 * @param {boolean} [props.noIndex]
 */
function SEO({
  title,
  description,
  canonicalPath = "",
  ogImage,
  ogType = "website",
  keywords = [],
  jsonLd,
  appendSiteName = true,
  noIndex = false,
}) {
  const fullTitle =
    appendSiteName && title && !title.includes(SITE_NAME)
      ? `${title} | ${SITE_NAME}`
      : title || SITE_NAME;
  const canonical = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath || ""}` || SITE_URL;
  const image = ogImage || DEFAULT_OG_IMAGE;
  const keywordStr = keywords.length ? keywords.join(", ") : undefined;

  const ldNodes = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <html lang="es" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywordStr && <meta name="keywords" content={keywordStr} />}
      {!noIndex && <link rel="canonical" href={canonical} />}
      {noIndex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_ES" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {ldNodes.map((node, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(node)}
        </script>
      ))}
    </Helmet>
  );
}

export default SEO;
