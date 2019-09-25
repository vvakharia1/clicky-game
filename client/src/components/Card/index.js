import React from "react";
import "./style.css";

function PlanetCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="planet-img" alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default PlanetCard;
