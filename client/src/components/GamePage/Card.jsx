import React from "react";
import CardSuit from "./CardSuit";

function Card(props) {
  const img = props.suit
  return (

      <div className="card grid-container" 
      draggable = "true" 
      onDragStart= {props.onDragStart({id:props.id})}
      onDragOver= {props.onDragOver({id:props.id})}
      onDrop= {props.onDrop({id:props.id})}
      >
        <div className="grid-item card-number">{props.number}</div>
        {Array.from({ length: 33 }, (_, i) =>
          <CardSuit key={i} image={img} id={i} number={props.number} />)}
        <div className="grid-item card-number backwards">{props.number}</div>
      </div>




  );
}

export default Card;