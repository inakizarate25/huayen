// src/pages/Inicio.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Nosotros from "../components/Nosotros";
import Experiencias from "../components/Experiencias";
import Tienda from "../components/Tienda";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Contacto from "./Contacto";

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
      <Navbar />
      <Hero />
      <Nosotros />
      <Experiencias />
      <Tienda />
      <Contacto />
      <ScrollToTopButton />
    </>
  );
}
