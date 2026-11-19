---
name: Kinshuk Portfolio
description: A dark editorial identity where a working lab and a night studio share one room.
colors:
  base: "#08080a"
  surface: "#0c0d10"
  raised: "#121319"
  ink: "#e9e9ee"
  muted: "#9195a1"
  faint: "#757b8a"
  line: "rgba(255, 255, 255, 0.08)"
  line-strong: "rgba(255, 255, 255, 0.16)"
  field: "#6b6f7a"
  filament-violet: "#8b6cff"
  filament-violet-deep: "#5b3ee8"
  cold-cathode: "#7cd4ff"
  base-light: "#f4f3f1"
  surface-light: "#eceae7"
  raised-light: "#ffffff"
  ink-light: "#16161a"
  muted-light: "#55565f"
  faint-light: "#6b6c75"
  line-light: "rgba(20, 20, 26, 0.12)"
  line-strong-light: "rgba(20, 20, 26, 0.24)"
  filament-violet-light: "#5b3ee8"
  cold-cathode-light: "#0b7597"
  field-light: "#83848d"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 15vw, 11rem)"
    fontWeight: 600
    lineHeight: 0.86
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Newsreader, ui-serif, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  lede:
    fontFamily: "Newsreader, ui-serif, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.015em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.16em"
rounded:
  sm: "0.25rem"
  lg: "0.5rem"
  xl: "0.75rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "2rem"
  section: "6rem"
  section-lg: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.base}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.25rem"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.filament-violet-deep}"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.25rem"
  button-secondary-hover:
    textColor: "{colors.cold-cathode}"
  chip-filter:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    padding: "0.5rem 0.875rem"
  chip-filter-selected:
    backgroundColor: "rgba(139, 108, 255, 0.1)"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "rgba(12, 13, 16, 0.4)"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "1.25rem"
  input:
    backgroundColor: "rgba(8, 8, 10, 0.6)"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0.75rem 0.875rem"
  label-mono:
    textColor: "{colors.faint}"
    typography: "{typography.label}"
---

# Design System: Kinshuk Portfolio

## Overview

**Creative North Star: "The Night Studio"**

A dark room after hours with the work laid out on the table and one lamp over it. The
surface you are looking at is a desk, not a dashboard: it has grain, it has a faint ruled
grid, and it is mostly empty. Instruments are present — monospaced readouts, status rows,
a terminal in the corner — but they sit at the edges of the room. The craft is what the
light falls on.

Everything saturated in this system is a light source. Filament Violet is the lamp;
Cold Cathode is the screen. Nothing else in the palette emits — the greys are all
absorbed light, ranging from near-black desk to bright paper-white text. This is why
accent use is so restrained: adding a third glowing colour would turn a studio into an
arcade.

Density is deliberately uneven. Sections breathe at 6–8rem of vertical rest, then
concentrate into tight 12-column arrangements where the content earns it. No section
repeats the previous section's structure: a vertical tab rail follows an editorial
two-column, which follows a dense bento grid. The consistency lives in the surface
treatment, type scale and accent discipline — never in the layout.

**Key Characteristics:**

- One texture across the entire site: a 72px ruled grid and film grain, both under 5% opacity
- Zero shadows; depth is tonal layering plus hairline borders
- Two accents only, both behaving as physical light
- Three voices, three families: Archivo is the interface, Newsreader is Kinshuk, mono is the machine
- Every composition legible with motion disabled

**Confirmed anti-references:** the centred-hero-plus-identical-cards template, gradient
blobs, glass cards used everywhere, skill percentage rings, Matrix rain, code wallpaper,
glitch effects, and stock photography.

## Colors

Predominantly absorbed light — a near-black room with two emitters and a paper-white
voice.

### Primary

- **Filament Violet** (`#8b6cff`): the identity accent and the room's lamp. Interactive
  intent, active navigation, focused inputs, ordinal markers in process lists, the pulse on
  the live status dot, the placeholder badge. In light theme it deepens to `#5b3ee8` to
  hold contrast against paper.

