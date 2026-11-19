"use client";

import { useMemo, useState } from "react";
import { Expand } from "lucide-react";
import { creative, creativeCategories, type CreativeCategory } from "@/data/creative";
import { GeneratedArt } from "@/components/ui/GeneratedArt";
import { Label, PlaceholderBadge, SectionHeader, cx } from "@/components/ui/Primitives";
import { Lightbox } from "@/components/lightbox/Lightbox";
import { site } from "@/data/site";

type Filter = "All" | CreativeCategory;

const realCount = creative.filter((c) => !c.placeholder).length;

function Tile({
  item,
  onOpen,
  hero = false,
}: {
  item: (typeof creative)[number];
  onOpen: () => void;
  hero?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cx(
        "group relative block w-full overflow-hidden rounded-xl border border-line text-left transition",
        "hover:border-line-strong focus-visible:border-violet",
        !hero && "mb-4 break-inside-avoid",
      )}
      aria-label={`Open ${item.title}`}
    >
      {/* Aspect ratio comes from the data — artwork is never stretched. */}
      <div style={{ aspectRatio: item.ratio }} className="w-full">
        <GeneratedArt
          seed={item.id}
          className="size-full transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100">
        <div className="rounded-lg border border-line bg-canvas/85 px-3 py-2 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3">
            <span className={cx("truncate text-ink", hero ? "text-title" : "text-ui")}>
              {item.title}
            </span>
            <Expand className="size-3.5 shrink-0 text-muted" aria-hidden />
          </div>
          <div className="mt-1 flex items-center gap-2">
            <Label>{item.category}</Label>
            {item.placeholder ? (
              <span className="label-mono text-violet">Not made yet</span>
            ) : null}
          </div>
        </div>
      </div>
    </button>
  );
}

export function CreativeStudio() {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<number | null>(null);

  const shown = useMemo(
    () => (filter === "All" ? creative : creative.filter((c) => c.category === filter)),
    [filter],
  );

  const hero = shown.find((c) => c.scale === "hero") ?? shown[0];
  const rest = shown.filter((c) => c.id !== hero?.id);

  return (
    <section
      id="creative"
      className="relative scroll-mt-24 border-y border-line bg-surface/30 py-24 md:py-32"
    >
      <div className="shell">
        <SectionHeader
          name="Creative"
          state={realCount === 0 ? "Awaiting work" : `${realCount} of ${creative.length} real`}
          title={site.taglines.creative}
          lead={
            <p>
              Graphics, motion and edited work. None of my actual artwork is here yet — every
              tile below is a generated stand-in, sized to the shape the real piece will take.
            </p>
          }
        />

        <div role="group" aria-label="Filter creative work" className="mt-10 flex flex-wrap gap-2">
          {creativeCategories.map((c) => {
            const n = c === "All" ? creative.length : creative.filter((i) => i.category === c).length;
            const on = filter === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setFilter(c);
                  setOpen(null);
                }}
                aria-pressed={on}
                disabled={n === 0}
                className={cx(
                  "rounded-full border px-3.5 py-2.5 text-ui-sm transition",
                  on
                    ? "border-violet bg-violet/10 text-ink"
                    : "border-line text-muted hover:border-line-strong hover:text-ink",
                  n === 0 && "cursor-not-allowed opacity-35",
                )}
              >
                {c}
                <span className="ml-2 font-mono text-micro text-faint">{n}</span>
              </button>
            );
          })}
        </div>

        {shown.length === 0 ? (
          <p className="mt-10 font-prose text-body text-muted">Nothing in this category yet.</p>
        ) : (
          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            {hero ? (
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <Tile hero item={hero} onOpen={() => setOpen(shown.indexOf(hero))} />
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <Label>Lead piece</Label>
                    {hero.placeholder ? <PlaceholderBadge compact /> : null}
                  </div>
                </div>
              </div>
            ) : null}

            {/* Column masonry: preserves every ratio, no uniform card grid. */}
            <div className="lg:col-span-7">
              <div className="columns-1 gap-4 sm:columns-2">
                {rest.map((item) => (
                  <Tile key={item.id} item={item} onOpen={() => setOpen(shown.indexOf(item))} />
                ))}
              </div>
            </div>
          </div>
        )}

        <p aria-live="polite" className="mt-6 font-mono text-micro text-faint">
          Showing {shown.length} of {creative.length} pieces
          {filter !== "All" ? ` · ${filter}` : ""}
        </p>
      </div>

      <Lightbox items={shown} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </section>
  );
}
