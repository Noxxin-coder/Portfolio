import { GitBranch, Package, Workflow } from "lucide-react";
import { site } from "@/data/site";
import { Label, SectionHeader } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";

const STACK = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { group: "Frameworks", items: ["React", "Next.js", "Node.js", "Tailwind CSS"] },
  { group: "Tooling", items: ["Git", "GitHub", "VS Code", "Linux", "Docker"] },
];

const WORKFLOW = [
  {
    icon: Workflow,
    title: "Model the content first",
    body: "Types and data before components. If the shape of the content is wrong, no amount of interface work rescues it.",
  },
  {
    icon: Package,
    title: "Build the smallest working version",
    body: "Ship something that runs, then extend it. Abstractions get earned by a second use case, not predicted before the first.",
  },
  {
    icon: GitBranch,
    title: "Iterate in the open",
    body: "Small commits, readable diffs, and notes on what broke — the record matters more than the illusion of a clean run.",
  },
];

// A real excerpt from this codebase — the reveal primitive every section uses.
const SNIPPET = `// components/ui/Reveal.tsx
export function Reveal({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Not armed: reduced motion, or JS never ran.
    // The element is already visible. Nothing to do.
    if (!document.documentElement.classList.contains("js")) return;

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      el.dataset.in = "true";
      io.disconnect();
    }, { rootMargin: "0px 0px -80px 0px" });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Renders visible. CSS hides it only once <html> has .js,
  // which is set before paint and only when motion is welcome.
  return <div ref={ref} className="reveal">{children}</div>;
}`;

export function Developer() {
  return (
    <section id="developer" className="shell scroll-mt-24 py-24 md:py-32">
      <SectionHeader
        name="Development"
        state="This codebase"
        title={site.taglines.developer}
        lead={
          <p>
            The stack matters less than the habit: understand the problem, model it properly,
            and keep the build small enough to reason about. The code below runs on this page.
          </p>
        }
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <div className="space-y-8">
            {STACK.map((s) => (
              <div key={s.group}>
                <h3 className="label-mono block border-b border-line pb-3">{s.group}</h3>
                <ul className="mt-4 space-y-2.5">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-3 text-ui text-muted">
                      <span aria-hidden className="h-px w-4 bg-line-strong" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-8">
          <figure className="overflow-hidden rounded-xl border border-line bg-surface/50">
            <figcaption className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
              <Label>Reveal.tsx — motion as enhancement</Label>
              <Label className="hidden sm:inline">TypeScript · React</Label>
            </figcaption>
            <pre className="overflow-x-auto p-5 font-mono text-micro leading-relaxed text-muted sm:text-ui-sm">
              <code>{SNIPPET}</code>
            </pre>
          </figure>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {WORKFLOW.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-xl border border-line bg-surface/40 p-5">
                <Icon className="size-4 text-violet" aria-hidden />
                <h3 className="mt-3 text-ui font-medium text-ink">{title}</h3>
                <p className="mt-2 font-prose text-ui-sm text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
