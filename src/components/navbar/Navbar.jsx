import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/images/marca_logo.png";

function Navbar() {
  const navRef = useRef();
  const [navBtnActive, setNavBtnActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setNavBtnActive((prev) => !prev);
  };

  const closeNavbar = (id) => {
    navRef.current.classList.remove("responsive_nav");
    setNavBtnActive(false);
    if (id) {
      if (location.pathname === "/") {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(`/?scrollTo=${id}`);
      }
    }
  };

  return (
    <header className="navbar-hy">
      <a href="/" className="logo" onClick={() => closeNavbar()}>
        <img src={logo} alt="Huayen Logo" />
      </a>
      <nav ref={navRef}>
        <button onClick={() => closeNavbar("nosotros")} className="nav-link">
          Nosotros
        </button>
        <button
          onClick={() => closeNavbar("experiencias")}
          className="nav-link"
        >
          Experiencias
        </button>
        <a
          href="https://www.huayenflyfishing.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          onClick={() => closeNavbar()}
        >
          Tienda
        </a>
        <button onClick={() => closeNavbar("contacto")} className="nav-link">
          Contacto
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        {navBtnActive ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
