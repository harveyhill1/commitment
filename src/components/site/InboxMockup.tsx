import { useEffect, useState } from "react";
import { BarChart3, Check, Inbox, Users, Zap, Target, Search } from "lucide-react";
import { Mascot } from "./Brand";
import { cn } from "@/lib/utils";

const STEPS = [
  "Identified as a viewing request",
  "Checked available viewing times",
  "Prepared a personalised response",
  "CRM update ready after approval",
];

const REPLY =
  "Hi Sophie, thanks for getting in touch! Saturday works well — we have viewings at 10:30am and 2:15pm for the two-bedroom flat on Gloucester Road. Which suits you best? I'll send a confirmation as soon as you let me know.";

const THREADS = [
  { name: "Sophie Turner", tag: "Viewing", text: "Hi, I'd like to arrange a viewing for the two-bedroom…", time: "09:42", active: true },
  { name: "Marcus Bell", tag: "Valuation", text: "Could someone value my house in Clifton next…", time: "09:18" },
  { name: "Priya Shah", tag: "Lettings", text: "Is the studio on Park Street still available?", time: "08:55" },
  { name: "Tom Hughes", tag: "Maintenance", text: "The boiler at flat 3 isn't working again…", time: "Yest." },
  { name: "Ella Morgan", tag: "Offer", text: "We'd like to put in an offer on Redland Grove…", time: "Yest." },
];

export function InboxMockup() {
  const [step, setStep] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(STEPS.length);
      setChars(REPLY.length);
      return;
    }
    let s = 0;
    const t = setInterval(() => {
      s += 1;
      setStep(s);
      if (s >= STEPS.length) clearInterval(t);
    }, 900);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (step < 3 || chars >= REPLY.length) return;
    const t = setTimeout(() => setChars((c) => Math.min(REPLY.length, c + 3)), 18);
    return () => clearTimeout(t);
  }, [step, chars]);

  return (
    <div className="relative">
      {/* Monitor */}
      <div className="rounded-[1.75rem] border-[3px] border-ink bg-ink p-2 shadow-device md:p-3">
        <div className="overflow-hidden rounded-[1.1rem] bg-background">
          {/* window bar */}
          <div className="flex items-center gap-2 border-b border-border bg-paper px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-brand" />
            <span className="size-2.5 rounded-full bg-slime ring-1 ring-ink/20" />
            <span className="size-2.5 rounded-full bg-border" />
            <div className="mx-auto hidden rounded-md bg-surface px-10 py-1 text-[11px] text-muted-foreground sm:block">
              app.getcommitment.ai/inbox
            </div>
          </div>

          <div className="grid min-h-[460px] grid-cols-1 text-[13px] md:grid-cols-[150px_250px_1fr]">
            {/* sidebar */}
            <aside className="hidden flex-col gap-1 border-r border-border bg-paper p-3 md:flex">
              <div className="mb-3 flex items-center gap-1.5 px-1">
                <Mascot className="h-6 w-auto" />
                <span className="display text-sm lowercase">commitment</span>
              </div>
              {[
                { i: Inbox, l: "Inbox", n: 12, a: true },
                { i: Users, l: "Customers" },
                { i: Target, l: "Leads", n: 4 },
                { i: Zap, l: "Automations" },
                { i: BarChart3, l: "Analytics" },
              ].map(({ i: I, l, n, a }) => (
                <div key={l} className={cn("flex items-center gap-2 rounded-lg px-2 py-1.5", a ? "bg-brand text-brand-foreground" : "text-ink/70")}>
                  <I className="size-3.5" />
                  <span className="flex-1 font-medium">{l}</span>
                  {n && <span className={cn("rounded-full px-1.5 text-[10px] font-bold", a ? "bg-background text-brand" : "bg-surface")}>{n}</span>}
                </div>
              ))}
            </aside>

            {/* list */}
            <div className="hidden border-r border-border md:block">
              <div className="flex items-center gap-2 border-b border-border px-3 py-2.5 text-muted-foreground">
                <Search className="size-3.5" /> <span className="text-xs">Search enquiries</span>
              </div>
              {THREADS.map((t) => (
                <div key={t.name} className={cn("border-b border-border px-3 py-2.5", t.active && "border-l-[3px] border-l-brand bg-paper")}>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-[10px] text-muted-foreground">{t.time}</span>
                  </div>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">{t.text}</p>
                  <span className={cn("mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold", t.active ? "bg-brand text-brand-foreground" : "bg-surface")}>
                    {t.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* detail */}
            <div className="flex flex-col gap-3 p-4">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-surface text-xs font-bold">ST</div>
                <div>
                  <p className="font-semibold">Sophie Turner</p>
                  <p className="text-[11px] text-muted-foreground">via website · 09:42</p>
                </div>
              </div>
              <div className="rounded-xl rounded-tl-sm bg-surface p-3 leading-relaxed">
                Hi, I'd like to arrange a viewing for the two-bedroom property on Gloucester Road. Is Saturday available?
              </div>

              <div className="rounded-xl border-2 border-ink p-3">
                <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider">
                  <Mascot className="h-4 w-auto" /> Commitment AI
                </p>
                <ol className="space-y-1.5">
                  {STEPS.map((s, i) => {
                    const done = i < step;
                    return (
                      <li key={s} className={cn("flex items-center gap-2 transition-opacity duration-500", done ? "opacity-100" : "opacity-35")}>
                        <span className={cn("flex size-4 shrink-0 items-center justify-center rounded-full border border-ink transition-colors", done ? "bg-slime" : "bg-background")}>
                          {done && <Check className="size-2.5" strokeWidth={4} />}
                        </span>
                        {s}
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="rounded-xl border border-border bg-paper p-3">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Suggested reply</span>
                  <span className="rounded-full bg-slime px-2 py-0.5 text-[10px] font-bold">Ready for review</span>
                </div>
                <p className="min-h-[72px] leading-relaxed">
                  {REPLY.slice(0, chars)}
                  {chars < REPLY.length && step >= 3 && <span className="caret ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-brand" />}
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground">Approve & send</span>
                  <span className="rounded-full border border-ink px-3 py-1.5 text-xs font-semibold">Edit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* stand */}
      <div className="mx-auto h-8 w-24 border-x-[3px] border-ink bg-surface" />
      <div className="mx-auto h-3 w-48 rounded-t-xl border-[3px] border-ink bg-surface" />

      <div className="absolute -right-3 -top-6 hidden rotate-6 rounded-full border-2 border-ink bg-slime px-4 py-2 text-xs font-bold shadow-pop md:block">
        Human stays in control ✓
      </div>
    </div>
  );
}