### Secondary

- **Cold Cathode** (`#7cd4ff`): the screen glow. Reserved for confirmed and live states —
  completed status, terminal cursor, the ethics panel, focus rings, form success feedback.
  Drops to `#0b7597` in light theme (4.73:1). It never competes with Filament for a call to action;
  violet asks, ice confirms.

### Neutral

- **Desk Black** (`#08080a`): the room itself. Page ground, nav scrim, lightbox backdrop.
- **Surface Slate** (`#0c0d10`): a single tonal step up. Card and panel fill, almost always
  at 40–60% opacity so the grid reads faintly through it.
- **Raised Graphite** (`#121319`): the third step, reserved for surfaces stacked on a panel.
- **Paper White** (`#e9e9ee`): body and heading text, and the fill of the primary button.
  Warm-neutral, never pure `#fff` — pure white on near-black is a glare, not a voice.
- **Muted Steel** (`#9195a1`): the reading colour for all long-form prose.
- **Faint Slate** (`#757b8a`): metadata, mono labels, and anything the eye should pass over
  on the first sweep. Set at 4.72:1 against Desk Black — it is quiet, not unreadable.
- **Field Edge** (`#6b6f7a`): input and control boundaries only. A hairline cannot reach
  the 3:1 a form control needs, so fields get their own token (3.98:1).
- **Hairline** (`rgba(255,255,255,0.08)`) and **Hairline Strong**
  (`rgba(255,255,255,0.16)`): the entire border vocabulary. There is no third weight.

### Named Rules

**The Two Lamps Rule.** Only two things in this system emit light: Filament Violet and
Cold Cathode. Combined, they cover under 10% of any viewport. A third saturated hue is a
system violation, not a design decision.

**The Absorbed Grey Rule.** Every non-accent colour is a step on one neutral ramp from
`#08080a` to `#e9e9ee`. No coloured greys, no tinted surfaces, no separate "border colour"
per component. Two hairline weights carry every division on the site.

**The Warm White Rule.** Text is `#e9e9ee`, never `#ffffff`. Pure white appears in exactly
one place: on a filled **violet-deep** button. It cannot sit on `#8b6cff` — that pairing
measures 3.69:1 and fails AA, which is why the primary hover fills with `#5b3ee8` (6.36:1)
rather than the lighter violet.

## Typography

**Display / UI Font:** Archivo (with `ui-sans-serif, system-ui, -apple-system, sans-serif`),
width axis loaded so the wordmark can run expanded at `112%`
**Prose Font:** Newsreader (with `ui-serif, Georgia, serif`), optical sizing on
**Label/Mono Font:** JetBrains Mono (with `ui-monospace, SF Mono, Menlo, monospace`)

**Character:** Three families because there are three speakers. Archivo is the building —
navigation, buttons, headings, anything the interface says about itself. Newsreader is
Kinshuk — every sentence written in the first person. JetBrains Mono is the machine —
labels, states, counts, terminal output. The split is visible at a glance, which is the
point: you can see who is talking before you read a word.

**The risk, stated:** long-form serif on a near-black ground is against conventional advice.
It holds here at `1.0625rem` with `1.7` leading against warm `#e9e9ee`, and it is what makes
About and Journey read as writing rather than as interface copy.

### Hierarchy

- **Display** (600, `clamp(3.4rem, 15vw, 11rem)`, 0.86, `-0.055em`): the wordmark and the
  404 headline. Once per page, at most. The tracking is negative enough that letters nearly
  touch — intentional, and the reason it reads as a mark rather than a heading.
- **Headline** (600, `1.875–3rem`, `-0.03em`): section titles. Always paired with a mono
  index label above it (`03 — Projects`).
- **Title** (400, `1.125–1.875rem`, `-0.02em`): card, project and stage titles. Regular
  weight, not semibold — the size carries the hierarchy, the weight stays quiet.
