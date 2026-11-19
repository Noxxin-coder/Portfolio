"use client";

import { useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { skillGroups, type Level } from "@/data/skills";
import { Label, SectionHeader, cx } from "@/components/ui/Primitives";

const LEVEL_TONE: Record<Level, string> = {
  Learning: "text-faint border-line",
  Familiar: "text-muted border-line",
  Intermediate: "text-ice border-ice/30",
  Advanced: "text-violet border-violet/40",
  "Project-based": "text-ink border-line-strong",
};

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);
  const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0];

  function onKeyDown(e: React.KeyboardEvent) {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const i = skillGroups.findIndex((g) => g.id === active);
    const last = skillGroups.length - 1;
    const next =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? last
          : e.key === "ArrowDown" || e.key === "ArrowRight"
            ? Math.min(i + 1, last)
            : Math.max(i - 1, 0);
    setActive(skillGroups[next].id);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return (
    <section id="skills" className="shell scroll-mt-24 py-24 md:py-32">
      <SectionHeader
        name="Skills"
        state="Self-assessed"
        title="What I can actually do, said plainly."
        lead={
          <p>
            No percentages — they imply a precision nobody has. These are experience labels,
            judged by me, and linked to work where the work exists.
          </p>
        }
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Vertical category rail. Below lg it becomes a horizontal scroller,
            masked at the right edge so the overflow is visibly an overflow. */}
        <div className="relative lg:col-span-4">
          {/* No aria-orientation: the rail is vertical at lg and horizontal below
              it, and the key handler accepts both axes either way. */}
          <div
            ref={tabsRef}
            role="tablist"
            aria-label="Skill categories"
            onKeyDown={onKeyDown}
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {skillGroups.map((g) => {
              const on = g.id === active;
              return (
                <button
                  key={g.id}
                  role="tab"
                  id={`tab-${g.id}`}
                  aria-selected={on}
                  aria-controls={`panel-${g.id}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(g.id)}
                  className={cx(
                    "group relative shrink-0 border-line text-left transition-colors lg:w-full lg:border-t",
                    "rounded-full border px-4 py-3 lg:rounded-none lg:border-x-0 lg:border-b-0 lg:px-0 lg:py-5",
                    on ? "border-violet/60 text-ink lg:border-t-violet" : "text-muted hover:text-ink",
                  )}
                >
                  <span className="flex items-baseline gap-3">
                    <span className={cx("label-mono hidden lg:inline", on && "text-violet")}>
                      {g.index}
                    </span>
                    <span className="text-ui tracking-[-0.01em] lg:text-title">{g.title}</span>
                  </span>
                  <span className="hidden text-micro text-faint lg:mt-1 lg:block lg:pl-9">
                    {g.items.length} areas
                  </span>
                </button>
              );
            })}
          </div>
          {/* Edge fade so a phone reader can see there is more to the right. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-canvas to-transparent lg:hidden"
          />
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-7 lg:col-start-6">
          <div
            role="tabpanel"
            id={`panel-${group.id}`}
            aria-labelledby={`tab-${group.id}`}
            tabIndex={0}
          >
            <p className="max-w-xl font-prose text-body text-muted">{group.blurb}</p>

            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {group.items.map((s) => (
                <li
                  key={s.name}
                  className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-line py-3"
                >
                  <span className="text-ui text-ink">{s.name}</span>
                  <span
                    className={cx("label-mono rounded-full border px-2 py-1", LEVEL_TONE[s.level])}
                  >
                    {s.level}
                  </span>
                  {s.usedIn ? (
                    <span className="w-full font-mono text-micro text-faint">
                      Used in → {s.usedIn}
                    </span>
                  ) : null}
                  {s.note ? (
                    <span className="w-full font-mono text-micro text-faint">{s.note}</span>
                  ) : null}
                </li>
              ))}
            </ul>

            {group.footnote ? (
              <p className="mt-8 flex items-start gap-3 rounded-lg border border-ice/25 bg-ice/5 p-4 font-prose text-body text-muted">
                <ShieldCheck className="mt-1 size-4 shrink-0 text-ice" aria-hidden />
                {group.footnote}
              </p>
            ) : null}
          </div>

          <p className="mt-8">
            <Label>Levels are my own judgement, not a certification</Label>
          </p>
        </div>
      </div>
    </section>
  );
}
