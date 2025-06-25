// src/components/Tienda.jsx
import "../styles/huayen.css";
import reels from "../assets/images/placa_reels.png";
import anteojos from "../assets/images/placa_anteojos.png";
import canas from "../assets/images/placa_canas.png";
import lineas from "../assets/images/placa_lineas.png";
import marcas from "../assets/images/marcas.png";

export default function Tienda() {
  return (
    <section className="tienda-wrapper">
      <div className="tienda-cabecera">
        <h2 className="tienda-titulo">Tienda online</h2>
        <p className="tienda-descripcion">
          Equipos y accesorios nacionales e importados
        </p>
      </div>

      <div className="tienda-productos">
        <div className="tienda-columna">
          <img className="tienda-img" src={reels} alt="Reels" />
          <a href="http://www.huayenflyfishing.com.ar">
            <div className="boton">Visitar la Tienda</div>
          </a>
        </div>

        <div className="tienda-columna">
          <img className="tienda-img" src={anteojos} alt="Anteojos" />
        </div>

        <div className="tienda-columna">
          <img className="tienda-img" src={canas} alt="Cañas" />
          <img className="tienda-img" src={lineas} alt="Líneas" />
        </div>
      </div>

      <img className="tienda-marcas" src={marcas} alt="Marcas" />
    </section>
  );
}
