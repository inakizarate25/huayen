// src/pages/Inicio.jsx
import Hero from "../components/Hero";
import Nosotros from "../components/Nosotros";
import Experiencias from "../components/Experiencias";
import Tienda from "../components/Tienda";
import Contacto from "../pages/Contacto";
import "../styles/huayen.css";

export default function Inicio() {
  return (
    <>
      <Hero />
      <Nosotros />
      <Experiencias />
      <Tienda />
      <Contacto />
    </>
  );
}
