"use client";

import { useMemo, useState } from "react";
import { categories, projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader, cx } from "@/components/ui/Primitives";

type Filter = "All" | ProjectCategory;

const realCount = projects.filter((p) => !p.placeholder).length;

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const shown = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["All", projects.length]]);
    for (const p of projects) map.set(p.category, (map.get(p.category) ?? 0) + 1);
    return map;
  }, []);

  return (
    <section id="projects" className="shell scroll-mt-24 py-24 md:py-32">
      <SectionHeader
        name="Projects"
        state={`${realCount} of ${projects.length} real`}
        title="Work, and work that is still a plan."
        lead={
          <p>
            Evidence beats adjectives. The entries marked{" "}
            <span className="text-violet">not built yet</span> are things I intend to make —
            they are labelled rather than dressed up as history.
          </p>
        }
      />

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-10 flex flex-wrap gap-2"
      >
        {categories.map((c) => {
          const n = counts.get(c) ?? 0;
          const on = filter === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={on}
              disabled={n === 0}
              className={cx(
                "rounded-full border px-3.5 py-2.5 text-ui-sm transition",
                on
                  ? "border-violet bg-violet/10 text-ink"
                  : "border-line text-muted hover:border-line-strong hover:text-ink",
                n === 0 && "cursor-not-allowed opacity-35 hover:border-line",
              )}
            >
              {c}
              <span className="ml-2 font-mono text-micro text-faint">{n}</span>
            </button>
          );
        })}
      </div>

      {/* Keyed on the filter so cards remount and replay the entrance.
          The bento spans only apply to the full set — a filtered view of one or
          two cards under a 12-column shape map leaves holes, so narrowed views
          fall back to an even grid. */}
      <div
        key={filter}
        className={cx(
          "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2",
          filter === "All" ? "lg:grid-flow-dense lg:grid-cols-12" : "lg:grid-cols-3",
        )}
      >
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} bento={filter === "All"} />
        ))}
      </div>

      <p aria-live="polite" className="mt-6 font-mono text-micro text-faint">
        Showing {shown.length} of {projects.length} projects
        {filter !== "All" ? ` · ${filter}` : ""}
      </p>
    </section>
  );
}
