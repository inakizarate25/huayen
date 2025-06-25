// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "../styles/huayen.css";
import logo from "../assets/images/marca_logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo-link">
          <img src={logo} alt="Huayen Logo" className="navbar-logo" />
        </a>
        <div className="navbar-links">
          <a href="#nosotros" className="navbar-link">
            Nosotros
          </a>
          <a href="#experiencias" className="navbar-link">
            Experiencias
          </a>
          <Link
            to="https://www.huayenflyfishing.com.ar"
            className="navbar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tienda
          </Link>
          <a href="#contacto" className="navbar-link">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
