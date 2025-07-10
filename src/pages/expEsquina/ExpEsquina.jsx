import "./expesquina.css";
import exp_esquina_titulo from "../../assets/images/exp_esquina_titulo.webp";
import exp_esquina_full_desktop from "../../assets/images/exp_esquina_full.webp";
import exp_esquina_full_mobile from "../../assets/images/exp_esquina_full_m.webp";
import exp_esquina_base_desktop from "../../assets/images/exp_esquina_base.webp";
import exp_esquina_base_mobile from "../../assets/images/exp_esquina_base_m.webp";
import exp_esquina_foto_desktop from "../../assets/images/exp_esquina_foto.webp";
import exp_esquina_foto_mobile from "../../assets/images/exp_esquina_foto_m.webp";

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
