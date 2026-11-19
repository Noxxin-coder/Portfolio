"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Seconds, matching the old signature. Keep small — nothing should feel slow. */
  delay?: number;
  className?: string;
};

/**
 * One reveal primitive for the whole site.
 *
 * The element renders VISIBLE. `globals.css` only hides it once <html> carries
 * `.js`, which the boot script adds before first paint and only when motion is
 * welcome. So: no JS, JS still loading, or reduced motion → the content is
 * simply there. Motion is the enhancement, never the requirement.
 */
export function Reveal({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Not armed (reduced motion, or no boot script) — already visible, nothing to do.
    if (!document.documentElement.classList.contains("js")) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.in = "true";
        io.disconnect();
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      style={
        delay
          ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
