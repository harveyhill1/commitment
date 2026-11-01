import { Check } from "lucide-react";
import { Icon, Mascot } from "./Brand";
import { cn } from "@/lib/utils";

import chat from "@/assets/icons/chat.png";
import chatRed from "@/assets/icons/chat-red.png";
import target from "@/assets/icons/target.png";
import doc from "@/assets/icons/doc.png";
import search from "@/assets/icons/search.png";
import checklist from "@/assets/icons/checklist.png";
import laptop from "@/assets/icons/laptop.png";
import chart from "@/assets/icons/chart.png";
import gears from "@/assets/icons/gears.png";

/** Hand-drawn connector in the same thick black line weight as the icon set. */
function Stroke({
  d,
  head,
  className,
  dashed,
}: {
  d: string;
  head?: string;
  className?: string;
  dashed?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-0 size-full", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d={d}
        stroke="var(--ink)"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        strokeDasharray={dashed ? "2 7" : undefined}
      />
      {head && (
        <path
          d={head}
          stroke="var(--ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  );
}

function Tick({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "absolute flex size-7 items-center justify-center rounded-full border-2 border-ink bg-slime",
        className,
      )}
    >
      <Check className="size-4" strokeWidth={3.5} />
    </span>
  );
}

/** Shared illustration frame: identical size for all four method cards, centred by its parent. */
const box = "relative h-40 w-[240px] max-w-full md:h-44 md:w-[260px]";

/** 01 Understand — customer journey: connected message bubbles leading to a priority target. */
export function UnderstandArt() {
  return (
    <div className={box}>
      <Stroke d="M30 40 C 40 20, 52 22, 58 34" head="M52 30 L58 34 L59 27" />
      <Stroke d="M70 64 C 74 80, 66 88, 56 84" head="M61 80 L56 84 L62 88" />
      <Icon src={chatRed} className="absolute left-0 top-6 size-20 md:size-24" />
      <Icon src={chat} className="absolute right-2 top-8 size-20 md:size-24" />
      <Icon src={target} className="absolute bottom-0 left-[22%] size-16 md:size-[4.5rem]" />
    </div>
  );
}

/** 02 Prepare — knowledge gap analysis: document under the magnifying glass, linked to a checklist. */
export function PrepareArt() {
  return (
    <div className={box}>
      <Stroke d="M48 48 L 72 30" dashed />
      <Stroke d="M48 60 L 74 76" dashed />
      <Icon src={doc} className="absolute left-0 top-4 size-24 md:size-28" />
      <Icon src={search} className="absolute left-[24%] top-[42%] size-16 md:size-[4.5rem]" />
      <Icon src={checklist} className="absolute right-0 top-0 size-16 md:size-20" />
      <Tick className="bottom-5 right-6" />
    </div>
  );
}

/** 03 Integrate — a CRM window wired to the Commitment heart, both ways. */
export function IntegrateArt() {
  return (
    <div className={box}>
      <Stroke d="M46 38 C 51 30, 57 30, 62 36" head="M57 34 L62 36 L60 41" />
      <Stroke d="M62 64 C 57 70, 51 70, 46 64" head="M48 59 L46 64 L51 66" />
      <Icon src={laptop} className="absolute left-0 top-1/2 size-24 -translate-y-1/2 md:size-28" />
      <Mascot className="absolute right-0 top-1/2 h-24 w-auto -translate-y-1/2 transition-transform duration-500 group-hover:-rotate-6 md:h-28" />
    </div>
  );
}

/** 04 Improve — performance dashboard: rising chart, a small cog and completion ticks. */
export function ImproveArt() {
  return (
    <div className={box}>
      <div className="absolute inset-y-2 left-0 right-6 rounded-2xl border-2 border-ink bg-background">
        <div className="flex gap-1 border-b-2 border-ink px-3 py-2">
          <span className="size-2 rounded-full bg-brand" />
          <span className="size-2 rounded-full border border-ink bg-slime" />
          <span className="size-2 rounded-full border border-ink" />
        </div>
      </div>
      <Icon src={chart} className="absolute bottom-4 left-4 size-24 md:size-28" />
      <Icon src={gears} className="absolute right-0 top-0 size-14 md:size-16" />
      <Tick className="bottom-14 right-3" />
      <Tick className="bottom-4 right-10" />
    </div>
  );
}
