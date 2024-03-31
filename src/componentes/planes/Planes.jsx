import React from "react";
import "./planes.css";
import CardPlan from "./CardPlan";

export default function () {
  return (
    <div className="container">
      <h2 className="titulos-secciones">Descubre nuestros planes de clases </h2>
      <p className="subtitulos-secciones">
        Totalmente flexibles para adecuarse a vos
      </p>

      <div className="plan-cards-container">
        <CardPlan />
        <CardPlan />
        <CardPlan />
      </div>
    </div>
  );
}
