import React from "react";
import "./instructores.css";
import Instructor from "./Instructor";
import Juan from "../../img/juan.png";
import Roman from "../../img/roman.png";

export default function Instructores() {
  return (
    <div className="container-fluid instructores-container">
      <div className="instructores-contenido">
        <h1 className="titulos-secciones instructores-title">
          Nuestro equipo de Instructores
        </h1>
        <div className="instructores">
          <Instructor
            name="Juan Miguel Marson"
            title="Instructor de Ajedrez certificado por FIDE"
            description={["Jugador e Instructor de Ajedrez de la Federación Argentina de Ajedrez (FADA) y de la Federación de Ajedrez de la Provincia de Córdoba (FAPC).",
            "Candidato a Maestro (2020)",
            "6 años de experiencia como entrenador. 16 años de experiencia como jugador"
            ]}
            fide="https://ratings.fide.com/profile/106585"
            lichess="https://lichess.org/coach/chessmarson"
            foto={Juan}
          />
          <Instructor
            name="Roman Herrmann"
            title="Instructor de Ajedrez certificado por FIDE"
            description={["Jugador e Instructor de Ajedrez de la Federación Argentina de Ajedrez (FADA).",
            "Candidato a Maestro (2020)",
            "5 años de experiencia como entrenador",
            "10 años de experiencia como jugador",
            ]}
            fide="https://ratings.fide.com/profile/143499"
            lichess="https://lichess.org/coach/Nuvox"
            foto={Roman}
          />
        </div>
      </div>
    </div>
  );
}
