import React from "react";
import HeaderImg from "../../../icons/HeaderImg.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${HeaderImg})` }}
        className="navbar-img"
      >
        <div className="navbar-img_content">
          <h1>
            BRINGING THE ARENA
            <br />
            TO YOUR DRIVEWAY
          </h1>
          <p>The Arena Renegade In-ground Hoop</p>
          <button className="navbar-btn btn">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
