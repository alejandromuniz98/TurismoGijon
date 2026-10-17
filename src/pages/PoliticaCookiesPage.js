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
              <strong>Publicidad o personalización:</strong> cookies y tecnologías usadas para seleccionar, mostrar,
              personalizar o medir anuncios (p. ej. Google AdSense y proveedores de tecnología publicitaria). Pueden
              servir anuncios personalizados o no personalizados según el consentimiento prestado. En el EEE, Reino
              Unido y Suiza, Google exige una CMP certificada e integrada con el TCF de IAB Europe para anuncios
              personalizados.
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
                <tr>
                  <td>Google AdSense / proveedores publicitarios (Google y ATPs)</td>
                  <td>Publicidad (opcional; solo si está activada)</td>
                  <td>
                    Selección, personalización y medición de anuncios. El script de AdSense del editor
                    (<code>ca-pub-7727728148044259</code>) se incluye en el &lt;head&gt; del sitio. Los bloques de
                    anuncio concretos solo se muestran cuando hay unidades configuradas. El consentimiento publicitario
                    en el EEE/UK/CH debe gestionarse con Google Privacy &amp; Messaging u otra CMP certificada, no con el
                    banner de solo analítica
                  </td>
                  <td>Según Google y cada proveedor (pueden ser persistentes)</td>
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
            Al cargar servicios de terceros (analítica de Google, publicidad AdSense cuando esté activa, cartografía u
            otros recursos externos), dichos terceros pueden establecer cookies o recibir información técnica (dirección
            IP, tipo de navegador, etc.). Consulte las políticas de{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              privacidad de Google
            </a>{" "}
            y de{" "}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
              tecnologías publicitarias de Google
            </a>
            , así como la información de cada proveedor mostrada en la CMP cuando corresponda.
          </p>

          <h2>5. Publicidad personalizada y no personalizada</h2>
          <p>
            Cuando AdSense esté activo, Google podrá mostrar anuncios personalizados o no personalizados en función del
            consentimiento y de la configuración del editor. Los anuncios no personalizados siguen pudiendo usar
            información contextual (p. ej. contenido de la página) y datos técnicos limitados. Rechazar la publicidad no
            esencial no debe impedirle navegar por el contenido editorial del sitio.
          </p>

          <h2>6. Cómo gestionar o eliminar cookies</h2>
          <p>
            Puede configurar su navegador para aceptar, rechazar o eliminar cookies. Las instrucciones habituales están
            disponibles en la ayuda de Chrome, Firefox, Safari, Edge u otros. Tenga en cuenta que bloquear cookies
            técnicas puede afectar al funcionamiento del sitio; bloquear cookies analíticas puede limitar la capacidad
            del responsable para medir el uso del servicio.
          </p>
          <p>
            También puede utilizar herramientas de exclusión o configuración ofrecidas por Google respecto a la
            analítica y a los anuncios personalizados, cuando estén disponibles.
          </p>

          <h2>7. Preferencias en este sitio</h2>
          <p>
            <strong>Analítica:</strong> al visitar la web puede aceptar o rechazar las cookies de analítica mediante el
            banner de preferencias. Si elige solo las necesarias, no se inicializará Firebase Analytics ni se enviarán
            eventos de medición. Puede revisar o cambiar su elección con <strong>Gestionar cookies</strong> en el pie de
            página. La preferencia se guarda en el navegador (clave <code>tg_cookie_consent</code>). Ese banner{" "}
            <strong>no</strong> es una CMP certificada para publicidad ni sustituye el TCF de IAB Europe.
          </p>
          <p>
            <strong>Publicidad:</strong> cuando el titular active Google AdSense y publique el mensaje de reglamentos
            europeos en Privacy &amp; Messaging (u otra CMP certificada), el consentimiento publicitario se solicitará
            por ese sistema. Retirar o modificar ese consentimiento debe reflejarse en el comportamiento de las etiquetas
            publicitarias conforme a la CMP elegida.
          </p>

          <h2>8. Actualizaciones</h2>
          <p>
            Esta política se revisará cuando cambien las cookies empleadas, los proveedores o la normativa aplicable. La
            fecha de la última actualización figura al final de esta página.
          </p>
          <p>
            Para cualquier duda: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ·{" "}
            <Link to="/contacto">Contacto</Link>.
          </p>

          <p className="legal-meta">Última actualización: 17 de octubre de 2026.</p>
        </article>
      </div>
    </main>
  );
}
