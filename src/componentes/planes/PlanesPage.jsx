import React from "react";
import "./planesPage.css";

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
              Clases de Iniciacion
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
            <td>Principiantes sin conocimientos previos</td>
            <td>
              Personas con conocimientos previos, de cualquier nivel o edad
            </td>
            <td>
              Personas de cualquier nivel, desde principiantes hasta con
              experiencia
            </td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Contenido
            </th>
            <td>Reconocimiento del tablero y piezas, estrategias básicas</td>
            <td>Material de estudio, ejercicios, seguimiento personalizado</td>
            <td>
              Entrenamiento completo en aperturas, mediojuego, final, táctica,
              estrategia, técnica
            </td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Cantidad de clases
            </th>
            <td>4 clases en vivo</td>
            <td>Personalizado</td>
            <td>12 clases en vivo</td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Duración de la clase
            </th>
            <td>50-60 minutos</td>
            <td>Personalizado</td>
            <td>45-60 minutos</td>
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
              Precio (UDS - Wise, Binance, Criptomonedas)
            </th>
            <td>$44</td>
            <td>$12</td>
            <td>$45</td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Precio (USD - PayPal)
            </th>
            <td>$48</td>
            <td>$13</td>
            <td>$50</td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila">
              Precio (ARS)
            </th>
            <td>$18,000</td>
            <td>$6,000</td>
            <td>$25,000</td>
          </tr>
          <tr>
            <th scope="row" className="tabla-titulos-fila"></th>
            <td>
              {" "}
              <button id="botonclase">Elegir plan</button>
            </td>
            <td>
              <button id="botonclase">Elegir plan</button>
            </td>
            <td>
              <button id="botonclase">Elegir plan</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="planesPage-textos promociones">
        <p>
          <strong>Promociones</strong>
        </p>
        <p>
          4 clases: $44 (Wise, Binance, Cripto), $48 (PayPal); 8 clases: $84
          (Wise, Binance, Cripto), $90 (PayPal)
        </p>
      </div>
    </div>
  );
}
