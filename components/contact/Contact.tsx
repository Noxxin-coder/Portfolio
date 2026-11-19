"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { CONTACT_EMAIL, site } from "@/data/site";
import { socials } from "@/data/social";
import { Label, SectionHeader, cx } from "@/components/ui/Primitives";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  if (!f.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()))
    e.email = "That does not look like a valid email address.";
  if (!f.subject.trim()) e.subject = "Please add a subject.";
  if (f.message.trim().length < 10) e.message = "A little more detail, please (10+ characters).";
  return e;
}

export function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  // Honest states only. There is no backend, so nothing here ever claims a
  // message was delivered.
  const [state, setState] = useState<"idle" | "working" | "handed-off" | "copied">("idle");
  const [notice, setNotice] = useState<string | null>(null);

  const hasEmail = CONTACT_EMAIL.length > 0;

  function set<K extends keyof Fields>(k: K, v: string) {
    setFields((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
    if (state !== "idle") setState("idle");
    if (notice) setNotice(null);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setState("working");
    const body = `${fields.message}\n\n— ${fields.name} (${fields.email})`;

    if (hasEmail) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        fields.subject,
      )}&body=${encodeURIComponent(body)}`;
      setState("handed-off");
      return;
    }

    try {
      await navigator.clipboard.writeText(
        `Subject: ${fields.subject}\nFrom: ${fields.name} <${fields.email}>\n\n${body}`,
      );
      setState("copied");
    } catch {
      setState("idle");
      // A clipboard failure is not a problem with the message field, so it
      // never marks one invalid.
      setNotice("Could not copy automatically — select the text above and copy it manually.");
    }
  }

  const field =
    "mt-2 w-full rounded-lg border bg-canvas/60 px-3.5 py-3 text-ui text-ink outline-none transition placeholder:text-faint focus:border-violet";

  return (
    <section id="contact" className="shell scroll-mt-24 py-24 md:py-32">
      <SectionHeader
        name="Contact"
        state={hasEmail ? "Open" : "Not wired up yet"}
        title="Say something useful and I will reply."
        lead={
          <p>
            Work, collaboration, a question about something on this site — all fine. Nothing
            here is auto-answered.
          </p>
        }
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="font-prose text-lede tracking-[-0.025em] text-ink">
            {site.taglines.creative}
          </p>
          <p className="mt-5 max-w-md font-prose text-body text-muted">
            The routes below are listed for completeness. The ones marked not set up are
            accounts I have not published yet — I would rather show the gap than link you to
            nothing.
          </p>

          <ul className="mt-8 divide-y divide-line border-y border-line">
            {socials.map((s) => {
              const Icon = s.icon;
              const inner = (
                <>
                  <span className="flex items-center gap-3">
                    <Icon className="size-4 text-muted" aria-hidden />
                    <span className="text-ui text-ink">{s.label}</span>
                  </span>
                  <span className="flex items-center gap-2 font-mono text-micro text-faint">
                    {s.handle}
                    {s.href ? <ArrowUpRight className="size-3.5" aria-hidden /> : null}
                  </span>
                </>
              );
              return (
                <li key={s.label}>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between gap-4 py-3.5 transition hover:text-violet"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center justify-between gap-4 py-3.5 opacity-70">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
            {(
              [
                { k: "name", label: "Name", type: "text", ph: "Your name", auto: "name" },
                { k: "email", label: "Email", type: "email", ph: "you@example.com", auto: "email" },
              ] as const
            ).map((f) => (
              <div key={f.k}>
                <label htmlFor={`contact-${f.k}`} className="label-mono">
                  {f.label}
                </label>
                <input
                  id={`contact-${f.k}`}
                  name={f.k}
                  type={f.type}
                  autoComplete={f.auto}
                  placeholder={f.ph}
                  value={fields[f.k]}
                  onChange={(e) => set(f.k, e.target.value)}
                  aria-invalid={Boolean(errors[f.k])}
                  aria-describedby={errors[f.k] ? `err-${f.k}` : undefined}
                  className={cx(field, errors[f.k] ? "border-violet" : "border-field")}
                />
                {errors[f.k] ? (
                  <p id={`err-${f.k}`} className="mt-1.5 text-ui-sm text-violet">
                    {errors[f.k]}
                  </p>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-5">
            <label htmlFor="contact-subject" className="label-mono">
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="What is this about?"
              value={fields.subject}
              onChange={(e) => set("subject", e.target.value)}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "err-subject" : undefined}
              className={cx(field, errors.subject ? "border-violet" : "border-field")}
            />
            {errors.subject ? (
              <p id="err-subject" className="mt-1.5 text-ui-sm text-violet">
                {errors.subject}
              </p>
            ) : null}
          </div>

          <div className="mt-5">
            <label htmlFor="contact-message" className="label-mono">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              placeholder="Context helps — what are you building, and where do I fit?"
              value={fields.message}
              onChange={(e) => set("message", e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "err-message" : undefined}
              className={cx(field, "resize-y font-prose", errors.message ? "border-violet" : "border-field")}
            />
            {errors.message ? (
              <p id="err-message" className="mt-1.5 text-ui-sm text-violet">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={state === "working"}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-ui font-medium text-canvas transition hover:bg-violet-deep hover:text-white disabled:opacity-60"
            >
              {hasEmail ? <Mail className="size-4" /> : <Copy className="size-4" />}
              {state === "working" ? "Preparing…" : hasEmail ? "Open in email client" : "Copy message"}
            </button>

            <p aria-live="polite" className="text-ui-sm text-muted">
              {state === "handed-off" ? (
                <span className="inline-flex items-center gap-2 text-ice">
                  <Check className="size-4" /> Handed to your email client — send it there to
                  reach me.
                </span>
              ) : state === "copied" ? (
                <span className="inline-flex items-center gap-2 text-ice">
                  <Check className="size-4" /> Copied to your clipboard. Paste it wherever you
                  like — nothing was sent from here.
                </span>
              ) : notice ? (
                <span className="text-violet">{notice}</span>
              ) : null}
            </p>
          </div>

          <p className="mt-5 rounded-lg border border-line bg-surface/40 p-4 font-prose text-ui-sm text-faint">
            <Label className="mr-2">No backend</Label>
            This form does not transmit anything, and it will never tell you a message was sent.
            It hands the draft to your email client, or copies it for you to send yourself.
          </p>
        </form>
      </div>
    </section>
  );
}
