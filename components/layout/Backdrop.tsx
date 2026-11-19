/**
 * The shared atmosphere: one fine grid, one grain pass, two very soft glows.
 * Fixed behind everything so the whole site reads as a single surface.
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-field absolute inset-0" />
      <div className="noise-field absolute inset-0" />
      <div
        className="absolute -top-[30vh] left-1/2 h-[70vh] w-[110vw] -translate-x-1/2 opacity-70"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--c-violet) 16%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-20vh] right-[-10vw] h-[60vh] w-[60vw] opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--c-ice) 12%, transparent), transparent 70%)",
        }}
      />
    </div>
  );
}
