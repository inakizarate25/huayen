// src/components/Experiencias.jsx
import "./experiencias.css";
import chinookDesktop from "../../assets/images/chinook_3.png";
import chinookMobile from "../../assets/images/exp_chinook_m.png";
import esquinaDesktop from "../../assets/images/exp_esquina.png";
import esquinaMobile from "../../assets/images/exp_esquina_m.png";
import { Analytics } from "@vercel/analytics/react";

export default function Experiencias() {
  return (
    <section id="experiencias" className="experiencias-wrapper">
      <h2 className="experiencias-titulo">Experiencias</h2>
      <p className="experiencias-descripcion">
        Excursiones. Clínicas. Consejos.
      </p>
      {/* experiencia chinook */}
      <div className="experiencias-contenido">
        <a href="/experiencia-chinook">
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
      {/* experiencia esquina */}
      <div className="experiencias-contenido">
        <a href="/experiencia-esquina">
          <picture>
            <source media="(max-width: 768px)" srcSet={esquinaMobile} />
            <img
              className="experiencias-img"
              src={esquinaDesktop}
              alt="Chinook"
            />
          </picture>
          <Analytics />
        </a>
      </div>
    </section>
  );
}
