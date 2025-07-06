// src/components/Tienda.jsx
import "./tienda.css";
import reels from "../../assets/images/placa_reels.png";
import anteojos from "../../assets/images/placa_anteojos.png";
import canas from "../../assets/images/placa_canas.png";
import lineas from "../../assets/images/placa_lineas.png";
import marcasDesktop from "../../assets/images/marcas.png";
import marcasMobile from "../../assets/images/marcas_m.png";

import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

export default function Tienda() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // ejecutar al inicio

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          {!isMobile && (
            <a href="http://www.huayenflyfishing.com.ar">
              <div className="boton tienda-boton">Visitar la Tienda</div>
              <Analytics />
            </a>
          )}
        </div>

        <div className="tienda-columna">
          <img className="tienda-img" src={anteojos} alt="Anteojos" />
        </div>

        <div className="tienda-columna">
          <img className="tienda-img" src={canas} alt="Cañas" />
          <img className="tienda-img" src={lineas} alt="Líneas" />
        </div>
        {isMobile && (
          <a href="http://www.huayenflyfishing.com.ar">
            <div className="boton tienda-boton">Visitar la Tienda</div>
            <Analytics />
          </a>
        )}
      </div>

      <picture>
        <source media="(max-width: 768px)" srcSet={marcasMobile} />
        <img className="tienda-marcas" src={marcasDesktop} alt="Marcas" />
      </picture>
    </section>
  );
}
