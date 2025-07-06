// src/pages/Inicio.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/hero/Hero";
import Nosotros from "../components/nosotros/Nosotros";
import Experiencias from "../components/experiencias/Experiencias";
import Tienda from "../components/tienda/Tienda";
import ScrollToTopButton from "../components/scrolltotop/ScrollToTopButton";
import Contacto from "../components/contacto/Contacto";

export default function Inicio() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("scrollTo");
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300); // Espera para asegurar que la página cargó
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Nosotros />
      <Experiencias />
      <Tienda />
      <Contacto />
      <ScrollToTopButton />
    </>
  );
}
