import { Check, Database, Heart, MessageCircle } from "lucide-react";
import { Mascot } from "./Brand";

/*
 * Complementary visual for "Agents that feel like humans": a customer message, the
 * Commitment agent in the middle, and a warm, personalised reply. Fictional demo content.
 */

const SIGNALS = [
  { i: Heart, t: "Reads the tone" },
  { i: Database, t: "Checks order in CRM" },
  { i: MessageCircle, t: "Writes in your voice" },
];

export function ConversationVisual() {
  return (
    <div className="relative rounded-[2rem] border-2 border-ink bg-paper p-4 sm:p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between gap-3 text-[11px]">
        <span className="font-bold uppercase tracking-wider">Agent conversation</span>
        <span className="rounded-full border border-border bg-background px-2.5 py-0.5 font-semibold uppercase tracking-wider text-muted-foreground">
          Illustrative
        </span>
      </div>

      {/* Customer */}
      <div className="flex items-end gap-2">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-[11px] font-bold">
          SR
        </span>
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-background p-3.5 text-sm leading-relaxed shadow-sm">
          My order still hasn't arrived and it's a present for my daughter's birthday on Saturday.
          Is there anything you can do?
        </div>
      </div>

      {/* Agent core */}
      <div className="relative my-6 flex flex-col items-center gap-4 sm:my-8 sm:flex-row sm:justify-center sm:gap-6">
        <svg
          viewBox="0 0 2 40"
          className="absolute left-1/2 top-[-1.5rem] h-6 w-px -translate-x-1/2 sm:top-[-2rem] sm:h-8"
          aria-hidden="true"
        >
          <path d="M1 0v40" stroke="var(--brand)" strokeWidth="2" className="flow-dash" />
        </svg>
        <div className="relative flex size-32 shrink-0 items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="slow-spin absolute inset-0 size-full"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="var(--brand)"
              strokeWidth="1.2"
              strokeDasharray="2 6"
            />
          </svg>
          <span className="absolute inset-4 rounded-full border border-border bg-background shadow-sm" />
          <Mascot idle className="relative h-16 w-auto" />
          <span className="absolute right-3 top-3 size-2.5 rounded-full border border-ink bg-slime" />
        </div>
        <ul className="grid w-full gap-1.5 sm:w-auto">
          {SIGNALS.map(({ i: I, t }) => (
            <li
              key={t}
              className="flex items-center gap-2 rounded-full border border-border bg-background py-1 pl-1 pr-3 text-xs font-medium"
            >
              <span className="flex size-5 items-center justify-center rounded-full bg-slime ring-1 ring-ink">
                <Check className="size-3" strokeWidth={3.5} />
              </span>
              <I className="size-3.5 text-brand" />
              {t}
            </li>
          ))}
        </ul>
        <svg
          viewBox="0 0 2 40"
          className="absolute bottom-[-1.5rem] left-1/2 h-6 w-px -translate-x-1/2 sm:bottom-[-2rem] sm:h-8"
          aria-hidden="true"
        >
          <path d="M1 0v40" stroke="var(--brand)" strokeWidth="2" className="flow-dash" />
        </svg>
      </div>

      {/* Reply */}
      <div className="flex items-end justify-end gap-2">
        <div className="max-w-[85%] rounded-2xl rounded-br-sm border-2 border-ink bg-background p-3.5 text-sm leading-relaxed">
          Oh no, I'm sorry — let's make sure it gets there in time. Your order is with our courier
          and due on Friday, so it should arrive before the big day. I've flagged it as a priority
          and I'll message you the moment it's out for delivery.
          <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-semibold">
            {["Personal", "Accurate", "On-brand"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 rounded-full bg-surface px-2 py-0.5"
              >
                <Check className="size-2.5" strokeWidth={4} /> {t}
              </span>
            ))}
          </div>
        </div>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background">
          <Mascot className="h-5 w-auto" />
        </span>
      </div>

      <p className="mt-6 text-[11px] text-muted-foreground">
        Fictional example for demonstration purposes.
      </p>
    </div>
  );
}
