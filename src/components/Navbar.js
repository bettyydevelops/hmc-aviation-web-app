import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.png'; 
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
    <ul className="navbar-links">
    <li><Link to="/home">Home</Link></li>
      <li><Link to="/consultancy">Consultancy</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
    </ul>
    <Link to="/contact">
      <button className="navbar-button">Contact us</button>
    </Link>
  </nav>
);

export default Navbar;
