import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import "../assets/styles/Doorsshowcase.css";
import lift1 from "../assets/images/liftd1.png";
import lift2 from "../assets/images/liftd2.png";
import lift3 from "../assets/images/liftd3.png";
import lift4 from "../assets/images/liftd4.png";

type DoorKind = "swing" | "telescopic" | "collapsible";

interface DoorTab {
  kind: DoorKind;
  label: string;
  tag: string;
  title: string;
  description: string;
  highlights: string[];
  finish: string;
}

interface DoorProduct {
  id: number;
  title: string;
  kind: string;
  image: string;
}

/* Placeholder images: swap for your own imports, e.g.
   import msSwing from '../../assets/images/Doors_MS_Swing.jpg'; */
// const ph = (text: string): string =>
//   `https://placehold.co/640x440/f3efe6/b45309?text=${encodeURIComponent(text)}`;

const tabs: DoorTab[] = [
  {
    kind: "swing",
    label: "Swing Doors",
    tag: "Swing Doors",
    title: "A wide range of swing lifts",
    description:
      "Venus Lift is one of the manufacturers and suppliers of a wide range of swing lifts. Clients can choose from a variety of swing lifts in various sizes and thicknesses, at the most economical prices.",
    highlights: [
      "Various sizes",
      "Various thicknesses",
      "Most economical prices",
    ],
    finish: "Brushed steel",
  },
  {
    kind: "telescopic",
    label: "Telescopic Doors",
    tag: "Telescopic Doors",
    title: "Telescopic doors that slide and stack",
    description:
      "Telescopic door panels slide and overlap to open the entrance, available as MS manual telescopic doors for low rise passenger elevators.",
    highlights: [
      "MS manual telescopic doors",
      "Sliding, overlapping panels",
      "Low rise applications",
    ],
    finish: "Champagne gold",
  },
  {
    kind: "collapsible",
    label: "Collapsible Doors",
    tag: "Collapsible Doors",
    title: "Collapsible doors that fold compact",
    description:
      "Collapsible doors fold neatly to one side to open the entrance, available in both SS and MS finishes.",
    highlights: [
      "SS / MS options",
      "Folds compactly",
      "Simple and easy to maintain",
    ],
    finish: "Graphite & brass",
  },
];

const products: DoorProduct[] = [
  { id: 1, title: "MS Manual Swing Doors", kind: "Swing", image: lift2 },
  {
    id: 2,
    title: "MS Manual Telescopic Doors",
    kind: "Telescopic",
    image: lift3,
  },
  { id: 3, title: "Imperforated Doors", kind: "Solid Panel", image: lift1 },
  {
    id: 4,
    title: "SS / MS Collapsible Doors",
    kind: "Collapsible",
    image: lift4,
  },
];

const intro =
  "Our range of Manual Passenger Elevators is suitable for low rise applications. These elevators employ a simplified mechanism and technology to offer seamless and economic vertical transportation solutions.";

/* Door panels drawn with CSS/SVG. Everything is driven by the --open variable (0 to 1) */

const DoorArt = ({ kind }: { kind: DoorKind }) => (
  <div className="ds-frame-inner">
    <div className="ds-cabin" />

    {kind === "swing" && (
      <span className="ds-swing-panel">
        <span className="ds-swing-window" />
        <span className="ds-swing-handle" />
      </span>
    )}

    {kind === "telescopic" && (
      <>
        <span className="ds-tele-panel ds-tele-3" />
        <span className="ds-tele-panel ds-tele-2" />
        <span className="ds-tele-panel ds-tele-1" />
      </>
    )}

    {kind === "collapsible" && (
      <svg
        className="ds-collapse"
        viewBox="0 0 120 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="ds-lattice"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0 L24 24 M24 0 L0 24"
              stroke="#2f343c"
              strokeWidth="2.6"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="120" height="180" fill="url(#ds-lattice)" />
        <rect width="8" height="180" fill="#b8893a" />
        <rect x="112" width="8" height="180" fill="#b8893a" />
      </svg>
    )}
  </div>
);

const useReveal = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll(".ds-reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
};

