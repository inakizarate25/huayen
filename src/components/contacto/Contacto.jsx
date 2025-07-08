// src/pages/Contacto.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contacto.css";
import { ToastContainer, toast } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yb6u89g", "template_ggu6pnk", form.current, {
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
    <>
      <section className="contacto-wrapper" id="contacto">
        <div className="contacto-container">
          <h2 className="contacto-titulo">Contacto</h2>
          <p className="contacto-descripcion">
            ¿Querés hablar con nosotros? Completá el formulario:
          </p>

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
              Enviar mensaje
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
      <Analytics />
    </>
  );
}