- **Lede** (400, `1.5rem`, `-0.015em`): the one oversized paragraph that opens About and
  anchors Contact. Colour is Paper White, unlike ordinary body copy.
- **Body** (400, `0.975rem`, 1.625): all reading text, in Muted Steel, capped near 65ch by
  `max-w-xl`. The odd `0.975rem` is deliberate — 1rem read a touch heavy against this grey.
- **Label** (mono, `0.6875rem`, `0.16em`, uppercase): section indices, metadata keys,
  status text, captions, footnotes. Always Faint Slate unless carrying accent state.

### Named Rules

**The Machine Voice Rule.** Monospace is only for things a machine would say: labels,
indices, status values, metadata, counts, terminal output, file paths, and placeholder
markers. The moment text is a person talking, it is Inter. No mono headlines, no mono body
copy, no mono for atmosphere.

**The Tighter As Bigger Rule.** Letter-spacing tightens monotonically with size:
`-0.055em` at display, `-0.03em` at headline, `-0.02em` at title, normal at body, and
`+0.16em` at label. A large heading at default tracking is the single most reliable tell of
an undesigned page.

**The State Rule.** Every section headline is preceded by a mono eyebrow naming the section
and its actual state: `ABOUT · WRITTEN`, `PROJECTS · 1 OF 10 REAL`, `CONTACT · NOT WIRED UP
YET`. It replaced sequential numbering, which encoded nothing — sections are not a sequence
and nobody reads a portfolio in order. Counts are derived from the data, so the eyebrow
cannot drift from the truth. Numbering survives in exactly one place, Journey, where the
seven stages genuinely happened in that order and the order is the content.

## Layout

A 12-column grid inside a shared gutter, and almost nothing centred.

**The shell.** One container utility governs every section: `max-width: 84rem` (1344px),
with gutters of 1.25rem, 2rem at 768px, and 3rem at 1280px. Every section is edge-aligned
to it — a hard rule, because the alignment is what holds eleven differently-composed
sections together as one page.

**Column behaviour.** Content resolves to 12 columns at `lg` (1024px). Text columns run 5–7
wide; sidebars 4–5; nothing exceeds 8 columns of prose. Asymmetry is the default:
`lg:col-span-7` next to `lg:col-span-4 lg:col-start-9` leaves an intentional gutter of
empty column between them rather than filling the row.

**Vertical rhythm.** Sections rest at `6rem` and open to `8rem` at `md`. The Philosophy
section alone doubles this (`8rem` → `11rem`) because its job is to make the visitor slow
down. Within a section: `3.5rem` from header to content, `2.5rem` between major blocks,
`1rem` between grid cards.

**Density inversion.** Sections alternate between open editorial (About, Journey,
Philosophy) and dense instrument panels (Cybersecurity, the project grid). Neither reads as
the site's default; the alternation is the pacing device.

**Responsive.** Breakpoints are `sm 640` / `md 768` / `lg 1024` / `xl 1280`. Multi-column
grids collapse at `lg`, not `md` — this system's columns need real width. Mobile is not the
desktop scaled: the skills rail becomes a horizontal scroll of pills, the bento grid becomes
one column, the nav becomes a full-screen panel with numbered entries at `1.5rem`.

### Named Rules

**The Shared Gutter Rule.** Every section, in every composition, aligns to the same shell.
A section that breaks the gutter to go full-bleed must still align its inner content to it.

**The Empty Column Rule.** When a layout needs a sidebar, skip a column between it and the
body rather than closing the gap. The empty column is load-bearing.

## Elevation & Depth

**This system has no shadows.** Not "subtle shadows" — zero `box-shadow` declarations
anywhere in the implementation. Depth is built from three other materials:

1. **Tonal layering.** Three neutral steps (`#08080a` → `#0c0d10` → `#121319`), almost
   always applied at partial opacity so the grid texture reads faintly through every panel.
2. **Hairline borders.** Two weights, 8% and 16% white. Every card, panel, divider, input
   and chip is defined by its edge, not by a cast shadow.
