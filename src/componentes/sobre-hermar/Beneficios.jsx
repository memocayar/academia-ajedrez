import React from "react";
import BeneficiosItem from "./BeneficiosItem";
import icono from "../../img/niveles.png";
import "./beneficiosItem.css";

export default function Beneficios() {
  const dataBeneficios = [
    {
      title: "Desarrollo cognitivo",
      description:
        "El ajedrez estimula el pensamiento crítico, mejora la concentración y potencia habilidades cognitivas como la memoria y la resolución de problemas.",
      icon: icono,
    },
    {
      title: "Desarrollo cognitivo",
      description:
        "El ajedrez estimula el pensamiento crítico, mejora la concentración y potencia habilidades cognitivas como la memoria y la resolución de problemas.",
      icon: icono,
    },
    {
      title: "Desarrollo cognitivo",
      description:
        "El ajedrez estimula el pensamiento crítico, mejora la concentración y potencia habilidades cognitivas como la memoria y la resolución de problemas.",
      icon: icono,
    },
    {
      title: "Desarrollo cognitivo",
      description:
        "El ajedrez estimula el pensamiento crítico, mejora la concentración y potencia habilidades cognitivas como la memoria y la resolución de problemas.",
      icon: icono,
    },
    {
      title: "Desarrollo cognitivo",
      description:
        "El ajedrez estimula el pensamiento crítico, mejora la concentración y potencia habilidades cognitivas como la memoria y la resolución de problemas.",
      icon: icono,
    },
    {
      title: "Desarrollo cognitivo",
      description:
        "El ajedrez estimula el pensamiento crítico, mejora la concentración y potencia habilidades cognitivas como la memoria y la resolución de problemas.",
      icon: icono,
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
