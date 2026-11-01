import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Check,
  CheckSquare,
  Inbox,
  Link2,
  RotateCcw,
  Search,
  UserRound,
  Users,
} from "lucide-react";
import { Mascot } from "./Brand";
import { cn } from "@/lib/utils";

/*
 * Illustrative hero demo: Customer enquiry → native CRM → Commitment AI → automatic response.
 * Everything here is static demonstration content for a fictional business; nothing is
 * connected to a real CRM or AI backend.
 */

const ENQUIRY =
  "Hi, I'm interested in your services. Could you tell me what's included in your standard package, how long setup usually takes, and whether I can speak to someone before getting started?";

const REPLY =
  "Hi Jamie, thanks for getting in touch! Our Standard package includes an initial discovery session, a tailored plan for your business and monthly progress reviews. Setup usually takes 5–7 working days once we have your details. And yes, of course — you're welcome to speak to one of our team first. Would a free 15-minute call on Tuesday or Thursday afternoon suit you?";

const STEPS = [
  {
    t: "Understands customer intent",
    chips: ["What's included", "Setup time", "Speak to someone"],
    note: "3 questions detected",
  },
  {
    t: "Retrieves verified business knowledge",
    chips: ["Packages guide", "Onboarding FAQ", "Team calendar"],
    note: "3 sources matched",
  },
  {
    t: "Composes a personalised response",
    chips: ["Answers all 3 questions", "Your brand voice"],
    note: "Response ready",
  },
  {
    t: "Checks against your business rules",
    chips: ["Verified information", "Configured permissions"],
    note: "All checks passed",
  },
];

// Animation timeline (ms from start). Stage numbers:
// 1 enquiry arrives · 2 flows to Commitment · 3–6 processing steps · 7 flows back · 8 reply sending
const TIMELINE = [250, 1050, 1700, 2500, 3300, 4100, 4900, 5300];
const FINAL = TIMELINE.length;

function useInView<T extends Element>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView] as const;
}

