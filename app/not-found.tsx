import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/Primitives";
import { Terminal } from "@/components/terminal/Terminal";

export const metadata = { title: "Signal Lost" };

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80svh] items-center py-28">
      <div className="grid w-full gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Label>Error 404</Label>
          <h1 className="mt-4 text-[clamp(2.6rem,10vw,6rem)] font-semibold leading-[0.9] tracking-[-0.05em] [font-stretch:112%]">
            Signal Lost
          </h1>
          <p className="mt-6 max-w-md font-prose text-body text-muted">
            This page does not exist — or it did, and does not any more. Either way, nothing
            here is worth waiting on.
          </p>
          <Link
            href="/"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-ui font-medium text-canvas transition hover:bg-violet-deep hover:text-white"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            Return Home
          </Link>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <Terminal
            prompt="KINSHUK@SYSTEM:~$"
            lines={[
              "resolving route",
              "route not found",
              "checking redirects",
              "none available",
              "returning to known ground",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
