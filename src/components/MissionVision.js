import React from 'react';
import '../styles/MissionVision.css';
import image1 from '../assets/images/airport1.jpg';
import image2 from '../assets/images/airport2.jpg';
import image3 from '../assets/images/airport3.jpg';

const MissionVision = () => (
  <div className="mission-vision">
  <div className="mission-vision-content">
    <h3>Company Overview</h3>
    <h2>
      Consulting globally <br />
      <span className="highlight">across the industry</span>
    </h2>
    <p>
      We provide advice, insight and consulting services across the entire spectrum of Ground Operations and Ground
      Handling.
    </p>
    <h4>Our Mission</h4>
    <p>
      Anything from strategy to troubleshooting, improvement, analysis, process engineering, contracts or optimisation.
    </p>
    <h4>Vision</h4>
    <p>We can provide innovative solutions that can be tailored.</p>
    <h4>Values</h4>
    <p>
      Those of you that know us, will know that we can, and are very happy to, discuss and debate these subjects for
      many hours!
    </p>
  </div>
  <div className="mission-vision-images">
    <img src={image1} alt="Airport 1" className="image image1" />
    <img src={image2} alt="Airport 2" className="image image2" />
    <img src={image3} alt="Airport 3" className="image image3" />
  </div>
</div>

);

export default MissionVision;
