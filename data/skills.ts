// Experience labels, not percentages — percentages imply precision that
// does not exist. Levels here are self-assessed; edit them freely.

export type Level = "Learning" | "Familiar" | "Intermediate" | "Advanced" | "Project-based";

export type Skill = {
  name: string;
  level: Level;
  /** Optional link between a claim and the work that backs it. */
  usedIn?: string;
  note?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  index: string;
  items: Skill[];
  footnote?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "cybersecurity",
    index: "01",
    title: "Cybersecurity",
    blurb:
      "Studying how systems fail so I can build ones that fail less. Everything here is practiced in labs and legal environments.",
    items: [
      { name: "Security fundamentals", level: "Intermediate" },
      { name: "Linux", level: "Intermediate", usedIn: "Home Lab Setup" },
      { name: "Network security", level: "Familiar" },
      { name: "Web security", level: "Familiar", usedIn: "Vulnerable App Lab" },
      { name: "Vulnerability assessment", level: "Learning" },
      { name: "Ethical hacking", level: "Learning", note: "Lab environments only" },
      { name: "OSINT", level: "Familiar" },
      { name: "Security tooling", level: "Familiar" },
      { name: "Threat awareness", level: "Familiar" },
      { name: "Digital privacy", level: "Intermediate" },
    ],
    footnote:
      "All security-related work is performed ethically and only on systems where permission has been granted.",
  },
  {
    id: "software",
    index: "02",
    title: "Software & Development",
    blurb:
      "Most of what I know came from building something, breaking it, and reading the error properly the second time.",
    items: [
      { name: "Python", level: "Intermediate", usedIn: "Automation Toolkit" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "React", level: "Intermediate", usedIn: "This Portfolio" },
      { name: "Node.js", level: "Familiar" },
      { name: "APIs", level: "Intermediate" },
      { name: "Automation & scripting", level: "Project-based", usedIn: "Automation Toolkit" },
      { name: "Git & GitHub", level: "Intermediate" },
      { name: "Databases", level: "Familiar" },
      { name: "Software architecture", level: "Learning" },
    ],
  },
  {
    id: "creative",
    index: "03",
    title: "Creative Design",
    blurb:
      "Design is where the technical work becomes something a person actually wants to look at.",
    items: [
      { name: "Graphic design", level: "Advanced" },
      { name: "Branding", level: "Intermediate" },
      { name: "Posters & banners", level: "Advanced" },
      { name: "Thumbnails", level: "Advanced" },
      { name: "Social creatives", level: "Intermediate" },
      { name: "Typography", level: "Intermediate" },
      { name: "Colour composition", level: "Intermediate" },
      { name: "Photo manipulation", level: "Intermediate" },
    ],
  },
  {
    id: "vfx",
    index: "04",
    title: "VFX & Media",
    blurb:
      "Motion forces you to think about time, rhythm and restraint — the same things good interfaces need.",
    items: [
      { name: "Video editing", level: "Advanced" },
      { name: "Motion graphics", level: "Intermediate" },
      { name: "Visual effects", level: "Intermediate" },
      { name: "Cinematic composition", level: "Intermediate" },
      { name: "Animation", level: "Familiar" },
      { name: "Transitions", level: "Intermediate" },
      { name: "Colour grading", level: "Intermediate" },
      { name: "Sound design", level: "Familiar" },
    ],
  },
  {
    id: "community",
    index: "05",
    title: "Gaming & Communities",
    blurb:
      "Competitive play taught me systems thinking. Running communities taught me the harder half — people.",
    items: [
      { name: "Team building", level: "Project-based" },
      { name: "Community management", level: "Project-based" },
      { name: "Event organisation", level: "Intermediate" },
      { name: "Leadership", level: "Project-based" },
      { name: "Strategy", level: "Advanced" },
      { name: "Competitive gaming", level: "Advanced" },
      { name: "Discord management", level: "Advanced" },
    ],
  },
];

export const levelOrder: Level[] = [
  "Learning",
  "Familiar",
  "Intermediate",
  "Advanced",
  "Project-based",
];
