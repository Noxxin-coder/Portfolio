import { cx } from "./Primitives";

/** Stable small hash so a given seed always draws the same composition. */
function hash(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/**
 * Generated abstract art used wherever a real image has not been supplied.
 * Pure CSS + inline SVG: no binary assets, nothing to 404, and it keeps the
 * grid looking art-directed instead of showing empty grey boxes.
 */
export function GeneratedArt({
  seed,
  className,
  motif,
}: {
  seed: string;
  className?: string;
  motif?: 0 | 1 | 2;
}) {
  const h = hash(seed);
  const m = motif ?? ((h % 3) as 0 | 1 | 2);
  const angle = h % 360;
  const x1 = 15 + (h % 55);
  const y1 = 20 + ((h >> 3) % 50);
  const x2 = 30 + ((h >> 5) % 60);
  const y2 = 25 + ((h >> 7) % 55);

  return (
    <div
      aria-hidden
      className={cx("relative isolate overflow-hidden bg-surface", className)}
      style={{
        backgroundImage: `radial-gradient(80% 90% at ${x1}% ${y1}%, color-mix(in srgb, var(--c-violet) 26%, transparent), transparent 62%), radial-gradient(70% 80% at ${x2}% ${y2}%, color-mix(in srgb, var(--c-ice) 18%, transparent), transparent 58%)`,
      }}
    >
      <svg
        className="absolute inset-0 size-full opacity-[0.45]"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
      >
        <g
          stroke="currentColor"
          className="text-ink/25"
          fill="none"
          strokeWidth="0.6"
          transform={`rotate(${angle} 100 100)`}
        >
          {m === 0 &&
            Array.from({ length: 9 }, (_, i) => (
              <circle key={i} cx="100" cy="100" r={12 + i * 11} />
            ))}
          {m === 1 &&
            Array.from({ length: 14 }, (_, i) => (
              <line key={i} x1={-40 + i * 20} y1="-40" x2={-90 + i * 20} y2="240" />
            ))}
          {m === 2 &&
            Array.from({ length: 7 }, (_, i) => (
              <path
                key={i}
                d={`M -20 ${30 + i * 26} Q 100 ${(i % 2 ? -10 : 60) + i * 20} 220 ${20 + i * 26}`}
              />
            ))}
        </g>
      </svg>
      <div className="grid-field absolute inset-0" style={{ backgroundSize: "28px 28px" }} />
      <div className="noise-field absolute inset-0" />
      <div className="absolute inset-0 bg-linear-to-t from-canvas/70 via-transparent to-transparent" />
    </div>
  );
}