export function HeroDemo() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [stage, setStage] = useState(0);
  const [chars, setChars] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage(FINAL);
      setChars(REPLY.length);
      return;
    }
    setStage(0);
    setChars(0);
    const timers = TIMELINE.map((ms, i) => setTimeout(() => setStage(i + 1), ms));
    return () => timers.forEach(clearTimeout);
  }, [inView, run]);

  useEffect(() => {
    if (stage < FINAL || chars >= REPLY.length) return;
    const t = setTimeout(() => setChars((c) => Math.min(REPLY.length, c + 4)), 16);
    return () => clearTimeout(t);
  }, [stage, chars]);

  const replyDone = stage >= FINAL && chars >= REPLY.length;
  // Step i is active at stage 3+i and complete from stage 4+i.
  const stepState = (i: number) => (stage >= 4 + i ? "done" : stage === 3 + i ? "active" : "idle");
  const processing = stage >= 3 && stage < 7;

  return (
    <div ref={ref} className="relative">
      {/* Monitor */}
      <div className="rounded-[1.75rem] border-[3px] border-ink bg-ink p-2 shadow-device md:p-3">
        <div className="overflow-hidden rounded-[1.1rem] bg-background">
          {/* Window bar */}
          <div className="flex items-center gap-2 border-b border-border bg-paper px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <div className="mx-auto hidden rounded-md bg-surface px-10 py-1 text-[11px] text-muted-foreground sm:block">
              your-crm.example/inbox
            </div>
            <span className="ml-auto rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:ml-0">
              Illustrative demo
            </span>
          </div>

          <div className="grid text-[13px] lg:grid-cols-[150px_1fr]">
            {/* Generic, unbranded CRM sidebar */}
            <aside
              className="hidden flex-col gap-1 border-r border-border bg-paper p-3 lg:flex"
              aria-hidden="true"
            >
              <div className="mb-3 flex items-center gap-2 px-1">
                <span className="flex size-6 items-center justify-center rounded-md bg-ink text-[9px] font-bold text-ink-foreground">
                  CRM
                </span>
                <span className="text-xs font-semibold text-ink/70">Your CRM</span>
              </div>
              {[
                { i: Inbox, l: "Inbox", n: 1, a: true },
                { i: Users, l: "Contacts" },
                { i: CheckSquare, l: "Tasks" },
                { i: BarChart3, l: "Reports" },
              ].map(({ i: I, l, n, a }) => (
                <div
                  key={l}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-2 py-1.5",
                    a ? "bg-surface font-semibold text-ink" : "text-ink/60",
                  )}
                >
                  <I className="size-3.5" />
                  <span className="flex-1">{l}</span>
                  {n && stage >= 1 && (
                    <span className="pop-in rounded-full bg-ink px-1.5 text-[10px] font-bold text-ink-foreground">
                      {n}
                    </span>
                  )}
                </div>
              ))}
              <div className="mt-auto rounded-lg border border-border bg-background p-2 text-[10px] leading-snug text-muted-foreground">
                <span className="mb-1 flex items-center gap-1 font-semibold text-ink">
                  <Mascot className="h-3 w-auto" /> Commitment
                </span>
                Connected app
              </div>
            </aside>

            <div className="p-3 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Search className="size-3.5" /> Inbox <span className="text-border">/</span>{" "}
                  <span className="font-semibold text-ink">Jamie Collins</span>
                </span>
                <span className="hidden sm:inline">Fictional data for demonstration</span>
              </div>

              {/* Flow: single column on mobile; thread ↔ AI panel on desktop */}
              <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_112px_minmax(0,290px)] lg:grid-rows-[auto_1fr]">
                {/* Stage 1 — enquiry in the CRM inbox */}
                <div className="lg:col-start-1 lg:row-start-1">
                  <div
                    className={cn(
                      "rounded-xl border border-border bg-background p-3.5 shadow-sm transition-all duration-500",
                      stage >= 1 ? "opacity-100" : "translate-y-2 opacity-0",
                    )}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex size-8 items-center justify-center rounded-full bg-surface text-[11px] font-bold">
                        JC
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold leading-tight">Jamie Collins</p>
                        <p className="text-[11px] text-muted-foreground">
                          Website enquiry · just now
                        </p>
                      </div>
                      <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] font-semibold">
                        New
                      </span>
                    </div>
                    <p className="rounded-lg rounded-tl-sm bg-surface p-3 leading-relaxed">
                      {ENQUIRY}
                    </p>
                  </div>
                </div>

                {/* Stage 2 — flow into Commitment */}
                <Connector
                  className="lg:col-start-2 lg:row-start-1 lg:self-start lg:pt-14"
                  active={stage >= 2}
                  direction="right"
                  label="Connected to your existing CRM"
                />

                {/* Stage 3 — AI processing panel */}
                <div className="lg:col-start-3 lg:row-span-2 lg:row-start-1">
                  <div
                    className={cn(
                      "relative rounded-xl border bg-background p-4 transition-colors duration-500",
                      processing
                        ? "border-brand/50 shadow-[0_0_0_4px_color-mix(in_oklab,var(--brand)_8%,transparent)]"
                        : "border-border shadow-sm",
                    )}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-paper">
                        {processing && (
                          <span className="soft-pulse absolute inset-0 rounded-full bg-brand/25" />
                        )}
                        <Mascot className="relative h-7 w-auto" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-wider">
                          Commitment AI
                        </p>
                        <p
                          className={cn(
                            "text-[11px] font-medium",
                            stage >= 7
                              ? "text-ink"
                              : processing
                                ? "text-brand"
                                : "text-muted-foreground",
                          )}
                        >
                          {stage >= 7
                            ? "Complete"
                            : processing
                              ? "Processing enquiry…"
                              : "Waiting for enquiries"}
                        </p>
                      </div>
                      {stage >= 7 && (
                        <span className="pop-in ml-auto flex size-6 items-center justify-center rounded-full bg-slime ring-1 ring-ink">
                          <Check className="size-3.5" strokeWidth={3.5} />
                        </span>
                      )}
                    </div>

                    <ol className="relative space-y-4">
                      {STEPS.map((s, i) => {
                        const st = stepState(i);
                        return (
                          <li key={s.t} className="relative flex gap-3">
                            {i < STEPS.length - 1 && (
                              <span
                                className="absolute left-[9px] top-6 h-[calc(100%-4px)] w-px bg-border"
                                aria-hidden="true"
                              >
                                <span
                                  className={cn(
                                    "block w-px bg-ink transition-all duration-700",
                                    st === "done" ? "h-full" : "h-0",
                                  )}
                                />
                              </span>
                            )}
                            <StepDot state={st} />
                            <div className="min-w-0 flex-1 pb-0.5">
                              <p
                                className={cn(
                                  "font-semibold leading-snug transition-colors",
                                  st === "idle" ? "text-ink/35" : "text-ink",
                                )}
                              >
                                {s.t}
                              </p>
                              <div
                                className={cn(
                                  "grid transition-all duration-500",
                                  st === "idle"
                                    ? "grid-rows-[0fr] opacity-0"
                                    : "grid-rows-[1fr] opacity-100",
                                )}
                              >
                                <div className="overflow-hidden">
                                  <p
                                    className={cn(
                                      "mt-1 text-[10px] font-semibold uppercase tracking-wider",
                                      st === "done" ? "text-muted-foreground" : "text-brand",
                                    )}
                                  >
                                    {st === "done" ? s.note : "Working…"}
                                  </p>
                                  <div className="mt-1.5 flex flex-wrap gap-1">
                                    {s.chips.map((c) => (
                                      <span
                                        key={c}
                                        className="rounded-md border border-border bg-paper px-1.5 py-0.5 text-[10px] text-ink/80"
                                      >
                                        {c}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>

                {/* Stage 4 — response delivered back through the CRM */}
                <Connector
                  className="lg:col-start-2 lg:row-start-2 lg:self-end lg:pb-24"
                  active={stage >= 7}
                  direction="left"
                  label="Sent automatically via your CRM"
                />

                <div className="lg:col-start-1 lg:row-start-2 lg:mt-4">
                  <div
                    className={cn(
                      "rounded-xl border bg-background p-3.5 transition-all duration-500",
                      stage >= 7
                        ? "border-ink/80 opacity-100 shadow-sm"
                        : "translate-y-2 border-border opacity-0",
                    )}
                  >
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        <Mascot className="h-3.5 w-auto" /> Reply sent via your CRM
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold transition-colors",
                          replyDone
                            ? "bg-slime ring-1 ring-ink"
                            : "bg-surface text-muted-foreground",
                        )}
                      >
                        {replyDone ? (
                          <>
                            <Check className="size-3" strokeWidth={3.5} /> Automatically resolved
                          </>
                        ) : (
                          "Sending…"
                        )}
                      </span>
                    </div>
                    <p className="min-h-[96px] leading-relaxed" aria-label={REPLY}>
                      <span aria-hidden="true">{REPLY.slice(0, chars)}</span>
                      {stage >= FINAL && !replyDone && (
                        <span
                          className="caret ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-brand"
                          aria-hidden="true"
                        />
                      )}
                    </p>
                    <p className="mt-3 flex items-start gap-1.5 border-t border-border pt-2.5 text-[11px] leading-snug text-muted-foreground">
                      <UserRound className="mt-px size-3 shrink-0" />
                      Enquiries outside the agent's knowledge or permissions are escalated to your
                      team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3 text-[11px] text-muted-foreground">
                <span>Illustrative example using a fictional business. Not a live system.</span>
                <button
                  type="button"
                  onClick={() => setRun((r) => r + 1)}
                  className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border px-2.5 py-1 font-semibold text-ink transition-colors hover:border-ink"
                >
                  <RotateCcw className="size-3" /> Replay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stand */}
      <div className="mx-auto h-8 w-24 border-x-[3px] border-ink bg-surface" />
      <div className="mx-auto h-3 w-48 rounded-t-xl border-[3px] border-ink bg-surface" />

      <div className="absolute -right-3 -top-6 hidden rotate-6 rounded-full border-2 border-ink bg-slime px-4 py-2 text-xs font-bold shadow-pop md:block">
        Checked against your rules ✓
      </div>
    </div>
  );
}

function StepDot({ state }: { state: "idle" | "active" | "done" }) {
  return (
    <span className="relative z-10 mt-0.5 flex size-[19px] shrink-0 items-center justify-center rounded-full bg-background">
      {state === "active" && <span className="soft-pulse absolute inset-0 rounded-full bg-brand" />}
      <span
        className={cn(
          "relative flex size-[19px] items-center justify-center rounded-full border transition-colors duration-300",
          state === "done" && "border-ink bg-slime",
          state === "active" && "border-brand bg-brand",
          state === "idle" && "border-border bg-background",
        )}
      >
        {state === "done" && <Check className="size-3" strokeWidth={4} />}
        {state === "active" && <span className="size-1.5 rounded-full bg-background" />}
      </span>
    </span>
  );
}

function Connector({
  active,
  direction,
  label,
  className,
}: {
  active: boolean;
  direction: "right" | "left";
  label: string;
  className?: string;
}) {
  const stroke = active ? "var(--brand)" : "var(--border)";
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 py-3 lg:flex-col lg:gap-2 lg:px-1 lg:py-0",
        className,
      )}
    >
      {/* Vertical (mobile) */}
      <svg
        viewBox="0 0 24 56"
        className="h-12 w-5 shrink-0 lg:hidden"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2v46"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          className={active ? "flow-dash" : undefined}
        />
        <path
          d="M6 44l6 7 6-7"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Horizontal (desktop) */}
      <svg
        viewBox="0 0 100 20"
        className="hidden h-5 w-full lg:block"
        fill="none"
        aria-hidden="true"
      >
        {direction === "right" ? (
          <>
            <path
              d="M4 10h86"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
              className={active ? "flow-dash" : undefined}
            />
            <path
              d="M86 4l8 6-8 6"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        ) : (
          <>
            <path
              d="M96 10H10"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
              className={active ? "flow-dash" : undefined}
            />
            <path
              d="M14 4l-8 6 8 6"
              stroke={stroke}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
      </svg>
      <span
        className={cn(
          "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold transition-colors duration-500 lg:text-center lg:leading-tight",
          active
            ? "border-brand/40 bg-background text-brand"
            : "border-border bg-background text-muted-foreground",
        )}
      >
        <Link2 className="size-3 shrink-0 lg:hidden" />
        {label}
      </span>
    </div>
  );
}
