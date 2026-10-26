
import React from "react";
import "../assets/styles/RepairsSection.css";

const RepairsSection: React.FC = () => {
  const repairServices = [
    {
      number: "01",
      title: "All-Make Elevator Repairs",
      description:
        "We repair elevators from various manufacturers, providing dependable solutions for a wide range of equipment and systems.",
    },
    {
      number: "02",
      title: "Safety & Performance Upgrades",
      description:
        "Our technicians identify repair and upgrade opportunities to improve elevator performance and help meet applicable safety requirements.",
    },
    {
      number: "03",
      title: "Modernization & Extended Life",
      description:
        "By upgrading existing components where appropriate, we help improve passenger comfort, enhance efficiency, and extend elevator service life.",
    },
  ];

  return (
    <section className="repairs-section" id="repairs">
      <div className="repairs-container">
        {/* Left Side - Repair Services */}
        <div className="repairs-services">
          <div className="repairs-services-header">
            <span>OUR REPAIR SOLUTIONS</span>
            <span className="repairs-services-count">03 SERVICES</span>
          </div>

          {repairServices.map((service) => (
            <article className="repairs-card" key={service.number}>
              <div className="repairs-card-number">{service.number}</div>

              <div className="repairs-card-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>

              <span className="repairs-card-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}

          <div className="repairs-note">
            <span className="repairs-note-dot" />
            Reliable repair solutions for smoother, safer elevator operation.
          </div>
        </div>

        {/* Right Side - Main Content */}
        <div className="repairs-content">
          <span className="repairs-eyebrow">
            <span className="repairs-eyebrow-line" />
            VENUS LIFTS
          </span>

          <h2 className="repairs-heading">
            Expert Repairs.
            <br />
            <span>Lasting Performance.</span>
          </h2>

          <h3 className="repairs-subheading">
            Professional Elevator Repair Services
          </h3>

          <p className="repairs-description">
            At Venus Lifts, we provide reliable repair solutions for elevators
            from various manufacturers. Our experienced technicians diagnose
            issues and repair or upgrade existing components to restore
            dependable elevator operation.
          </p>

          <p className="repairs-description">
            Our repair services focus on improving efficiency, passenger
            comfort, and equipment reliability while helping elevators meet
            applicable safety requirements. With the right repairs and
            upgrades, we help extend the service life of your elevator.
          </p>

          <a href="#contact" className="repairs-button">
            Enquire About Repairs
            <span aria-hidden="true">↗</span>
          </a>

          <div className="repairs-trust">
            <span className="repairs-trust-icon" aria-hidden="true">
              ✓
            </span>
            Multi-Brand Repairs
            <span className="repairs-trust-divider" />
            Reliable Solutions
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairsSection;
