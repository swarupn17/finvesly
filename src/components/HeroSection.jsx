import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';
import img from '../assets/swrup.png';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["SUSTAINABLE WEALTH.", "TRUE INDEPENDENCE.", "FAMILY SECURITY.", "PEACE OF MIND.", "LIFE GOALS."];
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    let timer;
    
    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        if (isDeleting) {
          setText(currentWord.substring(0, text.length - 1));
        } else {
          setText(currentWord.substring(0, text.length + 1));
        }
      }, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h3>PERSONALISED, GOAL BASED FINANCIAL PLANNING.</h3>
        <h1>{text}<span className="cursor">|</span></h1>
        <p className="hero-subtext">
          Finvesly Capital helps Indian families and professionals build wealth <br />with simple, transparent plans, SIPs, mutual funds, insurance protection, <br />retirement readiness, and financial literacy sessions tailored to your life and goals.
        </p>
        <Link to="/why-finvesly" className="hero-btn">LEARN MORE</Link>
      </div>
      <div className="hero-image">
        {/* Placeholder for the image - using a similar style placeholder or the actual URL if available */}
        <img src={img} alt="Finvesly financial educator" />
      </div>
    </section>
  );
};

export default HeroSection;
