import React from "react";
import "../assets/styles/CabinsSection.css";
import cabinImage from '../assets/images/liftCabin.png'

interface CabinType {
  number: string;
  title: string;
  description: string;
}

const cabinTypes: CabinType[] = [
  {
    number: "01",
    title: "Mild Steel Powder-Coated Cabin",
    description:
      "Durable, versatile cabins available in a range of colours to complement your building interiors.",
  },
  {
    number: "02",
    title: "Stainless Steel Hairline Finish",
    description:
      "A sophisticated brushed-metal finish offering a clean, contemporary appearance.",
  },
  {
    number: "03",
    title: "Stainless Steel Mirror Finish",
    description:
      "A sleek, reflective finish that brings a luxurious and elegant look to your elevator cabin.",
  },
  {
    number: "04",
    title: "Panoramic / Capsule Cabin",
    description:
      "A distinctive glass-style design that creates an open, modern aesthetic and enhances the visual appeal of your building.",
  },
];

const CabinsSection: React.FC = () => {
  return (
    <section className="cabins-section" id="elevator-cabins">
      <div className="cabins-container">
        {/* Left: Content */}
        <div className="cabins-content">
          <div className="cabins-eyebrow">
            <span className="cabins-eyebrow-line" />
            VENUS LIFTS
          </div>

          <h2 className="cabins-heading">
            State-of-the-Art
            <span> Cabins</span>
          </h2>

          <p className="cabins-description">
            At Venus Lifts, we offer a diverse range of elevator cabins
            designed to combine aesthetics, comfort, and functionality.
            Choose from a variety of colours, materials, and finishes
            to complement your building's architecture and personal style.
          </p>

          <div className="cabins-list-heading">
            <span className="cabins-list-line" />
            TYPES OF CABINS
          </div>

          <div className="cabins-types">
            {cabinTypes.map((cabin) => (
              <article className="cabins-type" key={cabin.number}>
                <span className="cabins-type-number">
                  {cabin.number}
                </span>

                <div className="cabins-type-info">
                  <h3>{cabin.title}</h3>
                  <p>{cabin.description}</p>
                </div>

                <span
                  className="cabins-type-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </article>
            ))}
          </div>

          {/* <a href="#contact" className="cabins-button">
            Explore Cabin Options
            <span aria-hidden="true">↗</span>
          </a> */}
        </div>

        {/* Right: Elevator Cabin Image */}
        <div className="cabins-visual">
          <div className="cabins-image-frame">
            <img
              src={cabinImage}
              alt="Premium elevator cabin interior by Venus Lifts"
              className="cabins-image"
              loading="lazy"
            />

            <div className="cabins-image-overlay" />

            <div className="cabins-image-label">
              <span className="cabins-label-line" />
              <div>
                <span className="cabins-label-caption">
                  DESIGN MEETS COMFORT
                </span>
                <h3>Crafted for Modern Spaces</h3>
              </div>
            </div>

            <div className="cabins-image-index">
              <span>VL</span>
              <span className="cabins-index-divider" />
              <span>01 — 04</span>
            </div>
          </div>

          <div className="cabins-image-note">
            <span className="cabins-note-dot" />
            Multiple finishes. One elevated experience.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinsSection;