import React from "react";
import "./sobreHermar.css";
import Instructores from "../instructores/Instructores";
import Beneficios from "./Beneficios";

export default function SobreHermar() {
  return (
    <div>
      <div className="container">
        <div className="sobreHermar-header">
          <h2 className="titulos-secciones">Academia de Ajedrez HerMar</h2>
          <p>Todo lo que necesitas saber acerca de nuestra academia</p>
        </div>

        <div className="sobreHermar-textos">
          <div className="sobreHermar-texto">
            <h2 className="sobreHermar-texto-title">
              Metodología personalizada para cada alumno
            </h2>
            <p className="sobreHermar-texto-body">
              En primera instancia, se hace hincapié en el análisis de sus
              partidas para entender su manera de pensar y evaluar. La idea es
              detectar debilidades para tratar de corregirlas, así como también
              fortalezas para potenciarlas. 
              <br/>
              <br/>
              Nuestro método consiste en explicar
              partidas jugada a jugada, para que el alumno entienda la razón de
              cada una, y además pueda aprender y desarrollar un algoritmo de
              pensamiento basado en conceptos posicionales que lo ayude a
              mejorar el proceso de toma de decisiones en sus propias partidas.
              <br/>
              <br/>
              Plantear una partida estratégicamente bien es muy importante. Pero
              este propósito es prácticamente inalcanzable si no tienes un buen
              nivel táctico, por lo tanto, LA TÁCTICA tiene que ser una parte
              muy importante de tu plan de entrenamiento. En este punto, sugiero
              una planificación acorde a sus tiempos y objetivos a corto,
              mediano y largo plazo.
            </p>
          </div>
          <div className="sobreHermar-texto">
            <h2 className="sobreHermar-texto-title">Entrenamiento didáctico</h2>
            <p className="sobreHermar-texto-body">
              El entrenamiento debe ser didáctico para evitar el aburrimiento y
              desinterés del alumno. La idea es que tenga una participación
              activa en toda la clase, y pueda expresar sus ideas, opiniones y
              análisis concretos. Me gusta enseñar a pensar con base en
              CONCEPTOS y tratar de llevar al estudiante a una comprensión
              posicional del juego. 
              <br/>
              <br/>
              ✔️ Soporte entre las clases (si tiene alguna
              pregunta o duda, me envía un mensaje por aquí o WhatsApp en
              cualquier momento). Siempre estoy haciendo todo lo posible para
              ser muy receptivo. 
              <br/>
              <br/>
              ✔️ Plan de estudio acorde a tu nivel y tus
              objetivos, con mi seguimiento 100% personalizado. 
              <br/>
              <br/>
              ✔️ Tareas
              semanales y mensuales relacionadas con nuestra planificación y los
              temas que cubrimos durante las sesiones; para aplicar y aumentar
              aún más su conocimiento. 
              <br/>
              <br/>
              ✔️ Uso de herramientas modernas (bases de datos, archivos PNG).
            </p>
          </div>
        </div>
      </div>

      <Instructores />

      <div className="container">
        <div className="sobreHermar-header">
          <h2 className="titulos-secciones">Beneficios del Ajedrez</h2>
          <p>
            Entrenar ajedrez tiene multiples beneficios, en HerMar te ayudamos a
            alcanzarlos con aprendizaje guiado.{" "}
          </p>
          <Beneficios />
        </div>
      </div>
    </div>
  );
}
