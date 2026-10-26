import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from 'react';
import '../assets/styles/Heightsofcomfort.css';

const AVERAGE = 1675; // average person height (mm)
const GENERAL = 2000; // general offering (mm)
const OPTIONS = [2000, 2100, 2200, 2300, 2400];

interface Props {
  /** where the "Ask for more" button points, e.g. '#contact' or '/contact' */
  contactHref?: string;
}

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  !!window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Smoothly counts a number towards its target */
const useCountUp = (target: number, ms = 650): number => {
  const [value, setValue] = useState(target);
  const from = useRef(target);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(target);
      from.current = target;
      return;
    }
    const start = performance.now();
    const begin = from.current;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      const next = Math.round(begin + (target - begin) * eased);
      from.current = next;
      setValue(next);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);

  return value;
};

/* Adds "is-visible" to .hc-reveal elements as they scroll into view */
const useReveal = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll('.hc-reveal');
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

/* Two simple silhouettes that stand at the average height (1675 mm) */
const People = () => (
  <svg className="hc-people-svg" viewBox="14 0 112 200" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
    <defs>
      <linearGradient id="hc-fig-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#1e293b" />
        <stop offset="1" stopColor="#0b1220" />
      </linearGradient>
    </defs>
    <g fill="url(#hc-fig-grad)">
      {/* woman */}
      <ellipse cx="38" cy="31" rx="10" ry="11" />
      <rect x="34" y="41" width="8" height="8" rx="2" />
      <path d="M25 50 Q38 45 51 50 L49 88 L58 136 L18 136 L27 88 Z" />
      <path d="M25 52 L17 98 L23 99 L31 60 Z" />
      <path d="M51 52 L59 98 L53 99 L45 60 Z" />
      <rect x="28" y="136" width="6" height="56" rx="3" />
      <rect x="42" y="136" width="6" height="56" rx="3" />
      <ellipse cx="31" cy="194" rx="6" ry="3" />
      <ellipse cx="45" cy="194" rx="6" ry="3" />

      {/* man */}
      <ellipse cx="88" cy="12" rx="10.5" ry="12" />
      <rect x="84" y="23" width="8" height="8" rx="2" />
      <path d="M64 36 Q88 28 112 36 L114 100 L108 112 L68 112 L62 100 Z" />
      <path d="M62 38 L54 108 L60 110 L68 42 Z" />
      <path d="M114 38 L122 108 L116 110 L108 42 Z" />
      <rect x="70" y="112" width="15" height="80" rx="3" />
      <rect x="91" y="112" width="15" height="80" rx="3" />
      <ellipse cx="77" cy="194" rx="10" ry="4" />
      <ellipse cx="99" cy="194" rx="10" ry="4" />
    </g>
    {/* shirt detail */}
    <polygon points="83,31 93,31 88,54" fill="#f8fafc" opacity="0.9" />
    <polygon points="86.5,33 89.5,33 88.8,50 87.2,50" fill="#0b1220" />
  </svg>
);

