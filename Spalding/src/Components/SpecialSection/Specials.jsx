import React from "react";
import GoldBackground from "../../../icons/Gold.png";
import GoldBall from "../../../icons/goldenBall.png";
import "./Specials.css";

function Specials() {
  return (
    <div
      style={{ backgroundImage: `url(${GoldBackground})` }}
      className="special-background"
    >
      <div>
        <h1>LOOK AT OUR SPECIAL BALLS</h1>
        <button>SHOP NOW</button>
      </div>
      <img src={GoldBall} alt="golden ball" />
    </div>
  );
}

export default Specials;
