import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function CardPlan({ title, description, items }) {
  return (
    <Card className="plan-card" id="plan-card">
      <Card.Body>
        <Card.Title className="plan-card-title">{title}</Card.Title>
        <Card.Text id="plan-card-description">{description}</Card.Text>
        {items.map((item, index) => (
          <CardPlanItem key={index} text={item} />
        ))}
        <Link to="/planes">
          <Button variant="primary" size="lg" className="plan-button">
            Ver Más
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

function CardPlanItem({ text }) {
  return (
    <div className="row card-plan-item">
      <div className="plan-icon"></div>
      <div className="col item-text">
        <span>{text}</span>
      </div>
    </div>
  );
}
