import React from "react";
import CardSection from "./CardSection";
import firsImg from "../../../icons/cardsectionimg.png";
import cardimg2 from "../../../icons/cardsection2.png";
import cardimg3 from "../../../icons/cardsection3.png";

function Card() {
  return (
    <div className="flex card-section">
      <CardSection title="NO NET IS SAFE SHOP BASKETBALL" img={firsImg} />
      <CardSection title="U DESIGN CUSTOM BASKETBALLS" img={cardimg2} />
      <CardSection title="BRING THE ARENA TO YOUR DRIVEWAY" img={cardimg3} />
    </div>
  );
}

export default Card;
