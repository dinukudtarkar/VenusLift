import React from "react";
import "../../assets/styles/Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Advanced Features", href: "#advanced-features" },
    { label: "Safety Features", href: "#safety-features" },
  ];

  const serviceLinks = [
    { label: "Elevator Solutions", href: "#elevator-solutions" },
    { label: "Elevator Doors", href: "#elevator-doors" },
    { label: "Premium Cabins", href: "#cabins" },
    { label: "Modernisation", href: "#modernisation" },
    { label: "Repairs & Maintenance", href: "#repairs" },
    { label: "Annual Maintenance (AMC)", href: "#amc" },
  ];

  const elevatorLinks = [
    { label: "Twin Lifts", href: "#twin-lifts" },
    { label: "Gear Elevators", href: "#gear-elevators" },
    { label: "MRL Gearless Elevators", href: "#mrl-gearless" },
    { label: "Car & Hospital Lifts", href: "#special-purpose-lifts" },
    { label: "Car Operating Panels", href: "#car-operating-panel" },
  ];

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector(href);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const renderLinks = (links: { label: string; href: string }[]) => (
    <ul className="venus-footer-links">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            onClick={(event) => handleNavigation(event, link.href)}
          >
            <span className="venus-footer-link-arrow">↗</span>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="venus-footer">
      {/* TOP CTA */}
      <div className="venus-footer-cta">
        <div className="venus-footer-cta-content">
          <span className="venus-footer-eyebrow">
            YOUR VERTICAL MOBILITY PARTNER
          </span>

          <h2>
            Let's Elevate
            <span> Your Expectations.</span>
          </h2>

          <p>
            Looking for a reliable elevator solution? Let's discuss your project
            and find the right lift for your building.
          </p>
        </div>

        <a href="mailto:info@ven lifts.com" className="venus-footer-cta-button">
          Get in Touch
          <span>↗</span>
        </a>
      </div>

      {/* MAIN FOOTER */}
      <div className="venus-footer-main">
        <div className="venus-footer-brand">
          <a
            href="#home"
            className="venus-footer-logo"
            aria-label="Venus Lifts home"
            onClick={(event) => handleNavigation(event, "#home")}
          >
            <span className="venus-footer-logo-mark">V</span>

            <span className="venus-footer-logo-text">
              <strong>VENUS</strong>
              <small>LIFTS</small>
            </span>
          </a>

          <p className="venus-footer-brand-description">
            Elevating spaces with thoughtfully engineered elevator solutions.
            Venus Lifts is committed to quality, dependable performance, and
            customer satisfaction.
          </p>

          <div className="venus-footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              FB
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              IN
            </a>
          </div>
        </div>

        <div className="venus-footer-column">
          <h3>Explore</h3>
          {renderLinks(companyLinks)}
        </div>

        <div className="venus-footer-column">
          <h3>Our Services</h3>
          {renderLinks(serviceLinks)}
        </div>

        <div className="venus-footer-column">
          <h3>Elevator Types</h3>
          {renderLinks(elevatorLinks)}
        </div>
      </div>

      {/* CONTACT STRIP */}
      <div className="venus-footer-contact">
        <div className="venus-footer-contact-item">
          <span className="venus-footer-contact-icon">✉</span>
          <div>
            <small>Email Us</small>
            <a href="mailto:info@venuslifts.com">venuslift27@gmail.com</a>
          </div>
        </div>

        <div className="venus-footer-contact-item">
          <span className="venus-footer-contact-icon">☎</span>
          <div>
            <small>Call Us</small>
            <a href="tel:+917620638530">+917620638530</a>
          </div>
        </div>

        <div className="venus-footer-contact-item">
          <span className="venus-footer-contact-icon">⌖</span>
          <div>
            <small>Our Location</small>
            <span>Unique Palace, No. 104, A-wing, Friends Colony, Chinchpada, Kalyan (E), Thane – 421306.</span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="venus-footer-bottom">
        <p>
          © {currentYear} <strong>Venus Lifts.</strong> All rights reserved.
        </p>

        <p className="venus-footer-bottom-tagline">
          Designed for comfort. Built for reliability.
        </p>

        <a
          href="#home"
          className="venus-footer-back-top"
          onClick={(event) => handleNavigation(event, "#home")}
        >
          Back to top <span>↑</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
