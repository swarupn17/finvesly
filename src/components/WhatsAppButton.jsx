import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919359049092"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Finvesly on WhatsApp"
    >
      <FaWhatsapp className="icon" />
    </a>
  );
};

export default WhatsAppButton;
