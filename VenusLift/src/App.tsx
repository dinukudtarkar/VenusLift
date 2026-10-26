import React, { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Loader2 from "./components/layout/Loader2.tsx";
import Footer from "./components/layout/Footer.tsx";

import "./App.css";

import Features from "./pages/Features";
import AboutUs from "./pages/AboutUs.tsx";
import WhyChooseUs from "./pages/WhyChooseUs.tsx";
import AdvanceFeatures from "./pages/AdvanceFeatures.tsx";
import SafetyFeatures from "./pages/SafetyFeatures.tsx";
import TwinLifts from "./pages/TwinLifts.tsx";
import DoorsShowcase from "./pages/Doorsshowcase.tsx";
import HeightsOfComfort from "./pages/Heightsofcomfort.tsx";
import Modernisation from "./pages/Modernisation.tsx";
import AMCSection from "./pages/AMCSection.tsx";
import RepairsSection from "./pages/RepairsSection.tsx";
import CabinsSection from "./pages/CabinsSection.tsx";
import CustomerResponsibilities from "./pages/CustomerResponsibilities.tsx";
import CarOperatingPanel from "./pages/CarOperatingPanel.tsx";
import CarPanelGallery from "./pages/Carpanelgallery .tsx";
import GearElevators from "./pages/GearElevators.tsx";
import MRLGearlessElevators from "./pages/MRLGearlessElevators.tsx";
import SpecialPurposeLifts from "./pages/SpecialPurposeLifts.tsx";
import Services from "./pages/Services.tsx";
import FloatingCallButton from "./components/common/FloatingCallButton.tsx";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <div className="app-container">
      {loading && (
        <Loader2 duration={3500} onComplete={() => setLoading(false)} />
      )}

      <Navbar />

      <main>
        {/* Home */}
        <section id="home" className="scroll-section">
          <Hero />
        </section>

        {/* Features */}
        <section id="features" className="scroll-section">
          <Features />
        </section>

        {/* About */}
        <section id="about" className="scroll-section">
          <AboutUs />
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="scroll-section">
          <WhyChooseUs />
        </section>
        {/* Why Choose Us */}
        <section id="services" className="scroll-section">
          <Services />
        </section>

        {/* Advanced Features */}
        <section id="advanced-features" className="scroll-section">
          <AdvanceFeatures />
        </section>

        {/* Safety */}
        <section id="safety-features" className="scroll-section">
          <SafetyFeatures />
        </section>

        {/* Twin Lifts */}
        <section id="twin-lifts" className="scroll-section">
          <TwinLifts />
        </section>

        {/* Elevator Doors */}
        <section id="elevator-doors" className="scroll-section">
          <DoorsShowcase />
        </section>

        {/* Heights of Comfort */}
        <section id="heights-of-comfort" className="scroll-section">
          <HeightsOfComfort />
        </section>

        {/* Modernisation */}
        <section id="modernisation" className="scroll-section">
          <Modernisation />
        </section>

        {/* AMC Services */}
        <section id="amc" className="scroll-section">
          <AMCSection />
        </section>

        {/* Repair Services */}
        <section id="repairs" className="scroll-section">
          <RepairsSection />
        </section>

        {/* Cabins */}
        <section id="cabins" className="scroll-section">
          <CabinsSection />
        </section>

        {/* Customer Responsibilities */}
        <section id="customer-responsibilities" className="scroll-section">
          <CustomerResponsibilities />
        </section>

        {/* Car Operating Panel */}
        <section id="car-operating-panel" className="scroll-section">
          <CarOperatingPanel />
        </section>

        {/* Gallery */}
        <section id="gallery" className="scroll-section">
          <CarPanelGallery />
        </section>

        {/* Gear Elevators */}
        <section id="gear-elevators" className="scroll-section">
          <GearElevators />
        </section>

        {/* MRL Gearless Elevators */}
        <section id="mrl-gearless" className="scroll-section">
          <MRLGearlessElevators />
        </section>

        {/* Special Purpose Lifts */}
        <section id="special-purpose-lifts" className="scroll-section">
          <SpecialPurposeLifts />
        </section>

        {/* Footer */}
        <section id="contact" className="scroll-section">
          <Footer />
        </section>
        {!loading && <FloatingCallButton />}
      </main>
    </div>
  );
};

export default App;
