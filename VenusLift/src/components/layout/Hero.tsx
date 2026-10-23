import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Background with dark overlay for text readability */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h3 className="hero-subtitle">ELEVATING SAFETY</h3>
        <h1 className="hero-title">
          <span className="text-white">DELIVERING</span> <br />
          <span className="text-gold">TRUST</span>
        </h1>
        <div className="hero-divider"></div>
        <p className="hero-description">
          Venus Lift provides a complete range of elevator solutions with superior quality, advanced technology and unmatched safety.
        </p>
        <button className="hero-btn">
          EXPLORE MORE 
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Indicators */}
        {/* <div className="carousel-indicators">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div> */}
      </div>

       
    </section>
  );
};

export default Hero;