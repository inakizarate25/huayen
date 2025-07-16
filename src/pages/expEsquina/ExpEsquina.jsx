import "./expesquina.css";
import exp_esquina_titulo from "../../assets/images/exp_esquina_titulo.png";
import exp_esquina_full_desktop from "../../assets/images/exp_esquina_full.png";
import exp_esquina_full_mobile from "../../assets/images/exp_esquina_full_m.png";
import exp_esquina_base_desktop from "../../assets/images/exp_esquina_base.png";
import exp_esquina_base_mobile from "../../assets/images/exp_esquina_base_m.png";
import exp_esquina_foto_desktop from "../../assets/images/exp_esquina_foto.png";
import exp_esquina_foto_mobile from "../../assets/images/exp_esquina_foto_m.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export default function ExpEsquina() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yb6u89g", "template_tzy741k", form.current, {
        publicKey: "5STvIpANQT1ptqDkS",
      })
      .then(
        () => {
          toast.success("Mensaje enviado con exito", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("Hubo un problema al enviar el mensaje", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };
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
      <section className="contacto-wrapper" id="contacto">
        <div className="contacto-container">
          <h2 className="contacto-titulo">CONSULTAR TARIFAS</h2>

          <form className="contacto-form" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Nombre completo"
              required
              name="user_name"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              required
              name="user_email"
            />
            <textarea
              placeholder="Tu mensaje"
              rows="5"
              required
              name="message"
            />
            <button type="submit" className="boton">
              DESEO RECIBIR INFORMACION
            </button>
          </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </section>
      <picture>
        <source media="(max-width: 768px)" srcSet={exp_esquina_foto_mobile} />
        <img
          className="experiencias-img"
          src={exp_esquina_foto_desktop}
          alt="esquina"
        />
      </picture>
    </section>
  );
}
