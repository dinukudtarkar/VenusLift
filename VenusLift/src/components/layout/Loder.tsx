import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import "./Loader.css";

interface LoaderProps {
  /** 0-100. Pass it to drive the loader from real progress; omit to auto-simulate. */
  progress?: number;
  /** Simulated duration in ms (used only when `progress` is omitted). */
  duration?: number;
  /** Number of floors shown on the indicator. */
  totalFloors?: number;
  /** Called after the doors open and the loader has faded out. */
  onComplete?: () => void;
}

const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

const Loader = ({
  progress,
  duration = 3500,
  totalFloors = 12,
  onComplete,
}: LoaderProps) => {
  const [value, setValue] = useState(0);
  const [opened, setOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);
  const liftRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Controlled progress
  useEffect(() => {
    if (progress !== undefined) {
      setValue(Math.max(0, Math.min(100, progress)));
    }
  }, [progress]);

  // Simulated progress
  useEffect(() => {
    if (progress !== undefined) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(easeInOut(t) * 100);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [progress, duration]);

  // Open doors, fade out, then notify parent
  useEffect(() => {
    if (value < 100) return;
    setOpened(true);
    const fade = window.setTimeout(() => setLeaving(true), 1100);
    const done = window.setTimeout(() => {
      setHidden(true);
      onCompleteRef.current?.();
    }, 1700);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(done);
    };
  }, [value]);

  // Pointer parallax tilt
  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = liftRef.current;
    if (!el) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    el.style.setProperty("--tilt-x", `${(-y * 8).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(x * 10).toFixed(2)}deg`);
  };

  const handlePointerLeave = () => {
    const el = liftRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  if (hidden) return null;

  const percent = Math.round(value);
  const floor = Math.min(
    totalFloors,
    Math.max(1, Math.ceil((value / 100) * totalFloors))
  );
  const floorLabel = String(floor).padStart(2, "0");

  return (
    <div
      className={`venus-loader${leaving ? " is-leaving" : ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="venus-glow" aria-hidden="true" />

      <div className="lift" ref={liftRef}>
        <div className="lift-top">
          <span
            className={`lift-arrow${opened ? " is-hidden" : ""}`}
            aria-hidden="true"
          >
            ▲
          </span>
          <span className="lift-floor" key={floor}>
            {floorLabel}
          </span>
        </div>

        <div className={`lift-frame${opened ? " is-open" : ""}`}>
          <div className="lift-light" />
          <div className="lift-door lift-door-left" />
          <div className="lift-door lift-door-right" />
          <div className="lift-sheen" aria-hidden="true" />
        </div>

        <ol className="lift-floors" aria-hidden="true">
          {Array.from({ length: 6 }, (_, i) => {
            const lit = value >= ((i + 1) / 6) * 100 - 0.01;
            return (
              <li
                key={i}
                className={`lift-dot${lit ? " is-lit" : ""}`}
                style={{ "--i": i } as CSSProperties}
              />
            );
          })}
        </ol>
      </div>

      <h1 className="venus-title">VENUS LIFT</h1>
      <p className="venus-subtitle">Moving You Forward</p>

      <div
        className="loading-track"
        role="progressbar"
        aria-label="Loading"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <div
          className="loading-progress"
          style={{ transform: `scaleX(${value / 100})` }}
        />
      </div>

      <span className="loading-text" aria-live="polite">
        {opened ? "WELCOME" : `PLEASE WAIT · ${String(percent).padStart(2, "0")}%`}
      </span>
    </div>
  );
};

export default Loader;