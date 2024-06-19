import React from "react";
import "./planesPage.css";
import { Link } from "react-router-dom";

export default function PlanesPage() {
  return (
    <div className="container">
      <div className="planesPage-textos">
        <h1 className="titulos-secciones" id="planesPage-title">
          Nuestros Planes
        </h1>
        <p>Todos los planes son adaptables a tus necesidades. </p>
      </div>
      <table className="table table-bordered">
        <thead className="tabla-titulos">
          <tr>
            <th scope="col"></th>
            <th className="tabla-titulos" scope="col">
              Clases Iniciacion
            </th>
            <th className="tabla-titulos" scope="col">
              Clases Individuales
            </th>
            <th className="tabla-titulos" scope="col">
              Clases grupales
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Público Objetivo
            </th>
            <td>
              Personas sin conocimientos previos que quieran aprender desde cero
            </td>
            <td>
              Personas con conocimientos previos, todas las edades y niveles
            </td>
            <td>
              Personas con conocimientos previos, todas las edades y niveles.
            </td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Contenido
            </th>
            <td>
              Reconociendo el tablero, las piezas y sus movimientos, estrategias
              básicas, fases de una partida
            </td>
            <td>Personalizado según el nivel y objetivos del alumno.</td>
            <td>
              Entrenamiento específico en aperturas, estrategia y finales.
              Consultar por los grupos del mes y los temas de estudio
            </td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Cantidad de clases
            </th>
            <td>4 clases en vivo</td>
            <td>Personalizado, a elección del alumno</td>
            <td>4 clases en vivo (con grabación)</td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Duración de la clase
            </th>
            <td>50 minutos</td>
            <td>Entre 50 y 60 minutos</td>
            <td>Entre 40 y 50 minutos</td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Biblioteca Virtual y Grupo de Whatsapp
            </th>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Seguimiento permanente
            </th>
            <td>❌</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Precio (UDS - Wise, Binance)
            </th>
            <td>$44</td>
            <td>$13</td>
            <td>$40</td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Precio (USD - PayPal)
            </th>
            <td>$48</td>
            <td>$14</td>
            <td>$44</td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Precio (ARS)
            </th>
            <td>$24.000</td>
            <td>$6.000</td>
            <td>$20.000</td>
          </tr>
        </tbody>
      </table>
      <div id="clase" className="planes-saber-mas">
        <div id="textosclase">
          <h2 className="titulos-secciones">¿Te gustaría saber mas?</h2>
          <p id="parrafoclase">Agenda una clase gratuita con nosotros.</p>
        </div>
        <div id="contenedor botones">
          <a
            target="_blank"
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3JLJ77pse8lY0-mnwwnhjg2a_twy__UVDMbiUDksOz4rlvx-cP4VyX-ShtlxO9JD1WVLOXS0jF"
          >
            <button id="botonagendar">Agendar Clase</button>
          </a>
          <Link to="/contactar">
            <button id="botonclase">Contactanos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
