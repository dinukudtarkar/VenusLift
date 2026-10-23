import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';

// You can create a global CSS file or use CSS modules to style the classes used above
import './App.css'; 
import Features from './pages/Features';
import AboutUs from './pages/AboutUs.tsx';
import WhyChooseUs from './pages/WhyChooseUs.tsx';
import AdvanceFeatures from './pages/AdvanceFeatures.tsx';
import SafetyFeatures from './pages/SafetyFeatures.tsx';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features/>
        <AboutUs/>
        <WhyChooseUs/>
        <AdvanceFeatures/>
        <SafetyFeatures/>
      </main>
    </div>
  );
};

export default App;