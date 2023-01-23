import React from "react";
import FooterImg from "../../../icons/footer-bacground.png";

function Footer() {
  return (
    <div style={{ backgroundImage: `url(${FooterImg})` }}>
      <div className="footer-logo">
        <img src="" />
        <p>FOLLOW US</p>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
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
  );
}

export default Footer;
