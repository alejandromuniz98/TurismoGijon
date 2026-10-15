import React from "react";
import SEO from "../components/seo/SEO";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import PageHero from "../components/layout/PageHero";
import { Link } from "react-router-dom";
import { absoluteUrl, CONTACT_EMAIL, SITE_NAME, SITE_URL } from "../config/site";
import { PAGE_HERO } from "../images/assets";
import "../styles/LegalPage.css";

export default function PoliticaCookiesPage() {
  const hero = PAGE_HERO.cookies;

  return (
    <main className="page legal-page">
      <SEO
        title="Política de cookies"
        description="Información sobre cookies y tecnologías similares en Turismo Gijón, conforme a la normativa española y europea."
        canonicalPath="/politica-cookies"
        ogImage={absoluteUrl(hero.src)}
      />
      <div className="legal-inner">
        <Breadcrumbs trail={[{ label: "Política de cookies" }]} />
        <PageHero src={hero.src} alt={hero.alt} priority />
        <article className="legal-article prose">
          <h1>Política de cookies</h1>
          <p className="legal-lead">
            Esta Política de cookies explica el uso de cookies y tecnologías similares en el sitio {SITE_URL} (
            {SITE_NAME}), de conformidad con la Ley 34/2002 (LSSI) y la normativa europea de privacidad. Complementa la{" "}
            <Link to="/politica-privacidad">Política de privacidad</Link> y el{" "}
            <Link to="/aviso-legal">Aviso legal</Link>.
          </p>

          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos que un sitio web puede almacenar en el dispositivo del usuario. Permiten
            recordar preferencias, mantener funciones técnicas o obtener información estadística sobre el uso del sitio.
            También pueden emplearse tecnologías afines (almacenamiento local, píxeles o identificadores similares).
          </p>

          <h2>2. Tipos de cookies según su finalidad</h2>
          <ul className="legal-list">
            <li>
              <strong>Técnicas o necesarias:</strong> permiten la navegación y el funcionamiento básico del sitio (por
              ejemplo, carga de recursos o preferencias estrictamente técnicas).
            </li>
            <li>
              <strong>Analíticas o de medición:</strong> permiten conocer de forma agregada cómo se utiliza el sitio
              (páginas visitadas, eventos, rendimiento).
            </li>
            <li>
              <strong>Publicidad o personalización:</strong> si en el futuro se incorporan anuncios de terceros, estos
              podrían emplear cookies propias. En tal caso se actualizará esta política y, cuando proceda, el mecanismo
              de consentimiento.
            </li>
          </ul>

          <h2>3. Cookies y tecnologías utilizadas en este sitio</h2>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead>
                <tr>
                  <th scope="col">Nombre / proveedor</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Finalidad</th>
                  <th scope="col">Duración orientativa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Firebase Analytics / Google Analytics (Google)</td>
                  <td>Analítica (opcional)</td>
                  <td>
                    Medición de visitas y rutas de forma agregada; solo se activa si el usuario acepta analítica en el
                    banner o en «Gestionar cookies»
                  </td>
                  <td>Según configuración de Google (puede incluir cookies persistentes)</td>
                </tr>
                <tr>
                  <td>Firebase Hosting / infraestructura Google</td>
                  <td>Técnica / servicio</td>
                  <td>Entrega del sitio y seguridad de la infraestructura de alojamiento</td>
                  <td>Sesión o según el servicio</td>
                </tr>
                <tr>
                  <td>Almacenamiento local del navegador</td>
                  <td>Técnica</td>
                  <td>
                    Funcionamiento de la SPA, caché del navegador y preferencia de cookies (
                    <code>tg_cookie_consent</code>)
                  </td>
                  <td>Variable</td>
                </tr>
                <tr>
                  <td>Teselas de mapa (OpenStreetMap / OSM France)</td>
                  <td>Técnica de terceros</td>
                  <td>Carga de la cartografía del mapa turístico; el proveedor puede registrar peticiones técnicas</td>
                  <td>Según el proveedor de teselas</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            El formulario de contacto se gestiona mediante <strong>EmailJS</strong>. Dicho servicio procesa los datos del
            mensaje conforme a su política; no implica necesariamente el depósito de cookies publicitarias en este sitio,
            pero sí un tratamiento de datos personales descrito en la Política de privacidad.
          </p>

          <h2>4. Cookies de terceros</h2>
          <p>
            Al cargar servicios de terceros (analítica de Google, cartografía, tipografías o recursos externos), dichos
            terceros pueden establecer cookies o recibir información técnica (dirección IP, tipo de navegador, etc.). Le
            recomendamos consultar las políticas de privacidad de esos proveedores.
          </p>

          <h2>5. Cómo gestionar o eliminar cookies</h2>
          <p>
            Puede configurar su navegador para aceptar, rechazar o eliminar cookies. Las instrucciones habituales están
            disponibles en la ayuda de Chrome, Firefox, Safari, Edge u otros. Tenga en cuenta que bloquear cookies
            técnicas puede afectar al funcionamiento del sitio; bloquear cookies analíticas puede limitar la capacidad
            del responsable para medir el uso del servicio.
          </p>
          <p>
            También puede utilizar herramientas de exclusión o configuración ofrecidas por Google respecto a la
            analítica, cuando estén disponibles.
          </p>

          <h2>6. Preferencias en este sitio</h2>
          <p>
            Al visitar la web puede aceptar o rechazar las cookies de analítica mediante el banner de preferencias. Si
            elige solo las necesarias, no se inicializará Firebase Analytics ni se enviarán eventos de medición. Puede
            revisar o cambiar su elección en cualquier momento con el enlace <strong>Gestionar cookies</strong> del pie
            de página. La preferencia se guarda en el navegador (almacenamiento local, clave{" "}
            <code>tg_cookie_consent</code>).
          </p>

          <h2>7. Actualizaciones</h2>
          <p>
            Esta política se revisará cuando cambien las cookies empleadas, los proveedores o la normativa aplicable. La
            fecha de la última actualización figura al final de esta página.
          </p>
          <p>
            Para cualquier duda: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ·{" "}
            <Link to="/contacto">Contacto</Link>.
          </p>

          <p className="legal-meta">Última actualización: 14 de octubre de 2026.</p>
        </article>
      </div>
    </main>
  );
}
