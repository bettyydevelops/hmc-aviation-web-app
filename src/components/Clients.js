import React from 'react';
import '../styles/Clients.css';
import klippa from '../assets/images/klippa.png';
import vuori from '../assets/images/vuori.png';
import versed from '../assets/images/versed.png';
import matrixian from '../assets/images/matrixian.png';
import manscaped from '../assets/images/manscaped.png';

const Clients = () => (
  <section className="clients">
    <div className="clients-header">
      <h3>Industries We Serve</h3>
      <h2>
        Our <span className="highlight">Clients</span>
      </h2>
      <p>
        Our clients are our biggest advocates, with 35 years aviation consultancy experience, we have worked with the
        biggest and the best.
      </p>
    </div>
    <div className="clients-logos">
      <img src={klippa} alt="Client 1" />
      <img src={vuori} alt="Client 2" />
      <img src={versed} alt="Client 3" />
      <img src={matrixian} alt="Client 4" />
      <img src={manscaped} alt="Client 5" />
    </div>
  </section>
);

export default Clients;
