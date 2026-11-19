import { site } from "@/data/site";
import { Label } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";

const NOTES = [
  "The name stayed. The person changed.",
  "Confidence without control becomes destruction.",
  "Not every path is the right one. Not every path gives the same result.",
];

/** The quiet section. Type, space, and almost nothing else. */
export function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="relative scroll-mt-24 overflow-hidden border-y border-line py-32 md:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(45% 55% at 50% 45%, color-mix(in srgb, var(--c-violet) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Label>Philosophy</Label>
          {/* The site's emotional peak, and a real heading — it belongs in the
              document outline, not just in the visual one. */}
          <h2
            id="philosophy-heading"
            className="mt-8 text-[clamp(1.9rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-ink"
          >
            {site.tagline}
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto mt-16 max-w-3xl">
          <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {NOTES.map((n) => (
              <li
                key={n}
                className="bg-canvas/90 p-6 font-prose text-body text-muted transition-colors hover:text-ink"
              >
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
