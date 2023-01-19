import React from "react";
import LogoHeader from "../../../icons/Spalding_logo_logotype png-4.png";
import BasketIcon from "../../../icons/basket-32.png";
import "./Header.css";

function Header() {
  return (
    <div className="header-box flex">
      <div className="header-container flex">
        <div className="header-box__log flex">
          <a href="#">
            <img src={LogoHeader} className="main-logo" />
          </a>
          <ul className="flex">
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">PRODUCTES</a>
            </li>
            <li>
              <a href="#">COSTOMIZE</a>
            </li>

            <li>
              <a href="#">ABOUTE US</a>
            </li>
          </ul>
        </div>
        <div className="header-box__login flex">
          <ul className="flex">
            <li>
              <a href="#">LOG-IN</a>
            </li>
            <li>
              <a href="#">REGISTER</a>
            </li>
          </ul>
          <a href="#">
            <img src={BasketIcon} className="basket-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
