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
            "Conceptos básicos de ajedrez.",
            "Fases y estrategias del ajedrez",
            "Acceso a biblioteca virtual",
            "Acceso a grupo de WhatsApp"
            // Agrega los otros items aquí
          ]}
        />
        <CardPlan
          title="Clases Individuales"
          description="Diseñado para personas que tengan conocimientos previos, sin importar el nivel o la
          edad."
          items={[
            "Cantidad de clases que quieras",
            "Planificación personalizada",
            "Clase extra mensual en video",
            "Actividades mensuales",
            "Acceso a grupo y biblioteca",
          ]}/> 
          <CardPlan
          title="Clases Grupales"
          description="Diseñado para personas que quieren incrementar tus conocimientos sobre el ajedrez, sin
          importar si recién aprendiste a jugar o si ya tenés algo de experiencia."
          items={[
            "3 clases grupales por semana",
            "Grupos de hasta 7 personas",
            "Entrenamiento en todas las áreas",
            "Clase extra mensual en video",
            "Actividades mensuales y accesos",
          ]}/> 
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
