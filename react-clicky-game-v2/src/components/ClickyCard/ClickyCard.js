import React from "react";
import "./ClickyCard.css";

const ClickyCard = props => (
  <span onClick={() => props.removeFriend(props.id)} className="remove">

  <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>  
    </div>
  </span>
);

export default ClickyCard;
