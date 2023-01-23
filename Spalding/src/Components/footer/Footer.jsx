import React from "react";
import "./Footer.css";
import FooterImg from "../../../icons/footer-bacground.png";
import FooterLogo from "../../../icons/footer/logo-footer.png";
import Facebook from "../../../icons/footer/facebook.png";
import Instagram from "../../../icons/footer/instagram.png";
import linkedin from "../../../icons/footer/linkedin.png";
import twitter from "../../../icons/footer/twitter.png";

function Footer() {
  return (
    <div
      style={{ backgroundImage: `url(${FooterImg})` }}
      className="footer-container"
    >
      <div>
        <div className="footer-logo">
          <img src={FooterLogo} alt="logo" />
          <p>FOLLOW US</p>
          <div>
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={linkedin} alt="linkedin" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className="footer-info">
          <div>
            <h3>SUPPORT</h3>
            <ul>
              <li>Contact Us</li>
              <li>Help / FAQs</li>
              <li>Returns & Refunds</li>
              <li>Warranty Claim</li>
              <li>Check your order</li>
              <li>Systems Manual Finder</li>
            </ul>
          </div>
          <div>
            <h3>BUSINESS INFO</h3>
            <ul>
              <li>The Spalding Story</li>
              <li>Spalding International</li>
              <li>Catalog Downloads</li>
              <li>Partnerships</li>
              <li>State Adoptions</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3>SPALDING MVP</h3>
            <ul>
              <li>Login/Sign Up</li>
              <li>Sign Up</li>
              <li>Wish List</li>
              <li>Register Your Spalding</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
