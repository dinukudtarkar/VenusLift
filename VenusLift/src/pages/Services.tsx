import React from "react";
import "../assets/styles/Services.css";

interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Elevator Installation",
    description:
      "Professional elevator installation solutions designed for residential, commercial, and industrial buildings.",
    icon: "↗",
    link: "#twin-lifts",
  },
  {
    id: 2,
    number: "02",
    title: "Annual Maintenance",
    description:
      "Reliable preventive maintenance to keep your elevators operating smoothly, safely, and efficiently.",
    icon: "⚙",
    link: "#amc",
  },
  {
    id: 3,
    number: "03",
    title: "Repair & Breakdown",
    description:
      "Responsive troubleshooting and repair services to help restore elevator performance and minimise downtime.",
    icon: "🔧",
    link: "#repairs",
  },
  {
    id: 4,
    number: "04",
    title: "Elevator Modernisation",
    description:
      "Upgrade existing elevator systems with modern technology, improved performance, and a refreshed appearance.",
    icon: "✦",
    link: "#modernisation",
  },
  {
    id: 5,
    number: "05",
    title: "Premium Elevator Cabins",
    description:
      "Elegant cabin designs with carefully selected finishes to complement your building interiors.",
    icon: "▦",
    link: "#cabins",
  },
  {
    id: 6,
    number: "06",
    title: "Special Purpose Lifts",
    description:
      "Purpose-built lift solutions tailored to the specific transportation requirements of different environments.",
    icon: "⇅",
    link: "#special-purpose-lifts",
  },
];

const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Section Heading */}
        <div className="services-heading">
          <span className="services-eyebrow">WHAT WE DO</span>

          <h2>
            Complete Elevator
            <span> Solutions</span>
          </h2>

          <p>
            From installation to maintenance and modernisation, Venus Lifts
            delivers dependable elevator solutions focused on safety,
            performance, and lasting comfort.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>

                <span className="service-icon" aria-hidden="true">
                  {service.icon}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a
                href={service.link}
                className="service-link"
                aria-label={`Explore ${service.title}`}
              >
                Explore Service
                <span aria-hidden="true"> ↗</span>
              </a>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="services-cta">
          <div>
            <span className="services-cta-label">
              YOUR ELEVATOR, OUR EXPERTISE
            </span>

            <h3>Looking for the right elevator solution?</h3>

            <p>
              Let our team help you find the right solution for your building.
            </p>
          </div>

          <a href="#contact" className="services-cta-button">
            Get in Touch
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
