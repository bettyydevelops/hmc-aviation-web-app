import React from 'react';
import '../../styles/AboutUs.css';
import aboutUs from '../../assets/images/aboutUs.png'; // Uçak görseli

const AboutUs = () => (
  <section className="about-us">
    {/* Hero Section */}
    <div className="hero-section">
      <img src={aboutUs} alt="HMC Aviation" className="hero-image" />
      <div className="hero-text">
  <h1>HMC AVIATION</h1>
  <h2>Powering the Future of Aviation</h2>
  <p>Innovative solutions for a safer, more efficient industry</p>
</div>

    </div>

    <div className="about-content">
      <h2>Your Trusted Partner in Aviation Excellence</h2>
      <p>
      At HMC AVIATION, we pride ourselves on delivering world-class solutions tailored to the ever-evolving needs of the aviation industry. With over 30 years of experience, we have built a reputation for excellence, precision, and unwavering commitment to safety. Our expertise spans a wide range of services, making us a trusted partner for airlines, operators, and aviation professionals worldwide.

What We Do
Our comprehensive services are designed to ensure seamless operations, regulatory compliance, and the highest standards of safety. We specialize in:

Aircraft Maintenance (Part 145): Ensuring airworthiness through meticulous maintenance practices.
Training & Certification (Part 147): Delivering specialized courses, including type training, to develop skilled aviation professionals.
Airworthiness Management: Supporting compliance with global standards for reliable operations.
Engine & Aircraft Inspections: Advanced borescope and pre-buy inspections to safeguard investments.
Aircraft Deliveries & Redeliveries: Managing seamless transitions with attention to detail.
Simulator-Based Training: High-power engine run-up and full-flight simulator training for engineers and pilots.
C-Check Supervision: Overseeing heavy maintenance checks with precision and efficiency.
Aircraft Parts Supply: Delivering certified parts to keep operations running smoothly.
Engineer Resources: Providing skilled and certified professionals for maintenance, training, and operational support.
      </p>
    </div>
  </section>
);

export default AboutUs;
