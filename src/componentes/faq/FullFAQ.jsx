import React from "react";
import AcordionItem from "./AcordionItem";
import "./fullfaqclase.css";
import { Link } from "react-router-dom";

export default function FullFAQ() {
  const faqData = [
    {
      tagName: "AcordionItem",
      id: "flush-collapseOne",
      title:
        "¿Puedo acceder a las clases en cualquier momento, o hay un horario específico?",
      content:
        "Las clases en vivo son en horarios a coordinar entre la disponibilidad del alumno y la academia. Adicionalmente, todos los meses tendrás disponible también una clase extra pregrabada en vídeo (sobre un tema específico, que irán variando) para que puedas verla en cualquier momento.",
    },
    {
      tagName: "AcordionItem",
      id: "flush-collapseTwo",
      title: "¿Necesito experiencia previa para unirme a la Academia?",
      content:
        "No necesitas experiencia previa para unirte a la Academia. Nuestras clases están diseñadas para todos los niveles, desde principiantes hasta jugadores avanzados. Luego de un primer acercamiento a modo de diagnóstico, elaboraremos una planificación personalizada para cada estudiante, de modo tal que cada uno pueda entrenar y mejorar a su ritmo, y con nuestro apoyo constante.",
    },
    {
      tagName: "AcordionItem",
      id: "flush-collapseThree",
      title:
        "¿Qué requerimientos tecnológicos son necesarios para tomar clases?",
      content:
        "Para acceder a las clases necesitarás una conexión a internet estable, y un ordenador. Recomendamos que sea una PC de escritorio o Notebook, así podrás acceder al tablero en mayor tamaño. Además, un micrófono para la llamada de voz. Puedes conectarte a la llamada a través de un teléfono celular, por ejemplo, y a la plataforma de ajedrez a través del computador. La cámara web no es obligatoria, aunque recomendamos mantenerla encendida para hacer la clase más amena.",
    },
    {
      tagName: "AcordionItem",
      id: "flush-collapseThree",
      title:
        "¿Cuál es la duración de las clases y con qué frecuencia se llevan a cabo?",
      content:
        "Cada clase tiene una duración aproximada entre 50 y 60 minutos. La frecuencia de estas depende de tu disponibilidad y la planificación que realicemos durante la primera sesión de diagnóstico. Nuestra recomendación es de una a dos clases por semana.",
    },
    {
      tagName: "AcordionItem",
      id: "flush-collapseThree",
      title: "¿Qué sucede si no puedo asistir a una clase en vivo?",
      content:
        "En nuestra Academia nos esforzamos por brindar flexibilidad a nuestros estudiantes. Si no puedes asistir a una clase en vivo, te animamos a ponerte en contacto. Haremos todo lo posible por reprogramar la clase para que no pierdas esa sesión. Preferimos que nos avises con anticipación para poder organizarlo de la mejor manera, pero entendemos que no siempre es posible. Queremos asegurarnos de que aproveches al máximo tu experiencia de aprendizaje, y estamos comprometidos a encontrar soluciones que se adapten a tus necesidades.",
    },
    {
      tagName: "AcordionItem",
      id: "flush-collapseThree",
      title:
        "¿Cómo puedo comunicarme con los instructores si tengo preguntas adicionales?",
      content:
        "Siempre tendrás disponible un grupo privado de WhatsApp en donde estarán los dos profesores para resolver tus dudas, inquietudes, y hacer el seguimiento correspondiente. Además, nos puedes escribir a través de Lichess, o bien por correo electrónico.",
    },
    {
      tagName: "AcordionItem",
      id: "flush-collapseThree",
      title: "¿Cuáles son los temas que se abarcan en las clases?",
      content:
        "Los temas son variados dependiendo el nivel del alumno, sus conocimientos previos y sus objetivos. Esto lo determinamos luego de la primera sesión de diagnóstico. Cubrimos una amplia gama de temas, que van desde los movimientos fundamentales de las piezas, hasta estrategias avanzadas, tácticas, teoría de aperturas y técnicas de finales. Brindamos una educación integral para capacitar a los estudiantes en su viaje ajedrecístico.",
    },
    {
      tagName: "AcordionItem",
      id: "flush-collapseThree",
      title: "¿Cuáles son los precios y las formas de pago?",
      content:
        "Puedes consultar en la sección “planes” en donde especificamos más al respecto. Las formas de pago que tenemos disponibles actualmente son: Efectivo o Transferencia Bancaria (Argentina); PayPal, Wise, Binance, Criptomonedas (Exterior).",
    },
    {
      tagName: "AcordionItem",
      id: "flush-collapseThree",
      title: "¿Qué beneficios tienen las clases individuales?",
      content:
        "Las clases individuales tienen el beneficio de que te puedes manejar a tu propio ritmo. Además, el material de estudio y las ejercitaciones estarán adaptados 100% a tu nivel, tiempos y objetivos. Durante las clases se abarcarán temas puntuales como lo son el repertorio de aperturas, análisis de tus propias partidas, preparación específica para torneos, estrategias básicas en el mediojuego, técnicas en el final, entre otros.",
    },
    {
      tagName: "AcordionItem",
      id: "flush-collapseThree",
      title:
        "¿Qué beneficios tienen los estudiantes que forman parte de la Academia?",
      content:
        "Los estudiantes que se unen a nuestra Academia Virtual experimentan una formación ajedrecística integral, beneficiándose de instrucción personalizada proporcionada por instructores expertos, flexibilidad de horarios, recursos de estudio adicionales para un aprendizaje continuo, participación en torneos y eventos exclusivos, integración en una activa comunidad ajedrecística, seguimiento personalizado del progreso con retroalimentación constructiva, y la oportunidad de obtener certificaciones que reconocen sus logros. Más que una simple academia, ofrecemos a nuestros estudiantes un entorno educativo enriquecedor diseñado para potenciar su pasión por el ajedrez y elevar sus habilidades a nuevos niveles de éxito.",
    },
  ];
  return (
    <div className="container-fluid faq-container-fluid">
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
      <div id="clase">
        <div id="textosclase">
          <h2 className="titulos-secciones">¿Te gustaría saber mas?</h2>
          <p id="parrafoclase">Agenda una clase gratuita con nosotros.</p>
        </div>
        <div id="contenedor botones">
          <a
            target="_blank"
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3JLJ77pse8lY0-mnwwnhjg2a_twy__UVDMbiUDksOz4rlvx-cP4VyX-ShtlxO9JD1WVLOXS0jF"
          >
            <button id="botonagendar">Agendar Clase</button>
          </a>
          <Link to="/contactar">
            <button id="botonclase">Contactanos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
