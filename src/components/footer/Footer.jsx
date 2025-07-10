import { useLocation, useNavigate } from "react-router-dom";
import sello from "../../assets/images/marca_sello.webp";
import "./footer.css";

export default function Footer() {
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
    <footer className="footer-wrapper">
      <div className="footer-container">
        <a className="footer-logo" href="/">
          <img src={sello} alt="Huayen Sello" />
        </a>
        <div className="footer-links">
          <button onClick={() => handleScrollTo("nosotros")} id="footer-link">
            Nosotros
          </button>
          <a
            href="http://www.huayenflyfishing.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-link"
          >
            Tienda
          </a>
          <button onClick={() => handleScrollTo("contacto")} id="footer-link">
            Contacto
          </button>
        </div>
      </div>
    </footer>
  );
}
