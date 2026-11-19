import Link from "next/link";
import { Lock, ShieldCheck, TerminalSquare } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Label, PlaceholderBadge, SectionHeader, StatusChip } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Terminal } from "@/components/terminal/Terminal";

const FOCUS = [
  { area: "Linux & system internals", state: "Practising" },
  { area: "Networking fundamentals", state: "Studying" },
  { area: "Web application security", state: "Studying" },
  { area: "Vulnerability assessment", state: "Reading" },
  { area: "OSINT methodology", state: "Practising" },
  { area: "Digital privacy & hardening", state: "Practising" },
];

const LABS = [
  {
    title: "Isolated home lab",
    body: "Virtual machines on hardware I own, segmented from anything else on the network. Everything is reversible by design — snapshots before, snapshots after.",
  },
  {
    title: "Deliberately vulnerable targets",
    body: "Self-hosted, intentionally-insecure applications used to study vulnerability classes in an environment built for exactly that.",
  },
  {
    title: "Training platforms",
    body: "Named here once I have put enough hours into one to say something useful about it. Listing platforms I have merely signed up for would be padding.",
  },
];

const securityProjects = projects.filter((p) => p.category === "Cybersecurity");

export function Cybersecurity() {
  return (
    <section
      id="cybersecurity"
      className="relative scroll-mt-24 border-t border-line bg-canvas/60 py-24 md:py-32"
    >
      <div className="shell">
        <SectionHeader
          name="Cybersecurity"
          state="Studying"
          title="Learning how systems fail, on systems I am allowed to break."
          lead={
            <p>
              {site.taglines.cyber} No claimed findings, no client work, no certifications I do
              not hold — just the areas I am studying and the environments I study them in.
            </p>
          }
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {/* Focus grid — the security journey, as state rather than story. */}
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-xl border border-line bg-surface/40">
              <div className="flex items-center gap-2 border-b border-line px-5 py-3">
                <TerminalSquare className="size-3.5 text-violet" aria-hidden />
                <Label>Current focus</Label>
              </div>
              <ul className="divide-y divide-line">
                {FOCUS.map((f) => (
                  <li key={f.area} className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <span className="text-ui text-ink">{f.area}</span>
                    <span className="label-mono text-ice">{f.state}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-5">
            <Terminal
              className="h-full"
              prompt="KINSHUK@LAB:~$"
              lines={[
                "lab environment: isolated",
                "scope: owned hosts only",
                "authorisation: explicit",
                "notes: written after every session",
                "status: still learning",
              ]}
            />
          </Reveal>

          {/* Labs */}
          {LABS.map((l, i) => (
            <Reveal key={l.title} delay={0.04 * i} className="lg:col-span-4">
              <article className="h-full rounded-xl border border-line bg-surface/40 p-5">
                <Label className="block">Lab {String(i + 1).padStart(2, "0")}</Label>
                <h3 className="mt-3 text-title tracking-[-0.01em] text-ink">{l.title}</h3>
                <p className="mt-2 font-prose text-body text-muted">{l.body}</p>
              </article>
            </Reveal>
          ))}

          {/* CTF — honest empty state rather than invented results */}
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-xl border border-dashed border-line p-5">
              <h3 className="label-mono">CTF participation</h3>
              <p className="mt-3 font-prose text-body text-muted">
                None yet. When I enter one, the event, the team and the placement go here —
                whatever the placement turns out to be. An empty section is more useful to you
                than an invented one.
              </p>
            </div>
          </Reveal>

          {/* Security notes */}
          <Reveal delay={0.05} className="lg:col-span-7">
            <div className="h-full rounded-xl border border-line bg-surface/40 p-5">
              <h3 className="label-mono">Notes &amp; write-ups</h3>
              <ul className="mt-4 divide-y divide-line">
                {[
                  "Network fundamentals — working notes",
                  "Web security classes — study log",
                  "Hardening a personal machine",
                ].map((n) => (
                  <li key={n} className="flex items-center justify-between gap-4 py-3 first:pt-0">
                    <span className="text-ui text-muted">{n}</span>
                    <span className="label-mono text-violet">Writing</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-prose text-ui-sm text-faint">
                These are in progress, not published. They will link here when they are worth
                reading.
              </p>
            </div>
          </Reveal>

          {/* Defensive projects, pulled from the same project data */}
          <Reveal className="lg:col-span-12">
            <div className="rounded-xl border border-line bg-surface/40 p-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="label-mono">Defensive &amp; learning projects</h3>
                <Label>{securityProjects.length} entries</Label>
              </div>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {securityProjects.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="group flex h-full flex-col rounded-lg border border-line p-4 transition hover:border-line-strong hover:bg-canvas/40"
                    >
                      <div className="flex items-center gap-2">
                        <StatusChip status={p.status} />
                        {p.placeholder ? <PlaceholderBadge compact /> : null}
                      </div>
                      <h4 className="mt-3 text-ui text-ink group-hover:text-violet">{p.title}</h4>
                      <p className="mt-1.5 line-clamp-2 font-prose text-ui-sm text-muted">
                        {p.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Tools + ethics */}
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-xl border border-line bg-surface/40 p-5">
              <h3 className="label-mono">Tooling</h3>
              <p className="mt-3 font-prose text-body text-muted">
                Listed once a tool is genuinely part of how I work, not when I have read its
                documentation. That list is short right now, which is why it is not here yet.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-7">
            <div className="flex h-full flex-col gap-4 rounded-xl border border-ice/25 bg-ice/5 p-5 sm:flex-row">
              <ShieldCheck className="size-5 shrink-0 text-ice" aria-hidden />
              <div>
                <h3 className="text-ui font-medium text-ink">Responsible disclosure &amp; ethics</h3>
                <p className="mt-2 font-prose text-body text-muted">
                  All security work shown here is performed ethically, in isolated labs or on
                  systems where permission has been granted in writing. If I ever find something
                  in a system I do not own, it gets reported privately to whoever runs it, and
                  nothing is published without their agreement.
                </p>
                <p className="mt-3 flex items-center gap-2 font-mono text-micro text-faint">
                  <Lock className="size-3" aria-hidden /> No unauthorised access. No exploitation
                  instructions. No fabricated findings.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
