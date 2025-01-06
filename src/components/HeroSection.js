import React from 'react';
import planeImage from '../assets/images/plane.jpg';
import heroGif from '../assets/images/hero-animation.gif'; 
import '../styles/HeroSection.css';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>
        Aviation <span style={{ color: '#007bff' }}>Consultancy</span>
      </h1>
      <p>
        Velocity55 is an Aviation Consulting company offering commercial / business development guidance and solutions
        to ground service providers, airports, and airlines.
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
