import Link from "next/link";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import { featuredProject } from "@/data/projects";
import { GeneratedArt } from "@/components/ui/GeneratedArt";
import { Label, PlaceholderBadge, Pill, StatusChip } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";

const BLOCKS = [
  { k: "The problem", f: "problem" },
  { k: "The idea", f: "idea" },
  { k: "Challenges", f: "challenges" },
  { k: "Result", f: "result" },
  { k: "Lessons", f: "lessons" },
] as const;

/**
 * One deep case study, laid out as an editorial spread rather than another
 * card. Buttons only render when a real destination exists.
 */
export function FeaturedCase() {
  const p = featuredProject;
  const cs = p.caseStudy;
  if (!cs) return null;

  return (
    <section
      id="case-study"
      className="relative scroll-mt-24 border-b border-line bg-surface/40 py-24 md:py-32"
    >
      <div className="shell">
        <Reveal>
          <p className="label-mono flex flex-wrap items-center gap-2">
            <span>Case study</span>
            <span aria-hidden className="text-line-strong">
              ·
            </span>
            <span className="text-ice">The only finished one</span>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <StatusChip status={p.status} />
            {p.placeholder ? <PlaceholderBadge /> : null}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <h2 className="text-headline font-semibold tracking-[-0.035em]">{p.title}</h2>
            <p className="mt-5 max-w-xl font-prose text-body text-muted">{p.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/projects/${p.slug}`}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-ui font-medium text-canvas transition hover:bg-violet-deep hover:text-white"
              >
                Read the case study
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-ui transition hover:border-ice hover:text-ice"
                >
                  <Github className="size-4" /> GitHub
                </a>
              ) : null}
              {p.liveUrl ? (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-ui transition hover:border-ice hover:text-ice"
                >
                  <Globe className="size-4" /> Live Demo
                </a>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <GeneratedArt
              seed={`${p.slug}-case`}
              motif={2}
              className="aspect-4/3 w-full rounded-xl border border-line"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {BLOCKS.slice(0, 2).map(({ k, f }, i) => (
            <Reveal key={k} delay={i * 0.05} className="md:col-span-1">
              <Label className="block border-t border-line pt-4">{k}</Label>
              <p className="mt-3 font-prose text-body text-muted">{cs[f]}</p>
            </Reveal>
          ))}

          <Reveal delay={0.1} className="md:col-span-2 lg:col-span-1">
            <Label className="block border-t border-line pt-4">The process</Label>
            <ol className="mt-3 space-y-3">
              {cs.process.map((step, i) => (
                <li key={step} className="flex gap-3 font-prose text-body text-muted">
                  <span className="label-mono mt-1.5 shrink-0 text-violet">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>

          {BLOCKS.slice(2).map(({ k, f }, i) => (
            <Reveal key={k} delay={i * 0.05}>
              <Label className="block border-t border-line pt-4">{k}</Label>
              <p className="mt-3 font-prose text-body text-muted">{cs[f]}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05} className="mt-12 border-t border-line pt-6">
          <Label className="block">Technologies</Label>
          <ul className="mt-3 flex flex-wrap gap-2">
            {[...p.technologies, ...(p.tools ?? [])].map((t) => (
              <li key={t}>
                <Pill>{t}</Pill>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
