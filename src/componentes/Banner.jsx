import tablero from "./tablero.png";
export function Banner() {
  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <div style={{ marginLeft: "90px", width: "650px", marginTop: "140px" }}>
        <h1>Academia de Ajedrez</h1>
        <h3 style={{ color: "#67696B", width: "650px" }}>
          Clases online profesionales y personalizadas. Individuales y grupales.
          Estudia, entrena y prepárate a tu ritmo.
        </h3>
      </div>
      
      <div className="imagen">
        <img src={tablero} style={{ width: "100%" }} />
      </div>
    </div>
  );
}