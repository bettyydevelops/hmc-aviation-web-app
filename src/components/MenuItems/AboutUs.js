import React from "react";
import "../../styles/AboutUs.css";
import aboutUs from "../../assets/images/aboutUs.png"; 

const AboutUs = () => (
  <section className="about-us">
    
    {/* Hero Section */}
    <div className="hero-section">
      <img src={aboutUs} alt="HMC Aviation" className="hero-image" />
      <div className="hero-text">
        <h1>HMC AVIATION</h1>
        <h2>Powering the Future of Aviation</h2>
        <p className="hero-subtext">Innovative solutions for a safer, more efficient industry</p>
      </div>
    </div>

    {/* About Content */}
    <div className="about-content">
      <h2>Your Trusted Partner in Aviation Excellence</h2>
      <div className="about-box">
        <p>
          At HMC AVIATION, we pride ourselves on delivering world-class solutions tailored to the ever-evolving needs of the aviation industry.
          With over <strong>30 years of experience</strong>, we have built a reputation for **excellence, precision, and unwavering commitment to safety**.
        </p>
        <h3>What We Do</h3>
        <ul>
          <li><strong>Aircraft Maintenance (Part 145)</strong>: Ensuring airworthiness through meticulous maintenance practices.</li>
          <li><strong>Training & Certification (Part 147)</strong>: Delivering specialized courses, including type training, to develop skilled aviation professionals.</li>
          <li><strong>Airworthiness Management</strong>: Supporting compliance with global standards for reliable operations.</li>
          <li><strong>Engine & Aircraft Inspections</strong>: Advanced borescope and pre-buy inspections to safeguard investments.</li>
          <li><strong>Aircraft Deliveries & Redeliveries</strong>: Managing seamless transitions with attention to detail.</li>
          <li><strong>Simulator-Based Training</strong>: High-power engine run-up and full-flight simulator training for engineers and pilots.</li>
          <li><strong>C-Check Supervision</strong>: Overseeing heavy maintenance checks with precision and efficiency.</li>
          <li><strong>Aircraft Parts Supply</strong>: Delivering certified parts to keep operations running smoothly.</li>
          <li><strong>Engineer Resources</strong>: Providing skilled and certified professionals for maintenance, training, and operational support.</li>
        </ul>
      </div>
    </div>

  </section>
);

export default AboutUs;
