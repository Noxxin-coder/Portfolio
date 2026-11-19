"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { CreativeItem } from "@/data/creative";
import { GeneratedArt } from "@/components/ui/GeneratedArt";
import { Label, PlaceholderBadge } from "@/components/ui/Primitives";

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: CreativeItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);
  // Rendered into <body>, not in place: this component lives inside <main>,
  // and marking <main> inert would otherwise disable the dialog itself.
  const [mounted, setMounted] = useState(false);
  const open = index !== null;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    restoreTo.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // aria-modal promises the rest of the page is unavailable. Make it true,
    // which also stops Tab escaping into the covered content.
    const covered = document.querySelectorAll("main, footer");
    covered.forEach((el) => el.setAttribute("inert", ""));

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      covered.forEach((el) => el.removeAttribute("inert"));
      restoreTo.current?.focus();
    };
  }, [open, index, items.length, onClose, onIndex]);

  if (!open || !mounted) return null;
  const item = items[index];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — enlarged view`}
      className="fixed inset-0 z-70 flex flex-col bg-canvas/95 backdrop-blur-xl"
    >
      <div className="shell flex items-center justify-between gap-4 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <Label>{item.category}</Label>
          <span className="truncate text-ui text-ink">{item.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="label-mono">
            {index + 1} / {items.length}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid size-11 place-items-center rounded-full border border-line text-muted transition hover:text-ink"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 items-center gap-3 px-3 pb-4 sm:px-6">
        <button
          type="button"
          onClick={() => onIndex((index - 1 + items.length) % items.length)}
          aria-label="Previous item"
          className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-ink"
        >
          <ChevronLeft className="size-5" />
        </button>

        <figure className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4">
          {/* Ratio is preserved exactly: the box is as wide as 68svh at this
              ratio allows, capped at the available width. Never letterboxed,
              never squashed. */}
          <div
            className="overflow-hidden rounded-lg border border-line"
            style={{
              aspectRatio: item.ratio,
              width: `min(100%, calc(68svh * ${item.ratio}))`,
            }}
          >
            <GeneratedArt seed={item.id} className="size-full" />
          </div>
          <figcaption className="flex flex-wrap items-center justify-center gap-3 text-center">
            {item.caption ? <span className="text-ui text-muted">{item.caption}</span> : null}
            {item.placeholder ? <PlaceholderBadge /> : null}
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={() => onIndex((index + 1) % items.length)}
          aria-label="Next item"
          className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-ink"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>,
    document.body,
  );
}
