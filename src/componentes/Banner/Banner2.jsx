import tablero from "./tablero.png";
import "./banner2.css";

export default function Banner() {
  return (
    <div id="banner-contenedor" className="container-fluid row">
      <div id="banner-textos" className="col-md-6">
        <h1 id="banner-titulo">Academia de Ajedrez</h1>
        <h3 id="banner-subtitulo">
          Clases online profesionales y personalizadas. Individuales y grupales.
          Estudia, entrena y prepárate a tu ritmo.
        </h3>
      </div>
    </div>
  );
}
