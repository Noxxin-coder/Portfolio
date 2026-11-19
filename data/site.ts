// ─────────────────────────────────────────────────────────────
// Site-level content. Edit here, not in components.
// Anything marked [PLACEHOLDER] is not real information yet.
// ─────────────────────────────────────────────────────────────

/** [PLACEHOLDER EMAIL] — set this to enable the mailto contact flow.
 *  Left empty on purpose: the contact form degrades to "copy message"
 *  rather than pretending a message was delivered. */
export const CONTACT_EMAIL = "";

export const site = {
  wordmark: "KINSHUK",
  name: "Kinshuk",
  positioning:
    "Multidisciplinary Developer • Cybersecurity Enthusiast • Creative Technologist",
  roles: ["Developer", "Creative Technologist", "Cybersecurity Enthusiast", "Builder"],
  tagline: "Built by mistakes. Refined by experience.",
  taglines: {
    hero: "Built by mistakes. Refined by experience.",
    creative: "Technology meets creativity.",
    cyber: "Creating. Breaking. Rebuilding.",
    developer: "Learning by building.",
    journey: "The person changed. The mindset evolved.",
  },
  heroDescription:
    "I build digital experiences that combine technology, creativity, and problem-solving. From software and security to web development, graphics, and visual effects, I enjoy understanding how things work and turning ideas into something real.",
  status: {
    label: "Currently building & learning",
    meta: [
      { k: "Status", v: "Building" },
      { k: "Focus", v: "Technology × Creativity" },
      { k: "Mode", v: "Learning / Creating" },
    ],
  },
  /** Used for canonical URLs, OpenGraph and the sitemap. Replace on deploy. */
  url: "https://example.com", // [PLACEHOLDER DOMAIN]
} as const;

export type NavItem = { id: string; label: string };

export const nav: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "creative", label: "Creative Studio" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];
