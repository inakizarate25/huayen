// src/components/Experiencias.jsx
import "./experiencias.css";
import chinookDesktop from "../../assets/images/chinook_3.png";
import chinookMobile from "../../assets/images/exp_chinook_m.png";
import esquinaDesktop from "../../assets/images/exp_esquina.png";
import esquinaMobile from "../../assets/images/exp_esquina_m.png";

function ExpCard({ imagenMobile, imagenDesktop, alt, link }) {
  return (
    <div className="experiencias-contenido">
      <a href={link}>
        <picture>
          <source media="(min-width: 768px)" srcSet={imagenDesktop} />
          <img src={imagenMobile} alt={alt} className="experiencias-img" />
        </picture>
      </a>
    </div>
  );
}

export default function Experiencias() {
  return (
    <section id="experiencias" className="experiencias-wrapper">
      <h2 className="experiencias-titulo">Experiencias</h2>
      <p className="experiencias-descripcion">
        Excursiones. Clínicas. Consejos.
      </p>
      {/* experiencia chinook */}
      <ExpCard
        imagenMobile={chinookMobile}
        imagenDesktop={chinookDesktop}
        alt="chinook"
        link="/experiencia-chinook"
      />

      {/* experiencia esquina */}
      <ExpCard
        imagenMobile={esquinaMobile}
        imagenDesktop={esquinaDesktop}
        alt="esquina"
        link="/experiencia-esquina"
      />
    </section>
  );
}
