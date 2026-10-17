import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import lightLogo from '../assets/light.png';
import darkLogo from '../assets/dark.png';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = isHovered || isScrolled;

  return (
    <header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img 
              src={isDark ? darkLogo : lightLogo} 
              alt="Finvesly" 
              className="logo-image"
            />
          </Link>
        </div>
        <nav className="nav">
          <Link to="/why-finvesly">WHY FINVESLY ?</Link>
          <Link to="/services">Services</Link>
          <a href="https://www.njmutualfund.com/calculator.php" target="_blank" rel="noopener noreferrer">TOOLS</a>
          <Link to="/contact">CONTACT</Link>
          <a 
            href="https://eonboard.njindiaonline.com/partner-tiny-url?njBrcode=27953" 
            className="invest-btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Start Investing Now!
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
