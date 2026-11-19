"use client";

import { useEffect, useState } from "react";
import { cx } from "@/components/ui/Primitives";

// Only statements that are actually true. The old set printed things like
// "optimization complete" — fabricated machine output on a site whose whole
// argument is that it never claims what did not happen.
const DEFAULT_LINES = [
  "reading the docs again",
  "breaking it on purpose",
  "rewriting the part that worked",
  "still learning",
  "still building",
];

/**
 * Decorative terminal. It prints status lines and nothing else — no input,
 * no commands, nothing actionable. One component, reused in the hero and the
 * cybersecurity section.
 */
export function Terminal({
  lines = DEFAULT_LINES,
  prompt = "KINSHUK@SYSTEM:~$",
  compact = false,
  className,
}: {
  lines?: string[];
  prompt?: string;
  compact?: boolean;
  className?: string;
}) {
  // Starts fully printed so the content is readable before JS runs and for
  // anyone who never gets it. The cycle is decoration layered on top.
  const [shown, setShown] = useState(lines.length);

  useEffect(() => {
    // Same motion gate as Reveal: `.js` is set before paint, and only when
    // motion is welcome. Not armed → stays fully printed.
    if (!document.documentElement.classList.contains("js")) return;
    const id = setInterval(() => {
      setShown((n) => (n >= lines.length ? 1 : n + 1));
    }, 900);
    return () => clearInterval(id);
  }, [lines.length]);

  return (
    <div
      className={cx(
        "overflow-hidden rounded-lg border border-line bg-canvas/70",
        compact ? "text-micro" : "text-micro sm:text-ui-sm",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span aria-hidden className="size-1.5 rounded-full bg-violet/70" />
        <span aria-hidden className="size-1.5 rounded-full bg-ice/50" />
        <span aria-hidden className="size-1.5 rounded-full bg-line-strong" />
        <span className="label-mono ml-1 truncate">{prompt}</span>
      </div>
      <div
        className={cx("font-mono leading-relaxed", compact ? "p-3" : "p-4")}
        aria-live="off"
      >
        <ul className="space-y-1">
          {lines.map((line, i) => (
            <li
              key={line}
              className={cx(
                "flex gap-2 transition-opacity duration-500",
                i < shown ? "opacity-100" : "opacity-0",
              )}
            >
              <span aria-hidden className="text-violet">
                &gt;
              </span>
              <span className="text-muted">{line}</span>
            </li>
          ))}
        </ul>
        <span
          aria-hidden
          className="mt-1 inline-block h-3.5 w-1.5 animate-pulse bg-ice/80 align-middle motion-reduce:animate-none"
        />
      </div>
    </div>
  );
}
