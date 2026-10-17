import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import PageHero from "../components/layout/PageHero";
import AdSlot from "../components/ads/AdSlot";
import { absoluteUrl } from "../config/site";
import { INLINE_IMAGES, PAGE_HERO } from "../images/assets";
import "../styles/HubPage.css";

export default function RutasPage() {
  const hero = PAGE_HERO.rutas;
  const extraImg = INLINE_IMAGES.rutasExtra;

  return (
    <main className="page hub-page">
      <SEO
        title="Rutas en Gijón a pie: paseo marítimo, Cimavilla y senda costera"
        metaDescription="Rutas por Gijón: paseo de San Lorenzo, subida a Cimavilla y Cerro de Santa Catalina, conexión con sendas hacia pedanías. Consejos de calzado y tiempo."
        canonicalPath="/rutas-en-gijon"
        keywords={["rutas Gijón", "senderismo urbano Gijón", "paseo San Lorenzo", "Cimavilla"]}
        ogImage={absoluteUrl(hero.src)}
      />
      <div className="hub-inner prose">
        <Breadcrumbs trail={[{ label: "Rutas en Gijón" }]} />
        <PageHero src={hero.src} alt={hero.alt} priority />
        <header className="hub-header">
          <h1>Rutas en Gijón</h1>
          <p className="hub-lead">
            Caminar es la mejor forma de entender el <strong>turismo Gijón</strong>: el paseo marítimo une playas y
            puerto, Cimavilla añade cuestas con historia, y el cerro cierra el circuito con vistas.
          </p>
        </header>

        <figure className="hub-inline-figure">
          <img src={extraImg.src} alt={extraImg.alt} width={960} height={540} loading="lazy" decoding="async" />
          <figcaption className="hub-inline-figure__cap">
            Si el tiempo arruina el paseo, enlaza con <Link to="/gijon-cuando-llueve">planes bajo techo</Link>: cine,
            museos o mercado cubierto.
          </figcaption>
        </figure>

        <h2>Ruta clásica urbana (2–3 horas, sin prisa)</h2>
        <ol>
          <li>
            Inicio en la <strong>Playa de San Lorenzo</strong>: recorre el paseo Felgueroso de punta a punta según tu
            energía.
          </li>
          <li>
            Sube a <strong>Cimavilla</strong> por la Cuesta del Cholo o mecánico equivalente; callejea hacia la Plaza de
            Jovellanos.
          </li>
          <li>
            Continúa al <strong>Cerro de Santa Catalina</strong> y al <strong>Elogio del Horizonte</strong>; descansa en
            bancos del parque.
          </li>
          <li>Baja hacia el <strong>puerto deportivo</strong> y cierra con bebida o cena en terraza si el tiempo ayuda.</li>
        </ol>

        <h2>Extensión hacia el litoral del concejo</h2>
        <p>
          Si tienes coche y calzado adecuado, puedes enlazar tramos de senda costera hacia pedanías (consulta mapas
          oficiales y estado del terreno). El desnivel y el viento pueden cambiar la dificultad en minutos; lleva agua y
          capa. No te acerques a acantilados sin sendero marcado.
        </p>

        <h2>Rutas culturales alternando con verde</h2>
        <p>
          Combina <strong>Universidad Laboral</strong> con <strong>Jardín Botánico</strong> en una mañana: son distancias
          que suelen requerir transporte urbano entre ellas, pero el contraste arquitectura–naturaleza vale el salto.
          Más ideas en <Link to="/gijon-en-2-dias">Gijón en 2 días</Link>.
        </p>

        <h2>Mapa y más lecturas</h2>
        <p>
          Usa el <Link to="/mapa-turistico-gijon">mapa turístico interactivo</Link> para ubicar puntos. Profundiza en{" "}
          <Link to="/mejores-playas-gijon">playas</Link>, <Link to="/que-ver-gijon-gratis">planes gratis</Link> y{" "}
          <Link to="/lugares-secretos-gijon">rincones menos conocidos</Link>.
        </p>

        <AdSlot variant="inline" unitKey="rutasMid" />
      </div>
    </main>
  );
}
