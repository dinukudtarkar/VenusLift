import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import '../assets/styles/Modernisation.css';

/* ---------- content ---------- */
const steps = [
  { title: 'Installed', text: 'Every elevator has a life cycle, and it starts with a new lift.' },
  { title: 'In service', text: 'Even with proper care, the lift ages over the years.' },
  { title: 'Time to upgrade', text: 'After some years the lift has to be modified or replaced.' },
  { title: 'Modernised', text: 'Latest technology, design and compact features.' },
];

const Icon = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const reasons: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: 'Reduced energy cost',
    text: 'Updated technology brings down the energy cost of running your lift.',
    icon: (
      <Icon>
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </Icon>
    ),
  },
  {
    title: 'Greater safety',
    text: 'Modern safety systems for maximum safety of every passenger.',
    icon: (
      <Icon>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </Icon>
    ),
  },
  {
    title: 'Better reliability',
    text: 'Dependable day-to-day operation for years to come.',
    icon: (
      <Icon>
        <path d="M21 12a9 9 0 11-3-6.7" />
        <path d="M21 4v5h-5" />
      </Icon>
    ),
  },
  {
    title: 'Latest technology & design',
    text: 'Updated with the latest technology, design and compact features.',
    icon: (
      <Icon>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </Icon>
    ),
  },
];

/* ---------- scroll reveal ---------- */
const useReveal = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll('.hl-reveal');
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
      { threshold: 0.15 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
};

const Modernisation = () => {
  const sectionRef = useReveal();

  return (
    <section className="hl-section" ref={sectionRef} aria-labelledby="hl-heading">
      <span className="hl-blob hl-blob-a" aria-hidden="true" />
      <span className="hl-blob hl-blob-b" aria-hidden="true" />

      <div className="hl-inner">
        {/* ===== Header ===== */}
        <header className="hl-header hl-reveal">
          <span className="hl-eyebrow">Venus Lift</span>
          <h2 className="hl-title" id="hl-heading">
            Modernisation <span className="hl-title-accent">/</span> Upgrading
          </h2>
          <div className="hl-divider" />
          <p className="hl-intro">
            Every elevator has a life cycle. Even with proper care, a lift has to be modified after
            some years. Elevators eventually need to be replaced or modified to reduce energy cost,
            for greater safety and reliability, and to be updated with the latest technology and
            designs.
          </p>
        </header>

        {/* ===== Life cycle ===== */}
        <ol className="hl-steps">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`hl-step hl-reveal${i >= 2 ? ' is-key' : ''}${i === steps.length - 1 ? ' is-last' : ''}`}
              style={{ '--i': i, '--delay': `${i * 140}ms` } as CSSProperties}
            >
              <span className="hl-step-node">{String(i + 1).padStart(2, '0')}</span>
              {i < steps.length - 1 && <span className="hl-step-line" aria-hidden="true" />}
              <div className="hl-step-body">
                <h3 className="hl-step-title">{s.title}</h3>
                <p className="hl-step-text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* ===== Benefits ===== */}
        <div className="hl-reasons">
          {reasons.map((r, i) => (
            <article
              key={r.title}
              className="hl-reason hl-reveal"
              style={{ '--delay': `${i * 110}ms` } as CSSProperties}
            >
              <span className="hl-reason-icon">{r.icon}</span>
              <h3 className="hl-reason-title">{r.title}</h3>
              <p className="hl-reason-text">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modernisation;