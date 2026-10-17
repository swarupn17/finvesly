import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';
import lightLogo from '../assets/dark.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Brand Section */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo-link">
              <img src={lightLogo} alt="Finvesly" className="footer-logo" />
            </Link>
            <p className="footer-description">
              Finvesly Capital is a wealth management and financial literacy firm dedicated to empowering Indian families across all income classes.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a
                href="https://wa.me/919359049092"
                className="social-icon whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Finvesly on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col links-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/why-finvesly">Why Finvesly?</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/tools">Tools</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services (Optional - can be replaced with other links) */}
          <div className="footer-col links-col">
            <h3>Our Services</h3>
            <ul>
              <li><Link to="/services/mutual-funds">Mutual Funds</Link></li>
              <li><Link to="/services/portfolio">Portfolio Management</Link></li>
              <li><Link to="/services/retirement">Retirement Planning</Link></li>
              <li><Link to="/services/insurance">Insurance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col contact-col">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>
                303, Nyati Emporious, Mumbai-Pune Highway, Baner, Pune, 411008, maharashtra
              </span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <a href="tel:9359049092" className="contact-link" aria-label="Call Finvesly at 9359049092">9359049092</a>
            </div>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <a href="mailto:finvesly@gmail.com" className="contact-link" aria-label="Email Finvesly at finvesly@gmail.com">finvesly@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Finvesly. All Rights Reserved.
          </div>
          <div className="disclaimer">
            Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
