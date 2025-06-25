// src/pages/Contacto.jsx

import "../styles/huayen.css";

export default function Contacto() {
  return (
    <>
      <section className="contacto-wrapper" id="contacto">
        <div className="contacto-container">
          <h2 className="contacto-titulo">Contacto</h2>
          <p className="contacto-descripcion">
            ¿Querés hablar con nosotros? Completá el formulario:
          </p>

          <form className="contacto-form">
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo electrónico" required />
            <textarea placeholder="Tu mensaje" rows="5" required />
            <button type="submit" className="boton">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
