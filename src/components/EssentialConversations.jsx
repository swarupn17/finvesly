import React from 'react';
import '../styles/EssentialConversations.css';

const EssentialConversations = () => {
  return (
    <section className="essential-conversations">
      <div className="ec-container">
        <h2 className="ec-heading">
          PILLARS OF FINANCIAL PLANNING:

        </h2>

        <div className="ec-content">
          {/* Left Item */}
          <div className="ec-item">
            <div className="ec-icon">
              <img 
                src="https://nicolelapin.com/wp-content/uploads/2018/10/lightbulb.png" 
                alt="Lightbulb" 
                className="ec-image" 
              />
            </div>
            <p className="ec-text">INSURANCE</p>
          </div>

          {/* Divider */}
          <div className="ec-divider">
            <span className="ec-divider-line"></span>
            <span className="ec-divider-text">AND</span>
            <span className="ec-divider-line"></span>
          </div>

          {/* Right Item */}
          <div className="ec-item">
            <div className="ec-icon">
              <img 
                src="https://nicolelapin.com/wp-content/uploads/2018/10/money.png" 
                alt="Money" 
                className="ec-image" 
              />
            </div>
            <p className="ec-text">INVESTMENT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialConversations;
