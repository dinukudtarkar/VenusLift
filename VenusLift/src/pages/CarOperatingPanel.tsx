import React, { useEffect, useState } from "react";
import "../assets/styles/CarOperatingPanel.css";

/* ============================================================
   >>> LIFT CABIN IMAGE <<<
   Copy lift-cabin.svg to  src/assets/images/lift-cabin.svg
   To use your own photo, drop it in the same folder and change
   the import below (e.g. "../assets/images/my-cabin.jpg").
   ============================================================ */
import cabinImage from "../assets/images/liftCabin.png";
const CABIN_IMAGE: string = cabinImage;

type PanelShape = "classic" | "pill" | "arch" | "chamfer";

const panelDesigns: {
  id: number;
  name: string;
  finish: string;
  shape: PanelShape;
}[] = [
  { id: 1, name: "Classic", finish: "Rectangular graphite", shape: "classic" },
  { id: 2, name: "Capsule", finish: "Rounded glass pill", shape: "pill" },
  { id: 3, name: "Arch", finish: "Arched multi-display", shape: "arch" },
  { id: 4, name: "Crystal", finish: "Cut-corner bronze", shape: "chamfer" },
];

const floors = ["G", "1", "2", "3", "4", "5", "6", "7"]; // G = ground floor
const pad = (f: string) => (f === "G" ? "G" : f.padStart(2, "0"));

