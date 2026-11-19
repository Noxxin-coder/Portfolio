import { Label, MetaRow, SectionHeader } from "@/components/ui/Primitives";
import { GeneratedArt } from "@/components/ui/GeneratedArt";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

const FACETS = [
  "Problem solving",
  "Programming",
  "Web development",
  "Cybersecurity",
  "Automation",
  "Creative design",
  "VFX & motion",
  "Communities",
  "Leadership",
  "Independent work",
];

export function About() {
  return (
    <section id="about" className="shell scroll-mt-24 py-24 md:py-32">
      <SectionHeader
        name="About"
        state="Written"
        title="I like knowing how things work, then building one myself."
        lead={
          <p>
            Most of what I do starts with the same question: what is actually happening
            underneath? That question turns into scripts, interfaces, security labs, posters
            and edits — different outputs, one habit.
          </p>
        }
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Portrait column — replace the generated art with a real photo. */}
        <Reveal className="lg:col-span-4">
          <figure className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-xl border border-line">
              <GeneratedArt seed="kinshuk-portrait" motif={0} className="aspect-4/5 w-full" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-line bg-canvas/80 px-3 py-2 backdrop-blur-sm">
                <Label>Portrait</Label>
                <span className="label-mono text-violet">No photo yet</span>
              </figcaption>
            </div>
            <div className="mt-4 rounded-xl border border-line bg-surface/50 p-4">
              <MetaRow k="Based" v="Not published" />
              <MetaRow k="Working on" v="Projects worth pointing at" />
              <MetaRow k="Learning" v="Security fundamentals" />
              <MetaRow k="Open to" v="Collaboration" />
            </div>
          </figure>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="font-prose text-lede tracking-[-0.015em] text-ink">
              I build things, break them, and rebuild them better. That loop covers software,
              web development, automation and security, and it covers design, motion and video
              too — because a system nobody wants to use is only half finished.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="mt-8 space-y-5 font-prose text-body text-muted">
            <p>
              The technical side came from curiosity: reading how a thing worked, writing a
              small script to prove I understood it, then extending that script until it became
              a tool. Cybersecurity extended the same instinct in the other direction — asking
              how a system fails, and who it fails for. All of that stays in labs and
              environments where permission is explicit.
            </p>
            <p>
              The creative side is older. Graphics, motion work and editing taught me
              composition, timing and restraint long before I applied any of it to an
              interface. Running gaming teams and digital communities taught me the part that
              is not technical at all: keeping a group of people aligned when nothing is
              obligatory.
            </p>
            <p>
              I work independently most of the time, which means the whole path is mine — the
              idea, the build, the mistakes, and the version that finally works. I would rather
              show a small thing that is genuinely finished than describe a large thing that
              isn&apos;t.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <Label className="block">Working across</Label>
            <ul className="mt-4 flex flex-wrap gap-2">
              {FACETS.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-line px-3 py-1.5 text-ui-sm text-muted transition hover:border-violet/50 hover:text-ink"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.14} className="mt-12">
            <blockquote className="border-l border-violet/50 pl-6">
              <p className="font-prose text-lede tracking-[-0.01em] text-ink">
                {site.taglines.journey}
              </p>
              <footer className="mt-3">
                <Label>Personal philosophy</Label>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
