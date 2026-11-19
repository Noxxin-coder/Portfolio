import { journey } from "@/data/journey";
import { site } from "@/data/site";
import { Label, SectionHeader } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Stage-based, not dated. This is the one place on the site where numbering is
 * earned: these genuinely happened in this order, and the order is the content.
 */
export function Journey() {
  return (
    <section id="journey" className="shell scroll-mt-24 py-24 md:py-32">
      <SectionHeader
        name="Journey"
        state={`${journey.length} stages, no dates`}
        title="How the interests stacked up."
        lead={
          <p>
            {site.taglines.journey} This is the order things happened in. There are no years
            attached because I am not going to invent them.
          </p>
        }
      />

      <ol className="mt-14">
        {journey.map((s, i) => (
          <li key={s.id}>
            <Reveal delay={Math.min(i * 0.03, 0.15)}>
              <article className="group relative grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
                {/* Progress spine */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-px w-0 bg-linear-to-r from-violet to-transparent transition-all duration-700 group-hover:w-1/3"
                />

                <div className="flex items-baseline gap-4 md:col-span-3 md:flex-col md:gap-2">
                  <span className="font-mono text-title tracking-tight text-faint transition-colors group-hover:text-violet md:text-headline">
                    {s.index}
                  </span>
                  <Label>{s.kicker}</Label>
                </div>

                <div className="md:col-span-5">
                  <h3 className="text-title tracking-[-0.025em] text-ink md:text-headline md:font-semibold">
                    {s.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.markers.map((m) => (
                      <li
                        key={m}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-micro text-faint"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-prose text-body text-muted md:col-span-4">{s.body}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
