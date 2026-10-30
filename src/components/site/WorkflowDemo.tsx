import { useEffect, useRef, useState } from "react";
import { Check, User } from "lucide-react";
import { Mascot } from "./Brand";
import { cn } from "@/lib/utils";

const BEFORE = [
  "Read the message",
  "Identify what the customer needs",
  "Search for relevant information",
  "Write a response",
  "Update the CRM",
  "Arrange any necessary follow-up",
];
const AFTER = [
  "Reads and categorises the enquiry",
  "Retrieves relevant information",
  "Drafts a personalised response",
  "Prepares CRM updates",
  "Flags the response for approval",
];

export function WorkflowDemo() {
  const [mode, setMode] = useState<"before" | "after">("after");
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(!!e?.isIntersecting), { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const steps = mode === "before" ? BEFORE : AFTER;

  useEffect(() => {
    setActive(0);
  }, [mode]);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(steps.length + 1);
      return;
    }
    if (active > steps.length + 1) return;
    const t = setTimeout(() => setActive((a) => a + 1), mode === "before" ? 900 : 550);
    return () => clearTimeout(t);
  }, [active, visible, steps.length, mode]);

  const done = active > steps.length;

  return (
    <div ref={ref} className="rounded-[2rem] border-2 border-ink bg-background p-5 md:p-10">
      <div role="tablist" aria-label="Compare workflows" className="mx-auto mb-10 flex w-fit rounded-full border-2 border-ink p-1">
        {(["before", "after"] as const).map((m) => (
          <button
            key={m}
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-bold transition-colors",
              mode === m ? (m === "before" ? "bg-ink text-ink-foreground" : "bg-brand text-brand-foreground") : "text-ink",
            )}
          >
            {m === "before" ? "Before Commitment" : "With Commitment"}
          </button>
        ))}
      </div>

      <div className="grid items-start gap-8 md:grid-cols-[1fr_1.3fr_1fr]">
        <div className="rounded-2xl bg-surface p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Incoming enquiry</p>
          <p className="mt-3 leading-relaxed">"Hi, do you have any availability for a consultation next week? I'd also like a price list."</p>
        </div>

        <ol className="relative space-y-3">
          {steps.map((s, i) => {
            const on = i < active;
            const now = i === active - 1 && !done;
            return (
              <li
                key={mode + s}
                className={cn(
                  "flex items-center gap-3 rounded-xl border-2 px-4 py-3 transition-all duration-500",
                  on ? "border-ink opacity-100" : "border-border opacity-40",
                  now && "-translate-y-0.5 shadow-pop",
                  on && mode === "after" && "bg-slime",
                )}
              >
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-ink text-xs font-bold",
                    mode === "before" ? "bg-brand text-brand-foreground" : "bg-background",
                  )}
                >
                  {mode === "after" && on ? <Check className="size-4" strokeWidth={3} /> : i + 1}
                </span>
                <span className="flex-1 font-medium">{s}</span>
                {mode === "before" ? <User className="size-4 text-brand" /> : <Mascot className="h-5 w-auto" />}
              </li>
            );
          })}
        </ol>

        <div className={cn("rounded-2xl border-2 p-5 transition-all duration-700", done ? "border-ink opacity-100" : "border-dashed border-border opacity-40")}>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Result</p>
          {mode === "before" ? (
            <>
              <p className="display mt-3 text-3xl">Six manual steps.</p>
              <p className="mt-2 text-muted-foreground">Repeated for every enquiry, all day, every day.</p>
            </>
          ) : (
            <>
              <p className="display mt-3 text-3xl">
                One click to <span className="text-brand">approve.</span>
              </p>
              <p className="mt-2 text-muted-foreground">Your team checks the reply, makes any tweaks and sends. You stay in control.</p>
              <span className="mt-4 inline-block rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground">Approve & send</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
