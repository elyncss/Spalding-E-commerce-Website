import React from "react";
import LogoHeader from "../../../icons/Spalding_logo_logotype png-4.png";
import BasketIcon from "../../../icons/basket-32.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-box flex">
      <div className="header-container flex">
        <div className="header-box__log flex">
          <Link to="#">
            <img src={LogoHeader} className="main-logo" />
          </Link>
          <ul className="flex">
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/productes">PRODUCTES</Link>
            </li>
            <li>
              <Link to="#">COSTOMIZE</Link>
            </li>

            <li>
              <Link to="#">LinkBOUTE US</Link>
            </li>
          </ul>
        </div>
        <div className="header-box__login flex">
          <ul className="flex">
            <li>
              <Link to="#">LOG-IN</Link>
            </li>
            <li>
              <Link to="#">REGISTER</Link>
            </li>
          </ul>
          <Link to="#">
            <img src={BasketIcon} className="basket-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
