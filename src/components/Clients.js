import React from 'react';
import '../styles/Clients.css';
import workforceIcon from '../assets/images/workforceIcon.png';

const Clients = () => (
  <section className="clients">
    <h2>Our Clients</h2>
    <p>Our clients are our biggest advocates...</p>
    <div className="client-logos">
      <img src="client1.png" alt="Client 1" />
      <img src="client2.png" alt="Client 2" />
      {/* Daha fazla logo */}
    </div>
  </section>
);

export default Clients;
