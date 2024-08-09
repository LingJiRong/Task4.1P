import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div class="footer-section">
  <div class="footer-container">
    <div class="footer-column">
      <h3>Explore</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">Tutorials</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
    
    <div class="footer-column">
      <h3>Support</h3>
      <ul>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
      </ul>
    </div>
    
    <div class="footer-column">
      <h3>Stay Connected</h3>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
  </div>
</div>

  );
};

export default Footer;
