import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import SEO from "./seo/SEO";
import Breadcrumbs from "./layout/Breadcrumbs";
import PageHero from "./layout/PageHero";
import { absoluteUrl, CONTACT_EMAIL } from "../config/site";
import { PAGE_HERO } from "../images/assets";
import "../styles/Contacto.css";

const Contacto = () => {
  const form = useRef();
  const hero = PAGE_HERO.contacto;

  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS: serviceID y templateID deben ser los IDs del panel (p. ej. service_xxx),
    // no el nombre visible. Los name= del form deben coincidir con las variables {{...}} del template.
    emailjs
      .sendForm("TurismoGijon", "template_392y8lg", form.current, {
        publicKey: "l2OPTNkvT07aJy3Sd",
      })
      .then(() => {
        alert("¡Mensaje enviado correctamente!");
        form.current.reset();
      })
      .catch((error) => {
        const detail = error?.text || error?.message || "Error desconocido";
        console.error("EmailJS:", error);
        alert(`No se pudo enviar el mensaje.\n\nDetalle: ${detail}`);
      });
  };

  return (
    <main className="page contacto-page">
      <SEO
        title="Contacto"
        description="Contacta con Turismo Gijón para consultas, sugerencias o colaboraciones sobre la guía de viaje."
        canonicalPath="/contacto"
        appendSiteName
        ogImage={absoluteUrl(hero.src)}
      />
      <div className="contacto-inner">
        <Breadcrumbs trail={[{ label: "Contacto" }]} />
        <PageHero src={hero.src} alt={hero.alt} priority />
        <h1>Contacto</h1>
        <p className="contacto-lead">
          Si tienes alguna consulta o deseas colaborar con nosotros, envíanos un mensaje y te responderemos lo antes
          posible. También puedes escribir a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
        <form ref={form} onSubmit={sendEmail} className="contacto-form">
          <label>
            Asunto:
            <input type="text" name="asunto" required autoComplete="off" />
          </label>
          <label>
            Correo electrónico:
            <input type="email" name="email" required autoComplete="email" />
          </label>
          <label>
            Mensaje:
            <textarea name="mensaje" required rows={6} />
          </label>
          <button type="submit">Enviar</button>
        </form>
        <p className="contacto-nota">
          Al enviar el formulario, aceptas nuestra <Link to="/politica-privacidad">Política de privacidad</Link> y la{" "}
          <Link to="/politica-cookies">Política de cookies</Link>. También puedes consultar el{" "}
          <Link to="/aviso-legal">Aviso legal</Link>.
        </p>
      </div>
    </main>
  );
};

export default Contacto;
