import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { GeneratedArt } from "@/components/ui/GeneratedArt";
import { Label, PlaceholderBadge, StatusChip, cx } from "@/components/ui/Primitives";

/** Grid footprint per shape — this is what stops every card looking identical. */
export const SHAPE_SPAN: Record<Project["shape"], string> = {
  featured: "sm:col-span-2 lg:col-span-8 lg:row-span-2",
  wide: "sm:col-span-2 lg:col-span-8",
  tall: "lg:col-span-4 lg:row-span-2",
  compact: "lg:col-span-4",
  technical: "lg:col-span-4",
};

export function ProjectCard({
  project,
  index = 0,
  bento = true,
}: {
  project: Project;
  index?: number;
  /** Off in filtered views, where a 12-column shape map would leave holes. */
  bento?: boolean;
}) {
  const p = project;
  const art = p.shape === "featured" || p.shape === "tall" || p.shape === "wide";
  const technical = p.shape === "technical";

  return (
    <Link
      href={`/projects/${p.slug}`}
      style={{ animationDelay: `${Math.min(index * 45, 320)}ms` }}
      className={cx(
        "card-in group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface/40 transition duration-300",
        "hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface/70",
        bento && SHAPE_SPAN[p.shape],
      )}
    >
      {art ? (
        <div className="relative overflow-hidden">
          <GeneratedArt
            seed={p.slug}
            className={cx(
              "w-full transition-transform duration-700 group-hover:scale-[1.03]",
              !bento
                ? "aspect-16/9"
                : p.shape === "featured"
                  ? "aspect-16/9"
                  : p.shape === "tall"
                    ? "aspect-3/4"
                    : "aspect-21/9",
            )}
          />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <StatusChip status={p.status} />
            {p.placeholder ? <PlaceholderBadge compact /> : null}
          </div>
        </div>
      ) : null}

      <div className={cx("flex flex-1 flex-col p-5", technical && "font-mono")}>
        <div className="flex items-center justify-between gap-3">
          <Label>{p.category}</Label>
          {!art ? <StatusChip status={p.status} /> : null}
        </div>

        <h3
          className={cx(
            "mt-3 tracking-[-0.02em] text-ink",
            bento && p.shape === "featured" ? "text-headline font-semibold" : "text-title",
            technical && "font-mono text-ui",
          )}
        >
          {p.title}
        </h3>

        <p
          className={cx(
            "mt-2 text-muted",
            technical ? "font-mono text-ui-sm" : "font-prose text-body",
            bento && p.shape === "featured" ? "max-w-xl" : "line-clamp-3",
          )}
        >
          {p.description}
        </p>

        {!art && p.placeholder ? (
          <div className="mt-3">
            <PlaceholderBadge compact />
          </div>
        ) : null}

        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <ul className="flex flex-wrap gap-1.5">
            {p.technologies.slice(0, 4).map((t) => (
              <li
                key={t}
                className="rounded border border-line px-1.5 py-0.5 font-mono text-micro text-faint"
              >
                {t}
              </li>
            ))}
          </ul>
          <span
            aria-hidden
            className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-muted transition group-hover:border-violet group-hover:text-violet"
          >
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
