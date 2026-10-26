import { useEffect, useRef, type CSSProperties } from 'react';
import '../assets/styles/AdvanceFeatures.css';
import  doorDriver from '../assets/images/AdvanceFeature_DOOR & DRIVE HEADERS.jfif';
import  gearTractionMachine from '../assets/images/AdvanceFeature_GEARED TRACTION_MACHINE.jfif';
import  gearlessMachine from '../assets/images/AdvanceFeature_GEARLESS_MACHIN.jfif';
import  infraSensor from  '../assets/images/AdvanceFeature_INFRA_SENSOR2.jpg';
import v3fDrive from  '../assets/images/AdvanceFeature_V3F_DRIVE.jfif';
import  doorSensor from  '../assets/images/AdvanceFeature_door sensor.jfif';
import  downcollector  from  '../assets/images/AdvanceFeature_DOWNCOLLETCTIVEPANNEL.jfif';
import  overloadSensor  from  '../assets/images/AdvanceFeature_Elevator-AdvanceFeature_Overload-Sensor.png';
import  fullCollective  from  '../assets/images/AdvanceFeature_full-collective-lift-controller.jpg';
import  rescueDevice  from  '../assets/images/AdvanceFeature_Rescue-Device-For-Elevator.jpg';
// import LiftScene from '../components/common/Liftscene';
import DoorsCabins from './DoorsCabins';

const advancedFeatures = [
  {
    id: 1,
    tag: "Drive System",
    title: "Geared Traction Machine",
    description:
      "Driven by AC electric motors. These machines combine an AC motor, electromagnetic brake, worm reduction gear and friction sheave mounted on a bed plate. The components rest on the machine room bottom slab using rubber pads for noiseless, vibration-free operation. Normally installed in the machine room above the lift well.",
    points: [],
    image: gearTractionMachine,
  },
  {
    id: 2,
    tag: "Drive System",
    title: "Gearless Machine (PMSM)",
    description:
      "Considered the future technology in the elevator industry, also known as Permanent Magnet Synchronous Motors (PMSM). Compact, lighter in weight and simple in construction, hence easy to install and maintain.",
    points: [
      "Uses a rare earth material with high magnetic flux density",
      "Higher mechanical torque and output volume",
      "Better dynamics than electromagnetic motors",
      "Saves approx. 40-60% energy vs. traditional traction machines",
      "Improved life span, more economical for end users in the long term",
    ],
    image: gearlessMachine,
  },
  {
    id: 3,
    tag: "Drive System",
    title: "Variable Voltage Variable Frequency (V3F) Drive",
    description:
      "Just as car air conditioning has become a standard feature in any modern car, the V3F drive is an essential feature of a modern elevator and real value for money.",
    points: [
      "Smooth start & stop",
      "Floor announcement system",
      "Level accuracy irrespective of load",
      "Improves life of lift",
      "Reduces electricity consumption",
    ],
    image: v3fDrive,
  },
  {
    id: 4,
    tag: "Safety",
    title: "Infra Red Full Length Door Sensor",
    description:
      "This safety system provides a light curtain of infra-red beams between the lift car door panels. Any person or object breaking the beams triggers the system and reopens the doors. The beams pick up even small objects entering the car.",
    points: [
      "Designed for ultimate safety with crisscross beams on the car door",
      "Offers protection up to full height",
      "Detects any kind of contact/object and reverses the closing operation",
      "Assures complete safety of passengers and objects",
    ],
    image: infraSensor,
  },
  {
    id: 5,
    tag: "Safety",
    title: "Automatic Rescue Device (ARD)",
    description:
      "In case of power failure, this system brings the lift to the nearest floor so anyone trapped inside can exit easily. It runs on batteries and comes into play only when the main power fails.",
    points: [
      "Entirely automatic, triggered within a short time after power failure detection",
      "Compact device with batteries placed safely inside the system",
      "All operations are automatic, avoiding any human intervention in rescue",
    ],
    image: rescueDevice,
  },
  {
    id: 6,
    tag: "Doors",
    title: "Door & Drive Headers",
    description:
      "Low voltage and noiseless operation with a V3F door motor, with programmable opening/closing speed and time.",
    points: [
      "Low voltage operation",
      "Noiseless V3F door motor",
      "Programmable opening/closing speed & time",
    ],
    image: doorDriver,
  },
  {
    id: 7,
    tag: "Control Panel",
    title: "Down Collective Memory System",
    description:
      "Suitable for low rise residential buildings where the main requirement is to travel from the ground floor to any floor and vice versa. The control system registers and retains in memory the down hall calls and car calls, which are answered in a logical order to ensure minimum necessary car movement, giving quick response to passenger traffic and substantial energy saving.",
    points: [],
    image: downcollector,
  },
  {
    id: 8,
    tag: "Control Panel",
    title: "Full Collective Memory System",
    description:
      "Registers and retains in memory the calls of both directions, hence is suitable for high rise buildings and commercial/industrial buildings where, in addition to movement between ground and upper floors, there is also inter-floor traffic to serve.",
    points: [],
    image: fullCollective,
  },
  {
    id: 9,
    tag: "Comfort",
    title: "Additional Features",
    description: "Finishing touches that make every ride more comfortable and easier to use.",
    points: [
      "Hall buttons / car buttons with S.S. face plates",
      "Decorative false ceiling, high speed fan and LED lights",
      "Digital floor position indicators",
      "Call registration light system",
    ],
    image: doorSensor,
  },
  {
    id: 10,
    tag: "Safety",
    title: "Overload Sensor",
    description:
      "If the elevator has an overload sensor, it simply stays put and flashes a light or an alert message indicating an overload when the rated capacity is exceeded.",
    points: [],
    image: overloadSensor,
  },
];

