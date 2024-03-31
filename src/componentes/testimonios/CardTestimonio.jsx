import React from "react";
import icon from "../../img/vector-testimonio.png";

export default function Card({ text, author }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-icon">
          <img src={icon} />
        </div>
        <div className="card-body">
          <p className="card-text">{text}</p>
          <p className="card-author">- {author}</p>
        </div>
      </div>
    </div>
  );
}
