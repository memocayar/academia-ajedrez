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
          title="¿Puedo acceder a las clases en cualquier momento, o hay un horario específico?"
          content="Las clases en vivo son en horarios a coordinar entre la disponibilidad del alumno y la 
          academia. Adicionalmente, todos los meses tendrás disponible también una clase extra 
          pregrabada en vídeo (sobre un tema específico, que irán variando) para que puedas verla 
          en cualquier momento. "
        />
        <AcordionItem
          id="flush-collapseTwo"
          title="¿Necesito experiencia previa para unirme a la Academia?"
          content="No necesitas experiencia previa para unirte a la Academia. Nuestras clases están 
          diseñadas para todos los niveles, desde principiantes hasta jugadores avanzados. Luego 
          de un primer acercamiento a modo de diagnóstico, elaboraremos una planificación 
          personalizada para cada estudiante, de modo tal que cada uno pueda entrenar y mejorar 
          a su ritmo, y con nuestro apoyo constante."

        />
        <AcordionItem
          id="flush-collapseThree"
          title="¿Qué requerimientos tecnológicos son necesarios para tomar clases?"
          content="Para acceder a las clases necesitarás una conexión a internet estable, y un ordenador. 
          Recomendamos que sea una PC de escritorio o Notebook, así podrás acceder al tablero 
          en mayor tamaño. Además, un micrófono para la llamada de voz. Puedes conectarte a 
          la llamada a través de un teléfono celular, por ejemplo, y a la plataforma de ajedrez a 
          través del computador. La cámara web no es obligatoria, aunque recomendamos 
          mantenerla encendida para hacer la clase más amena."
        />
      </div>

      <button type="button" class="btn btn-outline-secondary">
        VER MÁS
      </button>
    </div>
  );
}
