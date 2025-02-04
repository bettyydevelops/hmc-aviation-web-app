import React from "react";
import "../styles/MissionVision.css";
import image1 from "../assets/images/airport1.jpg";
import image2 from "../assets/images/airport2.jpg";
import image3 from "../assets/images/airport3.jpg";

const MissionVision = () => (
  <div className="mission-vision">
    <div className="mission-vision-content">
      <h3>Company Overview</h3>
      <h2>
        Your Trusted Partner <br />
        <span className="highlight"> in Aviation Excellence</span>
      </h2>
      <p>We provide advice, insight and consulting services across the entire spectrum of Ground Operations and Ground Handling.</p>
      <h4>Our Mission</h4>
      <p>To empower the aviation industry with cutting-edge solutions, fostering safety, innovation, and operational excellence.</p>
      <h4>Vision</h4>
      <p>To be the global leader in aviation services, setting the benchmark for reliability, expertise, and customer satisfaction.</p>
      <h4>Values</h4>
      <div className="why-choose-us">
        <p>Experience & Expertise, Commitment to Safety, Innovative Solutions, Tailored Approach, Comprehensive Support </p>
      </div>
    </div>
    <div className="mission-vision-images">
      <img src={image1} alt="Airport 1" className="image image1" />
      <img src={image2} alt="Airport 2" className="image image2" />
      <img src={image3} alt="Airport 3" className="image image3" />
    </div>
  </div>
);

export default MissionVision;
