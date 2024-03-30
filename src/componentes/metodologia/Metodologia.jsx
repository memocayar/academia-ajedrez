import React from "react";
import Item from "./Item";
import "./item.css";
import aprendizaje from "../../img/aprendizaje.png";
import instructores from "../../img/profesor.png";
import acelerado from "../../img/acelerada.png";
import todasLasEdades from "../../img/todas-edades.png";
import niveles from "../../img/niveles.png";
import online from "../../img/online.png";

export default function Metodologia() {
  return (
    <div className="container">
      <h2 className="titulos-secciones">Conocé nuestra metodología de enseñanza</h2>

      <div className="item-container">
        <Item
          icon={aprendizaje}
          title="Aprendizaje personalizado"
          description="Acompañamiento personalizado según tus objetivos. Adaptado a vos para un aprendizaje efectivo."
        />
        <Item
          icon={instructores}
          title="Instructores certificados"
          description="Profesores premiados a tu disposición para garantizar un aprendizaje y acompañamiento."
        />
        <Item
          icon={acelerado}
          title="Crecimiento acelerado"
          description="Aseguramos un crecimiento rápido y divertido en tus habilidades ajedrecísticas."
        />
        <Item
          icon={todasLasEdades}
          title="Todas las edades"
          description="No importa tu edad, nunca es muy tarde ni muy pronto para sumergirte en el mundo del ajedrez"
        />
        <Item
          icon={niveles}
          title="Todos los niveles"
          description="Adaptamos las lecciones a tu nivel y objetivos, ya seas principiante o avanzado."
        />
        <Item
          icon={online}
          title="100% online"
          description="Aprende desde cualquier lugar y a tu tiempo con nuestras clases online flexibles."
        />
      </div>
    </div>
  );
}
