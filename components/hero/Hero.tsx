"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Label } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Terminal } from "@/components/terminal/Terminal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  /**
   * Desktop pointer parallax. Writes two custom properties and lets CSS move a
   * pre-painted layer by transform — no per-frame gradient repaint. Touch and
   * reduced-motion get the static composition, which is designed to hold on its
   * own.
   */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        el.style.setProperty("--px", String(e.clientX / window.innerWidth - 0.5));
        el.style.setProperty("--py", String(e.clientY / window.innerHeight - 0.5));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      style={{ ["--px" as string]: 0, ["--py" as string]: 0 }}
      className="relative flex min-h-[92svh] items-end overflow-hidden pb-14 pt-28 md:min-h-svh md:pb-20"
    >
      {/* Hero-local atmosphere. Both layers are painted once and moved by
          transform, so the pointer costs a composite, not a repaint. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[-6%] -z-10 transition-transform duration-500 ease-out"
        style={{ transform: "translate3d(calc(var(--px) * -24px), calc(var(--py) * -18px), 0)" }}
      >
        <div
          className="grid-field absolute inset-0"
          style={{ backgroundSize: "120px 120px", opacity: "calc(var(--grid-alpha) * 1.6)" }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[90vmax] transition-transform duration-700 ease-out"
        style={{
          transform:
            "translate3d(calc(-50% + var(--px) * 220px), calc(-50% + var(--py) * 180px), 0)",
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--c-violet) 20%, transparent), transparent)",
        }}
      />

      <div className="shell w-full">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <div className="flex items-center gap-3">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-violet opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-violet" />
                </span>
                <Label>{site.status.label}</Label>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="mt-6 text-display font-semibold tracking-[-0.055em] [font-stretch:112%]">
                {site.wordmark}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-balance text-ui text-muted sm:text-body">
                <span className="text-ink">Multidisciplinary Developer</span>
                <span className="mx-2 text-faint">•</span>
                <span className="text-ink">Cybersecurity Enthusiast</span>
                <span className="mx-2 text-faint">•</span>
                <span className="text-ink">Creative Technologist</span>
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-7 max-w-xl font-prose text-body text-muted">
                {site.heroDescription}
              </p>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-ui font-medium text-canvas transition hover:bg-violet-deep hover:text-white"
                >
                  Explore My Work
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-ui text-ink transition hover:border-ice hover:text-ice"
                >
                  Contact Me
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.44} className="lg:col-span-4">
            <div className="rounded-xl border border-line bg-surface/60 p-4 backdrop-blur-sm">
              <dl className="mb-4">
                {site.status.meta.map((m) => (
                  <div
                    key={m.k}
                    className="flex items-baseline justify-between gap-4 border-b border-line py-2 last:border-b-0"
                  >
                    <dt className="label-mono">{m.k}</dt>
                    <dd className="font-mono text-micro tracking-wide text-ink">
                      {m.v.toUpperCase()}
                    </dd>
                  </div>
                ))}
              </dl>
              <Terminal compact />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.55}>
          <div className="mt-14 flex items-center justify-between border-t border-line pt-5">
            <p className="max-w-xs font-prose text-ui-sm italic text-faint">{site.taglines.hero}</p>
            <a
              href="#about"
              className="group flex items-center gap-2 px-3 py-3 text-muted transition hover:text-ink"
              aria-label="Scroll to About"
            >
              <Label className="hidden sm:inline">Scroll</Label>
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
