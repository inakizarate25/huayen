// src/components/Experiencias.jsx
import "./experiencias.css";
import chinookDesktop from "../../assets/images/chinook_3.png";
import chinookMobile from "../../assets/images/chinook_m.png";

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
          <picture>
            <source media="(max-width: 768px)" srcSet={chinookMobile} />
            <img
              className="experiencias-img"
              src={chinookDesktop}
              alt="Chinook"
            />
          </picture>
          <Analytics />
        </a>
      </div>
    </section>
  );
}
