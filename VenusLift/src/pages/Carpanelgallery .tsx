import React, { useEffect, useState } from "react";
import "../assets/styles/CarPanelGallery.css";

/* ============================================================
   >>> ADD YOUR IMAGE HERE <<<
   1. Copy your image (the one with the different car panels) to:
        src/assets/images/car-panels.jpg
   2. If your file has another name or type (png, webp), change
      the path in the import line below.
   ============================================================ */
import panelsImage from "../assets/images/carpannel.png";
const PANELS_IMAGE: string = panelsImage;

interface CarPanelGalleryProps {
  title?: string;
  text?: string;
  caption?: string;
}

const CarPanelGallery: React.FC<CarPanelGalleryProps> = ({
  title = "Car Panel Collection",
  text = "A look at our range of car operating panels, from classic steel to modern glass finishes.",
  caption = "Venus Lifts car operating panels",
}) => {
  const [zoom, setZoom] = useState(false);

  // Close the full-screen view with the Escape key
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  return (
    <section className="cpg-section" aria-label="Car panel collection">
      <div className="cpg-container">
        <header className="cpg-header">
          <h2 className="cpg-title">{title}</h2>
          <p className="cpg-text">{text}</p>
        </header>

        <figure className="cpg-frame">
          <span className="cpg-corner tl" />
          <span className="cpg-corner tr" />
          <span className="cpg-corner bl" />
          <span className="cpg-corner br" />

          <button
            type="button"
            className="cpg-open"
            onClick={() => setZoom(true)}
            aria-label="View image full screen"
          >
            <img
              className="cpg-img"
              src={PANELS_IMAGE}
              alt={caption}
              loading="lazy"
            />
            <span className="cpg-hint">Tap to enlarge</span>
          </button>

          <figcaption className="cpg-caption">{caption}</figcaption>
        </figure>
      </div>

      {zoom && (
        <div
          className="cpg-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setZoom(false)}
        >
          <button
            type="button"
            className="cpg-close"
            onClick={() => setZoom(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={PANELS_IMAGE}
            alt={caption}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default CarPanelGallery;
