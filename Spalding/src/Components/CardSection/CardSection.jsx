import React from "react";
import "./CardSection.css";

function CardSection(props) {
  return (
    <div style={{ backgroundImage: `url(${props.img})` }} className="card-img">
      <button className="btn">SHOP NOW</button>
      <h1>{props.title}</h1>
    </div>
  );
}

export default CardSection;
