import { useEffect, useRef, useState, type CSSProperties } from "react";
import "./Loader2.css";

interface Loader2Props {
  /** 0-100. Pass it to drive the loader from real progress; omit to auto-simulate. */
  progress?: number;
  /** Simulated duration in ms (used only when `progress` is omitted). */
  duration?: number;
  /** Number of floors shown on the indicator. */
  totalFloors?: number;
  /** Called after the split-door exit has finished. */
  onComplete?: () => void;
}

const BRAND = "VENUS LIFT";

const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const Loader2 = ({
  progress,
  duration = 3800,
  totalFloors = 12,
  onComplete,
}: Loader2Props) => {
  const [value, setValue] = useState(0);
  const [opened, setOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);
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

  // Arrive -> open cabin doors -> split the screen -> notify parent
  useEffect(() => {
    if (value < 100) return;
    setOpened(true);
    const split = window.setTimeout(() => setLeaving(true), 1000);
    const done = window.setTimeout(() => {
      setHidden(true);
      onCompleteRef.current?.();
    }, 1000 + 1100);
    return () => {
      window.clearTimeout(split);
      window.clearTimeout(done);
    };
  }, [value]);

  if (hidden) return null;

  const percent = Math.round(value);
  const floor = Math.min(
    totalFloors,
    Math.max(1, Math.ceil((value / 100) * totalFloors))
  );
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className={`v2${opened ? " is-open" : ""}${leaving ? " is-leaving" : ""}`}
      style={{ "--p": value / 100 } as CSSProperties}
    >
      <div className="v2-panel v2-panel-l" />
      <div className="v2-panel v2-panel-r" />
      <div className="v2-seam" aria-hidden="true" />

      <div className="v2-content">
        {/* Shaft */}
        <div className="v2-shaft" aria-hidden="true">
          <div className="v2-wall" />
          <div className="v2-cable" />
          <div className="v2-weight" />

          <div className="v2-cabin">
            <div className="v2-cabin-display">
              <span className="v2-cabin-arrow">▲</span>
              <span className="v2-cabin-floor" key={floor}>
                {pad(floor)}
              </span>
            </div>
            <div className="v2-cabin-body">
              <div className="v2-cabin-light" />
              <div className="v2-cabin-door v2-cabin-door-l" />
              <div className="v2-cabin-door v2-cabin-door-r" />
            </div>
          </div>
        </div>

        {/* Brand */}
        <h1 className="v2-title" aria-label="Venus Lift">
          {BRAND.split("").map((ch, i) => (
            <span
              key={i}
              className="v2-letter"
              aria-hidden="true"
              style={{ "--d": `${i * 70}ms` } as CSSProperties}
            >
              {ch === " " ? " " : ch}
            </span>
          ))}
        </h1>
        <p className="v2-subtitle">Moving You Forward</p>

        {/* Progress */}
        <div className="v2-meta">
          <span className="v2-meta-floor">
            FLOOR {pad(floor)} / {pad(totalFloors)}
          </span>
          <span className="v2-meta-percent">{pad(percent)}%</span>
        </div>

        <div
          className="v2-track"
          role="progressbar"
          aria-label="Loading"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
        >
          <div className="v2-fill" />
        </div>

        <span className="v2-status" aria-live="polite">
          {opened ? "DOORS OPENING" : "GOING UP"}
        </span>
      </div>
    </div>
  );
};

export default Loader2;