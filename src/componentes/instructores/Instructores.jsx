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
            name="Roman Herrmann"
            title="Instructor de Ajedrez certificado por FIDE"
            description={[
              "Candidato a Maestro (2020).",
              "Campeón Argentino Cat. 2000 en modalidad Blitz (Buenos Aires, 2016).",
              "Campeón Provincial Absoluto (San Juan, 2017).",
              "Subcampeón Panamericano Cat. 2000 (Buenos Aires, 2017) & Campeón Panamericano Cat. 2300 (Costa Rica, 2019).",
              "Representante de Argentina en Mundiales Cat. 2300 (Italia 2017, Italia 2018 y México 2019).",
              "5 años de experiencia como entrenador, trabajando con jóvenes promesas del ajedrez local, provincial, nacional e internacional.",
            ]}
            fide="https://ratings.fide.com/profile/143499"
            lichess="https://lichess.org/@/Roman_Herrmann"
            foto={Roman}
          />

          <Instructor
            name="Juan Miguel Marson"
            title="Instructor de Ajedrez certificado por FIDE"
            description={[
              "Candidato a Maestro (2020).",
              "Campeón Provincial Absoluto (Córdoba, 2016).\n",
              "Campeón Argentino Cat. 2000 & Subcampeón Argentino Cat. 2000 en modalidad Blitz (Buenos Aires, 2016).",
              "Medalla de Bronce Panamericano Cat. 2300 (Costa Rica, 2019).",
              "Representante de Argentina en Mundial Cat. 2300 (Italia, 2019) obteniendo medalla de bronce en modalidad Blitz.",
              "6 años de experiencia como entrenador, trabajando con jóvenes promesas del ajedrez local, provincial, nacional e internacional.",
            ]}
            fide="https://ratings.fide.com/profile/106585"
            lichess="https://lichess.org/coach/chessmarson"
            foto={Juan}
          />
        </div>
      </div>
    </div>
  );
}
