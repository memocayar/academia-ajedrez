import React from "react";
import "./item.css";

export default function Item({ title, description, icon}) {
  return (
    <div className="item">
      <div className="item-header">
        <div className="circle">
            <img
                src={icon}
                alt="icono"
                className="item-icon"
            />
        </div>
      </div>
      <div className="item-body">
        <h4 className="item-title">{title}</h4>
        <p className="item-description">
          {description}
        </p>
      </div>
    </div>
  );
}
