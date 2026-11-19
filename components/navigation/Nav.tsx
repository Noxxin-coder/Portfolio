"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav, site } from "@/data/site";
import { cx } from "@/components/ui/Primitives";

/** Marks the rest of the page unavailable while a full-screen layer is open,
 *  which is what `aria-modal` promises. Also keeps Tab from leaving. */
function setPageInert(on: boolean) {
  for (const el of document.querySelectorAll("main, footer")) {
    if (on) el.setAttribute("inert", "");
    else el.removeAttribute("inert");
  }
}

function ThemeToggle({ className }: { className?: string }) {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("light");
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("kinshuk-theme", next ? "light" : "dark");
    } catch {
      /* storage blocked — the toggle still works for this session */
    }
    setLight(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      className={cx(
        "grid size-11 place-items-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-ink",
        className,
      )}
    >
      {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  );
}

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section indicator. Only meaningful on the single-page home route.
  useEffect(() => {
    if (!isHome) return;
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  // Mobile panel: lock scroll, inert the page behind it, Escape to close.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setPageInert(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => {
      document.body.style.overflow = prev;
      setPageInert(false);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || !isHome
          ? "border-b border-line bg-canvas/72 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <Link href="/" className="group flex items-baseline gap-2" aria-label={`${site.name} — home`}>
          <span className="text-ui font-semibold tracking-[0.24em] [font-stretch:112%]">
            {site.wordmark}
          </span>
          <span
            aria-hidden
            className="hidden size-1 rounded-full bg-violet transition group-hover:bg-ice sm:block"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const isActive = isHome && active === item.id;
            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cx(
                  "relative rounded-full px-3 py-3 text-ui-sm transition-colors",
                  isActive ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
                <span
                  aria-hidden
                  className={cx(
                    "absolute inset-x-3 -bottom-px h-px transition-opacity",
                    isActive ? "bg-violet opacity-100" : "opacity-0",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/#contact"
            className="hidden rounded-full border border-line-strong px-4 py-3 text-ui-sm text-ink transition hover:border-violet hover:text-violet sm:inline-block"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-11 place-items-center rounded-full border border-line text-muted transition hover:text-ink lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-0 z-50 flex flex-col bg-canvas/98 backdrop-blur-xl lg:hidden"
      >
        <div className="shell flex h-16 items-center justify-between">
          <span className="text-ui font-semibold tracking-[0.24em] [font-stretch:112%]">
            {site.wordmark}
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-11 place-items-center rounded-full border border-line text-muted transition hover:text-ink"
          >
            <X className="size-4" />
          </button>
        </div>
        <nav aria-label="Mobile" className="shell mt-4 flex flex-1 flex-col justify-center">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-title tracking-[-0.02em] text-ink transition hover:text-violet"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="shell pb-8 pt-6">
          <p className="label-mono">{site.status.label}</p>
        </div>
      </div>
    </header>
  );
}
