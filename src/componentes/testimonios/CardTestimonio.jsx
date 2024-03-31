import React from "react";
import icon from "../../img/vector-testimonio.png";

export default function Card({ text, author }) {
  return (
    <div className="card testimonio-card">
      <div className="card-content testimonio-card-content">
        <div className="card-icon">
          <img src={icon} />
        </div>
        <div className="card-body testimonio-card-body">
          <p className="testimonio-card-text">{text}</p>
          <p className="testimonio-card-author">- {author}</p>
        </div>
      </div>
    </div>
  );
}
