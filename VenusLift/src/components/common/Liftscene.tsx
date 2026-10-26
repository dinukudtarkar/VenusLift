import React from 'react';
import '../../assets/styles/Liftscene.css';

/* One lift shaft with a car that rises, stops at floors and opens its doors */
const Shaft: React.FC<{ side: 'left' | 'right' }> = ({ side }) => (
  <div className={`liftscene-shaft liftscene-shaft-${side}`}>
    <span className="liftscene-floors" />
    <div className="liftscene-car">
      <span className="liftscene-cable" />
      <span className="liftscene-display" />
      <div className="liftscene-doors">
        <span className="liftscene-door liftscene-door-l" />
        <span className="liftscene-door liftscene-door-r" />
      </div>
    </div>
  </div>
);

/* Decorative background: lifts travelling upwards + rising light streaks */
const LiftScene: React.FC = () => (
  <div className="liftscene" aria-hidden="true">
    <Shaft side="left" />
    <Shaft side="right" />
    {[0, 1, 2, 3, 4].map((i) => (
      <span key={i} className="liftscene-streak" />
    ))}
  </div>
);

export default LiftScene;