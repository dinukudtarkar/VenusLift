import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-brand">
          <svg className="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L2 22h20L12 2z" stroke="#cca34d" />
            <path d="M12 8l-5 10h10L12 8z" stroke="#cca34d" />
          </svg>
          <div className="brand-text">
            <span className="brand-title">VENUS LIFT</span>
            <span className="brand-subtitle">ELEVATING SAFETY. DELIVERING TRUST.</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={`navbar-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="/" className="nav-link active">HOME</a></li>
            <li><a href="/about" className="nav-link">ABOUT US</a></li>
            <li className="nav-item-dropdown">
              <a href="/products" className="nav-link">PRODUCTS <span className="dropdown-arrow">▼</span></a>
            </li>
            <li><a href="/services" className="nav-link">SERVICES</a></li>
            <li><a href="/projects" className="nav-link">PROJECTS</a></li>
            <li><a href="/gallery" className="nav-link">GALLERY</a></li>
            <li><a href="/contact" className="nav-link">CONTACT US</a></li>
          </ul>
        </nav>

        {/* Right Action & Mobile Toggle */}
        <div className="navbar-actions">
          <a href="tel:+911234567890" className="contact-btn">
            <svg className="phone-icon" viewBox="0 0 24 24" fill="none" stroke="#cca34d" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +91 12345 67890
          </a>
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;