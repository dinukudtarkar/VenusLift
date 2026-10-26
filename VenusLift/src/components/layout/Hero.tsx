import React from 'react';
import type { CSSProperties } from 'react';
import './Hero.css';

const PARTICLES = [
  { left: '12%', size: 4, duration: 14, delay: 0 },
  { left: '28%', size: 3, duration: 18, delay: 3 },
  { left: '46%', size: 5, duration: 16, delay: 6 },
  { left: '63%', size: 3, duration: 20, delay: 2 },
  { left: '78%', size: 4, duration: 15, delay: 8 },
  { left: '90%', size: 3, duration: 19, delay: 5 },
];

const Hero: React.FC = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      {/* Background image (slow Ken Burns zoom) */}
      <div className="hero-bg-image" aria-hidden="true"></div>

      {/* Dark overlay for text readability */}
      <div className="hero-background" aria-hidden="true">
        <div className="hero-overlay"></div>
      </div>

      {/* Floating gold dust */}
      <div className="hero-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hero-particle"
            style={
              {
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {/* Decorative vertical gold line */}
      <span className="hero-side-line" aria-hidden="true"></span>

      <div className="hero-content">
        <h3 className="hero-subtitle">ELEVATING SAFETY</h3>
        <h1 className="hero-title" id="hero-heading">
          <span className="text-white hero-title-line">DELIVERING</span> <br />
          <span className="text-gold hero-title-line hero-title-line-2">TRUST</span>
        </h1>
        <div className="hero-divider"></div>
        <p className="hero-description">
          Venus Lift provides a complete range of elevator solutions with superior quality,
          advanced technology and unmatched safety.
        </p>
        <button className="hero-btn" type="button">
          <span className="hero-btn-text">EXPLORE MORE</span>
          <svg
            className="arrow-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Scroll cue */}
      {/* <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-text">SCROLL</span>
        <span className="hero-scroll-line"></span>
      </div> */}
    </section>
  );
};

export default Hero;