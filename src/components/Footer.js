import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-explora">
                    <h4>Explora</h4>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/ver">Ver</a></li>
                        <li><a href="/actividades">Actividades</a></li>
                        <li><a href="/comer">Comer</a></li>
                        <li><a href="/moverse">Moverse</a></li>
                        <li><a href="/planes">Planes</a></li>
                    </ul>
                </div>
                <div className="footer-info">
                    <h4>Información</h4>
                    <p>
                        Esta página web es una fuente de información sobre Gijón. 
                        No pertenece a ningún organismo oficial y su propósito es únicamente informativo. La información proporcionada 
                        es de carácter general y se recomienda siempre consultar fuentes oficiales para obtener datos actualizados.
                    </p>
                    <p>
                        Todos los contenidos presentados en este sitio están sujetos a derechos de autor y no deben ser reproducidos sin autorización.
                    </p>
                </div>
                <div className="footer-nosotros">
                    <h4>Nosotros</h4>
                    <div className="footer-privacy">
                        <a href="/politica-privacidad">Política de Privacidad</a>
                    </div>
                    <div className="footer-contacto">
                        <a href="/contacto">Contacto</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
