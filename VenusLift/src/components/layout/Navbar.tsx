import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  };

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `#${id}`);
    }

    closeMenu();
  };

  const handleProductsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (window.innerWidth <= 900) {
      setIsProductsOpen((previous) => !previous);
    } else {
      document
        .getElementById("gear-elevators")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    scrollToSection(event, id);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* BRAND LOGO */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(event) => handleNavigation(event, "home")}
          aria-label="Venus Lifts home"
        >
          <svg
            className="brand-icon"
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
          >
            <path d="M20 3 L3 36 H37 Z" stroke="#cca34d" strokeWidth="1.6" />
            <path d="M20 13 L10 32 H30 Z" stroke="#cca34d" strokeWidth="1.6" />
            <path d="M20 21 V32" stroke="#cca34d" strokeWidth="1.6" />
          </svg>

          <div className="brand-text">
            <span className="brand-title">VENUS LIFTS</span>
            <span className="brand-subtitle">
              ELEVATING SAFETY. DELIVERING TRUST.
            </span>
          </div>
        </a>

        {/* MOBILE MENU OVERLAY */}
        {isMobileMenuOpen && (
          <button
            type="button"
            className="navbar-overlay"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
        )}

        {/* NAVIGATION */}
        <nav
          className={`navbar-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            <li>
              <a
                href="#home"
                className="nav-link"
                onClick={(event) => handleNavigation(event, "home")}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="nav-link"
                onClick={(event) => handleNavigation(event, "about")}
              >
                About Us
              </a>
            </li>

            {/* PRODUCTS DROPDOWN */}
            <li
              className={`nav-item-dropdown ${
                isProductsOpen ? "dropdown-open" : ""
              }`}
            >
              <button
                type="button"
                className="nav-link dropdown-trigger"
                onClick={handleProductsClick}
                aria-expanded={isProductsOpen}
              >
                Products
                <span className="dropdown-arrow">⌄</span>
              </button>

              <div className="navbar-dropdown">
                <a
                  href="#twin-lifts"
                  onClick={(event) => handleNavigation(event, "twin-lifts")}
                >
                  Twin Lifts
                </a>

                <a
                  href="#cabins"
                  onClick={(event) => handleNavigation(event, "cabins")}
                >
                  Premium Lift Cabins
                </a>

                <a
                  href="#car-operating-panel"
                  onClick={(event) =>
                    handleNavigation(event, "car-operating-panel")
                  }
                >
                  Car Operating Panels
                </a>

                <a
                  href="#gear-elevators"
                  onClick={(event) => handleNavigation(event, "gear-elevators")}
                >
                  Gear Elevators
                </a>

                <a
                  href="#mrl-gearless"
                  onClick={(event) => handleNavigation(event, "mrl-gearless")}
                >
                  MRL Gearless Elevators
                </a>

                <a
                  href="#special-purpose-lifts"
                  onClick={(event) =>
                    handleNavigation(event, "special-purpose-lifts")
                  }
                >
                  Car & Hospital Lifts
                </a>
              </div>
            </li>

            <li>
              <a
                href="#services"
                className="nav-link"
                // onClick={(event) => handleNavigation(event, "services")}
                onClick={(event) => handleNavigation(event, "services")}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#safety-features"
                className="nav-link"
                onClick={(event) => handleNavigation(event, "safety-features")}
              >
                Safety
              </a>
            </li>

            <li>
              <a
                href="#gallery"
                className="nav-link"
                onClick={(event) => handleNavigation(event, "gallery")}
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="nav-link"
                onClick={(event) => handleNavigation(event, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* MOBILE CONTACT BUTTON */}
          <a
            href="tel:+91762063853"
            className="mobile-contact-btn"
            onClick={closeMenu}
          >
            Call Venus Lifts
          </a>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="navbar-actions">
          <a href="tel:+917620638530" className="contact-btn">
            <svg
              className="phone-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2
                19.79 19.79 0 0 1-8.63-3.07
                19.5 19.5 0 0 1-6-6
                19.79 19.79 0 0 1-3.07-8.67
                A2 2 0 0 1 4.11 2h3
                a2 2 0 0 1 2 1.72
                12.84 12.84 0 0 0 .7 2.81
                2 2 0 0 1-.45 2.11L8.09 9.91
                a16 16 0 0 0 6 6l1.27-1.27
                a2 2 0 0 1 2.11-.45
                12.84 12.84 0 0 0 2.81.7
                A2 2 0 0 1 22 16.92z"
              />
            </svg>

            <span>Call Us</span>
          </a>

          <button
            type="button"
            className={`mobile-toggle ${
              isMobileMenuOpen ? "toggle-active" : ""
            }`}
            onClick={toggleMenu}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
