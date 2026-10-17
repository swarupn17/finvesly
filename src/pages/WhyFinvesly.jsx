import React from 'react';
import '../styles/WhyFinvesly.css';
import { FaUserAstronaut, FaChartLine, FaBalanceScale, FaBullseye, FaChessKnight, FaHandHoldingHeart, FaSyncAlt, FaLightbulb, FaSearch, FaRocket, FaFlag, FaUserMd, FaCheckCircle, FaExclamationTriangle, FaFileMedical } from 'react-icons/fa';
import Footer from '../components/Footer';

const WhyFinvesly = () => {
  const processSteps = [
    {
      id: 1,
      icon: <FaUserAstronaut />,
      title: "Your Personal Plan",
      description: "We don't use one plan for everyone. We listen to your story, your family needs, and your dreams."
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: "Portfolio Review",
      description: "It's not just what you earn. We help you see where your money goes so you can save more."
    },
    {
      id: 3,
      icon: <FaBalanceScale />,
      title: "Peace of Mind",
      description: "We make sure your investment plan feels safe for you, so you don't worry when markets go up or down."
    },
    {
      id: 4,
      icon: <FaLightbulb />,
      title: "The Real Truth",
      description: "We don't promise magic. We tell you honestly what to expect so you are never disappointed."
    },
    {
      id: 5,
      icon: <FaBullseye />,
      title: "Goals First",
      description: "A dream needs a plan. We help you save specifically for things like a home, education, or old age."
    },
    {
      id: 6,
      icon: <FaChessKnight />,
      title: "Diversification",
      description: "We don't put all your money in one place. We spread it out to keep it safer and growing."
    },
    {
      id: 7,
      icon: <FaHandHoldingHeart />,
      title: "Human Help",
      description: "You get a real expert to talk to, not just a computer. We are here to hold your hand."
    },
    {
      id: 8,
      icon: <FaSyncAlt />,
      title: "Regular Updates",
      description: "As your life changes, we change your plan. We keep checking to make sure you are winning."
    }
  ];

  return (
    <div className="why-page">
      {/* Hero Section */}
      <section className="why-hero">
        <div className="why-hero-content">
          <span className="why-subtitle">The Finvesly Way</span>
          <h1>Money is Simple.<br />Growing it is a <span className="highlight">Journey.</span></h1>
          <p>
            Many people start investing but get lost. We are your guide. 
            We show you the clear path to reach your family goals safely.
          </p>
        </div>
        <div className="why-hero-visual">
          <div className="journey-map">
            <svg className="journey-svg" viewBox="0 0 400 300">
              {/* Dashed path representing the journey */}
              <path 
                className="journey-path-bg"
                d="M 50 250 C 150 250, 200 50, 350 50" 
                fill="none" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="4" 
              />
              <path 
                className="journey-path-active"
                d="M 50 250 C 150 250, 200 50, 350 50" 
                fill="none" 
                stroke="#4CAF50" 
                strokeWidth="4" 
                strokeDasharray="10 5"
              />
            </svg>
            
            {/* Node 1: Discovery */}
            <div className="journey-node node-1">
              <div className="node-icon-circle">
                <FaSearch />
              </div>
              <div className="node-label-box">
                <span className="node-title">Meeting You</span>
                <span className="node-desc">Your Story</span>
              </div>
            </div>

            {/* Node 2: Strategy */}
            <div className="journey-node node-2">
              <div className="node-icon-circle">
                <FaChessKnight />
              </div>
              <div className="node-label-box">
                <span className="node-title">Making Plan</span>
                <span className="node-desc">Your Blueprint</span>
              </div>
            </div>

            {/* Node 3: Growth */}
            <div className="journey-node node-3">
              <div className="node-icon-circle">
                <FaRocket />
              </div>
              <div className="node-label-box">
                <span className="node-title">Growing Money</span>
                <span className="node-desc">Wealth Creation</span>
              </div>
            </div>

            {/* Node 4: Freedom */}
            <div className="journey-node node-4">
              <div className="node-icon-circle">
                <FaFlag />
              </div>
              <div className="node-label-box">
                <span className="node-title">Goals Done</span>
                <span className="node-desc">Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="why-problem">
        <div className="problem-container">
          <h2>Don't Guess with Your Money</h2>
          <div className="problem-content">
            <div className="problem-text">
              <p>
                You wouldn't take medicine without a doctor checking you first, right? 
                Investing is the same. Don't just buy what is popular or what your neighbor buys.
              </p>
              <p>
                At Finvesly, we check your <strong>Financial Health</strong> first. 
                We don't sell products; we give you a plan that fits YOU.
              </p>
            </div>
            <div className="problem-image">
               {/* Financial Diagnosis Visual */}
               <div className="diagnosis-container">
                 <div className="diagnosis-card">
                   <div className="card-header">
                     <FaFileMedical className="header-icon" />
                     <div className="header-text">
                       <span className="header-title">Money Health Check</span>
                       <span className="header-subtitle">For: Your Family</span>
                     </div>
                   </div>
                   <div className="card-body">
                     <div className="metric-row">
                       <span className="metric-label">Safety Need</span>
                       <div className="metric-track">
                         <div className="metric-fill risk-fill"></div>
                       </div>
                     </div>
                     <div className="metric-row">
                       <span className="metric-label">Clear Goals</span>
                       <div className="metric-track">
                         <div className="metric-fill goal-fill"></div>
                       </div>
                     </div>
                     <div className="metric-row">
                       <span className="metric-label">Time to Grow</span>
                       <div className="metric-track">
                         <div className="metric-fill time-fill"></div>
                       </div>
                     </div>
                   </div>
                   <div className="card-footer">
                     <div className="status-badge">
                       <FaCheckCircle /> Advice: <strong>Personal Plan</strong>
                     </div>
                   </div>
                 </div>
                 
                 {/* Floating Elements */}
                 <div className="floating-alert">
                   <FaExclamationTriangle />
                   <span>No Guessing</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="why-process">
        <div className="process-header">
          <h2>The Finvesly Way</h2>
          <p>From Dreams to Success in 8 Steps</p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.id} className="process-card">
              <div className="process-icon-wrapper">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="why-trust">
        <div className="trust-content">
          <h2>More Than Just Numbers</h2>
          <p>We are building a smart India, one family at a time.</p>
          <div className="trust-stats">
            <div className="stat-box">
              <span className="stat-number">100%</span>
              <span className="stat-label">Honest Advice</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">Rural</span>
              <span className="stat-label">For Every Family</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">Family</span>
              <span className="stat-label">We Care Like Family</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="why-cta">
        <div className="cta-container">
          <h2>Ready to Grow Your Money?</h2>
          <p>Stop guessing. Start planning. Join the Finvesly family today.</p>
          <a href="https://eonboard.njindiaonline.com/partner-tiny-url?njBrcode=27953" target="_blank" rel="noopener noreferrer" className="cta-button">
            Start Your Journey
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhyFinvesly;
