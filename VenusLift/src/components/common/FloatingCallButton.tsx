import React from 'react';
import '../../assets/styles/FloatingCallButton.css';

const FloatingCallButton: React.FC = () => {
  // Replace this with your actual business phone number.
  const phoneNumber = '+917620638530';

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="floating-call-button"
      aria-label="Call Venus Lifts"
      title="Call Venus Lifts"
    >
      <span className="floating-call-icon" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </span>

      <span className="floating-call-text">
        <span className="floating-call-label">NEED HELP?</span>
        <span className="floating-call-title">Call Now</span>
      </span>
    </a>
  );
};

export default FloatingCallButton;