3. **Backdrop blur.** Reserved for surfaces that genuinely float over content: the scrolled
   navigation (`blur-xl` over `72%` ground), the mobile menu, the lightbox, and the caption
   plate over gallery art.

Radial gradients supply atmosphere, not elevation: two fixed, very soft washes (violet top,
ice bottom-right) sit behind everything at 50–70% opacity and never move except with the
cursor in the hero.

### Named Rules

**The No-Shadow Rule.** Depth comes from tone, edge and blur. If an element seems to need a
shadow, it needs a tonal step or a stronger hairline instead.

**The Translucent Panel Rule.** Panels sit at 40–60% opacity over the textured ground so
the grid stays continuous beneath them. A fully opaque panel breaks the illusion that the
whole page is one surface.

## Shapes

Rounded, but never soft. Three radii do all the work:

- **`0.75rem` (xl)** — cards, panels, gallery tiles, the terminal, generated artwork. The
  default container radius.
- **`0.5rem` (lg)** — anything nested inside a panel: inputs, inner list items, the caption
  plate. One step tighter than its parent, always.
- **`9999px` (full)** — every interactive control: buttons, filter chips, status chips,
  icon buttons, tag pills. Roundness signals clickability in this system.
- **`0.25rem` (sm)** — technology tags only, where a pill would read as interactive.

There are no square corners and no decorative clipping. The only non-rectangular geometry
on the site is inside generated placeholder art: concentric rings, raking parallel lines,
or stacked arcs, chosen deterministically per seed and rotated by hash.

### Named Rules

**The Nested Step Rule.** A child container is always one radius step tighter than its
parent (`xl` outside, `lg` inside). Matching radii across a nesting boundary flattens the
hierarchy.

**The Pill Means Action Rule.** Fully-rounded means interactive or stateful. Nothing static
is a pill, and nothing clickable is a rectangle.

## Components

Character across the board: **tactile and confident.** Elements are flat at rest, then
answer physically when addressed — a lift, a border warming to accent, an arrow displacing.
Nothing bounces, nothing scales dramatically; the response is small, fast and unmistakable.

### Buttons

- **Shape:** fully rounded (`9999px`), `0.75rem 1.25rem` padding.
- **Primary:** inverted — Paper White fill, Desk Black text. The highest-contrast object on
  any dark screen, which is why there is only ever one per viewport.
- **Hover:** fill swaps to Filament Violet with pure white text; the trailing arrow
  translates `2px` right and up.
- **Secondary:** transparent with a Hairline Strong border; on hover the border and text
  both shift to Cold Cathode.
- **Icon buttons:** 36px circles, hairline border, muted glyph brightening to Paper White.

### Chips

- **Filter chips:** hairline border, muted text, `0.5rem 0.875rem`. Selected state takes a
  Filament Violet border over a 10% violet wash and Paper White text. Each carries a mono
  count; a zero-count chip is disabled at 35% opacity rather than hidden.
- **Status chips:** one tone per project state — Cold Cathode for Completed, Filament for
  In Progress, hairline-only for Learning Project and Archived, dashed for Concept.
- **Placeholder badge:** dashed violet border, 8% violet wash, a 4px violet dot. The one
  component whose job is to admit something is not real.

### Cards / Containers

- **Corner style:** `0.75rem`.
- **Background:** Surface Slate at 40%.
- **Border:** Hairline; on hover, Hairline Strong.
- **Shadow strategy:** none (see Elevation & Depth).
- **Hover:** the card lifts `2px`, its ground warms to 70%, contained artwork scales to
  1.03 over 700ms while the card's own transition runs at 300ms — the image moves slower
  than the frame, which is what makes the lift read as depth rather than a jump.
- **Internal padding:** `1.25rem`.
- **Footprint:** project cards carry an explicit shape (`featured` / `wide` / `tall` /
  `compact` / `technical`) that maps to a column and row span, so no two adjacent cards
  share a silhouette.

