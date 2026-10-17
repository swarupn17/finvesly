import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Services.css';
import investImg from '../assets/investImg.jpg';
import insuranceImg from '../assets/insurance.png';
import educationImg from '../assets/education.jpg';
import retirementImg from '../assets/retire.png';
import savingImg from '../assets/saving.jpg';
import wealthImg from '../assets/wealth.jpg';


const servicesData = [
  {
    id: 1,
    title: "Investment Planning",
    description: "Grow your wealth with strategic investment solutions tailored to your risk appetite and time horizon.",
    image: investImg,
    features: ["Mutual Funds", "SIP Strategies", "Stock Market Advisory", "Portfolio Diversification"]
  },
  {
    id: 2,
    title: "Insurance Solutions",
    description: "Protect yourself and your loved ones against life's uncertainties with comprehensive insurance coverage.",
    image: insuranceImg,
    features: ["Life Insurance", "Health Insurance", "Term Plans", "Critical Illness Cover"]
  },
  {
    id: 3,
    title: "Retirement Planning",
    description: "Secure your golden years with a robust retirement corpus that ensures financial independence.",
    image: retirementImg,
    features: ["Pension Plans", "Retirement Corpus Calculation", "Inflation-adjusted Returns", "Post-retirement Income"]
  },
  {
    id: 4,
    title: "Child Future Planning",
    description: "Give your children the best start in life by planning for their higher education and marriage expenses.",
    image: educationImg,
    features: ["Education Funds", "Marriage Corpus", "Long-term Compounding", "Goal-based Investing"]
  },
  {
    id: 5,
    title: "Tax Planning",
    description: "Optimize your taxes with smart investment instruments that help you save money legally.",
    image: savingImg,
    features: ["ELSS Funds", "Section 80C Benefits", "Tax-efficient Withdrawals", "Capital Gains Management"]
  },
  {
    id: 6,
    title: "Wealth Management",
    description: "Holistic wealth management services for HNIs looking for personalized financial growth strategies.",
    image: wealthImg,
    features: ["Portfolio Review", "Asset Allocation", "Risk Management", "Regular Rebalancing"]
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive financial solutions designed to help you achieve your life goals. From wealth creation to protection, we've got you covered.</p>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <FaCheck className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Secure Your Financial Future?</h2>
          <p>Let's build a roadmap to your dreams together. Start your investment journey with Finvesly today.</p>
          <a href="https://eonboard.njindiaonline.com/partner-tiny-url?njBrcode=27953" target="_blank" rel="noopener noreferrer" className="cta-btn">
            Start Investing Now
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
