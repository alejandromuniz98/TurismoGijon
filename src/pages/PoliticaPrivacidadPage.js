import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import PageHero from "../components/layout/PageHero";
import { absoluteUrl, CONTACT_EMAIL, SITE_NAME, SITE_URL } from "../config/site";
import { PAGE_HERO } from "../images/assets";
import "../styles/LegalPage.css";

export default function PoliticaPrivacidadPage() {
  const hero = PAGE_HERO.privacidad;

  return (
    <main className="page legal-page">
      <SEO
        title="Política de privacidad"
        description="Información sobre el tratamiento de datos personales en Turismo Gijón conforme al RGPD y la LOPDGDD."
        canonicalPath="/politica-privacidad"
        ogImage={absoluteUrl(hero.src)}
      />
      <div className="legal-inner">
        <Breadcrumbs trail={[{ label: "Política de privacidad" }]} />
        <PageHero src={hero.src} alt={hero.alt} priority />
        <article className="legal-article prose">
          <h1>Política de privacidad</h1>
          <p className="legal-lead">
            La presente Política de privacidad describe el tratamiento de datos personales realizado a través del sitio
            web <strong>{SITE_URL}</strong> ({SITE_NAME}), de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley
            Orgánica 3/2018 (LOPDGDD). Para cookies y tecnologías similares, consulte la{" "}
            <Link to="/politica-cookies">Política de cookies</Link>. El marco general de uso del sitio se recoge en el{" "}
            <Link to="/aviso-legal">Aviso legal</Link>.
          </p>

          <h2>1. Responsable del tratamiento</h2>
          <ul className="legal-list">
            <li>
              <strong>Identidad:</strong> titular particular de {SITE_NAME} (persona física).
            </li>
            <li>
              <strong>Sitio web:</strong> {SITE_URL}
            </li>
            <li>
              <strong>Correo de contacto:</strong>{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <strong>Formulario:</strong> <Link to="/contacto">Contacto</Link>
            </li>
          </ul>

          <h2>2. Datos que tratamos</h2>
          <p>En función del uso del sitio, pueden tratarse las siguientes categorías de datos:</p>
          <ul className="legal-list">
            <li>
              <strong>Datos de contacto voluntarios:</strong> asunto, dirección de correo electrónico y contenido del
              mensaje enviados mediante el formulario de contacto.
            </li>
            <li>
              <strong>Datos técnicos y de uso:</strong> identificadores de dispositivo o navegador, páginas visitadas,
              eventos de navegación y datos agregados de audiencia, cuando se emplean herramientas de analítica (véase
              apartado de encargados y la Política de cookies).
            </li>
            <li>
              <strong>Datos relacionados con publicidad (cuando AdSense esté activo):</strong> identificadores y señales
              técnicas usadas por Google y, en su caso, por otros proveedores de tecnología publicitaria para seleccionar,
              personalizar o medir anuncios, conforme al consentimiento obtenido mediante una plataforma de gestión del
              consentimiento (CMP) certificada cuando resulte exigible.
            </li>
          </ul>
          <p>No solicitamos categorías especiales de datos (art. 9 RGPD). Le rogamos no incluya datos sensibles en el mensaje.</p>

          <h2>3. Finalidades y bases jurídicas</h2>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead>
                <tr>
                  <th scope="col">Finalidad</th>
                  <th scope="col">Base jurídica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Atender consultas, sugerencias o solicitudes de colaboración recibidas por formulario o correo</td>
                  <td>
                    Consentimiento del interesado (art. 6.1.a RGPD) e interés legítimo en responder a la comunicación
                    (art. 6.1.f RGPD)
                  </td>
                </tr>
                <tr>
                  <td>Medir el uso del sitio de forma agregada y mejorar contenidos y rendimiento (Firebase Analytics)</td>
                  <td>
                    Consentimiento del interesado para cookies/tecnologías de analítica no esenciales (art. 6.1.a RGPD),
                    solicitado mediante el banner del sitio; sin consentimiento no se inicializa la analítica
                  </td>
                </tr>
                <tr>
                  <td>
                    Mostrar anuncios a través de Google AdSense (cuando el servicio esté configurado y activo), incluida
                    la selección, medición y, en su caso, personalización de anuncios
                  </td>
                  <td>
                    Consentimiento del interesado (art. 6.1.a RGPD) obtenido, cuando proceda en el EEE, Reino Unido o
                    Suiza, mediante Google Privacy & Messaging u otra CMP certificada por Google e integrada con el TCF
                    de IAB Europe. El consentimiento de analítica del banner del sitio no equivale al consentimiento
                    publicitario
                  </td>
                </tr>
                <tr>
                  <td>Cumplir obligaciones legales aplicables al responsable</td>
                  <td>Cumplimiento de una obligación legal (art. 6.1.c RGPD)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            En la fecha de esta política, la publicidad de Google AdSense puede estar preparada técnicamente en el sitio
            pero <strong>no se activa ni se cargan scripts publicitarios</strong> hasta que el titular configure e active
            el servicio. No se realizan decisiones automatizadas ni elaboración de perfiles que produzcan efectos
            jurídicos o le afecten de modo significativo de forma similar (art. 22 RGPD), sin perjuicio de la
            personalización de anuncios por terceros cuando usted haya prestado el consentimiento publicitario
            correspondiente.
          </p>

          <h2>4. Plazos de conservación</h2>
          <ul className="legal-list">
            <li>
              <strong>Formulario / correo:</strong> durante el tiempo necesario para gestionar la solicitud y, en su
              caso, el plazo adicional exigido por posibles responsabilidades legales.
            </li>
            <li>
              <strong>Analítica:</strong> conforme a la configuración del proveedor y a los plazos técnicos de retención
              de la herramienta empleada.
            </li>
            <li>
              <strong>Publicidad (AdSense, cuando esté activo):</strong> conforme a las políticas y plazos de Google y
              de los proveedores de tecnología publicitaria participantes.
            </li>
          </ul>
          <p>Cuando los datos dejen de ser necesarios, se suprimirán o anonimizarán de forma segura.</p>

          <h2>5. Destinatarios y encargados del tratamiento</h2>
          <p>
            No vendemos ni cedemos datos personales a terceros para fines comerciales propios. Sí pueden acceder a datos,
            en calidad de encargados o proveedores de servicios, las siguientes categorías:
          </p>
          <ul className="legal-list">
            <li>
              <strong>Hosting / infraestructura:</strong> Firebase Hosting (Google Ireland Limited / Google LLC), para
              el alojamiento del sitio.
            </li>
            <li>
              <strong>Analítica:</strong> Google Analytics a través de Firebase Analytics (Google), para estadísticas de
              uso. Política:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                policies.google.com/privacy
              </a>
              .
            </li>
            <li>
              <strong>Publicidad:</strong> Google AdSense (Google Ireland Limited / Google LLC) y, cuando se muestren
              anuncios, otros proveedores de tecnología publicitaria seleccionados en la configuración de Privacy &amp;
              Messaging del editor. Pueden utilizar cookies y datos para seleccionar, personalizar o medir anuncios.
              Información de Google:{" "}
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                policies.google.com/technologies/ads
              </a>
              .
            </li>
            <li>
              <strong>Envío del formulario de contacto:</strong> EmailJS, que procesa el mensaje para su entrega al
              responsable.
            </li>
            <li>
              <strong>Mapas:</strong> cartografía de OpenStreetMap / proveedores de teselas; el navegador puede
              solicitar recursos técnicos a dichos servicios al visualizar el mapa.
            </li>
          </ul>
          <p>
            Estos proveedores actúan conforme a sus propias condiciones y, cuando proceda, a acuerdos de encargo o
            cláusulas contractuales adecuadas. La lista concreta de proveedores publicitarios se determina en la
            configuración del editor en AdSense / Privacy &amp; Messaging y debe comunicarse a los usuarios a través de
            la CMP cuando los anuncios estén activos.
          </p>

          <h2>6. Transferencias internacionales</h2>
          <p>
            Algunos proveedores (en particular del grupo Google o servicios con infraestructura fuera del Espacio
            Económico Europeo) pueden implicar transferencias internacionales de datos. En tales casos se aplican las
            garantías previstas en el RGPD (decisión de adecuación, cláusulas contractuales tipo u otras medidas
            equivalentes).
          </p>

          <h2>7. Seguridad</h2>
          <p>
            Se aplican medidas técnicas y organizativas razonables para proteger los datos frente a acceso no
            autorizado, pérdida o alteración indebida, sin perjuicio de que ninguna transmisión por Internet es
            completamente segura.
          </p>

          <h2>8. Menores</h2>
          <p>
            El sitio tiene carácter informativo general y no está dirigido específicamente a menores de 14 años. Si tiene
            constancia de que un menor ha facilitado datos personales sin autorización, puede contactarnos para
            gestionar su eliminación.
          </p>

          <h2>9. Derechos de las personas interesadas</h2>
          <p>Puede ejercer, cuando procedan, los derechos de:</p>
          <ul className="legal-list">
            <li>acceso, rectificación y supresión;</li>
            <li>oposición y limitación del tratamiento;</li>
            <li>portabilidad;</li>
            <li>retirada del consentimiento en cualquier momento, sin efectos retroactivos.</li>
          </ul>
          <p>
            Para ejercerlos, escriba a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> indicando el derecho que
            desea ejercitar y aportando información suficiente para verificar su identidad. También puede presentar una
            reclamación ante la Agencia Española de Protección de Datos (
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
              www.aepd.es
            </a>
            ).
          </p>

          <h2>10. Gestión y retirada del consentimiento</h2>
          <ul className="legal-list">
            <li>
              <strong>Analítica:</strong> puede aceptar o rechazar Firebase Analytics en el banner de cookies y cambiar
              su elección en cualquier momento con <strong>Gestionar cookies</strong> en el pie de página.
            </li>
            <li>
              <strong>Publicidad (cuando AdSense esté activo):</strong> podrá gestionar o retirar el consentimiento
              publicitario mediante el mensaje de Google Privacy &amp; Messaging (u otra CMP certificada configurada) y,
              en su caso, con las herramientas de exclusión de anuncios personalizados de Google.
            </li>
          </ul>

          <h2>11. Actualizaciones</h2>
          <p>
            Esta política puede modificarse para reflejar cambios legales, técnicos o de servicio. La versión vigente
            será siempre la publicada en esta página, con indicación de la fecha de actualización.
          </p>
          <p>
            <strong>Aviso:</strong> esta página informa del tratamiento previsto. No constituye por sí sola garantía de
            cumplimiento legal ni de aprobación de AdSense; el titular debe completar la configuración externa y, si lo
            necesita, obtener asesoramiento especializado.
          </p>

          <p className="legal-meta">Última actualización: 17 de octubre de 2026.</p>
        </article>
      </div>
    </main>
  );
}
