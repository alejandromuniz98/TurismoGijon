import React from "react";
import "../../styles/PageHero.css";

/**
 * @param {{ src: string, alt: string, priority?: boolean }} props
 */
function PageHero({ src, alt, priority = false }) {
  if (!src) return null;
  return (
    <figure className="page-hero">
      <img
        className="page-hero__img"
        src={src}
        alt={alt}
        width={1280}
        height={720}
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </figure>
  );
}

export default PageHero;
