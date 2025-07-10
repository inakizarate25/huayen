import "./expesquina.css";
import exp_esquina_titulo from "../../assets/images/exp_esquina_titulo.png";
import exp_esquina_full_desktop from "../../assets/images/exp_esquina_full.png";
import exp_esquina_full_mobile from "../../assets/images/exp_esquina_full_m.png";
import exp_esquina_base_desktop from "../../assets/images/exp_esquina_base.png";
import exp_esquina_base_mobile from "../../assets/images/exp_esquina_base_m.png";
import exp_esquina_foto_desktop from "../../assets/images/exp_esquina_foto.png";
import exp_esquina_foto_mobile from "../../assets/images/exp_esquina_foto_m.png";

export default function ExpEsquina() {
  return (
    <section className="experiencia-detalle-wrapper">
      <img
        className="experiencias-img"
        src={exp_esquina_titulo}
        alt="esquina"
      />
      <picture>
        <source media="(max-width: 768px)" srcSet={exp_esquina_full_mobile} />
        <img
          className="experiencias-img"
          src={exp_esquina_full_desktop}
          alt="esquina"
        />
      </picture>
      <picture>
        <source media="(max-width: 768px)" srcSet={exp_esquina_foto_mobile} />
        <img
          className="experiencias-img"
          src={exp_esquina_foto_desktop}
          alt="esquina"
        />
      </picture>
      <picture>
        <source media="(max-width: 768px)" srcSet={exp_esquina_base_mobile} />
        <img
          className="experiencias-img"
          src={exp_esquina_base_desktop}
          alt="esquina"
        />
      </picture>
    </section>
  );
}
