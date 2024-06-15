import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contacto.css";
import mail from "../../img/mail.png";
import whatsAppIcon from "../../img/whatsapp-icon.png";

const serviceID = "service_upfob3r"; 
const templateAutoMail = "template_mel2r6k"; 
const userID = "OIHkhHpJFR3Vvnl1l"; 

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarMail = (e) => {
    e.preventDefault();
    const templateParamsMe = {
      from_name: nombre,
      reply_to: correo,
      phone_number: telefono,
      message: 
      "Nombre y apellido: " + nombre + 
      "\nCorreo electrónico: " + correo + 
      "\nNúmero telefónico: " + telefono + 
      "\nMensaje: " + mensaje,
    };

    emailjs.send(serviceID, templateAutoMail, templateParamsMe, userID)
      .then(
        (result) => {
          console.log(result.text);
          alert("¡Consulta enviada con éxito! Te estaremos contactando a la brevedad");
        },
      );

    setNombre("");
    setCorreo("");
    setTelefono("");
    setMensaje("");
  };

  const enviarWhatsapp = (e) => {
    e.preventDefault();

    const mensajeWhatsapp =
      `Hola, ACADEMIA DE AJEDREZ HERMAR! ` +
      `Esta es la información de mi consulta realizada por el sitio web. ` +
      `Nombre y apellido: ${encodeURIComponent(nombre)}%0A. ` +
      `Correo electrónico: ${encodeURIComponent(correo)}%0A. ` +
      `Número telefónico: ${encodeURIComponent(telefono)}%0A. ` +
      `Mensaje: ${encodeURIComponent(mensaje)}`;

    const whatsappURL = `https://wa.me/543564513866/?text=${mensajeWhatsapp}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div id="contentedor" className="contacto-contenedor">
      <div className="contacto-textos">
      <h2 className="titulos-secciones" id="contacto-titulo">Comencemos conociéndonos</h2>
      <p>Cuéntanos acerca de ti y tus objetivos. Estamos aquí para responder a todas tus preguntas y brindarte la ayuda que necesitas.</p>
      </div>

      <form id="formulario" onSubmit={enviarMail}>
        <label htmlFor="nombre">Nombre y apellido:</label>
        <input
          className="campoForm"
          type="text"
          id="nombre"
          name="from_name"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre y apellido"
          required
        />

        <label htmlFor="correo">Correo electrónico:</label>
        <input
          className="campoForm"
          type="email"
          id="correo"
          name="reply_to"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Ingresa tu correo electrónico"
          required
        />

        <label htmlFor="telefono">Número telefónico:</label>
        <input
          className="campoForm"
          type="tel"
          id="telefono"
          name="phone_number"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="+54 9 11 1234-5678"
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          className="campoForm"
          id="mensaje"
          name="message"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Ingresa tu mensaje, consulta o inquietud."
        ></textarea>

        <div id="contenedorBotones">
          <button id="botonMail" type="submit">
            Contactar por Mail
            <img
              className="icono-boton"
              src={mail}
              alt="Mail Icon"
            />
          </button>

          <button id="botonWhatsapp" type="button" onClick={enviarWhatsapp}>
            Contactar por Whatsapp
            <img
              className="icono-boton"
              src={whatsAppIcon}
              alt="WhatsApp Icon"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
