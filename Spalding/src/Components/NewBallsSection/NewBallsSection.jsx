import React from "react";
import Balls from "../Balls/Balls";
import "./NewBallsSection.css";

function NewBallsSection(props) {
  return (
    <div className="new-balls-section">
      <h1>{props.header}</h1>
      <a href="#">
        <p>wiew more</p>
      </a>
      <div className="balls-container">
        <Balls />
        <Balls />
        <Balls />
        <Balls />
      </div>
    </div>
  );
}

export default NewBallsSection;
