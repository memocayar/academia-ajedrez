import React from "react";

export default function Instructor({ name, title, description, fide, lichess, foto }) {
  return (
    <div className="instructor-card">
      <div className="instructor-header">
        <h1 className="instructor-nombre">{name}</h1>
        <h2 className="instructor-titulo">{title}</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="instructor-foto-div">
              <img className="instructor-foto" src={foto} alt="Foto de Juan jugando ajedrez" />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <p className="instructor-descripcion">{description}</p>
        </div>
        <div className="row instructor-botones">
          <div className="col-md-6">
            <a href={fide} type="button" target="_blank" class="btn btn-secondary instructor-boton">
              Ratings FIDE
            </a>
          </div>
          <div className="col-md-6">
            <a href={lichess} type="button" target="_blank" class="btn btn-secondary instructor-boton">
              Perfil Lichess
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
