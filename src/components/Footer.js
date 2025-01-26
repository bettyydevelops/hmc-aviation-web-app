import React from 'react';
import logo from '../assets/images/logo.png';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-column footer-logo">
      <img src={logo} alt="Velocity55 Logo" />
      <p>Velocity55 Aviation Consulting Limited is a UK Company registered in England and Wales.</p>
      <p>Company number: 14578361</p>
      <p>United Kingdom VAT number – to follow</p>
    </div>
    <div className="footer-column footer-services">
      <h4>Services</h4>
      <ul>
        <li>RFP review and support</li>
        <li>Contract & SLA review</li>
        <li>Business planning & strategy</li>
        <li>Market / Industry analysis</li>
        <li>Auditing support</li>
        <li>Workforce recruitment</li>
      </ul>
    </div>
    <div className="footer-column footer-contact">
      <h4>Get In Touch</h4>
      <p>Registered office in Horsham, UK</p>
      <p>dc@velocity55.solutions</p>
      <p>+44 7393 177303</p>
      <h4>Follow Us On</h4>
      <div className="footer-social-icons">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-pinterest"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
);

export default Footer;
