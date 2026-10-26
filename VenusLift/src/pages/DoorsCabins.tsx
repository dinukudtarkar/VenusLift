import { useEffect, useRef, type CSSProperties } from 'react';
import '../assets/styles/DoorsCabins.css';
import manual from '../assets/images/ad.png'
import swing from '../assets/images/adswingdoors elevetor.png'
import height from '../assets/images/adheightofconnfort.png'
/* Placeholder images: replace with your own imports, e.g.
   import manualElevator from '../../assets/images/DoorsCabins_manual.jpg'; */
 

interface HeightBar {
  label: string;
  value: number;
}

interface DoorItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  chips?: string[];
  heights?: HeightBar[];
}

 
const items: DoorItem[] = [
  {
    id: 1,
    tag: 'Low Rise',
    title: 'Manual Passenger Elevator',
    description:
      'Suitable for low rise applications. Employs a simplified mechanism and technology to offer seamless, economic vertical transportation.',
    image:manual,
    chips: ['Low rise applications', 'Cost effective', 'Easy to maintain'],
  },
  {
    id: 2,
    tag: 'Doors',
    title: 'Swing Doors',
    description:
      'A wide range of swing door lifts available in various sizes and thicknesses at the most economical prices.',
    image: swing,
    chips: [
      'MS Manual Swing Doors',
      'Telescopic Doors',
      'Imperforated Doors',
      'SS/MS Collapsible Doors',
    ],
  },
  {
    id: 3,
    tag: 'Cabins',
    title: 'Heights of Comfort',
    description:
      'Get the freedom to raise the height of landing doors, towering above the average. General offering is 2000 mm, with taller options available.',
    image: height,
    heights: [
      { label: 'Average', value: 1675 },
      { label: 'General', value: 2000 },
      { label: 'Option', value: 2100 },
      { label: 'Option', value: 2200 },
      { label: 'Option', value: 2300 },
      { label: 'Option', value: 2400 },
    ],
  },
];

/* Adds "is-visible" to .dc-reveal elements as they scroll into view */
const useReveal = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll('.dc-reveal');
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

const DoorsCabins = () => {
  const sectionRef = useReveal();

  return (
    <section className="dc-section" ref={sectionRef} aria-labelledby="dc-heading">
      <div className="dc-inner">
        <header className="dc-header dc-reveal">
          {/* <span className="dc-eyebrow">Venus Lift</span> */}
          <h2 className="dc-title" id="dc-heading">
            Doors <span className="dc-title-accent">&amp;</span> Cabins
          </h2>
          <div className="dc-divider" />
        </header>

        <div className="dc-grid">
          {items.map((item, i) => (
            <article
              key={item.id}
              className="dc-card dc-reveal"
              style={{ '--delay': `${i * 130}ms` } as CSSProperties}
            >
              <div className="dc-card-media">
                <img src={item.image} alt={item.title} className="dc-card-image" loading="lazy" />
                <span className="dc-card-index">{String(item.id).padStart(2, '0')}</span>
                <span className="dc-card-tag">{item.tag}</span>
              </div>

              <div className="dc-card-body">
                <h3 className="dc-card-title">{item.title}</h3>
                <p className="dc-card-desc">{item.description}</p>

                {item.chips && (
                  <ul className="dc-chips">
                    {item.chips.map((c) => (
                      <li key={c} className="dc-chip">
                        {c}
                      </li>
                    ))}
                  </ul>
                )}

                {/* {item.heights && (
                  <div
                    className="dc-heights"
                    role="img"
                    aria-label="Landing door heights from 2000 to 2400 millimetres compared with the 1675 millimetre average"
                  >
                    {item.heights.map((h, idx) => (
                      <div
                        key={`${h.label}-${h.value}`}
                        className={`dc-height-row${h.label === 'Average' ? ' dc-height-row-avg' : ''}`}
                      >
                        <span className="dc-height-label">{h.label}</span>
                        <span className="dc-height-track">
                          <span
                            className="dc-height-fill"
                            style={
                              {
                                '--w': `${(h.value / MAX_HEIGHT) * 100}%`,
                                '--i': idx,
                              } as CSSProperties
                            }
                          />
                        </span>
                        <span className="dc-height-value">{h.value} mm</span>
                      </div>
                    ))}
                  </div>
                )} */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoorsCabins;