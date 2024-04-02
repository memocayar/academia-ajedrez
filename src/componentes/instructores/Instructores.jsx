import React from "react";
import "./instructores.css";

export default function Instructores() {
  return (
    <div className="container-fluid instructores-container">
      <div className="rectangle">
        <div className="instructores-contenido">
          <h1 className="titulos-secciones">Nuestro equipo de Instructores</h1>
        </div>
        <div className="franjas">
          <div className="franja rectangle1"></div>
          <div className="franja rectangle2"></div>
          <div className="franja rectangle3"></div>
        </div>
      </div>
    </div>
  );
}
