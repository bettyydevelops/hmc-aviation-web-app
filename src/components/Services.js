import rfpIcon from '../assets/images/rfpIcon.png';
import contractIcon from '../assets/images/contractIcon.png';
import businessIcon from '../assets/images/businessIcon.png';
import auditIcon from '../assets/images/auditIcon.png';
import marketIcon from '../assets/images/marketIcon.png';
import workforceIcon from '../assets/images/workforceIcon.png';
import '../styles/Services.css';

const Services = () => (
  <section className="services">
    <h2 className="services-title">What We <span className="highlight">Offer</span></h2>
    <div className="services-grid">
      <div className="service-item">
        <img src={rfpIcon} alt="RFP review" />
        <h3>RFP review and support</h3>
        <p>(Procurement or supplier)</p>
      </div>
      <div className="service-item">
        <img src={contractIcon} alt="Contract" />
        <h3>Contract & SLA review</h3>
      </div>
      <div className="service-item">
        <img src={businessIcon} alt="Business planning" />
        <h3>Business planning & strategy</h3>
      </div>
      <div className="service-item">
        <img src={marketIcon} alt="Market analysis" />
        <h3>Market / Industry analysis</h3>
      </div>
      <div className="service-item">
        <img src={auditIcon} alt="Auditing" />
        <h3>Auditing support</h3>
      </div>
      <div className="service-item">
        <img src={workforceIcon} alt="Workforce recruitment" />
        <h3>Workforce recruitment support</h3>
        <p>Temp or perm</p>
      </div>
    </div>
  </section>
);

export default Services;