const DoorsShowcase = () => {
  const sectionRef = useReveal();
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(0); // 0 = closed, 1 = fully open
  const [touched, setTouched] = useState(false);
  const active = tabs[index];
  const isOpen = open > 0.5;

  /* when the door type changes: close, then open as a little demo */
  useEffect(() => {
    setOpen(0);
    const t = window.setTimeout(() => setOpen(1), 700);
    return () => window.clearTimeout(t);
  }, [index]);

  const toggle = () => {
    setTouched(true);
    setOpen((o) => (o > 0.5 ? 0 : 1));
  };

  const onTabKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") setIndex((i) => (i + 1) % tabs.length);
    if (e.key === "ArrowLeft")
      setIndex((i) => (i - 1 + tabs.length) % tabs.length);
  };

  const onDoorKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  const productTrackRef = useRef<HTMLDivElement>(null);

  const productCardRefs = useRef<(HTMLElement | null)[]>([]);

  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const scrollToProduct = (index: number) => {
    const totalProducts = products.length;

    // Support circular navigation.
    const nextIndex = (index + totalProducts) % totalProducts;

    const card = productCardRefs.current[nextIndex];

    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setActiveProductIndex(nextIndex);
  };

  const handleProductScroll = () => {
    const track = productTrackRef.current;

    if (!track) return;

    const cards = productCardRefs.current.filter(
      (card): card is HTMLElement => card !== null,
    );

    if (!cards.length) return;

    const trackPosition = track.getBoundingClientRect().left;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().left - trackPosition,
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveProductIndex(closestIndex);
  };

  return (
    <section
      className="ds-section"
      ref={sectionRef}
      aria-labelledby="ds-heading"
    >
      <span className="ds-blob ds-blob-a" aria-hidden="true" />
      <span className="ds-blob ds-blob-b" aria-hidden="true" />

      <div className="ds-inner">
        {/* Header */}
        <header className="ds-header ds-reveal">
          <span className="ds-eyebrow">Our Doors</span>
          <h2 className="ds-title" id="ds-heading">
            A Variety of <span className="ds-title-accent">Doors</span>
          </h2>
          <div className="ds-divider" />
          <p className="ds-intro">{intro}</p>
          <ul className="ds-intro-chips">
            <li>Low rise applications</li>
            <li>Cost effective</li>
            <li>Easy to maintain</li>
          </ul>
        </header>

        {/* Tabs */}
        <div
          className="ds-tabs ds-reveal"
          role="tablist"
          aria-label="Door types"
          onKeyDown={onTabKeyDown}
          style={{ "--idx": index, "--count": tabs.length } as CSSProperties}
        >
          <span className="ds-tab-indicator" aria-hidden="true" />
          {tabs.map((t, i) => (
            <button
              key={t.kind}
              id={`ds-tab-${t.kind}`}
              role="tab"
              type="button"
              aria-selected={i === index}
              aria-controls="ds-panel"
              tabIndex={i === index ? 0 : -1}
              className={`ds-tab${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Showcase panel */}
        <div
          className="ds-panel ds-reveal"
          id="ds-panel"
          role="tabpanel"
          aria-labelledby={`ds-tab-${active.kind}`}
        >
          <div
            className="ds-stage"
            data-open={isOpen}
            style={{ "--open": open } as CSSProperties}
          >
            <div className="ds-scene">
              <div className="ds-hall" aria-hidden="true" />
              <span className="ds-glow" aria-hidden="true" />

              {!touched && (
                <span className="ds-hint" aria-hidden="true">
                  <i /> Tap the door
                </span>
              )}

              <div className="ds-unit">
                {/* floor indicator */}
                <div className="ds-indicator" aria-hidden="true">
                  <span className="ds-indicator-arrow" />
                  <span className="ds-indicator-floor">G</span>
                </div>

                {/* the door itself: click or press Enter/Space to open and close */}
                <div
                  key={active.kind}
                  className={`ds-frame ds-frame-${active.kind}`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isOpen}
                  aria-label={`${isOpen ? "Close" : "Open"} the ${active.tag.toLowerCase()}`}
                  onClick={toggle}
                  onKeyDown={onDoorKeyDown}
                >
                  <DoorArt kind={active.kind} />
                </div>

                {/* call buttons */}
                <div className="ds-callpanel" aria-hidden="true">
                  <span className="ds-call-btn ds-call-up" />
                  <span className="ds-call-btn ds-call-down" />
                </div>

                <span className="ds-shadow" aria-hidden="true" />
              </div>
            </div>

            {/* controls */}
            <div className="ds-controls">
              <button
                type="button"
                className={`ds-toggle${isOpen ? " is-open" : ""}`}
                onClick={toggle}
                aria-pressed={isOpen}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <rect x="4" y="3" width="16" height="18" rx="1.5" />
                  <path d="M12 3v18" />
                  <path
                    d={
                      isOpen
                        ? "M9 9l-2 3 2 3M15 9l2 3-2 3"
                        : "M7 9l2 3-2 3M17 9l-2 3 2 3"
                    }
                  />
                </svg>
                {isOpen ? "Close Door" : "Open Door"}
              </button>

              <label className="ds-slider">
                <span className="ds-slider-label">Opening</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={Math.round(open * 100)}
                  onChange={(e) => {
                    setTouched(true);
                    setOpen(Number(e.target.value) / 100);
                  }}
                  aria-label="Door opening"
                  style={
                    { "--pct": `${Math.round(open * 100)}%` } as CSSProperties
                  }
                />
                <output className="ds-slider-value">
                  {Math.round(open * 100)}%
                </output>
              </label>
            </div>
          </div>

          <div className="ds-content" key={active.kind}>
            <span className="ds-content-tag">{active.tag}</span>
            <h3 className="ds-content-title">{active.title}</h3>
            <p className="ds-content-desc">{active.description}</p>
            <ul className="ds-highlights">
              {active.highlights.map((h, i) => (
                <li
                  key={h}
                  className="ds-highlight"
                  style={{ "--i": i } as CSSProperties}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.6}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>

            <div className="ds-finish">
              <span className={`ds-swatch ds-swatch-${active.kind}`} />
              <span>
                Illustrated in <strong>{active.finish}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Range */}
        {/* Door Range */}
        <div className="ds-range-head ds-reveal">
          <h3 className="ds-range-title">Door Range</h3>
          <span className="ds-range-line" />
        </div>

        {/* Product Carousel */}
        <div className="ds-product-carousel">
          <div
            className="ds-range-grid"
            ref={productTrackRef}
            onScroll={handleProductScroll}
            aria-label="Door product gallery"
          >
            {products.map((p, i) => (
              <article
                key={p.id}
                ref={(element) => {
                  productCardRefs.current[i] = element;
                }}
                className="ds-card ds-reveal"
                style={{ "--delay": `${i * 110}ms` } as CSSProperties}
              >
                <div className="ds-card-media">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="ds-card-image"
                    loading="lazy"
                  />

                  <span className="ds-card-num">
                    {String(p.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="ds-card-body">
                  <span className="ds-card-kind">{p.kind}</span>

                  <h4 className="ds-card-title">{p.title}</h4>

                  <span className="ds-card-bar" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="ds-carousel-navigation">
            <button
              type="button"
              className="ds-carousel-arrow"
              onClick={() => scrollToProduct(activeProductIndex - 1)}
              aria-label="Previous door image"
            >
              &#8592;
            </button>

            <div className="ds-carousel-dots" aria-label="Choose a door image">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  type="button"
                  className={`ds-carousel-dot ${
                    activeProductIndex === index ? "is-active" : ""
                  }`}
                  onClick={() => scrollToProduct(index)}
                  aria-label={`Show image ${index + 1}: ${product.title}`}
                  aria-current={
                    activeProductIndex === index ? "true" : undefined
                  }
                />
              ))}
            </div>

            <button
              type="button"
              className="ds-carousel-arrow"
              onClick={() => scrollToProduct(activeProductIndex + 1)}
              aria-label="Next door image"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* <div className="ds-range-grid">
          {products.map((p, i) => (
            <article
              key={p.id}
              className="ds-card ds-reveal"
              style={{ "--delay": `${i * 110}ms` } as CSSProperties}
            >
              <div className="ds-card-media">
                <img
                  src={p.image}
                  alt={p.title}
                  className="ds-card-image"
                  loading="lazy"
                />
                <span className="ds-card-num">
                  {String(p.id).padStart(2, "0")}
                </span>
              </div>
              <div className="ds-card-body">
                <span className="ds-card-kind">{p.kind}</span>
                <h4 className="ds-card-title">{p.title}</h4>
                <span className="ds-card-bar" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default DoorsShowcase;
