import tablero from "./tablero.png";
import "./banner.css";

export default function Banner() {
  return (
    <div id="contenedor">
      <div id="textos">
        <h1 id="titulo">Academia de Ajedrez</h1>
        <h3 id="parrafo">
          Clases online profesionales y personalizadas. Individuales y grupales.
          Estudia, entrena y prepárate a tu ritmo.
        </h3>
      </div>

      <div id="contenedorImagen">
        <img src={tablero} id="imagen"/>
      </div>
    </div>
  );
}