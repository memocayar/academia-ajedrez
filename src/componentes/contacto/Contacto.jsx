import React, { useState } from 'react';
import "./contacto.css";
import tablerocontacto from "../../img/tablerocontacto.png";

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    const enviarMail = () => {
        // Lógica para enviar el correo electrónico
    };

    const enviarWhatsapp = () => {
        // Lógica para enviar el mensaje por WhatsApp
    };

    return (
        <div id="contenedor">
            <h2 id='titulo'>Contáctanos</h2>
            <p id='parrafo'>Estamos a disposición para resolver cualquier consulta</p>
            <form id="formulario">
                <label htmlFor="nombre">Nombre y apellido:</label>
                <input
                    className="campoForm"
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <label htmlFor="correo">Correo electrónico:</label>
                <input
                    className="campoForm"
                    type="email"
                    id="correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />

                <label  htmlFor="telefono">Número telefónico:</label>
                <input
                    className="campoForm"
                    type="tel"
                    id="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                    className="campoForm"
                    id="mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                ></textarea>

                <div id='contenedorBotones'>
                    <button id="botonMail" type="button" onClick={enviarMail}>
                        Enviar Mail
                    </button>

                    <button id="botonWhatsapp"type="button" onClick={enviarWhatsapp}>
                        Enviar Whatsapp
                    </button>
                </div>
            </form>
            <div id="contenedorImagen">
                <img src={tablerocontacto} id="imagen"/>
            </div>
        </div>
    );
};
export default Contacto;