const CarOperatingPanel: React.FC = () => {
  const [panel, setPanel] = useState(panelDesigns[0]);
  const [currentFloor, setCurrentFloor] = useState("G");
  const [targetFloor, setTargetFloor] = useState("G");
  const [moving, setMoving] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(true);
  const [lightOn, setLightOn] = useState(true);
  const [fanOn, setFanOn] = useState(false);
  const [alarmOn, setAlarmOn] = useState(false);
  const [callOn, setCallOn] = useState(false);

  const idx = floors.indexOf(currentFloor);
  const goingUp = floors.indexOf(targetFloor) > idx;

  // Travel one floor at a time. Doors open only after the cabin has fully stopped.
  useEffect(() => {
    if (!moving) return;
    const t = floors.indexOf(targetFloor);
    if (idx === t) {
      const stop = window.setTimeout(() => {
        setMoving(false);
        setDoorsOpen(true);
      }, 950);
      return () => window.clearTimeout(stop);
    }
    const timer = window.setTimeout(
      () => setCurrentFloor(floors[idx < t ? idx + 1 : idx - 1]),
      900,
    );
    return () => window.clearTimeout(timer);
  }, [moving, idx, targetFloor]);

  // Doors stay open while the lift is stopped; they close only when it starts moving.

  // Emergency call resets after 4 seconds
  useEffect(() => {
    if (!callOn) return;
    const timer = window.setTimeout(() => setCallOn(false), 4000);
    return () => window.clearTimeout(timer);
  }, [callOn]);

  const goToFloor = (floor: string) => {
    if (moving) return;
    setTargetFloor(floor);
    if (floor === currentFloor) {
      setDoorsOpen(true);
      return;
    }
    setDoorsOpen(false);
    setMoving(true);
  };

  // Auto mode: when idle for a few seconds the lift visits a random floor.
  // Pressing any panel button restarts the wait; an active alarm pauses it.
  useEffect(() => {
    if (moving || alarmOn) return;
    const timer = window.setTimeout(
      () => {
        const others = floors.filter((f) => f !== currentFloor);
        goToFloor(others[Math.floor(Math.random() * others.length)]);
      },
      4500 + Math.random() * 2500,
    );
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moving, alarmOn, currentFloor, targetFloor, doorsOpen]);

  const status = alarmOn
    ? "ALARM ACTIVE"
    : callOn
      ? "CALLING HELP"
      : moving
        ? goingUp
          ? "GOING UP"
          : "GOING DOWN"
        : doorsOpen
          ? "DOORS OPEN"
          : "READY";

  const dirIcon = moving ? (goingUp ? "▲" : "▼") : "•";

  return (
    <section className="cop-section" id="car-operating-panel">
      <div className="cop-container">
        <header className="cop-header">
          <h2 className="cop-title">Car Operating Panels</h2>
          <p className="cop-intro">
            Choose a panel shape and press its buttons. The lift in the building
            responds instantly.
          </p>
        </header>

        <div className="cop-switcher">
          {panelDesigns.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`cop-switch-button ${panel.id === p.id ? "active" : ""}`}
              onClick={() => setPanel(p)}
              aria-pressed={panel.id === p.id}
            >
              <b>{p.name}</b>
              <small>{p.finish}</small>
            </button>
          ))}
        </div>

        {/* PANEL (left) + LIFT SIMULATION (right) — side by side on every screen */}
        <div className="cop-showcase">
          <div className="cop-panel-shell">
            <div className={`cop-panel cop-panel-${panel.shape}`}>
              <div className="cop-display">
                {panel.shape === "arch" ? (
                  <div className="cop-multi">
                    {[...floors].reverse().map((f) => (
                      <div key={f} className={f === currentFloor ? "on" : ""}>
                        <span>{pad(f)}</span>
                        <span>{f === currentFloor ? dirIcon : ""}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <span className={`cop-dir ${moving ? "blink" : ""}`}>
                      {dirIcon}
                    </span>
                    <span className="cop-num">{pad(currentFloor)}</span>
                  </>
                )}
              </div>

              <div className="cop-floor-grid">
                {floors.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className={`cop-btn ${targetFloor === f ? "lit" : ""}`}
                    onClick={() => goToFloor(f)}
                    disabled={moving}
                    aria-label={
                      f === "G" ? "Go to ground floor" : `Go to floor ${f}`
                    }
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="cop-row-btns">
                <button
                  type="button"
                  className={`cop-btn ${doorsOpen ? "lit" : ""}`}
                  onClick={() => !moving && setDoorsOpen(true)}
                  disabled={moving}
                  aria-label="Open doors"
                  title="Open doors"
                >
                  ◀▶
                </button>
                <button
                  type="button"
                  className={`cop-btn ${!doorsOpen ? "lit" : ""}`}
                  onClick={() => !moving && setDoorsOpen(false)}
                  disabled={moving}
                  aria-label="Close doors"
                  title="Close doors"
                >
                  ▶◀
                </button>
              </div>

              <div className="cop-row-btns">
                <button
                  type="button"
                  className={`cop-btn ${lightOn ? "lit" : ""}`}
                  onClick={() => setLightOn((v) => !v)}
                  aria-pressed={lightOn}
                  aria-label="Cabin light"
                  title="Light"
                >
                  ☼
                </button>
                <button
                  type="button"
                  className={`cop-btn ${fanOn ? "lit" : ""}`}
                  onClick={() => setFanOn((v) => !v)}
                  aria-pressed={fanOn}
                  aria-label="Cabin fan"
                  title="Fan"
                >
                  <i className={fanOn ? "spin" : ""}>✣</i>
                </button>
              </div>

              <div className="cop-row-btns">
                <button
                  type="button"
                  className={`cop-btn red ${alarmOn ? "lit" : ""}`}
                  onClick={() => setAlarmOn((v) => !v)}
                  aria-pressed={alarmOn}
                  aria-label="Alarm"
                  title="Alarm"
                >
                  🔔
                </button>
                <button
                  type="button"
                  className={`cop-btn red ${callOn ? "lit" : ""}`}
                  onClick={() => setCallOn(true)}
                  aria-label="Emergency call"
                  title="Emergency call"
                >
                  ☎
                </button>
              </div>

              <div className="cop-grille">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>

          {/* SINGLE LIFT SIMULATION */}
          <div className={`cop-stage ${alarmOn ? "alarm" : ""}`}>
            {/* Faint tower illustration behind the lift */}
            <div className="cop-bg" aria-hidden="true">
              <i className="tw tw-spire" />
              <i className="tw tw-crown" />
              <i className="tw tw-mid" />
              <i className="tw tw-main" />
              <i className="tw tw-l" />
              <i className="tw tw-r" />
              <i className="tw-ground" />
            </div>
            <div className="cop-lifthead">
              <span>LIFT A</span>
              <em>{status}</em>
            </div>

            <div className="cop-stagebody">
              <div
                className="cop-shaft"
                style={{ "--i": idx } as React.CSSProperties}
              >
                <span className="cop-rail l" />
                <span className="cop-rail r" />
                {floors.map((f, i) => (
                  <span
                    key={f}
                    className="cop-line"
                    style={{ bottom: `calc(${i} * var(--fh))` }}
                  >
                    <b className="cop-fnum">{pad(f)}</b>
                  </span>
                ))}
                <div className="cop-cable" />

                <div
                  className={`cop-cabin ${lightOn ? "" : "dark"} ${doorsOpen ? "open" : ""}`}
                >
                  <div className="cop-led">
                    <i>{dirIcon}</i>
                    <b>{pad(currentFloor)}</b>
                  </div>

                  <div className="cop-car">
                    {/* CABIN IMAGE shows here (see CABIN_IMAGE at top of file) */}
                    <div
                      className="cop-interior"
                      style={{ backgroundImage: `url(${CABIN_IMAGE})` }}
                    />
                    <div className="cab-ceiling">
                      <span className={`cab-lamp ${lightOn ? "on" : ""}`} />
                      <span className={`cab-fan ${fanOn ? "on" : ""}`}>
                        <i>✣</i>
                      </span>
                      <span className={`cab-lamp ${lightOn ? "on" : ""}`} />
                    </div>
                    {fanOn && (
                      <div className="cab-air">
                        <span />
                        <span />
                        <span />
                      </div>
                    )}
                    {lightOn && <div className="cab-glow" />}
                    <div className="cab-door l" />
                    <div className="cab-door r" />
                    <div className="cop-reflect" />
                  </div>
                  <div className="cop-base" />
                </div>
              </div>

              <div className="cop-pills">
                {[...floors].reverse().map((f) => (
                  <span
                    key={f}
                    className={`cop-pill ${f === currentFloor ? "on" : ""} ${f === targetFloor && moving ? "next" : ""}`}
                  >
                    {pad(f)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cop-about">
          <span />
          <p>
            A car operating panel is the one part of a lift every passenger
            touches. Each Venus Lifts panel pairs a clear floor display with
            responsive floor, door, light, fan, alarm and emergency-call
            buttons, in four shapes: classic rectangle, rounded capsule, arched
            multi-display and cut-corner bronze. Pick the shape and finish that
            suit your cabin interior.
          </p>
        </div>

        <p className="cop-disclaimer">
          Demonstration only. The alarm and emergency call do not operate real
          equipment or contact emergency services.
        </p>
      </div>
    </section>
  );
};

export default CarOperatingPanel;
