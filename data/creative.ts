// ─────────────────────────────────────────────────────────────
// CREATIVE STUDIO
// No real artwork ships with this build, so every tile below is generated
// art marked as a placeholder. `ratio` is respected exactly — artwork is
// never stretched or cropped to fit a uniform grid.
// To use a real image: set `src` to a file under /public/creative and drop
// the `placeholder` flag.
// ─────────────────────────────────────────────────────────────

export type CreativeCategory =
  | "Graphics"
  | "Posters"
  | "Branding"
  | "Banners"
  | "Thumbnails"
  | "VFX"
  | "Motion"
  | "Video"
  | "Gaming Art";

export type CreativeItem = {
  id: string;
  title: string;
  category: CreativeCategory;
  /** Aspect ratio as width / height. Drives the tile exactly. */
  ratio: number;
  /** Editorial weight in the gallery composition. */
  scale: "hero" | "large" | "small";
  caption?: string;
  src?: string;
  placeholder?: boolean;
};

export const creativeCategories: ("All" | CreativeCategory)[] = [
  "All",
  "Graphics",
  "Posters",
  "Branding",
  "Banners",
  "Thumbnails",
  "VFX",
  "Motion",
  "Video",
  "Gaming Art",
];

export const creative: CreativeItem[] = [
  {
    id: "c01",
    title: "Poster Study",
    category: "Posters",
    ratio: 3 / 4,
    scale: "hero",
    caption: "Type-led composition",
    placeholder: true,
  },
  { id: "c02", title: "Identity Mark", category: "Branding", ratio: 1, scale: "small", placeholder: true },
  { id: "c03", title: "Channel Banner", category: "Banners", ratio: 16 / 6, scale: "large", placeholder: true },
  { id: "c04", title: "Thumbnail Set", category: "Thumbnails", ratio: 16 / 9, scale: "small", placeholder: true },
  { id: "c05", title: "Compositing Frame", category: "VFX", ratio: 16 / 9, scale: "large", caption: "Frame from a comp", placeholder: true },
  { id: "c06", title: "Motion Title", category: "Motion", ratio: 4 / 3, scale: "small", placeholder: true },
  { id: "c07", title: "Tournament Key Art", category: "Gaming Art", ratio: 3 / 4, scale: "large", placeholder: true },
  { id: "c08", title: "Grade Reference", category: "Video", ratio: 21 / 9, scale: "large", caption: "Colour pass", placeholder: true },
  { id: "c09", title: "Abstract Study", category: "Graphics", ratio: 1, scale: "small", placeholder: true },
  { id: "c10", title: "Layout Exploration", category: "Graphics", ratio: 4 / 5, scale: "small", placeholder: true },
  { id: "c11", title: "Event Poster", category: "Posters", ratio: 2 / 3, scale: "small", placeholder: true },
  { id: "c12", title: "Roster Graphic", category: "Gaming Art", ratio: 16 / 9, scale: "small", placeholder: true },
];
