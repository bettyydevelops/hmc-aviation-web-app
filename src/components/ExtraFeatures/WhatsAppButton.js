import React from 'react';
import '../../styles/WhatsAppButton.css';
import whatsappIcon from '../../assets/images/whatsapp-icon.jpg';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/905426035462?text=Merhaba,%20bilgi%20almak%20istiyorum."
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-button"
  >
    <img src={whatsappIcon} alt="WhatsApp" />
  </a>
);

export default WhatsAppButton;
