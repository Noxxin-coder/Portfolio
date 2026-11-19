// Stage-based storytelling, deliberately without dates.
// No invented years, employers or milestones — add real ones when they exist.

export type Stage = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  body: string;
  markers: string[];
};

export const journey: Stage[] = [
  {
    id: "gaming",
    index: "01",
    title: "Gaming & Competition",
    kicker: "Where the systems thinking started",
    body: "Competitive play is a fast feedback loop: you form a theory, test it under pressure, and find out within minutes whether you were wrong. That habit turned out to transfer to everything else.",
    markers: ["Strategy", "Practice", "Losing usefully"],
  },
  {
    id: "teams",
    index: "02",
    title: "Team Building",
    kicker: "Learning that people are the hard part",
    body: "Individual skill stops scaling quickly. Coordinating a group — roles, expectations, disagreement handled early rather than late — is a different discipline, and a much less forgiving one.",
    markers: ["Roles", "Communication", "Accountability"],
  },
  {
    id: "community",
    index: "03",
    title: "Community",
    kicker: "Structure over enthusiasm",
    body: "Running a community is design work. Onboarding, moderation, rituals and tooling decide whether a space stays healthy, long after the initial energy fades.",
    markers: ["Moderation", "Onboarding", "Events"],
  },
  {
    id: "technology",
    index: "04",
    title: "Technology",
    kicker: "From using tools to building them",
    body: "Curiosity about how things worked underneath turned into writing code. Small scripts first, then interfaces, then the parts nobody sees — the data model, the error path, the deploy.",
    markers: ["Programming", "Web", "Automation"],
  },
  {
    id: "creative",
    index: "05",
    title: "Creative Development",
    kicker: "Making the technical work legible",
    body: "Graphics, motion and editing became the other half of the practice. Building something that works and building something people want to look at are related problems, not separate ones.",
    markers: ["Design", "VFX", "Editing"],
  },
  {
    id: "security",
    index: "06",
    title: "Cybersecurity",
    kicker: "Studying how things break",
    body: "Security reframed everything: instead of asking whether a system works, ask how it fails and who benefits when it does. Practised in labs, on machines I own, with permission as the default.",
    markers: ["Labs", "Networks", "Defensive work"],
  },
  {
    id: "now",
    index: "07",
    title: "Current Focus",
    kicker: "Discipline over intensity",
    body: "Fewer things, finished properly. Building projects worth pointing at, keeping the learning consistent rather than dramatic, and letting the work argue on its own behalf.",
    markers: ["Building", "Learning", "Shipping"],
  },
];
