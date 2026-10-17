import React from "react";
import SEO from "../components/seo/SEO";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import PageHero from "../components/layout/PageHero";
import { Link } from "react-router-dom";
import { absoluteUrl, CONTACT_EMAIL, SITE_NAME, SITE_URL } from "../config/site";
import { PAGE_HERO } from "../images/assets";
import "../styles/LegalPage.css";

export default function AvisoLegalPage() {
  const hero = PAGE_HERO.avisoLegal;

  return (
    <main className="page legal-page">
      <SEO
        title="Aviso legal"
        description="Aviso legal de Turismo Gijón: titularidad, condiciones de uso, propiedad intelectual y limitación de responsabilidad."
        canonicalPath="/aviso-legal"
        ogImage={absoluteUrl(hero.src)}
      />
      <div className="legal-inner">
        <Breadcrumbs trail={[{ label: "Aviso legal" }]} />
        <PageHero src={hero.src} alt={hero.alt} priority />
        <article className="legal-article prose">
          <h1>Aviso legal</h1>
          <p className="legal-lead">
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de
            Comercio Electrónico (LSSI-CE), se pone a disposición de los usuarios la siguiente información legal relativa
            al sitio web {SITE_URL}. Este aviso se completa con la{" "}
            <Link to="/politica-privacidad">Política de privacidad</Link> y la{" "}
            <Link to="/politica-cookies">Política de cookies</Link>.
          </p>

          <h2>1. Datos identificativos del titular</h2>
          <ul className="legal-list">
            <li>
              <strong>Denominación del sitio:</strong> {SITE_NAME}
            </li>
            <li>
              <strong>Titular:</strong> persona física (particular)
            </li>
            <li>
              <strong>URL:</strong> {SITE_URL}
            </li>
            <li>
              <strong>Correo electrónico:</strong>{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <strong>Formulario de contacto:</strong> <Link to="/contacto">/contacto</Link>
            </li>
          </ul>

          <h2>2. Objeto del sitio</h2>
          <p>
            {SITE_NAME} es una guía informativa sobre turismo en Gijón (Asturias) y su entorno: itinerarios, playas,
            gastronomía, rutas, mapa orientativo y contenidos relacionados. La información tiene carácter general y no
            constituye asesoramiento profesional, oferta vinculante ni reserva de servicios turísticos.
          </p>

          <h2>3. Condiciones de uso</h2>
          <p>
            El acceso y la navegación por el sitio atribuyen la condición de usuario e implican la aceptación de este
            Aviso legal y de las políticas asociadas. El usuario se compromete a:
          </p>
          <ul className="legal-list">
            <li>utilizar el sitio de forma lícita, diligente y respetuosa con la normativa vigente;</li>
            <li>no realizar acciones que dañen, interrumpan o sobrecarguen el servicio;</li>
            <li>
              no emplear los contenidos con fines ilícitos, engañosos o que vulneren derechos de terceros;
            </li>
            <li>
              facilitar datos veraces en el formulario de contacto y no incluir contenidos ilícitos en los mensajes.
            </li>
          </ul>
          <p>
            El titular podrá limitar, suspender o modificar el acceso al sitio cuando sea necesario por motivos técnicos,
            de seguridad o legales.
          </p>

          <h2>4. Propiedad intelectual e industrial</h2>
          <p>
            Salvo indicación en contrario, los textos originales, estructura, diseño, logotipo y demás elementos
            elaborados para {SITE_NAME} están titularidad del responsable del sitio o se utilizan con la autorización
            correspondiente. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin
            autorización previa, salvo los usos permitidos por la ley (por ejemplo, citas lícitas).
          </p>
          <p>
            Las fotografías, iconos o recursos de terceros se emplean conforme a sus respectivas licencias o derechos. Las
            marcas y denominaciones de terceros que puedan aparecer pertenecen a sus titulares.
          </p>

          <h2>5. Enlaces y contenidos de terceros</h2>
          <p>
            El sitio puede incluir enlaces a páginas o servicios de terceros (museos, transporte, mapas, redes,
            proveedores tecnológicos, etc.). El titular no controla ni asume responsabilidad por el contenido, políticas
            o disponibilidad de dichos sitios. La inclusión de un enlace no implica recomendación ni asociación, salvo
            que se indique expresamente.
          </p>

          <h2>6. Exactitud de la información y limitación de responsabilidad</h2>
          <p>
            Se procura ofrecer información útil y actualizada, pero horarios, precios, normas de acceso, estado de
            playas, eventos o condiciones de establecimientos pueden cambiar sin previo aviso. El usuario debe verificar
            los datos críticos en fuentes oficiales o directamente con el establecimiento antes de desplazarse o
            contratar servicios.
          </p>
          <p>En la medida permitida por la ley aplicable, el titular no será responsable de:</p>
          <ul className="legal-list">
            <li>decisiones adoptadas únicamente sobre la base de la información del sitio;</li>
            <li>interrupciones, errores técnicos, virus o fallos ajenos a un control razonable;</li>
            <li>contenidos o daños derivados de sitios de terceros enlazados;</li>
            <li>usos indebidos del sitio por parte del usuario.</li>
          </ul>

          <h2>7. Publicidad y afiliación</h2>
          <p>
            El sitio está preparado para mostrar publicidad de terceros mediante Google AdSense u otros formatos
            claramente identificados como publicidad. En la fecha de este aviso, la activación efectiva de anuncios
            depende de la configuración y, en su caso, de la aprobación de la cuenta del editor; no se garantiza la
            presencia de anuncios en todas las páginas. La relación con anunciantes o partners no altera la obligación
            del usuario de contrastar información práctica antes de viajar. El tratamiento de datos asociado a la
            publicidad se describe en la Política de privacidad y en la Política de cookies.
          </p>

          <h2>8. Protección de datos</h2>
          <p>
            El tratamiento de datos personales se regula en la <Link to="/politica-privacidad">Política de privacidad</Link>
            . El uso de cookies y tecnologías similares se describe en la{" "}
            <Link to="/politica-cookies">Política de cookies</Link>.
          </p>

          <h2>9. Legislación aplicable y jurisdicción</h2>
          <p>
            Este Aviso legal se rige por la legislación española. Para la resolución de controversias, serán competentes
            los juzgados y tribunales que correspondan conforme a la normativa vigente y, cuando proceda, a las normas de
            protección de consumidores y usuarios.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Para cuestiones relacionadas con este aviso o con el sitio web:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> o el formulario de{" "}
            <Link to="/contacto">Contacto</Link>.
          </p>

          <p className="legal-meta">Última actualización: 17 de octubre de 2026.</p>
        </article>
      </div>
    </main>
  );
}
