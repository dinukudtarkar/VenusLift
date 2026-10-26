import React from "react";
import "../assets/styles/About.css";
import liftImage  from "../assets/images/lift_image2.png";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "300+", label: "Happy Clients" },
  { value: "24/7", label: "Service Support" },
  { value: "100%", label: "Quality Assurance" },
];

const AboutUs: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Main Grid */}
        <div className="about-grid">
          {/* Left - Content */}
          <div className="about-content-col">
            <div className="about-label-row">
              <span className="about-label-dot" />
              <span className="about-label">About Us</span>
            </div>

            <h2 className="about-headline">
              Lifting Lives With
              <span className="about-headline-gold"> Innovation & Care</span>
            </h2>

            <p className="about-body">
              Venus Lift is a trusted and growing name in the elevator and
              vertical transportation industry, dedicated to delivering safe,
              reliable, and high-quality lift solutions for residential,
              commercial, industrial, and institutional applications. With a
              strong commitment to safety, innovation, quality, and customer
              satisfaction, we strive to provide elevator systems that combine
              advanced technology with superior performance. At Venus Lift, we
              understand that every building has unique requirements. Our team
              of experienced professionals works closely with clients to
              understand their specific needs and provide customized elevator
              solutions that are efficient, comfortable, durable, and
              cost-effective.  
            </p>

            <button className="about-btn">
              Know More <span className="about-btn-arrow">→</span>
            </button>
          </div>

          {/* Right - Image */}
          <div className="about-image-col">
            <div className="about-image-wrapper">
              <img
                src={liftImage}
                alt="Modern elevator by Venus Lift"
                className="about-image"
              />

              {/* Floating Stat Card */}
              <div className="about-image-stat">
                <span className="about-image-stat-number">25+</span>
                <span className="about-image-stat-text">
                  Years of
                  <br />
                  Excellence
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="about-stats-bar">
          {stats.map((stat, i) => (
            <div className="about-stat-item" key={i}>
              <span className="about-stat-value">{stat.value}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
