// src/components/footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa6";
import "../styles/footer.css"; // Importa el CSS separado
import logo from "../assets/logo.png"; // Asegúrate de tener el logo en la ruta correcta

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          {/* Columna 1 */}
          <img src={logo} 
          alt="JorSti Tech Logo" 
          className="footer-logo" 
          /> 
          <p> Soluciones digitales accesibles y efectivas: 
            desarrollo web, asesorías ICETEX, envíos y servicios 
            financieros en un solo lugar. 
          </p> 
        </div>

        {/* Columna 2 */}
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/Services">Servicios</a></li>
            <li><a href="/process">Procesos</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/icetex">Icetex</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="footer-section">
          <h4>Servicios</h4>
          <ul>
            <li>Sitios Web Responsivos</li>
            <li>E-commerce</li>
            <li>Optimización Móvil</li>
            <li>SEO</li>
            <li>Mantenimiento Web</li>
          </ul>
        </div>

        {/* Columna 4 */}
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">© 2025 Inversiones JorSti Tech. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
