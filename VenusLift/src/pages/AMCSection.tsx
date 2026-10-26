import React from "react";
import "../assets/styles/AMCSection.css";

const AMCSection: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Comprehensive AMC",
      description:
        "Complete elevator maintenance covering scheduled servicing, inspections, and essential maintenance to help ensure reliable operation.",
    },
    {
      number: "02",
      title: "Non-Comprehensive AMC",
      description:
        "Cost-effective maintenance with routine servicing and preventive inspections, based on the agreed contract terms.",
    },
    {
      number: "03",
      title: "Expert Technical Support",
      description:
        "Our experienced service team focuses on elevator safety, dependable performance, and timely maintenance support.",
    },
  ];

  return (
    <section className="amc-section" id="amc">
      <div className="amc-container">
        {/* Left Content */}
        <div className="amc-content">
          <span className="amc-eyebrow">
            <span className="amc-eyebrow-line" />
            VENUS LIFTS
          </span>

          <h2 className="amc-heading">
            Reliable Care.
            <br />
            <span>Elevated Performance.</span>
          </h2>

          <h3 className="amc-subheading">
            Annual Maintenance Contract (AMC)
          </h3>

          <p className="amc-description">
            At Venus Lifts, we provide dependable elevator maintenance
            solutions designed to keep your lifts operating safely,
            smoothly, and efficiently. Our experienced service team
            delivers quality maintenance at reasonable costs without
            compromising on service standards.
          </p>

          <p className="amc-description">
            We offer both comprehensive and non-comprehensive maintenance
            contracts for different types of elevators. Our focus is on
            preventive care, reliable service, customer satisfaction, and
            building long-term relationships with our clients.
          </p>

          <a href="#contact" className="amc-button">
            Request an AMC Quote
            <span aria-hidden="true">↗</span>
          </a>

          <div className="amc-trust">
            <span className="amc-trust-icon" aria-hidden="true">
              ✓
            </span>
            Quality Maintenance
            <span className="amc-trust-divider" />
            Cost-Effective Solutions
          </div>
        </div>

        {/* Right Service Cards */}
        <div className="amc-services">
          <div className="amc-services-header">
            <span>OUR MAINTENANCE SERVICES</span>
            <span className="amc-services-count">03 SERVICES</span>
          </div>

          {services.map((service) => (
            <article className="amc-card" key={service.number}>
              <div className="amc-card-number">{service.number}</div>

              <div className="amc-card-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>

              <span className="amc-card-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}

          <div className="amc-note">
            <span className="amc-note-dot" />
            Maintenance solutions tailored to your elevator requirements.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMCSection;