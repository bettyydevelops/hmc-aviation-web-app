import React from 'react';
import heroGif from '../assets/images/hero-animation.gif'; 
import '../styles/HeroSection.css';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <h1 style={{fontSize: '64px' }}>
        Aviation  <br /> <span style={{ color: '#007bff', fontSize: '64px' }}>Consultancy</span>
      </h1>
    </div>
    <div className="hero-image-container">
      <img src={heroGif} alt="Hero Animation" className="hero-gif" />
      {/* Kutucuğu ayrı bir kapsayıcıya aldık */}
    </div>
        <div className="hero-caption">
          <p>
            At HMC AVIATION, we are not just service providers;
             we are partners in your success. Whether it’s maintenance, training, or operational support, 
             we are here to ensure your aviation goals take flight.
          </p>
        </div>
  </section>
);

export default HeroSection;
