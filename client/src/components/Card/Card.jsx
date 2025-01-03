import React from "react";
import "./Card.css";

function Card({ title }) {
  return (
    <div className="card">
      <h4 className="card-title">{title}</h4>
    </div>
  );
}

export default Card;
