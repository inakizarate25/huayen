// src/components/Footer.jsx
import "../styles/huayen.css";
import sello from "../assets/images/marca_sello.png";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <a className="footer-logo" href="/">
          <img src={sello} alt="Huayen Sello" />
        </a>
        <nav className="footer-links">
          <a href="#nosotros" className="footer-link">
            Nosotros
          </a>
          <a href="http://www.huayenflyfishing.com.ar" className="footer-link">
            Tienda
          </a>
          <a href="#contacto" className="footer-link">
            Contacto
          </a>
        </nav>
      </div>
    </footer>
  );
}
