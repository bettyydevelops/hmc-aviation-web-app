import React from 'react';
import heroGif from '../assets/images/hero-animation.gif'; 
import '../styles/HeroSection.css';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-image-container">
      <img src={heroGif} alt="Hero Animation" className="hero-gif" />
      <div className="hero-text">
  <h1>HMC AVIATION</h1>
  <h2>Powering the Future of Aviation</h2>
  <p>Innovative solutions for a safer, more efficient industry</p>
</div>
    </div>
  </section>
);

export default HeroSection;