### Inputs / Fields

- **Style:** `0.5rem` radius, hairline border, Desk Black at 60% fill, Faint Slate
  placeholder.
- **Focus:** border shifts to Filament Violet; the global focus ring is a 2px Cold Cathode
  outline at 3px offset.
- **Error:** border shifts to Filament Violet with a `0.78rem` violet message below, wired
  through `aria-invalid` and `aria-describedby`.
- **Labels:** mono, uppercase, above the field. Never a placeholder standing in for a label.

### Navigation

- Fixed, transparent over the hero, transitioning to Desk Black at 72% with `blur-xl` and a
  hairline base after 24px of scroll.
- Links at `0.82rem` in Muted Steel; the active section is Paper White with a 1px Filament
  Violet underline pinned to the header's lower edge.
- The wordmark sits at `0.24em` tracking with a violet dot that turns ice on hover.
- Below `lg`, a full-screen panel: numbered entries at `1.5rem` on hairline rules, scroll
  locked, Escape to close, focus moved into the panel on open.

### The Terminal (signature)

A bordered plate with three dots and a mono prompt in its title bar, printing status lines
prefixed by a violet `>` with a pulsing Cold Cathode cursor. Lines cycle on a 900ms
interval, fading at 500ms. It renders fully printed before JavaScript runs. It is
decorative and inert by definition — it never accepts input and never shows an executable
command.

### Generated Art (signature)

Wherever a real image has not been supplied, a deterministic composition is drawn from the
item's seed: two soft radial washes in violet and ice, one of three line motifs
(concentric rings, raking lines, stacked arcs) rotated by hash, then the site grid at 28px
and the grain pass over the top, finished with a gradient to Desk Black at the base. Pure
CSS and inline SVG — no binary asset, nothing that can 404, and a placeholder that still
looks art-directed.

## Do's and Don'ts

### Do:

- **Do** align every section to the shared shell (`84rem`, gutters `1.25rem` / `2rem` /
  `3rem`), whatever its internal composition.
- **Do** precede every section headline with a mono eyebrow naming its real state, derived
  from the data wherever a count is involved.
- **Do** tighten letter-spacing as type scales up, to `-0.055em` at display size.
- **Do** set anything written in the first person in Newsreader, and everything the
  interface says about itself in Archivo.
- **Do** render content visible and layer motion on afterwards — the `.js` class is added
  before paint and only when motion is welcome, so no-JS and reduced-motion readers get a
  complete page.
- **Do** build depth from tonal steps, hairlines and backdrop blur.
- **Do** keep panels translucent (40–60%) so the grid texture stays continuous under them.
- **Do** give each project card an explicit shape so the grid never reads as a uniform
  matrix.
- **Do** move contained artwork slower than its frame on hover (700ms art, 300ms card).
- **Do** label every placeholder in the UI where a visitor can see it.
- **Do** gate every animation on `prefers-reduced-motion` and verify the composition still
  holds with motion off.

### Don't:

- **Don't** add a `box-shadow`. This system has none, anywhere.
- **Don't** introduce a third saturated colour, or push violet and ice past ~10% of a
  viewport combined.
- **Don't** use pure `#ffffff` for text except on a filled violet button.
- **Don't** set body copy, headlines or prose in JetBrains Mono. Mono is the machine's
  voice only.
- **Don't** number the sections. The eyebrow reports state; only Journey is a sequence.
- **Don't** put a literal font-size in a component. The ramp has nine named steps and the
  detector fails the build's design pass when a tenth appears.
- **Don't** put more than one primary (Paper White filled) button in a viewport.
- **Don't** express skill or progress as a percentage, bar or ring.
- **Don't** show a success state for anything that was not actually delivered.
- **Don't** repeat a previous section's structure; the consistency is in the surface, not
  the layout.
- **Don't** render a bare grey box where an image is missing — draw generated art at the
  correct aspect ratio instead.
