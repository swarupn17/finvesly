import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: "Pratheesh Gangadhar",
    role: "Software Development Manager",
    company: "Texas Instruments India",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "At Finvesly it was always reinforced that these investments are linked to my goals and meant to be utilised a few years down the line",
  },
  {
    id: 2,
    name: "Shabani Hassanwalia",
    role: "Chief Editor",
    company: "The Third Eye at Nirantar",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "As a single mother and to manage my finances well, it did require foresight and meticulous planning. Finvesly did just that!",
  },
  {
    id: 3,
    name: "Madhumathy Sundararaj",
    role: "Director - Recruitments",
    company: "Tekarch",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "Finvesly has been instrumental in providing timely advice and making necessary adjustments to keep me aligned with my goals.",
  },
  {
    id: 4,
    name: "Suresh Deshmukh",
    role: "Senior Architect",
    company: "Design Studio",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "The best thing about Finvesly is they don't just sell products. They taught me financial discipline. Their honest advice has changed my family's financial life completely.",
  },
  {
    id: 5,
    name: "Anjali Gupta",
    role: "Marketing Head",
    company: "Creative Solutions",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "I was afraid of the stock market. Finvesly's hand-holding approach gave me confidence. They explained everything in simple language.",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 > testimonialsData.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonialsData.length - cardsToShow : prevIndex - 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header-row">
          <h2 className="testimonials-title">
            <span className="highlight-text">Client’s</span> Success <br /> Stories
          </h2>
          <div className="testimonials-nav-buttons">
            <button className="nav-btn prev-btn" onClick={prevSlide} aria-label="Previous">
              <FaArrowLeft />
            </button>
            <button className="nav-btn next-btn" onClick={nextSlide} aria-label="Next">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="testimonials-slider">
          <div className="slider-track-container">
            <div 
              className="slider-track"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {testimonialsData.map((testimonial) => (
                <div 
                  className="testimonial-card-wrapper" 
                  key={testimonial.id}
                  style={{ flex: `0 0 ${100 / cardsToShow}%`, maxWidth: `${100 / cardsToShow}%` }}
                >
                  <div className="testimonial-card">
                    <div className="card-image-container">
                      <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                    </div>
                    <h3 className="author-name">{testimonial.name}</h3>
                    <div className="author-role">
                      <p>{testimonial.role}</p>
                      <p>{testimonial.company}</p>
                    </div>
                    <div className="quote-content">
                      <FaQuoteLeft className="quote-icon-start" />
                      <p className="testimonial-text">{testimonial.text}</p>
                      <FaQuoteRight className="quote-icon-end" />
                    </div>
                    <a href="#read-more" className="read-more-link">Read more &rarr;</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
