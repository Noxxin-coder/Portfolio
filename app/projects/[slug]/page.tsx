import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Globe } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { GeneratedArt } from "@/components/ui/GeneratedArt";
import { Label, MetaRow, PlaceholderBadge, Pill, StatusChip } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Project not found" };
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title: `${p.title} · Kinshuk`, description: p.description },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="border-t border-line pt-6">
      <h2 className="label-mono">{title}</h2>
      <div className="mt-3 font-prose text-body text-muted">{children}</div>
    </Reveal>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const cs = p.caseStudy;
  const others = projects.filter((o) => o.slug !== p.slug).slice(0, 3);

  return (
    <article className="pb-24 pt-28 md:pt-32">
      <div className="shell">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 py-2 text-ui text-muted transition hover:text-ink"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>

        <header className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <Label>{p.category}</Label>
              <StatusChip status={p.status} />
              {p.placeholder ? <PlaceholderBadge /> : null}
            </div>
            <h1 className="mt-5 text-display font-semibold tracking-[-0.04em] [font-size:clamp(2.5rem,7vw,4.5rem)]">
              {p.title}
            </h1>
            <p className="mt-5 max-w-xl font-prose text-body text-muted">{p.description}</p>

            {p.github || p.liveUrl ? (
              <div className="mt-8 flex flex-wrap gap-3">
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
            ) : (
              <p className="mt-8 font-mono text-micro text-faint">
                No repository or live URL — there is nothing to link to yet.
              </p>
            )}
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-xl border border-line bg-surface/40 p-4">
              <MetaRow k="Category" v={p.category} />
              <MetaRow k="Status" v={p.status} />
              {p.role ? <MetaRow k="Role" v={p.role} /> : null}
              <MetaRow k="Stack" v={p.technologies.length ? p.technologies.join(", ") : "—"} />
              {p.tools?.length ? <MetaRow k="Tools" v={p.tools.join(", ")} /> : null}
            </div>
          </aside>
        </header>

        <Reveal className="mt-12">
          <GeneratedArt
            seed={`${p.slug}-hero`}
            className="aspect-21/9 w-full rounded-xl border border-line"
          />
          <p className="label-mono mt-3">
            {p.placeholder ? "Generated stand-in — nothing to photograph yet" : "Generated cover"}
          </p>
        </Reveal>

        {cs ? (
          <div className="mt-16 grid gap-x-12 gap-y-10 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-7">
              <Block title="The problem">{cs.problem}</Block>
              <Block title="The idea">{cs.idea}</Block>
              <Block title={p.placeholder ? "The plan" : "The process"}>
                <ol className="space-y-3">
                  {cs.process.map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="label-mono mt-1.5 shrink-0 text-violet">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </Block>
              <Block title="Challenges">{cs.challenges}</Block>
              <Block title="Result">{cs.result}</Block>
              <Block title="Lessons">{cs.lessons}</Block>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal className="lg:sticky lg:top-28">
                <h2 className="label-mono block border-t border-line pt-6">Technologies</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[...p.technologies, ...(p.tools ?? [])].map((t) => (
                    <li key={t}>
                      <Pill>{t}</Pill>
                    </li>
                  ))}
                </ul>

                {!p.placeholder ? (
                  <>
                    <h2 className="label-mono mt-10 block border-t border-line pt-6">Screens</h2>
                    <div className="mt-4 space-y-3">
                      {[0, 1].map((i) => (
                        <GeneratedArt
                          key={i}
                          seed={`${p.slug}-shot-${i}`}
                          className="aspect-16/10 w-full rounded-lg border border-line"
                        />
                      ))}
                    </div>
                  </>
                ) : null}
              </Reveal>
            </div>
          </div>
        ) : (
          <Reveal className="mt-16 rounded-xl border border-dashed border-line p-6">
            <h2 className="label-mono block">No write-up yet</h2>
            <p className="mt-3 max-w-xl font-prose text-body text-muted">
              This one has a summary but no full write-up. It gets one when there is something
              worth reading — the problem it solved, what went wrong, and what I would do
              differently.
            </p>
          </Reveal>
        )}

        <section className="mt-20 border-t border-line pt-8">
          <h2 className="label-mono block">More work</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/projects/${o.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-surface/40 p-5 transition hover:border-line-strong"
                >
                  <Label>{o.category}</Label>
                  <span className="mt-3 flex items-center justify-between gap-3 text-ui text-ink group-hover:text-violet">
                    {o.title}
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
