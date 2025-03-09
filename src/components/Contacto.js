import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contacto.css';

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'TurismoGijon', 
      'template_392y8lg',
      form.current,
      'Z85KrFj1DAiIepBSt'
    )
    .then(() => {
        alert("¡Mensaje enviado correctamente!");
        form.current.reset();
    })
    .catch(() => {
        alert("Se ha producido un error al enviar el mensaje.");
    });
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <p>Si tienes alguna consulta o deseas colaborar con nosotros, envíanos un mensaje y te responderemos lo antes posible.</p>
      <form ref={form} onSubmit={sendEmail} className="contacto-form">
        <label>
          Asunto:
          <input type="text" name="asunto" required />
        </label>
        <label>
          Correo Electrónico:
          <input type="email" name="email" required />
        </label>
        <label>
          Mensaje:
          <textarea name="mensaje" required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
      <p className="contacto-nota">
        Al enviar el formulario, aceptas nuestra <a href="/politica-privacidad">Política de Privacidad</a>.
      </p>
    </div>
  );
};

export default Contacto;
