import { Label } from "@/components/ui/Primitives";

/** Minimal route-level loading state. Nothing is delayed on purpose. */
export default function Loading() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center gap-4">
      <span className="text-title font-semibold tracking-[0.32em] opacity-70 [font-stretch:112%]">
        KINSHUK
      </span>
      <span aria-hidden className="h-px w-24 overflow-hidden bg-line">
        <span className="block h-full w-1/3 animate-pulse bg-violet" />
      </span>
      <Label>Loading</Label>
    </div>
  );
}