/* Adds the "is-visible" class once an element scrolls into view */
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
};

const AdvanceFeatures = () => {
  const pageRef = useReveal();

  return (
    <div className="advancefeature-page-container" ref={pageRef}>
      {/* Hero Section */}
      <section className="advancefeature-hero-section">
         {/* <LiftScene /> */}
        <span className="advancefeature-glow advancefeature-glow-a" />
        <span className="advancefeature-glow advancefeature-glow-b" />
        <div className="advancefeature-hero-inner">
          <span className="advancefeature-hero-eyebrow">Venus Lift</span>
          <h1 className="advancefeature-hero-title">
            Elevating Safety,{' '}
            <span className="advancefeature-highlight-text">Delivering Trust</span>
          </h1>
          <p className="advancefeature-hero-quote">
            "Venus Lift is dedicated to continuous upgrading and promotion, achieving the
            maximization of customer values."
          </p>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="advancefeature-section-wrapper">
        <div className="advancefeature-section-header" data-reveal>
          <h2 className="advancefeature-section-title">Advanced Features</h2>
          <div className="advancefeature-section-divider"></div>
        </div>

        <div className="advancefeature-features-grid">
          {advancedFeatures.map((feature, i) => (
            <article
              key={feature.id}
              className="advancefeature-feature-card"
              data-reveal
              style={{ '--delay': `${(i % 3) * 120}ms` } as CSSProperties}
            >
              <div className="advancefeature-feature-image-wrapper">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="advancefeature-feature-image"
                  loading="lazy"
                />
                <span className="advancefeature-feature-number">
                  {String(feature.id).padStart(2, '0')}
                </span>
                <span className="advancefeature-feature-tag">{feature.tag}</span>
              </div>

              <div className="advancefeature-feature-body">
                <h3 className="advancefeature-feature-title">{feature.title}</h3>
                <p className="advancefeature-feature-description">{feature.description}</p>

                {feature.points.length > 0 && (
                  <ul className="advancefeature-feature-list">
                    {feature.points.map((p) => (
                      <li key={p} className="advancefeature-feature-list-item">
                        <svg
                          className="advancefeature-check-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Doors & Cabins Section (separate component) */}
      <DoorsCabins />
    </div>
  );
};

export default AdvanceFeatures;