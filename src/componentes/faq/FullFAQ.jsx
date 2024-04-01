import React from "react";
import AcordionItem from "./AcordionItem";

export default function FullFAQ() {
  const faqData = [
    {
      id: "flush-collapseOne",
      title: "Pregunta 1",
      content: "Contenido de la pregunta 1",
    },
    {
      id: "flush-collapseTwo",
      title: "Pregunta 2",
      content: "Contenido de la pregunta 2",
    },
    {
      id: "flush-collapseThree",
      title: "Pregunta 3",
      content: "Contenido de la pregunta 3",
    },
    {
      id: "flush-collapseOne",
      title: "Pregunta 1",
      content: "Contenido de la pregunta 1",
    },
    {
      id: "flush-collapseTwo",
      title: "Pregunta 2",
      content: "Contenido de la pregunta 2",
    },
    {
      id: "flush-collapseThree",
      title: "Pregunta 3",
      content: "Contenido de la pregunta 3",
    },
  ];
  return (
    <div className="container">
      <h2 className="titulos-secciones">Preguntas Frecuentes</h2>
      <p>Todo lo que necesitas saber acerca de nuestra academia</p>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        {faqData.map((item, index) => (
          <AcordionItem
            key={index}
            id={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
