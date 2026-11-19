import Link from "next/link";
import { nav, site } from "@/data/site";
import { socials } from "@/data/social";
import { Label } from "@/components/ui/Primitives";

export function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-block text-title font-semibold tracking-[0.24em] [font-stretch:112%]"
            >
              {site.wordmark}
            </Link>
            <p className="mt-3 max-w-xs font-prose text-ui-sm text-muted">{site.positioning}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <h2 className="label-mono">Sections</h2>
            <ul className="mt-3 grid grid-cols-2">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`/#${n.id}`}
                    className="inline-block py-2 text-ui text-muted transition hover:text-ink"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="label-mono">Elsewhere</h2>
            <ul className="mt-3">
              {socials.map((s) =>
                s.href ? (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-block py-2 text-ui text-muted transition hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ) : (
                  <li key={s.label} className="py-2 text-ui text-faint">
                    {s.label} — not set up
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="label-mono">Built with curiosity, code &amp; creativity.</p>
        </div>
      </div>
    </footer>
  );
}
