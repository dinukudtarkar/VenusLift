import React from "react";
import "../assets/styles/GearElevators.css";
import gearElevatorImage from "../assets/images/liftStructrure.png";

interface GearElevatorsProps {
  image?: string;
}

const GearElevators: React.FC<GearElevatorsProps> = ({
  image =  gearElevatorImage,
}) => {
  return (
    <section className="gear-elevator-section">
      <div className="gear-elevator-container">
        {/* Left: Elevator Structure Image */}
        <div className="gear-elevator-visual">
          <div className="gear-elevator-image-wrapper">
            <img
              src={image}
              alt="Venus Lifts geared elevator structure"
              className="gear-elevator-image"
            />

            <div className="gear-elevator-image-label">
              <span className="gear-label-line" />
              <span>ENGINEERED FOR PERFORMANCE</span>
            </div>
          </div>

          <div className="gear-elevator-image-caption">
            <span className="gear-caption-number">01</span>
            <span>GEARED ELEVATOR SYSTEM</span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="gear-elevator-content">
          <div className="gear-elevator-eyebrow">
            <span />
            VENUS LIFTS
          </div>

          <h2 className="gear-elevator-title">
            GEAR
            <span>ELEVATORS</span>
          </h2>

          <p className="gear-elevator-description">
            Geared elevators feature a gearbox connected to an AC or DC
            motor to provide reliable and efficient vertical transportation.
            Designed for dependable performance, these systems can achieve
            speeds of approximately 500 feet per minute, depending on the
            elevator configuration and application.
          </p>

          <div className="gear-elevator-divider" />

          <div className="gear-elevator-features">
            <div className="gear-feature">
              <span className="gear-feature-number">01</span>
              <div>
                <h3>Reliable Drive System</h3>
                <p>
                  A geared motor and gearbox work together to deliver
                  controlled elevator movement.
                </p>
              </div>
            </div>

            <div className="gear-feature">
              <span className="gear-feature-number">02</span>
              <div>
                <h3>AC or DC Motor</h3>
                <p>
                  Motor configurations can be selected to suit the
                  requirements of the elevator installation.
                </p>
              </div>
            </div>

            <div className="gear-feature">
              <span className="gear-feature-number">03</span>
              <div>
                <h3>Performance Focused</h3>
                <p>
                  Suitable for applications requiring dependable operation
                  and practical vertical transportation solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="gear-elevator-footer">
            <span className="gear-footer-mark">V</span>
            <span>PRECISION ENGINEERING. DEPENDABLE PERFORMANCE.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GearElevators;