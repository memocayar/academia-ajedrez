import React from "react";
import BeneficiosItem from "./BeneficiosItem";
import cognitivo from "../../img/Cerebro.png";
import "./beneficiosItem.css";
import pedagogicas from "../../img/habilidades-pedagogicas.png";
import decisiones from "../../img/Decisiones.png";
import control from "../../img/control-emocional.png";
import paciencia from "../../img/paciencia.png";
import creatividad from "../../img/creatividad.png";
import social from "../../img/desarrollo-social.png";
import autodisciplina from "../../img/autodisciplina.png";


export default function Beneficios() {
  const dataBeneficios = [
    {
      title: "Desarrollo cognitivo",
      description:
        "El ajedrez estimula el pensamiento crítico, mejora la concentración y potencia habilidades cognitivas como la memoria y la resolución de problemas.",
      icon: cognitivo,
    },
    {
      title: "Habilidades pedagógicas",
      description:
        "Aprender ajedrez enseña a los estudiantes a planificar, organizar y anticipar, promoviendo habilidades pedagógicas esenciales que se traducen en el ámbito académico y profesional.",
      icon: pedagogicas,
    },
    {
      title: "Toma de decisiones",
      description:
        "La práctica constante del ajedrez fortalece la toma de decisiones informadas, ya que cada movimiento implica evaluar las consecuencias a corto y largo plazo. ",
      icon: decisiones,
    },
    {
      title: "Control emocional",
      description:
        "Jugar ajedrez fomenta la gestión emocional al enfrentar situaciones desafiantes. Los jugadores aprenden a manejar la presión y a mantener la calma incluso en circunstancias difíciles.",
      icon: control,
    },
    {
      title: "Paciencia y perseverancia",
      description:
        "El ajedrez enseña la importancia de la paciencia y la perseverancia, ya que la mejora en el juego requiere tiempo y práctica constante. ",
      icon: paciencia,
    },
    {
      title: "Fomento de la creatividad",
      description:
        "La naturaleza estratégica del ajedrez estimula la creatividad al plantear situaciones donde es necesario pensar de manera única y fuera de lo convencional.",
      icon: creatividad,
    },
    {
      title: "Desarrollo social",
      description:
        "La participación en torneos y eventos de ajedrez brinda oportunidades para establecer conexiones sociales y construir una red de amistades compartiendo una pasión común. ",
      icon: social,
    },
    {
      title: "Autodisciplina",
      description:
        "La práctica del ajedrez requiere autodisciplina y compromiso, aspectos que se traducen en una sólida ética de trabajo y responsabilidad. ",
      icon: autodisciplina,
    },
  ];
  return (
    <div className="beneficios-item-container">
      {dataBeneficios.map((item, index) => (
        <BeneficiosItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
