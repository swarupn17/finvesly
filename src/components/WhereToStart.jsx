import React from 'react';
import '../styles/WhereToStart.css';
import retirementImg from '../assets/optimized/retirement.webp';
import educationImg from '../assets/optimized/education.webp';
import marriageImg from '../assets/optimized/marriage.webp';

const WhereToStart = () => {
  return (
    <section className="where-to-start">
      <div className="wts-header">
        <h2>Why you need to start ?</h2>
        <div className="wts-underline"></div>
      </div>

      <div className="wts-grid">
        {/* Column 1: Retirement */}
        <div className="wts-card wts-card-gray">
          <span className="wts-label">RETIREMENT</span>
          <h3 className="wts-title">
            SECURE YOUR<br />GOLDEN YEARS
          </h3>
          <div className="wts-image-container">
             <img src={retirementImg} alt="Retirement" className="wts-image" loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Column 2: Child Education */}
        <div className="wts-card wts-card-black">
          <span className="wts-label">CHILD EDUCATION</span>
          <h3 className="wts-title">
            INVEST IN THEIR<br />FUTURE SUCCESS
          </h3>
          <div className="wts-image-container">
             <img src={educationImg} alt="Child Education" className="wts-image" loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Column 3: Child Marriage */}
        <div className="wts-card wts-card-pink">
          <span className="wts-label">CHILD MARRIAGE</span>
          <h3 className="wts-title">
            PLAN FOR THEIR<br />BIG DAY
          </h3>
          <div className="wts-image-container">
             <img src={marriageImg} alt="Child Marriage" className="wts-image" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToStart;
