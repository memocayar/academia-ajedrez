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
            <h2 className="sobreHermar-texto-title">Sobre Nosotros</h2>
            <p className="sobreHermar-texto-body">
              Bienvenido a la Academia de Ajedrez HerMar. Somos{" "}
              <strong>Juan Miguel Marson</strong> y{" "}
              <strong>Roman Walter Herrmann</strong>, apasionados amigos del
              ajedrez de Córdoba y San Juan (Argentina).
              <br />
              <br />
              Desde temprana edad nos enamoramos de este noble juego que desafía
              la mente y desarrolla habilidades únicas. Juntos hemos
              representado con orgullo a Argentina en diversas competiciones
              internacionales, cosechando éxitos y experiencias en el tablero.
              <br />
              <br />
              Creemos firmemente en la{" "}
              <strong>universalidad del ajedrez</strong> como{" "}
              <strong>herramienta educativa</strong>. Hemos tenido el privilegio
              de enseñar a personas de diversos orígenes y edades, observando
              cómo este juego potencia el{" "}
              <strong>pensamiento estratégico</strong>, la{" "}
              <strong>concentración</strong> y la
              <strong>resolución de problemas</strong>. Nuestra academia no es
              simplemente un lugar para aprender ajedrez; es una{" "}
              <strong>comunidad</strong> que brinda un entorno alentador y
              solidario donde los jugadores pueden crecer y aprender. Nuestro
              enfoque aborda los desafíos específicos de cada nivel, desde
              principiantes hasta jugadores experimentados. Con entrenadores
              apasionados y un programa integral, HerMar se erige como tu aliado
              para el éxito en el ajedrez.
            </p>
          </div>
          <div className="sobreHermar-texto">
            <h2 className="sobreHermar-texto-title">
              Metodología personalizada para cada alumno
            </h2>
            <p className="sobreHermar-texto-body">
              El entrenamiento debe ser didáctico para evitar el aburrimiento y
              desinterés del alumno. La idea es que tenga una participación en
              toda la clase, y pueda expresar sus ideas, opiniones y análisis
              concretos. Nos gusta enseñar a pensar con base en CONCEPTOS y
              tratar de llevar al estudiante a una comprensión posicional del
              juego. La metodología de enseñanza es personalizada para cada
              alumno. En primera instancia, hacemos hincapié en el análisis de
              sus partidas para entender su manera de pensar y evaluar. La idea
              es detectar debilidades para tratar de corregirlas, así como
              también fortalezas para potenciarlas.
              <br />
              <br />
              Nuestro método consiste en explicar partidas jugada a jugada, para
              que el alumno entienda la razón de cada una, y además pueda
              aprender y desarrollar un algoritmo de pensamiento basado en
              conceptos posicionales que lo ayude a mejorar el proceso de toma
              de decisiones en sus propias partidas.
              <br />
              <br />
              Plantear una partida estratégicamente bien es muy importante. Pero
              este propósito es prácticamente inalcanzable si no tienes un buen
              nivel táctico, por lo tanto, LA TÁCTICA tiene que ser una parte
              muy importante de tu plan de entrenamiento. En este punto,
              sugerimos una planificación acorde a sus tiempos y objetivos a
              corto, mediano y largo plazo.
            </p>
          </div>
          <div className="sobreHermar-texto">
            <h2 className="sobreHermar-texto-title">¿Qué obtendrás en nuestras sesiones?</h2>
            <p className="sobreHermar-texto-body">
              ✔️ Soporte entre las clases (si tiene alguna pregunta o duda, nos envía un mensaje por la plataforma o a través de WhatsApp en cualquier momento). Siempre hacemos todo lo posible para ser muy receptivos.
              <br />
              <br />
              ✔️ Plan de estudio acorde a tu nivel y tus objetivos, con nuestro seguimiento 100% personalizado.
              <br />
              <br />
              ✔️ Tareas semanales y mensuales relacionadas con nuestra
              planificación y los temas que cubrimos durante las sesiones; para
              aplicar y aumentar aún más su conocimiento.
              <br />
              <br />
              ✔️ Uso de herramientas modernas (bases de datos, archivos PGN).
            </p>
          </div>
        </div>
      </div>

      <Instructores />

      <div className="container" id="beneficios">
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
