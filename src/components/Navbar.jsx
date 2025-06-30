// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "../styles/huayen.css";
import logo from "../assets/images/marca_logo.png";

import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/?scrollTo=${id}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo-link">
          <img src={logo} alt="Huayen Logo" className="navbar-logo" />
        </a>
        <div className="navbar-links">
          <button
            onClick={() => handleScrollTo("nosotros")}
            className="navbar-link"
          >
            Nosotros
          </button>
          <button
            onClick={() => handleScrollTo("experiencias")}
            className="navbar-link"
          >
            Experiencias
          </button>
          <a
            href="https://www.huayenflyfishing.com.ar"
            className="navbar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tienda
          </a>
          <button
            onClick={() => handleScrollTo("contacto")}
            className="navbar-link"
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
}
