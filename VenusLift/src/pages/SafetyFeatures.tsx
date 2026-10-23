import  { useState, useRef, useEffect } from 'react';
import '../assets/styles/SafetyFeatures.css';

const safetyFeaturesData = [
  {
    id: 1,
    title: "Infrared Light Curtain",
    description: "Full height infrared curtain with multiple criss-crossing light beams detect the smallest obstruction in door path and stop doors from closing."
  },
  {
    id: 2,
    title: "Over Load Sensor with Audio Visual Indication",
    description: "On overloading of the lift, car audio-visual indication is provided and doors are kept open till excess load is removed."
  },
  {
    id: 3,
    title: "Car Emergency Light & Fan",
    description: "The emergency light is always illuminated in normal condition and switches itself automatically to battery back up in case of power failure as shown in picture. (Block-D) Fan also operates for minimum 20 minutes after power failure."
  },
  {
    id: 4,
    title: "Emergency Alarm & 'Push to Talk'",
    description: "In case of any emergency or power failure, help can be obtained by alarming or by communicating at lobby through this system which is battery operated and self charging as shown in picture. (Block-E)"
  },
  {
    id: 5,
    title: "Safety in Case of Over Travel",
    description: "Three-phase electric power is disconnected from control panel and motor, the moment elevator car moves beyond the limit of top & bottom terminal floors causing immediate application of the brake to bring the elevator to halt."
  },
  {
    id: 6,
    title: "Safety in Case of Rope Breakage",
    description: "In the event of breakage of ropes, elevator speed exceeds the rated speed in the downward direction due to gravitational acceleration. The over speed governor activates the clutch mechanism thereby switching off main controls and jamming the elevator car safely on guide rails."
  },
  {
    id: 7,
    title: "PU Buffers",
    description: "Polyurethane polymer blocks are long lasting, weather resistant and most reliable in all operating Conditions for providing maximum safety in case of buffering of elevator car."
  },
  {
    id: 8,
    title: "Car Fan Automatic Sleep",
    description: "Car fan automatically stops when there are no registered floor calls resulting into saving in power and enhancing its life."
  },
  {
    id: 9,
    title: "Voice Annunciator with Music",
    description: "This system provides detailed information to passengers related to next floor, direction of movement, door opening/closing, scheduled operations and other information depending on the building needs. This system features natural electronic voice synthesizers."
  },
  {
    id: 10,
    title: "V3F Drive (Car Movement)",
    description: "Microprocessor based V3F, vector controlled drive with encoder feedback closed loop system. This system provides highest degree of smoothness in elevator car movement with precise leveling. The efficiency of power conversion is very high resulting into an overall power saving of the order of 40%."
  },
  {
    id: 11,
    title: "Self-Diagnostic System",
    description: "The built in computer control system self diagnosis various operational and safety parameters to improve overall reliability and safety of lift operation."
  },
  {
    id: 12,
    title: "V3F Drive (Door Operation)",
    description: "Microprocessor based V3F, vector controlled drive with encoder feedback closed loop system for door operation. This system reduces the door opening and closing time drastically compared to conventional door operation system thereby improving the passenger handling capacity."
  }
];

const SafetyFeatures = () => {
  const [showAll, setShowAll] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null); // Added TS type here just in case

  // Auto-scroll logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (!showAll && !isPaused) {
      interval = setInterval(() => {
        const slider = sliderRef.current;
        
        // TypeScript Fix: Ensure slider is not null before proceeding
        if (!slider) return; 

        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const card = slider.querySelector('.safety-card');
          // TypeScript Fix: Ensure the card exists before getting its width
          if (card) {
            const cardWidth = card.clientWidth + 32; 
            slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        }
      }, 3500); 
    }
    
    return () => clearInterval(interval);
  }, [showAll, isPaused]);

  // Manual Scroll Function
  const scroll = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;
    
    // TypeScript Fix: Ensure slider is not null
    if (!slider) return; 

    const card = slider.querySelector('.safety-card');
    
    // TypeScript Fix: Ensure card is not null
    if (card) {
      const cardWidth = card.clientWidth + 32;
      slider.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="safety-section">
      <div className="safety-container">
        
        <div className="safety-header">
          <h2 className="safety-main-title">Safety Features</h2>
          <div className="safety-divider"></div>
          <p className="safety-subtitle">
            Engineered with advanced technology to ensure absolute protection and peace of mind on every floor.
          </p>
          
          <button 
            className="safety-toggle-btn" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : `View All ${safetyFeaturesData.length} Features`}
          </button>
        </div>

        {showAll ? (
          /* GRID VIEW */
          <div className="safety-grid">
            {safetyFeaturesData.map((feature) => (
              <div key={feature.id} className="safety-card">
                <div className="safety-icon-wrapper">
                  <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="safety-card-title">{feature.title}</h3>
                <p className="safety-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        ) : (
          /* SLIDER VIEW */
          <div 
            className="safety-slider-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button className="slider-nav-btn left" onClick={() => scroll('left')}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            <div className="safety-slider" ref={sliderRef}>
              {safetyFeaturesData.map((feature) => (
                <div key={feature.id} className="safety-card">
                  <div className="safety-icon-wrapper">
                    <svg className="safety-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="safety-card-title">{feature.title}</h3>
                  <p className="safety-card-description">{feature.description}</p>
                </div>
              ))}
            </div>

            <button className="slider-nav-btn right" onClick={() => scroll('right')}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default SafetyFeatures;