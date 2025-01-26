import React from 'react';
import heroGif from '../assets/images/hero-animation.gif'; 
import '../styles/HeroSection.css';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>
        Aviation <span style={{ color: '#007bff' }}>Consultancy</span>
      </h1>
      <p>
      With 30 years of expertise, we deliver world-class aviation solutions, from maintenance and training to inspections, airworthiness management, and resource provisioning, ensuring safety, innovation, and excellence.
      </p>
    </div>
    <div className="hero-image-container">
      <img src={heroGif} alt="Hero Animation" className="hero-gif" />
      <div className="hero-caption">
        <p>
          <span className="icon">⭐</span> With over 30 years expertise in passenger / ramp handling, cabin cleaning, PRM
          and FM, we are ready to support our customers globally.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
