// ─────────────────────────────────────────────────────────────
// PROJECTS — the proof-of-work section.
//
// `placeholder: true` means the project is NOT built. Those entries render a
// visible "Not built yet" badge everywhere they appear, and the Projects
// eyebrow reports the real ratio ("1 of 10 real") automatically.
//
// Copy rule: descriptions are written for a VISITOR, not for whoever edits
// this file. Say what the thing is and where it actually stands. Never write
// build instructions here — they end up rendered on the page.
//
// Drop the flag only when the entry is genuinely real.
// ─────────────────────────────────────────────────────────────

export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Experimental"
  | "Learning Project"
  | "Archived"
  | "Concept";

export type ProjectCategory =
  | "Cybersecurity"
  | "Software"
  | "Websites"
  | "Automation"
  | "Graphic Design"
  | "VFX"
  | "Gaming"
  | "Community";

/** Drives the asymmetric grid so cards do not all look identical. */
export type CardShape = "featured" | "wide" | "tall" | "compact" | "technical";

export type CaseStudy = {
  problem: string;
  idea: string;
  process: string[];
  challenges: string;
  result: string;
  lessons: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  tools?: string[];
  role?: string;
  status: ProjectStatus;
  shape: CardShape;
  /** Optional real image under /public. Omitted entries render generated art. */
  image?: string;
  github?: string;
  liveUrl?: string;
  featured?: boolean;
  placeholder?: boolean;
  caseStudy?: CaseStudy;
};

export const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Cybersecurity",
  "Software",
  "Websites",
  "Automation",
  "Graphic Design",
  "VFX",
  "Gaming",
  "Community",
];

export const projects: Project[] = [
  {
    slug: "this-portfolio",
    title: "This Portfolio",
    category: "Websites",
    description:
      "The site you are reading. A personal identity system rather than a resume page — built as a design system first, then filled with work.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    tools: ["VS Code", "Git"],
    role: "Design & build",
    status: "In Progress",
    shape: "featured",
    featured: true,
    caseStudy: {
      problem:
        "Most personal portfolios are a resume in HTML: a centred hero, a grid of identical cards, a skill bar that claims 97% of something. None of it tells you how the person thinks, and none of it survives a second visit.",
      idea:
        "Treat the portfolio as a design system with a point of view. One texture, one type scale, one accent pair — then let each section take a genuinely different composition, so scrolling feels like moving through rooms rather than down a list.",
      process: [
        "Defined the token layer first: colour, type, spacing, grain and grid, in a single stylesheet.",
        "Separated all content into typed data files so the site can be re-authored without touching a component.",
        "Composed each section around a different structural idea — vertical rail, bento grid, editorial gallery, sticky timeline.",
        "Built motion last, treating reduced-motion as the baseline rather than an afterthought.",
      ],
      challenges:
        "Restraint was the hard part. Every section had an obvious opportunity for one more effect, and most of them made the content harder to read. The second problem was harder: the site started out labelling its own gaps with 57 separate placeholder markers, which stopped reading as honesty and started reading as an empty building with excellent signage.",
      result:
        "A site that stays legible with animation disabled and with JavaScript off, ships no invented achievements, and can be repopulated with real work by editing five data files.",
      lessons:
        "A consistent system beats a collection of clever moments. Writing the content model before the components saves rewriting the components. And labelling a gap is only honest at small volume — past a certain count you are not being transparent, you are just shipping early.",
    },
  },
  {
    slug: "placeholder-security-lab",
    title: "Home Lab Setup",
    category: "Cybersecurity",
    description:
      "A segmented lab on hardware I own, for practising technique legally and reversibly. Not built yet — it is the next thing I intend to stand up properly.",
    technologies: ["Linux", "Virtualisation", "Networking"],
    role: "Solo",
    status: "Learning Project",
    shape: "tall",
    placeholder: true,
    featured: true,
    caseStudy: {
      problem:
        "Practising security technique on anything you do not own is both illegal and a poor way to learn — you get one attempt and no way to reset. Without an isolated environment there is nowhere safe to be wrong, and being wrong repeatedly is the entire method.",
      idea:
        "A lab on my own hardware: virtual machines that can be broken, snapshotted and rolled back, segmented so that nothing I do inside it can reach anything that matters.",
      process: [
        "Decide the host and the network segmentation before installing anything — the isolation is the point, so it gets designed first.",
        "Stand up one target machine and one working machine, snapshot both before touching either.",
        "Write notes after every session, including the sessions where nothing worked.",
      ],
      challenges:
        "Unknown, because it is not built. Whatever actually goes wrong will be written here rather than smoothed over afterwards.",
      result: "Nothing yet.",
      lessons:
        "Nothing yet. This entry is published empty on purpose: the gap between what I intend to build and what I have built is the most useful thing on this page.",
    },
  },
  {
    slug: "placeholder-automation-toolkit",
    title: "Automation Toolkit",
    category: "Automation",
    description:
      "Small scripts that take the repetitive parts out of a daily workflow. I keep writing these one at a time and throwing them away; collecting them properly is the plan.",
    technologies: ["Python"],
    status: "In Progress",
    shape: "compact",
    placeholder: true,
  },
  {
    slug: "placeholder-web-app",
    title: "Web Application",
    category: "Software",
    description:
      "A full-stack application with an API, persistence and an interface someone would actually use. Still a concept — I want one real end-to-end build on record.",
    technologies: ["React", "Node.js"],
    status: "Concept",
    shape: "wide",
    placeholder: true,
  },
  {
    slug: "placeholder-vulnerable-app-lab",
    title: "Vulnerable App Lab",
    category: "Cybersecurity",
    description:
      "A deliberately insecure application, self-hosted, for studying web vulnerability classes in an environment built for exactly that. Planned, not running.",
    technologies: ["Docker", "Linux"],
    status: "Learning Project",
    shape: "technical",
    placeholder: true,
  },
  {
    slug: "placeholder-brand-system",
    title: "Brand System",
    category: "Graphic Design",
    description:
      "A small identity system — mark, type pairing, colour, and the layouts that apply them. Planned as a way to put the design side on record properly.",
    technologies: [],
    status: "Concept",
    shape: "compact",
    placeholder: true,
  },
  {
    slug: "placeholder-motion-reel",
    title: "Motion Reel",
    category: "VFX",
    description:
      "A cut of the motion and editing work worth showing: titles, transitions, compositing, grade. Not assembled yet.",
    technologies: [],
    status: "Concept",
    shape: "wide",
    placeholder: true,
  },
  {
    slug: "placeholder-esports-team",
    title: "Competitive Team",
    category: "Gaming",
    description:
      "Building and running a roster — practice structure, strategy, and the unglamorous scheduling. Written up once I can describe it without inflating it.",
    technologies: [],
    status: "Archived",
    shape: "compact",
    placeholder: true,
  },
  {
    slug: "placeholder-community",
    title: "Community Server",
    category: "Community",
    description:
      "Moderation structure, onboarding, bots and events for an active Discord community. Running, but not documented well enough to show yet.",
    technologies: ["Discord API"],
    status: "In Progress",
    shape: "technical",
    placeholder: true,
  },
  {
    slug: "placeholder-landing-page",
    title: "Landing Page Build",
    category: "Websites",
    description:
      "A single page taken from brief to deploy, built for speed and accessibility. An exercise I want to do properly and document as I go.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Concept",
    shape: "compact",
    placeholder: true,
  },
];

export const featuredProject: Project =
  projects.find((p) => p.featured && !p.placeholder) ?? projects[0];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
