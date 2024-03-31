import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import check from "../../img/check-circle-1.png";
import check2 from "../../img/check-circle-2.png";

export default function CardPlan() {
  return (
    <Card className="plan-card" id="plan-card" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="plan-card-title">
          Iniciación al Ajedrez
        </Card.Title>
        <Card.Text id="plan-card-description">
          Orientado a aquellas personas sin conocimientos previos que quieran
          aprender a jugar al ajedrez y sus estrategias básicas.
        </Card.Text>
        <CardPlanItem />
        <CardPlanItem />
        <CardPlanItem />
        <CardPlanItem />
        <CardPlanItem />
        <Button variant="primary" size="lg" className="plan-button">
          Ver Más
        </Button>
      </Card.Body>
    </Card>
  );
}

function CardPlanItem() {
    return (
        <div className="row card-plan-item">
            <div className="plan-icon col-1"></div>
            <div className="col item-text">
                <span>4 clases en vivo de 60 mins.</span>
            </div>
        </div>
    );
}
