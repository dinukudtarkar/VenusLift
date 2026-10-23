import React, { useRef, useEffect, useState } from 'react';
import '../assets/styles/Features.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'SAFETY FIRST',
    description: 'Multi-layer safety systems exceeding international standards for complete peace of mind.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
      </svg>
    ),
    title: 'BEST QUALITY',
    description: 'Premium materials and rigorous quality control ensuring elevators that last.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'EXPERT TEAM',
    description: 'Certified engineers with decades of experience in flawless installation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        <path d="M14.05 2a9 9 0 018 7.94" />
        <path d="M14.05 6A5 5 0 0119 10.95" />
      </svg>
    ),
    title: '24/7 SUPPORT',
    description: 'Round-the-clock emergency response keeping your elevators always running.',
  },
];

const Features: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    let animationId: number;
    const speed = 0.5;

    const step = () => {
      if (!isPaused) {
        scrollAmount += speed;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Clone features for infinite loop
  const allFeatures = [...features, ...features, ...features, ...features];

  return (
    <section className="features-section">
      {/* Desktop Grid View */}
      <div className="features-desktop">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={`desktop-${index}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-wrap">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <div className="feature-text">
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.description}</p>
              </div>
              <div className="feature-glow" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Auto-Scroll View */}
      <div className="features-mobile">
        <div
          className="features-scroll-track"
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
        >
          {allFeatures.map((feature, index) => (
            <div
              className="feature-card-mobile"
              key={`mobile-${index}`}
            >
              <div className="feature-icon-wrap-mobile">
                <div className="feature-icon-mobile">{feature.icon}</div>
              </div>
              <h4 className="feature-title-mobile">{feature.title}</h4>
              <p className="feature-desc-mobile">{feature.description}</p>
              <div className="feature-glow-mobile" />
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="scroll-fade-left" />
        <div className="scroll-fade-right" />
      </div>
    </section>
  );
};

export default Features;