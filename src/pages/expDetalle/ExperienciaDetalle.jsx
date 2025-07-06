// src/pages/ExperienciaDetalle.jsx
import "./expdetalle.css";
import experienciaImg from "../../assets/images/expereincia_2.png";

export default function ExperienciaDetalle() {
  return (
    <section className="experiencia-detalle-wrapper">
      <div className="experiencia-detalle-contenido">
        <img
          src={experienciaImg}
          alt="Detalle de experiencia"
          className="experiencia-detalle-img"
        />
      </div>
    </section>
  );
}
