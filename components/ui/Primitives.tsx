import type { ReactNode } from "react";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** Small uppercase mono label used for metadata keys and captions. */
export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cx("label-mono", className)}>{children}</span>;
}

/**
 * Section header.
 *
 * The eyebrow reports the section's actual state instead of counting. Sections
 * are not a sequence — nobody reads a portfolio in order — so a number there
 * encoded nothing. A state encodes something true, and it is the one place the
 * site admits what is finished and what isn't.
 */
export function SectionHeader({
  name,
  state,
  title,
  lead,
  align = "split",
}: {
  name: string;
  state: string;
  title: string;
  lead?: ReactNode;
  align?: "split" | "stacked";
}) {
  return (
    <header
      className={cx(
        "border-t border-line pt-6",
        align === "split" ? "grid gap-6 md:grid-cols-12 md:gap-10" : "flex flex-col gap-4",
      )}
    >
      <div className={align === "split" ? "md:col-span-5" : ""}>
        <p className="label-mono flex flex-wrap items-center gap-2">
          <span>{name}</span>
          <span aria-hidden className="text-line-strong">
            ·
          </span>
          <span className="text-ice">{state}</span>
        </p>
        <h2 className="mt-3 text-headline font-semibold tracking-[-0.03em]">{title}</h2>
      </div>
      {lead ? (
        <div
          className={cx(
            "font-prose text-body text-muted",
            align === "split" ? "md:col-span-6 md:col-start-7 md:pt-9" : "max-w-2xl",
          )}
        >
          {lead}
        </div>
      ) : null}
    </header>
  );
}

const STATUS_TONE: Record<string, string> = {
  Completed: "text-ice border-ice/30 bg-ice/5",
  "In Progress": "text-violet border-violet/35 bg-violet/8",
  Experimental: "text-violet border-violet/25 bg-transparent",
  "Learning Project": "text-muted border-line-strong bg-transparent",
  Archived: "text-faint border-line bg-transparent",
  Concept: "text-faint border-line border-dashed bg-transparent",
};

export function StatusChip({ status }: { status: string }) {
  return (
    <span
      className={cx(
        "label-mono inline-flex items-center rounded-full border px-2.5 py-1",
        STATUS_TONE[status] ?? "text-muted border-line",
      )}
    >
      {status}
    </span>
  );
}

/** Never let scaffolding pass as real work. */
export function PlaceholderBadge({ compact = false }: { compact?: boolean }) {
  return (
    <span className="label-mono inline-flex items-center gap-1.5 rounded-full border border-dashed border-violet/40 bg-violet/8 px-2.5 py-1 text-violet">
      <span aria-hidden className="size-1 rounded-full bg-violet" />
      {compact ? "Not built yet" : "Not built yet — planned work"}
    </span>
  );
}

export function MetaRow({ k, v }: { k: string; v: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-line py-2.5 last:border-b-0">
      <Label>{k}</Label>
      <span className="text-right text-ui text-ink/90">{v}</span>
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-micro tracking-wide text-muted">
      {children}
    </span>
  );
}
