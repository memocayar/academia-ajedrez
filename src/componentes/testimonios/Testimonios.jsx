import React from "react";
import "./testimonios.css";
import Card from "./CardTestimonio";
import { Carousel } from 'react-bootstrap';


export default function Testimonios() {
  const testimonios = [
    { author: "Carlos, Argentina", 
      text: "Las clases son muy amenas. Se aprende rápido. Yo tengo 62 años, pero los profes tienen la paciencia para explicarme los conceptos, cada paso, cada movimiento y las ideas detrás de cada apertura o defensa. Realmente me siento a gusto, noto el progreso en cada semana y muy claros los conceptos." 
    },
    { author: "Mateo, Argentina", 
      text: "Entiendo que según mis puntos ciegos se adapta el contenido, me parece bien. La última clase me mencionaron que el objetivo 2024 iba a ser dominar 10 conceptos para llegar a cierto elo. Tener eso en vista me parece muy bueno porque me mantendrá motivado con un objetivo claro. Muy contento con las clases." 
    },
    { author: "Alejo, Argentina", 
      text: "Es muy útil revisar las partidas propias con los profes, pero, además, si sienten que tenés una debilidad en algún tema específico, consiguen material para trabajar sobre él. Gracias a la Academia HerMar, hoy siento que tengo un mejor entendimiento de este juego tan complejo y aprendo algo nuevo en cada clase." 
    },
    { author: "Romel, Argentina",
      text: "Me gusta mucho su forma de trabajar con los alumnos. Porque se enfocan en mejorar los errores que cometes en partidas y perfeccionar tus puntos fuertes.",
    },
    { author: "Leonardo, México", 
      text: "Me agrada llevar un orden con objetivos específicos y personalizados. Además de que las lecciones se pueden repasar las veces que sean necesarias." 
    },
    { author: "Agustín, Argentina", 
      text: "Me parece interesante el enfoque en distintos pilares (repertorio, estrategia, finales, etc.) ya que el conocimiento de estos da como resultado una mejora notable en el juego." 
    },
    { author: "Cristian y Mirna, Argentina", 
      text: "Las clases son claras, precisas y divertidas, adaptando los conceptos complejos para una comprensión fácil. Nos motivan a aplicar lo aprendido, generando avances notables desde conocimientos básicos. Los profesores son amables y siempre dispuestos a ayudar con materiales de refuerzo y responder preguntas." 
    },
    { author: "Marcos, Argentina", 
      text: "Muy buena experiencia. Lo que más me gusto fueron algunos ejercicios donde había que analizar la posición y establecer planes en partidas mías viejas que ya no recordaba." 
    },
    { author: "Antonio, España", 
      text: "La ayuda de Juan Miguel y Román ha sido esencial para mi progreso en el ajedrez. Su capacidad para simplificar conceptos complejos y motivarme continuamente ha acelerado mi aprendizaje. En nuestras clases, avanzamos de manera gradual y constructiva, dejándome con ganas de seguir aprendiendo y practicando." 
    },
    // Agrega más testimonios aquí
  ];
  
  const testimoniosPorSlide = window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  return (
    <div className="container testimonios-container" id="testimonios">
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
