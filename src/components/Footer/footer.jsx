import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            iusto delectus quam asperiores ut, sapiente quo molestiae culpa
            voluptatum aspernatur vel tenetur beatae illum quaerat ad dolore
            obcaecati. Reiciendis, consequatur.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-242-456-5632</li>
            <li>contact@selorando.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">Copyright 2024 Selorando.com - All Right Reserved</p>
    </div>
  );
};

export default footer