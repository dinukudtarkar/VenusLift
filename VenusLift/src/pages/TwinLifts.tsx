import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MutableRefObject,
} from "react";
import "../assets/styles/TwinLifts.css";

type Dir = "up" | "down" | "idle";

interface LiftState {
  floor: number;
  dir: Dir;
  doorsOpen: boolean;
  /** Time to pass one floor on the current trip (ms). Varies per trip. */
  stepMs: number;
}

interface TwinLiftsProps {
  /** Number of floors in the building. */
  floors?: number;
  /** Main headline. */
  headline?: string;
  /** Rotating attention-grabbing lines under the headline. */
  lines?: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

/** Memory shared by both lifts so their trips stay varied and never collide. */
interface Shared {
  recent: number[]; // last few destinations of either lift
  targets: [number, number]; // where each lift is currently heading
}

const RECENT_MEMORY = 4;
const pad = (n: number) => String(n).padStart(2, "0");
const rand = (min: number, max: number) => min + Math.random() * (max - min);

const DEFAULT_LINES = [
  "Rise above the ordinary.",
  "Every floor. Every time.",
  "Smooth going up. Safe coming down.",
  "Going places? We'll get you there.",
];

/** Pick a floor that is not the current one, not recently visited, and not the other lift's target. */
function pickFloor(
  index: 0 | 1,
  current: number,
  floors: number,
  shared: Shared
): number {
  const all = Array.from({ length: floors }, (_, i) => i + 1);
  const other = shared.targets[index === 0 ? 1 : 0];

  let pool = all.filter(
    (f) => f !== current && f !== other && !shared.recent.includes(f)
  );
  if (pool.length === 0) pool = all.filter((f) => f !== current && f !== other);
  if (pool.length === 0) pool = all.filter((f) => f !== current);

  return pool[Math.floor(Math.random() * pool.length)];
}

/** One lift that wanders between random floors and also answers calls. */
function useLift(
  index: 0 | 1,
  startFloor: number,
  floors: number,
  startDelay: number,
  shared: MutableRefObject<Shared>
) {
  const [state, setState] = useState<LiftState>({
    floor: startFloor,
    dir: "idle",
    doorsOpen: true,
    stepMs: 600,
  });
  const floorRef = useRef(startFloor);
  const queue = useRef<number[]>([]);

  useEffect(() => {
    let alive = true;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => window.setTimeout(resolve, ms));

    const run = async () => {
      await wait(startDelay);
      while (alive) {
        const called = queue.current.shift();
        const target =
          called ?? pickFloor(index, floorRef.current, floors, shared.current);

        if (target === floorRef.current) {
          // Called to the floor it is already on: keep the doors open a bit
          await wait(1200);
          continue;
        }

        const s = shared.current;
        s.targets[index] = target;
        s.recent = [...s.recent, target].slice(-RECENT_MEMORY);

        // Close doors, then pause a beat before moving
        setState((prev) => ({ ...prev, doorsOpen: false }));
        await wait(rand(700, 1100));
        if (!alive) return;

        // Each trip has its own speed
        const stepMs = Math.round(rand(420, 780));
        const step = target > floorRef.current ? 1 : -1;
        setState((prev) => ({
          ...prev,
          stepMs,
          dir: step === 1 ? "up" : "down",
        }));

        while (alive && floorRef.current !== target) {
          floorRef.current += step;
          const f = floorRef.current;
          setState((prev) => ({ ...prev, floor: f }));
          await wait(stepMs);
        }
        if (!alive) return;

        setState((prev) => ({ ...prev, dir: "idle", doorsOpen: true }));

        // Sometimes a short stop, sometimes a long rest
        const dwell = rand(1400, 3600) + (Math.random() < 0.2 ? rand(2000, 3500) : 0);
        await wait(dwell);
      }
    };

    run();
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const call = (floor: number) => {
    queue.current = [floor, ...queue.current.filter((f) => f !== floor)];
  };

  return { state, call, floorRef };
}

interface LiftViewProps {
  name: string;
  variant: "a" | "b";
  state: LiftState;
  floors: number;
}

const STATUS: Record<Dir, string> = {
  up: "GOING UP",
  down: "GOING DOWN",
  idle: "DOORS OPEN",
};

const LiftView = ({ name, variant, state, floors }: LiftViewProps) => {
  const r = (state.floor - 1) / (floors - 1);
  const status = state.dir === "idle" && !state.doorsOpen ? "DOORS CLOSING" : STATUS[state.dir];

  return (
    <div className={`twin-lift twin-lift--${variant}`}>
      <div className="twin-lift-head">
        <span className="twin-lift-name">{name}</span>
        <span className="twin-lift-status">{status}</span>
      </div>

      <div
        className="twin-shaft"
        style={{ "--r": r, "--step": `${state.stepMs}ms` } as CSSProperties}
      >
        <span className="twin-rail twin-rail-l" />
        <span className="twin-rail twin-rail-r" />

        {Array.from({ length: floors }, (_, i) => (
          <span
            key={i}
            className="twin-landing"
            style={{ "--r": i / (floors - 1) } as CSSProperties}
          />
        ))}

        <div className="twin-cable" />

        <div className={`twin-cabin${state.doorsOpen ? " is-open" : ""}`}>
          <div className="twin-led">
            <i className={`twin-led-dir is-${state.dir}`}>
              {state.dir === "up" ? "▲" : state.dir === "down" ? "▼" : "•"}
            </i>
            <span key={state.floor}>{pad(state.floor)}</span>
          </div>

          <div className="twin-glass">
            <div className="twin-interior" />
            <div className="twin-panel twin-panel-l" />
            <div className="twin-panel twin-panel-r" />
            <div className="twin-reflect" />
          </div>

          <div className="twin-base" />
        </div>
      </div>
    </div>
  );
};

const TwinLifts = ({
  floors = 8,
  headline = "Reach new heights.",
  lines = DEFAULT_LINES,
  ctaLabel = "Get a Free Quote",
  onCtaClick,
}: TwinLiftsProps) => {
  const startA = 1;
  const startB = Math.ceil(floors / 2) + 1;

  const shared = useRef<Shared>({
    recent: [startA, startB],
    targets: [startA, startB],
  });

  const a = useLift(0, startA, floors, 600, shared);
  const b = useLift(1, startB, floors, 2200, shared);

  const [lineIndex, setLineIndex] = useState(0);
  // The floor each lift was last asked to go to (index 0 = Lift A, 1 = Lift B)
  const [requested, setRequested] = useState<[number | null, number | null]>([
    null,
    null,
  ]);

  // Rotate the tagline
  useEffect(() => {
    if (lines.length < 2) return;
    const id = window.setInterval(
      () => setLineIndex((i) => (i + 1) % lines.length),
      3200
    );
    return () => window.clearInterval(id);
  }, [lines.length]);

  // Clear a request once that lift has arrived with its doors open
  useEffect(() => {
    const lifts = [a.state, b.state];
    const timers: number[] = [];

    requested.forEach((req, i) => {
      if (req !== null && lifts[i].floor === req && lifts[i].doorsOpen) {
        timers.push(
          window.setTimeout(() => {
            setRequested((prev) => {
              const next: [number | null, number | null] = [prev[0], prev[1]];
              if (next[i] === req) next[i] = null;
              return next;
            });
          }, 700)
        );
      }
    });

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [a.state, b.state, requested]);

  // Send one specific lift to a floor
  const callFloor = (index: 0 | 1, floor: number) => {
    setRequested((prev) => {
      const next: [number | null, number | null] = [prev[0], prev[1]];
      next[index] = floor;
      return next;
    });
    shared.current.targets[index] = floor;
    (index === 0 ? a : b).call(floor);
  };

  const renderButtons = (index: 0 | 1, variant: "a" | "b") => {
    const lift = index === 0 ? a : b;
    return (
      <div
        className={`twin-floors twin-floors--${variant}`}
        role="group"
        aria-label={`Call Lift ${variant.toUpperCase()} to a floor`}
      >
        {Array.from({ length: floors }, (_, i) => {
          const n = i + 1;
          return (
            <button
              key={n}
              type="button"
              className={`twin-floor${lift.state.floor === n ? " is-here" : ""}${
                requested[index] === n ? " is-requested" : ""
              }`}
              style={{ "--r": (n - 1) / (floors - 1) } as CSSProperties}
              onClick={() => callFloor(index, n)}
              aria-label={`Call Lift ${variant.toUpperCase()} to floor ${n}`}
            >
              {pad(n)}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <section className="twin" aria-label="Venus Lift elevators">
      <div className="twin-copy">
        <span className="twin-eyebrow">VENUS LIFT · ELEVATORS</span>
        <h2 className="twin-headline">{headline}</h2>
        <p className="twin-line" key={lineIndex}>
          {lines[lineIndex]}
        </p>
        <button type="button" className="twin-cta" onClick={onCtaClick}>
          {ctaLabel}
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="twin-stage">
        <LiftView name="LIFT A" variant="a" state={a.state} floors={floors} />

        {renderButtons(0, "a")}
        {renderButtons(1, "b")}

        <LiftView name="LIFT B" variant="b" state={b.state} floors={floors} />

        <p className="twin-hint">Each button line calls its own lift</p>
      </div>
    </section>
  );
};

export default TwinLifts;