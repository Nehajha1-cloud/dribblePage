// Footer.jsx
import React from 'react';
import './Footer.css';

import Prodmast from './assets/logo/podmast.png'
import LinkedIn from './assets/logo/linkedin.png'
import Insta from './assets/logo/instagram.png'
import FB from './assets/logo/facebook.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo"><img src={Prodmast}></img> Prodmast</div>
          <p>Our solutions make production faster and cheaper. Contact us for more information.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Customers</li>
              <li>Newsroom</li>
              <li>Events</li>
            </ul>
          </div>

          <div>
            <h4>Industries</h4>
            <ul>
              <li>Precision Metalforming</li>
              <li>Industrial Manufacturing</li>
              <li>High Tech & Electronics</li>
              <li>Aerospace</li>
            </ul>
          </div>

          <div>
            <h4>Products</h4>
            <ul>
              <li>Manufacturing Execution System</li>
              <li>Enterprise Resource Planning</li>
              <li>Quality Management System</li>
              <li>Supply Chain Planning</li>
            </ul>
          </div>

          <div className='list'>
            <h4>Get In Touch</h4>
            <p>hallo@prodmast.com</p>
            <div className="social-icons">
              <span><img src={LinkedIn} alt="LinkedIn"></img></span> {/* Replace with icons */}
              <span><img src={Insta} alt="Insta"></img></span>
              <span><img src={FB} alt="FB"></img></span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Prodmast, All rights reserved</p>
        <div className="footer-links-inline">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
