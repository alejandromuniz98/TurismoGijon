
import React from "react";
import { Link } from "react-router-dom";

import { articles } from "../data/articleRegistry";
import { HUB_HERO, INLINE_IMAGES } from "../images/assets";
import SectionHubPage from "./SectionHubPage";

const slugs = [
  "que-ver-gijon-1-dia",
  "que-ver-gijon-gratis",
  "gijon-en-2-dias",
  "lugares-secretos-gijon",
  "errores-visitar-gijon",
];

export default function QueVerHub() {
  const cards = slugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter(Boolean);

  return (
    <SectionHubPage
      title="Qué ver en Gijón: lugares imprescindibles y rutas"
      metaTitle="Qué ver en Gijón | Lugares imprescindibles y rutas"
      metaDescription="Qué ver en Gijón y qué lugares visitar: Cimavilla, San Lorenzo, Cerro de Santa Catalina, Elogio del Horizonte y Universidad Laboral. Itinerarios para 1 y 2 días."
      canonicalPath="/que-ver-gijon"
      breadcrumbTrail={[{ label: "Qué ver en Gijón" }]}
      keywords={[
        "qué ver en Gijón",
        "lugares que ver en Gijón",
        "qué visitar en Gijón",
        "turismo Gijón",
        "Cimavilla",
        "Cerro de Santa Catalina",
        "miradores Gijón",
      ]}
      heroImage={HUB_HERO["/que-ver-gijon"]}
      cards={cards}
      extra={
        <div className="hub-extra">
          <div className="hub-extra__intro">
            <span className="hub-extra__kicker">
              Guía para descubrir la ciudad
            </span>

            <h2 className="hub-extra__title">
              Los lugares que no deberías perderte en Gijón
            </h2>

            <p>
              Gijón es una ciudad fácil de recorrer y con muchos de sus
              principales atractivos concentrados cerca del centro. Puedes
              empezar por <strong>Cimavilla</strong>, continuar por el paseo
              de la <strong>playa de San Lorenzo</strong> y subir al
              <strong> Cerro de Santa Catalina</strong> para disfrutar de
              algunas de las mejores vistas de la costa.
            </p>

            <p>
              Si dispones de más tiempo, merece la pena ampliar el recorrido
              hasta la <strong>Universidad Laboral</strong>, el
              <strong> Jardín Botánico Atlántico</strong> y otros espacios
              culturales de la ciudad. La mejor ruta dependerá de si tienes
              unas horas, un día completo o un fin de semana.
            </p>
          </div>

          <figure className="hub-inline-figure">
            <img
              src={INLINE_IMAGES.queVerExtra.src}
              alt={INLINE_IMAGES.queVerExtra.alt}
              width={960}
              height={540}
              loading="lazy"
              decoding="async"
            />

            <figcaption className="hub-inline-figure__cap">
              {INLINE_IMAGES.queVerExtra.alt}
            </figcaption>
          </figure>

          <div className="hub-extra__next">
            <h3>
              Organiza tu visita
            </h3>

            <p>
              Antes de empezar el recorrido puedes consultar el{" "}
              <Link to="/mapa-turistico-gijon">
                mapa turístico interactivo de Gijón
              </Link>{" "}
              para localizar los principales puntos de interés. También
              puedes descubrir la ciudad caminando con nuestras{" "}
              <Link to="/rutas-en-gijon">
                rutas a pie por Gijón
              </Link>
              .
            </p>

            <p>
              Si viajas en familia, consulta también nuestra guía de{" "}
              <Link to="/gijon-con-ninos">
                Gijón con niños
              </Link>
              , con propuestas adaptadas para disfrutar de la ciudad con
              los más pequeños.
            </p>
          </div>
        </div>
      }
    />
  );
}