const HeightsOfComfort = ({ contactHref = '#contact' }: Props) => {
  const sectionRef = useReveal();
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);
  const [hover, setHover] = useState(false);

  const height = OPTIONS[index];
  const headroom = height - AVERAGE;
  const extra = height - GENERAL;

  const shownHeight = useCountUp(height);
  const shownHeadroom = useCountUp(headroom);

  /* only autoplay while the section is on screen */
  useEffect(() => {
    const root = sectionRef.current;
    if (!root || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(root);
    return () => io.disconnect();
  }, [sectionRef]);

  /* gentle auto-cycle through the heights until the visitor picks one */
  useEffect(() => {
    if (!auto || !inView || hover || prefersReducedMotion()) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % OPTIONS.length), 2800);
    return () => window.clearInterval(id);
  }, [auto, inView, hover]);

  const choose = (i: number) => {
    setAuto(false);
    setIndex(i);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const next =
      e.key === 'ArrowRight' || e.key === 'ArrowDown'
        ? (index + 1) % OPTIONS.length
        : e.key === 'ArrowLeft' || e.key === 'ArrowUp'
        ? (index - 1 + OPTIONS.length) % OPTIONS.length
        : -1;
    if (next >= 0) {
      e.preventDefault();
      choose(next);
    }
  };

  return (
    <section className="hc-section" ref={sectionRef} aria-labelledby="hc-heading">
      <span className="hc-blob hc-blob-a" aria-hidden="true" />
      <span className="hc-blob hc-blob-b" aria-hidden="true" />

      <div className="hc-inner">
        {/* Order on mobile: heading, diagram, buttons. On desktop: diagram left, text right. */}
        <div
          className="hc-grid"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* ===== 1. Heading + text ===== */}
          <div className="hc-head hc-reveal">
            <span className="hc-eyebrow">Venus Lift</span>
            <h2 className="hc-title" id="hc-heading">
              Heights of <span className="hc-title-accent">Comfort</span>
            </h2>
            <div className="hc-divider" />
            <p className="hc-desc">
              How many of you have wished for a little more space at the top of your elevator?
              There is something about feeling head and shoulders above the rest, and very
              comfortable. An average elevator gives you a height of 2 metres. With Venus Lift
              you get the freedom to raise the height of the landing doors.
            </p>
          </div>

          {/* ===== 2. Diagram ===== */}
          <div className="hc-visual hc-reveal" style={{ '--delay': '100ms' } as CSSProperties}>
            <div
              className="hc-stage"
              role="img"
              aria-label={`Elevator entrance ${height} millimetres high, leaving ${headroom} millimetres of headroom above an average person of ${AVERAGE} millimetres`}
              style={{ '--h': height } as CSSProperties}
            >
              <span className="hc-stage-tag">Headroom comparison</span>

              <div className="hc-scale">
                {/* general offering reference line */}
                <div className={`hc-ref${height === GENERAL ? ' is-hidden' : ''}`}>
                  <span className="hc-ref-label">General {GENERAL}</span>
                </div>

                {/* dimension: entrance height */}
                <div className="hc-dim hc-dim-entrance">
                  <span className="hc-dim-label">ENTRANCE HT · {height} MM</span>
                </div>

                {/* dimension: average person */}
                <div className="hc-dim hc-dim-avg">
                  <span className="hc-dim-label">AVERAGE · {AVERAGE} MM</span>
                </div>

                {/* the lift entrance */}
                <div className="hc-frame">
                  <span className="hc-indicator" aria-hidden="true">
                    <i className="hc-indicator-arrow" />
                    <b>G</b>
                  </span>
                  <span className="hc-lintel" aria-hidden="true">VENUS LIFT</span>

                  <div className="hc-opening">
                    {/* open door panels at each side */}
                    <span className="hc-door hc-door-l" />
                    <span className="hc-door hc-door-r" />

                    {/* ceiling lights + light cone + dust in the beam */}
                    <span className="hc-beam" />
                    <span className="hc-ceiling">
                      <i /><i /><i /><i /><i />
                    </span>
                    <span className="hc-dust">
                      <i /><i /><i /><i /><i /><i />
                    </span>

                    {/* flashes when the height changes, like the lights switching on */}
                    <span key={height} className="hc-flash" />
                  </div>
                </div>

                {/* handrail (fixed at 900 mm) */}
                <span className="hc-rail" aria-hidden="true" />

                {/* amber headroom band */}
                <div className="hc-headroom">
                  <span className="hc-headroom-pill">+{headroom} mm headroom</span>
                </div>

                <div className="hc-people">
                  <People />
                </div>
              </div>

              <div className="hc-floor" aria-hidden="true">
                <span className="hc-spill" />
              </div>
            </div>

            <ul className="hc-legend" aria-hidden="true">
              <li><i className="hc-legend-band" /> Headroom</li>
              <li><i className="hc-legend-dash" /> General offering</li>
              <li><i className="hc-legend-fig" /> Average person</li>
            </ul>
          </div>

          {/* ===== 3. Buttons + live numbers (always right under the diagram on mobile) ===== */}
          <div className="hc-controls hc-reveal" style={{ '--delay': '160ms' } as CSSProperties}>
            <div
              className="hc-options"
              role="radiogroup"
              aria-label="Entrance height"
              onKeyDown={onKeyDown}
            >
              {OPTIONS.map((value, i) => (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={i === index}
                  tabIndex={i === index ? 0 : -1}
                  className={`hc-option${i === index ? ' is-active' : ''}`}
                  onClick={() => choose(i)}
                >
                  <span className="hc-option-value">{value}</span>
                  <span className="hc-option-unit">mm</span>
                  {value === GENERAL && <span className="hc-option-note">General</span>}
                </button>
              ))}
            </div>

            <div className="hc-stats">
              <div className="hc-stat">
                <span className="hc-stat-label">Entrance height</span>
                <span className="hc-stat-value">
                  {shownHeight}
                  <small>mm</small>
                </span>
              </div>
              <div className="hc-stat">
                <span className="hc-stat-label">Average person</span>
                <span className="hc-stat-value">
                  {AVERAGE}
                  <small>mm</small>
                </span>
              </div>
              <div className="hc-stat hc-stat-accent">
                <span className="hc-stat-label">Headroom</span>
                <span className="hc-stat-value">
                  {shownHeadroom}
                  <small>mm</small>
                </span>
                <span className="hc-stat-note">
                  {extra > 0 ? `+${extra} mm over the general offering` : 'General offering'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== General offering vs offers ===== */}
        <div className="hc-compare">
          <article className="hc-card hc-reveal">
            <span className="hc-card-kicker">General Offering</span>
            <div className="hc-card-big">
              2000<small> mm</small>
            </div>
            <p className="hc-card-text">Standard entrance height. Average person: 1675 mm.</p>
            <button type="button" className="hc-card-link" onClick={() => choose(0)}>
              See it in the diagram
            </button>
          </article>

          <article
            className="hc-card hc-card-dark hc-reveal"
            style={{ '--delay': '120ms' } as CSSProperties}
          >
            <span className="hc-card-kicker">Offers</span>
            <ul className="hc-offer-list">
              {OPTIONS.slice(1).map((v) => (
                <li key={v}>
                  <button
                    type="button"
                    className="hc-offer-chip"
                    onClick={() => choose(OPTIONS.indexOf(v))}
                  >
                    {v} MM
                  </button>
                </li>
              ))}
            </ul>
            <p className="hc-card-text">Taller entrance heights, towering above the 1675 mm average.</p>
            <a className="hc-cta" href={contactHref}>
              Ask for more
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeightsOfComfort;