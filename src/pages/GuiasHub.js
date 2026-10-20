import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articleRegistry";
import { HUB_HERO, INLINE_IMAGES } from "../images/assets";
import SectionHubPage from "./SectionHubPage";

export default function GuiasHub() {
  const cards = articles.filter((a) => a.category === "guias").sort((a, b) => a.datePublished.localeCompare(b.datePublished));
  const extraImg = INLINE_IMAGES.guiasExtra;

  return (
    <SectionHubPage
      title="Guías de viaje a Gijón: itinerarios y consejos"
      metaTitle="Guías turismo Gijón | Itinerarios y planes por días"
      metaDescription="Guías largas para organizar tu viaje: Gijón en 1 o 2 días, con niños, gratis o con lluvia. Consejos prácticos y actualizados."
      canonicalPath="/guias"
      breadcrumbTrail={[{ label: "Guías" }]}
      keywords={["guías Gijón", "turismo Gijón", "itinerario Gijón", "viaje Gijón"]}
      heroImage={HUB_HERO["/guias"]}
      cards={cards}
      extra={
        <div className="hub-extra">
          <figure className="hub-inline-figure hub-inline-figure--compact">
            <img src={extraImg.src} alt={extraImg.alt} width={640} height={400} loading="lazy" decoding="async" />
            <figcaption className="hub-inline-figure__cap">
              Muchas guías familiares pasan por el <Link to="/gijon-con-ninos">Acuario</Link> u otros museos.
            </figcaption>
          </figure>
          <p>
            Explora también el <Link to="/blog">blog completo</Link>, las <Link to="/rutas-en-gijon">rutas a pie</Link> y el{" "}
            <Link to="/mapa-turistico-gijon">mapa turístico</Link>.
          </p>
        </div>
      }
    />
  );
}
