import React from "react";
import "./planes.css";
import CardPlan from "./CardPlan";

export default function () {
  return (
    <div className="container">
      <h2 className="titulos-secciones">Descubre nuestros planes de clases </h2>
      <p className="subtitulos-secciones planes-subtitulo">
        Totalmente flexibles para adecuarse a vos
      </p>

      <div className="plan-cards-container">
        <CardPlan
          title="Iniciación al Ajedrez"
          description="Orientado a aquellas personas sin conocimientos previos que quieran aprender a jugar al ajedrez y sus estrategias básicas."
          items={[
            "4 clases en vivo de 60 mins.",
            "Material didáctico incluido.",
            // Agrega los otros items aquí
          ]}
        />
        {/*         
------ COPIAR PEGAR Y COMPLETAR --------
          <CardPlan
          title=""
          description=""
          items={[
            "",
            "",
          ]}/> 
        */}
      </div>
    </div>
  );
}
