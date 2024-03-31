import React from "react";
import "./testimonios.css";
import Card from "./CardTestimonio";
import { Carousel } from 'react-bootstrap';


export default function Testimonios() {
  const testimonios = [
    { author: "Card title 11", text: "Testimonio 1" },
    { author: "Card title 21", text: "Testimonio 2" },
    { author: "Card title 2.51", text: "Testimonio 3" },
    {
      author: "Card title 2.51",
      text: "Me gusta mucho su forma de trabajar con los alumnos. Porque se enfocan en mejorar los errores que cometes en partidas y perfeccionar tus puntos fuertes.",
    },
    { author: "Card title 11", text: "Testimonio 5" },
    { author: "Card title 21", text: "Testimonio 6" },
    // Agrega más testimonios aquí
  ];
  const testimoniosPorSlide = window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  return (
    <div className="container testimonios-container">
      <h2 className="titulos-secciones">Testimonios </h2>
      <p className="subtitulos-secciones">
        Algunas experiencias de los alumnos de HerMar
      </p>

      <Carousel className="cards-container">
        {testimonios.reduce((acc, testimonio, index) => {
          if (index % testimoniosPorSlide === 0) acc.push([]);
          acc[acc.length - 1].push(testimonio);
          return acc;
        }, []).map((group, index) => (
          <Carousel.Item className="carousel-item" key={index}>
            <div className="row cards-container mx-auto" style={{ maxWidth: 'calc(100% - 10rem)' }}>
              {group.map((testimonio, index) => (
                <div className={`col-${12 / testimoniosPorSlide} d-flex justify-content-center`} key={index}>
                  <Card author={testimonio.author} text={testimonio.text} />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
