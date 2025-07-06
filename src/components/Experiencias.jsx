// src/components/Experiencias.jsx
import "../styles/huayen.css";
import chinook from "../assets/images/chinook_3.png";
import { Analytics } from "@vercel/analytics/react";

export default function Experiencias() {
  return (
    <section id="experiencias" className="experiencias-wrapper">
      <h2 className="experiencias-titulo">Experiencias</h2>
      <p className="experiencias-descripcion">
        Excursiones y clínicas relacionadas a la pesca con mosca
      </p>
      <div className="experiencias-contenido">
        <a href="/experiencia">
          <img className="experiencias-img" src={chinook} alt="Chinook" />
          <Analytics />
        </a>
      </div>
    </section>
  );
}
