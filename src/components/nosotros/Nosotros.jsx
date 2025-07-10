// src/components/Nosotros.jsx
import "./nosotros.css";
import fotos from "../../assets/images/fotos.webp";
import { Analytics } from "@vercel/analytics/react";

export default function Nosotros() {
  return (
    <section className="nosotros-wrapper" id="nosotros">
      <div className="nosotros-container">
        <span className="nosotros-heading">Nosotros</span>

        <div className="nosotros-frase">
          Conectamos a los <br />
          aficionados al "fly fishing"
          <br />
          con lugares y experiencias <br />
          memorables.
        </div>

        <img
          className="nosotros-imagen circular marg-top"
          src={fotos}
          alt="Fotos"
        />

        <p className="nosotros-texto">
          Recorrimos el sur Argentino disfrutando de cada lugar que nos regaló
          la oportunidad de castear en entornos salvajes. En el camino
          conectamos con amigos, colegas, gente de la zona y otros que como
          nosotros venimos de un poco más allá compartiendo la experiencia de la
          pesca con mosca y haciendo de esta actividad algo más que un
          pasatiempo.
        </p>

        <a href="#contacto">
          <div className="nosotros-boton boton">Contacto</div>
          <Analytics />
        </a>
      </div>
    </section>
  );
}
