import React from "react";
import AcordionItem from "./AcordionItem";

export default function FAQ() {
  return (
    <div className="container">
      <h2 className="titulos-secciones">Preguntas Frecuentes</h2>
      <p>Todo lo que necesitas saber acerca de nuestra academia</p>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <AcordionItem
          id="flush-collapseOne"
          title="Pregunta 1"
          content="Contenido de la pregunta 1"
        />
        <AcordionItem
          id="flush-collapseTwo"
          title="Pregunta 2"
          content="Contenido de la pregunta 2"
        />
        <AcordionItem
          id="flush-collapseThree"
          title="Pregunta 3"
          content="Contenido de la pregunta 3"
        />
      </div>

      <button type="button" class="btn btn-outline-secondary">
        VER MÁS
      </button>
    </div>
  );
}
