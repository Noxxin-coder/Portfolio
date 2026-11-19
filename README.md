# KINSHUK — personal portfolio

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static prerender of every route
```

## Editing content

All content lives in `/data`. Components read it; none of it is hard-coded in markup.

| File | Holds |
| --- | --- |
| `data/site.ts` | Name, positioning, taglines, hero copy, nav, `CONTACT_EMAIL`, site URL |
| `data/projects.ts` | Projects, statuses, card shapes, case studies |
| `data/skills.ts` | Skill groups and experience labels |
| `data/journey.ts` | Journey stages |
| `data/creative.ts` | Creative gallery items and their aspect ratios |
| `data/social.ts` | Social links (omit `href` and it renders as "not set up") |

## Before this goes live

1. **Replace the placeholders.** Anything with `placeholder: true` or `[PLACEHOLDER …]`
   renders a visible badge. Delete the flag only when the entry is real.
2. **Set `CONTACT_EMAIL`** in `data/site.ts`. Empty means the contact form copies the
   message to the clipboard instead of opening a mail client. It never claims a message
   was sent — there is no backend.
3. **Set `site.url`** in `data/site.ts` — it drives canonical URLs, OpenGraph and the sitemap.
4. **Add real images.** Drop files in `/public/projects` or `/public/creative` and set
   `image` / `src` in the data. Anything without one renders generated abstract art, so
   there are no broken images at any point.

## Design system

Tokens live at the top of `app/globals.css`. Dark is default; `.light` on `<html>` swaps
a separately-designed light palette, persisted in `localStorage`. Every animation is
gated on `prefers-reduced-motion`, and the layouts are designed to hold up with motion off.
