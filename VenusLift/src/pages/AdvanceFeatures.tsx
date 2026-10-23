import '../assets/styles/AdvanceFeatures.css';

const advancedFeatures = [
  {
    id: 1,
    title: "Geared Traction Machine",
    description: "Driven by AC electric motors. Coupled machines with AC electric motor, electromagnetic brake, worm reduction gear & friction sheave mounted on bed plate. Rested on machine room bottom slab by using rubber pads for noiseless and vibrations less operations. Normally installed in the machine room above the lift well.",
    image: "https://placehold.co/600x400/1f2937/f59e0b?text=Geared+Traction+Machine"
  },
  {
    id: 2,
    title: "Gearless Machine (PMSM)",
    description: "Considered as future technology in elevator industry also known as Permanent Magnet Synchronous Motors. Compact size, lighter in weight, simplified construction hence easy to install and maintain. Uses rare earth material with high magnetic flux density. Saves approx 40-60% energy than traditional machines, improving lifespan.",
    image: "https://placehold.co/600x400/1f2937/f59e0b?text=Gearless+Machine"
  },
  {
    id: 3,
    title: "Variable Voltage Variable Frequency (V3F) Drive",
    description: "An essential feature of modern elevators. Provides smooth start & stop, floor announcement system, better level accuracy irrespective of load, improves life of lift, and significantly reduces electricity consumption.",
    image: "https://placehold.co/600x400/1f2937/f59e0b?text=V3F+Drive"
  },
  {
    id: 4,
    title: "Infra Red Full Length Door Sensor",
    description: "Provides a light curtain of infra-red beams operating between the lift car door panels. Designed for ultimate safety with help of crisscross beams offering protection up to full height. Detects any kind of contact/object and reverses operation instantly.",
    image: "https://placehold.co/600x400/1f2937/f59e0b?text=Door+Sensor"
  },
  {
    id: 5,
    title: "Automatic Rescue Device (ARD)",
    description: "In case of power failure this will help to bring the lift at nearest floor. Works on batteries and gets triggered automatically. Compact device avoiding any human intervention in rescue operations.",
    image: "https://placehold.co/600x400/1f2937/f59e0b?text=Automatic+Rescue+Device"
  },
  {
    id: 6,
    title: "Door & Drive Headers",
    description: "Low Voltage & noiseless operations with V3F door motor. Programmable opening/closing speed & time.",
    image: "https://placehold.co/600x400/1f2937/f59e0b?text=Door+%26+Drive+Headers"
  },
  {
    id: 7,
    title: "Memory System Control Panels",
    description: "Down Collective Memory System: Best for low rise residential buildings to ensure minimum necessary car movement. Full Collective Memory System: Retains calls of both directions, ideal for high rise residential and commercial buildings serving inter-floor traffic.",
    image: "https://placehold.co/600x400/1f2937/f59e0b?text=Control+Panels"
  },
  {
    id: 8,
    title: "Additional Features & Overload Sensor",
    description: "Decorative Special Hall/Car Buttons with S.S. Face Plates, False Ceiling, High Speed Fan, LED lights, Digital Floor Position Indicators, and Call Registration Light System. Overload sensors stay put and flash a warning message when capacity is exceeded.",
    image: "https://placehold.co/600x400/1f2937/f59e0b?text=Additional+Features"
  }
];

const doorsAndCabins = [
  {
    id: 1,
    title: "Manual Passenger Elevator",
    description: "Suitable for low rise applications. Employ simplified mechanism and technology to offer seamless and economic vertical transportation solutions. Cost effective and easy to maintain.",
    image: "https://placehold.co/600x400/1f2937/f59e0b?text=Manual+Elevator"
  },
  {
    id: 2,
    title: "Swing Doors",
    description: "A wide range of Swing Door Lifts available in various sizes and thickness at the most economical prices. Includes MS Manual Swing Doors, Telescopic Doors, Imperforated Doors, and SS/MS Collapsible Doors.",
    image: "https://placehold.co/600x400/1f2937/f59e0b?text=Swing+Doors"
  },
  {
    id: 3,
    title: "Heights of Comfort",
    description: "Get the freedom to raise the height of Landing doors. General offering: 2000 MM Height. Offers extend to 2100 MM, 2200 MM, 2300 MM, and 2400 MM Height, towering above the 1675 MM average.",
    image: "https://placehold.co/600x400/1f2937/f59e0b?text=Heights+of+Comfort"
  }
];

const AdvanceFeatures = () => {
  return (
    <div className="advancefeature-page-container">
      
      {/* Hero Section */}
      <section className="advancefeature-hero-section">
        <h1 className="advancefeature-hero-title">
          Elevating Safety, <span className="advancefeature-highlight-text">Delivering Trust</span>
        </h1>
        <p className="advancefeature-hero-quote">
          "Venus Lift is dedicated to continuous upgrading and promotion, achieving the maximization of customer values."
        </p>
      </section>

      {/* Advanced Features Section */}
      <section className="advancefeature-section-wrapper">
        <div className="advancefeature-section-header">
          <h2 className="advancefeature-section-title">Advanced Features</h2>
          <div className="advancefeature-section-divider"></div>
        </div>

        <div className="advancefeature-features-grid">
          {advancedFeatures.map((feature) => (
            <div key={feature.id} className="advancefeature-feature-card">
              <div className="advancefeature-feature-image-wrapper">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="advancefeature-feature-image" 
                />
              </div>
              <div className="advancefeature-feature-body">
                <h3 className="advancefeature-feature-title">{feature.title}</h3>
                <p className="advancefeature-feature-description">
                  {feature.description}
                </p>
                <div className="advancefeature-feature-footer">
                  <button className="advancefeature-read-more-btn">
                    Read More 
                    <svg className="advancefeature-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doors & Cabins Section */}
      <section className="advancefeature-doors-section advancefeature-dark-section">
        <div className="advancefeature-section-wrapper" style={{ padding: 0 }}>
          <div className="advancefeature-section-header">
            <h2 className="advancefeature-section-title">Doors and Cabins</h2>
            <div className="advancefeature-section-divider"></div>
          </div>

          <div className="advancefeature-doors-grid">
            {doorsAndCabins.map((item) => (
              <div key={item.id} className="advancefeature-door-card">
                <img src={item.image} alt={item.title} className="advancefeature-door-image" />
                <div className="advancefeature-door-body">
                  <h3 className="advancefeature-door-title">{item.title}</h3>
                  <p className="advancefeature-door-description">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AdvanceFeatures;