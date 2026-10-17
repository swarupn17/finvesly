import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mwvpeqzy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Have questions about your financial future? We're here to help. Reach out to us for a personalized consultation.</p>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Visit Us</h3>
            <p>303, Nyati Emporious,<br />Mumbai-Pune Highway, Baner,<br />Pune, 411008, maharashtra</p>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Call Us</h3>
            <p><a href="tel:9359049092" className="contact-link" aria-label="Call Finvesly at 9359049092">+91 9359049092</a></p>
            <p>
              <a
                href="https://wa.me/919359049092"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Finvesly at 9359049092"
              >
                <FaWhatsapp style={{ marginRight: '8px' }} /> WhatsApp
              </a>
            </p>
            <p style={{ fontSize: '0.9rem', marginTop: '10px', color: '#888' }}>Mon-Fri, 9am - 6pm</p>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email Us</h3>
            <p><a href="mailto:finvesly@gmail.com" className="contact-link" aria-label="Email Finvesly at finvesly@gmail.com">finvesly@gmail.com</a></p>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-container">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and our financial experts will get back to you shortly.</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="9359049092" />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject">
                  <option value="">Select a topic</option>
                  <option value="investment">Investment Planning</option>
                  <option value="insurance">Insurance</option>
                  <option value="retirement">Retirement Planning</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              
              <div className="form-group full-width">
                <button type="submit" className="submit-btn" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            
            {submitted && (
              <div className="success-message">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
          </div>
          
          {/* Map removed as requested */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
