import React, { useState } from "react";
import Image1 from "../../../icons/image-5.png";
import addbasket from "../../../icons/iconadd.png";
import favori from "../../../icons/icons-heart.png";
import addbasketHover from "../../../icons/iconadd-hover.png";
import favoriHover from "../../../icons/icons-heart-hover.png";
import "./Balls.css";

function Balls() {
  const [isHover, setIsHover] = useState(favori);
  const [isHoverAdd, setIsHoverAdd] = useState(addbasket);
  const [isHoverBall, setIsHoverBall] = useState("balls-img");

  return (
    <div className="balls-item">
      <img src={Image1} alt="balls-img" className={isHoverBall} />
      <div
        onMouseEnter={() => setIsHoverBall("balls-img-hover")}
        onMouseLeave={() => setIsHoverBall("balls-img")}
      >
        <h3>WNBA OFFICIAL GAME BALL</h3>
        <div className="content-box">
          <p>$235.50</p>
          <div>
            <a
              href="#"
              onMouseEnter={() => setIsHover(favoriHover)}
              onMouseLeave={() => setIsHover(favori)}
            >
              <img src={isHover} alt="favori-icon" className="favorite-icon" />
            </a>
            <a
              href="#"
              onMouseEnter={() => setIsHoverAdd(addbasketHover)}
              onMouseLeave={() => setIsHoverAdd(addbasket)}
            >
              <img
                src={isHoverAdd}
                alt="add to basket"
                className="add-basket"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balls;
