import React from "react";
import "./testimonios.css";
import Card from "./CardTestimonio";

export default function Testimonios() {
  return (
    <div className="container testimonios-container">
      <h2 className="titulos-secciones">Testimonios </h2>
      <p className="subtitulos-secciones">
        Algunas experiencias de los alumnos de HerMar
      </p>

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active card-container">
            <div className="cards-container">
              <Card
                author="Card title 11"
                text="Me gusta mucho su forma de trabajar con los alumnos. Porque se enfocan en mejorar
                los errores que cometes en partidas y perfeccionar tus puntos fuertes."
              />
              <Card
                author="Card title 21"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
              <Card
                author="Card title 2.51"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
          </div>
          <div class="carousel-item card-container">
            <div className="cards-container">
              <Card
                author="Card title 11"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
              <Card
                author="Card title 21"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
              <Card
                author="Card title 2.51"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
          </div>
          <div class="carousel-item card-container">
            <div className="cards-container">
              <Card
                author="Card title 11"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
              <Card
                author="Card title 21"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
              <Card
                author="Card title 2.51"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev carrousel-button"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next carrousel-button"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
