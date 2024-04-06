import React, { useState } from "react";
import "./contacto.css";
import tablerocontacto from "../../img/tablerocontacto.png";
import mail from "../../img/mail.png";
import whatsAppIcon from "../../img/whatsapp-icon.png";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarMail = () => {
    // Lógica para enviar el correo electrónico
  };

  const enviarWhatsapp = () => {
    const mensajeWhatsapp =
      `Nombre y apellido: ${encodeURIComponent(nombre)}%0A` +
      `Correo electrónico: ${encodeURIComponent(correo)}%0A` +
      `Número telefónico: ${encodeURIComponent(telefono)}%0A` +
      `Mensaje: ${encodeURIComponent(mensaje)}`;

    const whatsappURL = `https://wa.me/542615515979/?text=${mensajeWhatsapp}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div id="contenedor" className="contacto-contenedor">
      <h2 id="titulo">Comencemos conociéndonos</h2>
      <p id="parrafo">Cuéntanos acerca de ti y tus objetivos. Estamos aquí para responder todas tus preguntas y brindarte la ayuda que necesitas.</p>
      <form id="formulario">
        <label htmlFor="nombre">Nombre y apellido:</label>
        <input
          className="campoForm"
          type="text"
          id="nombre"
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
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="+54 9 11 1234-5678"
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          className="campoForm"
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Ingresa tu mensaje, consulta o inquietud."
        ></textarea>

        <div id="contenedorBotones">
          <button id="botonMail" type="submit" onClick={enviarMail}>
            Contactar por Mail
            <img className="icono-boton "src={mail} id="iconoMail" />
          </button>

          <button id="botonWhatsapp" type="submit" onClick={enviarWhatsapp}>
            Contactar por Whatsapp
            <img className="icono-boton" src={whatsAppIcon} id="iconoMail" />
          </button>
        </div>
      </form>
      <div id="segundoContenedor"> <br/> </div>
    </div>
    
  );
};
export default Contacto;
