import "./expchinook.css";
import exp_chinook_titulo from "../../assets/images/exp_chinook_titulo.png";
import exp_chinook_contenido_desktop from "../../assets/images/exp_chinook_contenido.png";
import exp_chinook_contenido_mobile from "../../assets/images/exp_chinook_contenido_m.png";
import exp_chinook_estancias_desktop from "../../assets/images/exp_chinook_estancias.png";
import exp_chinook_estancias_mobile from "../../assets/images/exp_chinook_estancias_m.png";
import exp_chinook_foto_desktop from "../../assets/images/exp_chinook_foto.png";
import exp_chinook_foto_mobile from "../../assets/images/exp_chinook_foto_m.png";

export default function ExpChinook() {
  return (
    <section className="experiencia-detalle-wrapper">
      <img
        className="experiencias-img"
        src={exp_chinook_titulo}
        alt="Chinook"
      />
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={exp_chinook_contenido_mobile}
        />
        <img
          className="experiencias-img"
          src={exp_chinook_contenido_desktop}
          alt="Chinook"
        />
      </picture>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={exp_chinook_estancias_mobile}
        />
        <img
          className="experiencias-img"
          src={exp_chinook_estancias_desktop}
          alt="Chinook"
        />
      </picture>
      <picture>
        <source media="(max-width: 768px)" srcSet={exp_chinook_foto_mobile} />
        <img
          className="experiencias-img"
          src={exp_chinook_foto_desktop}
          alt="Chinook"
        />
      </picture>
    </section>
  );
}
