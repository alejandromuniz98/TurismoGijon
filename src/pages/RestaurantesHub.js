import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articleRegistry";
import { HUB_HERO, INLINE_IMAGES } from "../images/assets";
import SectionHubPage from "./SectionHubPage";

export default function RestaurantesHub() {
  const cards = articles.filter((a) => a.slug === "donde-comer-gijon");
  const extraImg = INLINE_IMAGES.restaurantesExtra;

  return (
    <SectionHubPage
      title="Restaurantes en Gijón: sidrerías, mar y cachopo"
      metaTitle="Restaurantes Gijón | Dónde comer y sidrerías"
      metaDescription="Dónde comer en Gijón: sidrerías tradicionales, pescado, marisquerías y locales recomendados. Consejos de reserva y gastronomía asturiana."
      canonicalPath="/restaurantes-gijon"
      breadcrumbTrail={[{ label: "Restaurantes" }]}
      keywords={["restaurantes Gijón", "dónde comer en Gijón", "sidrerías Gijón", "cachopo Gijón"]}
      heroImage={HUB_HERO["/restaurantes-gijon"]}
      cards={cards}
      extra={
        <div className="hub-comparison hub-extra prose">
          <figure className="hub-inline-figure">
            <img src={extraImg.src} alt={extraImg.alt} width={960} height={540} loading="lazy" decoding="async" />
            <figcaption className="hub-inline-figure__cap">Pescado de mercado: un clásico en cartas gijonesas.</figcaption>
          </figure>
          <h2>Comparativa rápida: tipo de restaurante</h2>
          <table>
            <thead>
              <tr>
                <th>Estilo</th>
                <th>Ideal si…</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sidrería</td>
                <td>Quieres ritual de sidra, ambiente informal y carta asturiana clásica.</td>
              </tr>
              <tr>
                <td>Marisquería / pescado</td>
                <td>Priorizas producto de lonja y maridaje con vino blanco o espumoso.</td>
              </tr>
              <tr>
                <td>Cachopo / raciones</td>
                <td>Buscas plato único contundente tras mucho paseo.</td>
              </tr>
              <tr>
                <td>Alta cocina</td>
                <td>Celebras o quieres menú degustación con vistas.</td>
              </tr>
            </tbody>
          </table>
          <p>
            Guía detallada en <Link to="/donde-comer-gijon">dónde comer en Gijón</Link>. Evita tropiezos con{" "}
            <Link to="/errores-visitar-gijon">errores comunes al visitar la ciudad</Link>.
          </p>
        </div>
      }
    />
  );
}
