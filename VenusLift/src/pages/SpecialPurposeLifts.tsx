import React from "react";
import "../assets/styles/SpecialPurposeLifts.css";

interface LiftType {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  reverse?: boolean;
}

interface SpecialPurposeLiftsProps {
  carLiftImage?: string;
  hospitalLiftImage?: string;
}
import carLifts from '../assets/images/carLift.jfif';
import hospitalLift from '../assets/images/hospitalLift.png';
const SpecialPurposeLifts: React.FC<SpecialPurposeLiftsProps> = ({
  carLiftImage =carLifts,
  hospitalLiftImage = hospitalLift,
}) => {
  const lifts: LiftType[] = [
    {
      number: "03",
      title: "CAR",
      subtitle: "LIFTS",
      description:
        "Venus Lifts provides specialised car lift solutions for buildings where vehicles need to move safely and efficiently between floors. Designed for automotive showrooms, parking facilities, residential complexes and commercial spaces, our car lifts help optimise space while offering convenient vehicle transportation.",
      image: carLiftImage,
      imageAlt: "Car lift system by Venus Lifts",
      features: [
        "Vehicle Transportation Between Floors",
        "Space-Efficient Parking Solutions",
        "Designed for Automotive and Commercial Applications",
      ],
    },
    {
      number: "04",
      title: "HOSPITAL",
      subtitle: "LIFTS",
      description:
        "Venus Lifts offers hospital lift solutions designed to support the movement of patients, hospital beds, stretchers, medical equipment and healthcare personnel. With spacious cabin options and carefully planned access, these elevators help facilitate smooth movement throughout healthcare facilities.",
      image: hospitalLiftImage,
      imageAlt: "Hospital lift system by Venus Lifts",
      features: [
        "Spacious Cabins for Beds and Stretchers",
        "Smooth and Controlled Travel",
        "Designed for Healthcare Facilities",
      ],
      reverse: true,
    },
  ];

  return (
    <section className="special-lifts-section">
      <div className="special-lifts-header">
        <span className="special-lifts-eyebrow">
          <span />
          VENUS LIFTS
          <span />
        </span>

        <h2>
          SPECIAL PURPOSE
          <span> ELEVATORS</span>
        </h2>

        <p>
          Purpose-built elevator solutions designed to meet the specific
          requirements of modern buildings and specialised environments.
        </p>
      </div>

      <div className="special-lifts-list">
        {lifts.map((lift) => (
          <article
            className={`special-lift-card ${
              lift.reverse ? "special-lift-reverse" : ""
            }`}
            key={lift.number}
          >
            {/* IMAGE */}
            <div className="special-lift-visual">
              <div className="special-lift-image-wrapper">
                <img
                  src={lift.image}
                  alt={lift.imageAlt}
                  className="special-lift-image"
                  loading="lazy"
                />

                <div className="special-lift-image-badge">
                  <span>{lift.number}</span>
                  <span className="special-lift-badge-line" />
                  <span>VENUS LIFTS</span>
                </div>
              </div>

              <div className="special-lift-image-caption">
                <span className="special-lift-caption-mark">V</span>
                <span>ENGINEERED FOR YOUR NEEDS</span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="special-lift-content">
              <div className="special-lift-category">
                <span />
                ELEVATOR SOLUTIONS
              </div>

              <h3 className="special-lift-title">
                {lift.title}
                <span>{lift.subtitle}</span>
              </h3>

              <p className="special-lift-description">
                {lift.description}
              </p>

              <div className="special-lift-divider" />

              <h4 className="special-lift-features-heading">
                KEY FEATURES
              </h4>

              <ul className="special-lift-features">
                {lift.features.map((feature) => (
                  <li key={feature}>
                    <span className="special-lift-check">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="special-lift-footer">
                <span className="special-lift-footer-mark">V</span>
                <span>SAFETY. QUALITY. RELIABILITY.</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SpecialPurposeLifts;