import React from "react";
import "./beneficiosItem.css";

export default function BeneficiosItem({ title, description, icon }) {
  return (
    <div className="row col-lg-6 col-md-12">
      <div className="row beneficios-item">
        <div className="col-3">
          <div className="circle">
            <img src={icon} alt="icono" className="beneficios-item-icon" />
          </div>
        </div>
        <div className="col-9">
          <div className="beneficios-item-body">
            <h4 className="beneficios-item-title">{title}</h4>
            <p className="beneficios-item-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
