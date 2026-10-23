import React from 'react';
import '../assets/styles/WhyChooseUs.css';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-section" id="why-us">
      <div className="why-container">
        {/* Section Header */}
        <div className="why-header">
          <div className="why-label-row">
            <span className="why-label-dot" />
            <span className="why-label">Why Choose Us</span>
          </div>
          <h2 className="why-headline">
            Delivering Safety, Quality & <span className="why-gold-text">Innovation</span>
          </h2>
          <p className="why-subheadline">
            We offer an excellent product range, customized solutions, and flexible maintenance services to ensure a smooth, safe ride every time.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="why-grid">
          {/* Card 1: Outstanding Service & Maintenance */}
          <div className="why-card">
            <div className="why-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a22e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <h3 className="why-card-title">Service & Maintenance</h3>
            <p className="why-card-text">
              We provide more than just a lift—we deliver long-term support. Our routine inspections and planned preventive maintenance guarantee safe, reliable operation and extend equipment lifespan.
            </p>
            <ul className="why-card-list">
              <li>Regular safety inspections</li>
              <li>Planned preventive maintenance</li>
              <li>Dedicated technical sales support</li>
            </ul>
          </div>

          {/* Card 2: Creative & Make in India */}
          <div className="why-card why-card-featured">
            <div className="why-badge">Make in India</div>
            <div className="why-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a22e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h3 className="why-card-title">Creative & Modern</h3>
            <p className="why-card-text">
              Our products are a perfect blend of global expertise and Indian design sensibilities. Driven by our passion for elevators, we deliver elegant designs equipped with the latest technology.
            </p>
            <ul className="why-card-list">
              <li>Global expertise, local craftsmanship</li>
              <li>Best-in-class functionality</li>
              <li>Customized design options</li>
            </ul>
          </div>

          {/* Card 3: Our Expert Team */}
          <div className="why-card">
            <div className="why-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a22e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="why-card-title">Our Expert Team</h3>
            <p className="why-card-text">
              Backed by one of the finest workforces in the industry, our team operates with complete coordination, determination, and hard work to achieve success and exceed client expectations.
            </p>
            <ul className="why-card-list">
              <li>Highly coordinated workforce</li>
              <li>Excellence-driven execution</li>
              <li>Reliable customer support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;