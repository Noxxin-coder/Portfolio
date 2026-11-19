import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Nav } from "@/components/navigation/Nav";
import { Backdrop } from "@/components/layout/Backdrop";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

/** The interface voice. Width axis loaded so the wordmark can run expanded. */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

/** Kinshuk's voice. Optical sizing so it holds at both lede and body size. */
const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

/** The machine's voice. */
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-tech",
  display: "swap",
});

const description =
  "Kinshuk builds digital experiences that combine technology, creativity and problem-solving — software, web development, security learning, graphics and visual effects.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kinshuk — Developer, Cybersecurity Enthusiast & Creative Technologist",
    template: "%s · Kinshuk",
  },
  description,
  applicationName: "Kinshuk",
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Kinshuk",
    "developer portfolio",
    "cybersecurity",
    "creative technologist",
    "web development",
    "VFX",
    "motion graphics",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Kinshuk",
    title: "Kinshuk — Developer, Cybersecurity Enthusiast & Creative Technologist",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinshuk — Developer, Cybersecurity Enthusiast & Creative Technologist",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
    { media: "(prefers-color-scheme: light)", color: "#f4f3f1" },
  ],
  width: "device-width",
  initialScale: 1,
};

/**
 * Runs before first paint. Applies the stored theme (no flash), and arms the
 * reveal system — but only when motion is welcome. Anyone with reduced motion,
 * or without JS, never gets the hidden state, so content is always readable.
 */
const bootScript = `try{var d=document.documentElement;if(localStorage.getItem("kinshuk-theme")==="light")d.classList.add("light");if(!matchMedia("(prefers-reduced-motion: reduce)").matches)d.classList.add("js")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body
        className={`${archivo.variable} ${newsreader.variable} ${mono.variable} font-display antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-90 focus:rounded-full focus:border focus:border-violet focus:bg-canvas focus:px-4 focus:py-2 focus:text-ui"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Backdrop />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
