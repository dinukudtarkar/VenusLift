import React from "react";
import "../assets/styles/MRLGearlessElevators.css";
import gearlessImage from "../assets/images/mrlgearless.jfif"

interface MRLGearlessElevatorsProps {
  image?: string;
}

const MRLGearlessElevators: React.FC<MRLGearlessElevatorsProps> = ({
  image = gearlessImage,
}) => {
  return (
    <section className="mrl-section">
      <div className="mrl-container">
        {/* LEFT: ELEVATOR IMAGE */}
        <div className="mrl-visual">
          <div className="mrl-image-wrapper">
            <img
              src={image}
              alt="Venus Lifts machine-room-less gearless elevator system"
              className="mrl-image"
              loading="lazy"
            />

            <div className="mrl-image-overlay">
              <span className="mrl-overlay-line" />
              <span>ADVANCED ELEVATOR TECHNOLOGY</span>
            </div>

            <div className="mrl-image-index">
              <span>02</span>
              <div />
              <span>GEARLESS TECHNOLOGY</span>
            </div>
          </div>

          <div className="mrl-image-bottom">
            <span className="mrl-bottom-icon">V</span>
            <span>ENGINEERED BY VENUS LIFTS</span>
          </div>
        </div>

        {/* RIGHT: ELEVATOR INFORMATION */}
        <div className="mrl-content">
          <div className="mrl-eyebrow">
            <span />
            VENUS LIFTS
          </div>

          <h2 className="mrl-title">
            MRL
            <span>GEARLESS</span>
            ELEVATORS
          </h2>

          <p className="mrl-description">
            Machine Room-Less (MRL) gearless elevators eliminate the need for a
            separate machine room, offering greater flexibility in building
            design. Their compact machinery and modern engineering help optimise
            space while delivering smooth, quiet and efficient vertical
            transportation.
          </p>

          <div className="mrl-divider" />

          {/* KEY BENEFITS */}
          <div className="mrl-benefits">
            <div className="mrl-benefit">
              <span className="mrl-benefit-number">01</span>

              <div className="mrl-benefit-content">
                <h3>Space-Saving Design</h3>
                <p>
                  Removes the requirement for a separate machine room, allowing
                  greater flexibility in building planning.
                </p>
              </div>
            </div>

            <div className="mrl-benefit">
              <span className="mrl-benefit-number">02</span>

              <div className="mrl-benefit-content">
                <h3>Gearless Technology</h3>
                <p>
                  Modern gearless drive technology supports smooth, controlled
                  elevator operation.
                </p>
              </div>
            </div>

            <div className="mrl-benefit">
              <span className="mrl-benefit-number">03</span>

              <div className="mrl-benefit-content">
                <h3>Modern Building Integration</h3>
                <p>
                  An excellent option for projects seeking contemporary elevator
                  solutions with efficient space utilisation.
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mrl-footer">
            <span className="mrl-footer-mark">V</span>

            <span>SMART DESIGN. SMOOTH MOVEMENT. MODERN LIVING.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MRLGearlessElevators;
