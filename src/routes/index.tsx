import { createFileRoute } from "@tanstack/react-router";
import { useState, type ComponentType } from "react";
import { ArrowUpRight, Check, Linkedin, Plus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BookingLink, Icon, Mascot, Reveal, SectionHeading } from "@/components/site/Brand";
import { Footer, Nav } from "@/components/site/Chrome";
import { HeroDemo } from "@/components/site/HeroDemo";
import { ConversationVisual } from "@/components/site/ConversationVisual";
import { ImproveArt, IntegrateArt, PrepareArt, UnderstandArt } from "@/components/site/MethodArt";
import { cn } from "@/lib/utils";

import team from "@/assets/icons/team.png";
import contract from "@/assets/icons/contract.png";
import cash from "@/assets/icons/cash.png";
import harveyPhoto from "@/assets/team/harvey.jpg";
import artemisPhoto from "@/assets/team/artemis.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Commitment — Bespoke AI customer service agents for SMEs" },
      {
        name: "description",
        content:
          "We design, integrate and continuously improve bespoke AI customer service agents that work with your existing CRM — delivering exceptional customer service at a fraction of the cost.",
      },
      {
        property: "og:title",
        content: "Commitment — Unlock the next generation of customer service.",
      },
      {
        property: "og:description",
        content:
          "Bespoke AI customer service agents for SMEs, designed, integrated with your CRM and continuously improved.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const STATS = [
  {
    n: <span className="text-ink">30–45%</span>,
    d: (
      <>
        Potential <span className="slime-mark">productivity gains</span> equivalent to current
        customer care costs through generative AI.
      </>
    ),
    size: "clamp(3rem, 25cqi, 6rem)",
    src: "McKinsey & Company",
    href: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
  },
  {
    n: <span className="text-ink">67%</span>,
    d: (
      <>
        Of UK businesses adopting AI report{" "}
        <span className="slime-mark">limited skills, expertise or knowledge</span> as a barrier.
      </>
    ),
    size: "clamp(3rem, 25cqi, 6rem)",
    src: "UK Government, AI Adoption Survey 2026",
    href: "https://www.gov.uk/government/publications/ai-adoption-survey-2026/ai-adoption-survey-report-2026-executive-summary",
  },
  {
    n: (
      <>
        <span className="text-ink">22%</span>{" "}
        <span className="align-middle text-[0.45em] text-ink">vs</span>{" "}
        <span className="text-ink">40%</span>
      </>
    ),
    d: (
      <>
        Smaller versus large organisations <span className="slime-mark">scaling AI agents.</span>
      </>
    ),
    size: "clamp(2.5rem, 19cqi, 5rem)",
    src: "McKinsey, August 2026",
    href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  },
];

const METHOD: { stage: string; t: string; d: string; benefit: string; Art: ComponentType }[] = [
  {
    stage: "Understand",
    t: "Customer journey mapping & prioritisation",
    d: "We map how customers seek help and identify which enquiries offer the greatest opportunity for automation.",
    benefit:
      "An agent designed around real customer needs, with the highest-value enquiries prioritised first.",
    Art: UnderstandArt,
  },
  {
    stage: "Prepare",
    t: "Knowledge gap analysis & optimisation",
    d: "We identify missing information, structure your knowledge base and help develop the content your agent needs to provide reliable answers.",
    benefit: "More accurate, consistent responses grounded in your business knowledge.",
    Art: PrepareArt,
  },
  {
    stage: "Integrate",
    t: "Service blueprinting & implementation",
    d: "We design how the agent interacts with your CRM, communication channels and human team, including escalation and handover processes.",
    benefit: "A seamless customer experience that works with your existing systems.",
    Art: IntegrateArt,
  },
  {
    stage: "Improve",
    t: "Testing, performance & optimisation",
    d: "We test realistic customer scenarios, establish performance metrics and continually refine your agent using reviewed conversations and feedback.",
    benefit: "An agent that becomes more effective over time through managed improvements.",
    Art: ImproveArt,
  },
];

const PILLARS = [
  {
    n: "01",
    t: "Designed for your customers",
    d: "End-to-end customer service agent design, built around your customer journeys, brand voice and business knowledge.",
  },
  {
    n: "02",
    t: "Integrated with your systems",
    d: "Done-for-you implementation into your existing CRM and communication channels.",
  },
  {
    n: "03",
    t: "Continuously improving",
    d: "Ongoing monitoring, feedback and optimisation to make responses more effective over time.",
  },
];

const VALUE = [
  { t: "Answers questions using your business knowledge", crm: true },
  { t: "Connects customer conversations to your CRM", crm: true },
  { t: "Identifies knowledge gaps before launch", crm: false },
  { t: "Helps write and structure your knowledge base", crm: false },
  { t: "Maps customer journeys to prioritise automation", crm: false },
  { t: "Designs human handover and escalation", crm: false },
  { t: "Tests realistic customer scenarios before launch", crm: false },
  { t: "Reviews performance and improves answers after launch", crm: false },
];

const INDUSTRIES = [
  {
    n: "01",
    t: "Small & medium-sized businesses",
    d: "Affordable, scalable AI customer service that helps growing teams handle enquiries without proportionally increasing workload.",
    i: team,
  },
  {
    n: "02",
    t: "Professional services",
    d: "Deliver faster, more consistent client communication while reducing repetitive administrative work.",
    i: contract,
  },
  {
    n: "03",
    t: "E-commerce",
    d: "Automate product questions, delivery enquiries, order updates and customer support across channels.",
    i: cash,
  },
];

const TEAM = [
  {
    name: "Harvey Hill",
    role: "CEO & Co-founder",
    photo: harveyPhoto,
    linkedin: "https://www.linkedin.com/in/harveyhill21",
    bio: "Imperial Business School graduate with a medical background, combining scientific thinking with commercial acumen. Experienced in optimising operations in VC-backed healthtech and leading digital transformation and AI implementation across large organisations. Focused on translating complex business challenges into practical, scalable solutions.",
  },
  {
    name: "Artemis Webster",
    role: "CTO & Co-founder",
    photo: artemisPhoto,
    linkedin: "https://www.linkedin.com/in/artemis-webster/",
    bio: "Software engineer at Rolls-Royce with a background in computational chemistry and training at the Machine Learning Institute. Experienced in developing secure AI systems and building applications that improve productivity at large organisations. Combines software engineering and machine learning expertise to create robust, intelligent solutions to complex business challenges.",
  },
];

function Tick() {
  return (
    <span className="inline-flex size-7 items-center justify-center rounded-full bg-slime ring-1 ring-ink">
      <Check className="size-4 text-ink" strokeWidth={3.5} aria-hidden="true" />
      <span className="sr-only">Included</span>
    </span>
  );
}

function Dash() {
  return (
    <span className="text-xl font-semibold text-ink/25">
      <span aria-hidden="true">—</span>
      <span className="sr-only">Not included</span>
    </span>
  );
}

function MethodCard({ m, k }: { m: (typeof METHOD)[number]; k: number }) {
  const [open, setOpen] = useState(false);
  const id = `method-${k}`;
  return (
    <Reveal
      delay={k * 80}
      className="lift group flex h-full flex-col gap-8 rounded-[2rem] border-2 border-ink bg-background p-6 md:p-8"
    >
      <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-surface md:h-60">
        <span className="display absolute left-4 top-4 text-xl text-brand">0{k + 1}</span>
        <div className="transition-transform duration-500 group-hover:-translate-y-1">
          <m.Art />
        </div>
      </div>
      <div>
        <h3 className="display text-4xl md:text-5xl">
          <span className={k % 2 ? "slime-mark" : ""}>{m.stage}</span>
        </h3>
        <p className="mt-3 text-lg font-bold leading-snug">{m.t}</p>
        <p className="mt-2 max-w-md text-muted-foreground">{m.d}</p>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-brand"
        >
          <span
            className={cn(
              "flex size-6 items-center justify-center rounded-full border-2 border-ink transition-transform duration-300",
              open && "rotate-45 bg-slime",
            )}
          >
            <Plus className="size-3.5" strokeWidth={3} />
          </span>
          Customer benefit
        </button>
        <div
          id={id}
          className={cn(
            "grid transition-all duration-500",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <p className="mt-4 max-w-md border-l-4 border-slime pl-4 font-medium text-ink">
              {m.benefit}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* 1 · HERO */}
        <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 md:px-8 md:pt-20">
          <div className="grid gap-10">
            <Reveal>
              <h1 className="display max-w-6xl text-[2.9rem] leading-[1.02] text-ink sm:text-6xl md:text-7xl xl:text-8xl">
                Unlock the <span className="text-brand">next generation</span> of customer service.
              </h1>
            </Reveal>
            <Reveal
              delay={150}
              className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
            >
              <p className="max-w-[520px] text-lg leading-relaxed text-muted-foreground">
                We design, integrate and continuously improve bespoke AI agents that deliver
                exceptional customer service, at a fraction of the cost.
              </p>
              <div className="flex flex-wrap gap-3">
                <BookingLink className={buttonVariants({ variant: "pill", size: "xl" })}>
                  Book a free consultation ↗
                </BookingLink>
                <a
                  href="#how-it-works"
                  className={buttonVariants({ variant: "pillOutline", size: "xl" })}
                >
                  See how it works
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={250} className="mt-16 md:mt-20">
            <HeroDemo />
          </Reveal>
        </section>

        {/* 2 · THE OPPORTUNITY */}
        <section id="opportunity" className="scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              title={
                <>
                  The <span className="text-brand">opportunity.</span>
                </>
              }
            />
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {STATS.map((s, k) => (
                <Reveal
                  key={s.src}
                  delay={k * 100}
                  className="@container flex flex-col rounded-3xl border border-border bg-background p-8 md:min-h-[380px] md:p-10"
                >
                  <p className="display whitespace-nowrap" style={{ fontSize: s.size }}>
                    {s.n}
                  </p>
                  <p className="mt-6 max-w-xs text-lg leading-snug text-ink/80">{s.d}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-1 border-t border-border pt-5 text-xs text-muted-foreground transition-colors hover:text-brand md:mt-10"
                  >
                    Source: {s.src} <ArrowUpRight className="size-3.5" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3 · WHAT YOU GET — AGENTS THAT FEEL LIKE HUMANS */}
        <section id="agents" className="scroll-mt-20 bg-paper py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <SectionHeading
                title={
                  <>
                    Customer service agents that feel like{" "}
                    <span className="text-brand">humans.</span>
                  </>
                }
                intro="Intelligent customer service, built around your business and designed to deliver the personal experience your customers expect."
              />
              <ol className="mt-12 divide-y-2 divide-ink border-y-2 border-ink">
                {PILLARS.map((p, k) => (
                  <Reveal
                    as="li"
                    key={p.n}
                    delay={k * 120}
                    className="grid grid-cols-[3.5rem_1fr] gap-4 py-6"
                  >
                    <span className="display text-3xl text-brand">{p.n}</span>
                    <div>
                      <h3 className="display text-3xl">{p.t}</h3>
                      <p className="mt-2 text-muted-foreground">{p.d}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
              <Reveal delay={300}>
                <p className="display mt-10 text-3xl md:text-4xl">
                  So you can focus on <span className="slime-mark">what you do best.</span>
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <ConversationVisual />
            </Reveal>
          </div>
        </section>

        {/* 4 · ABOUT / TEAM */}
        <section id="about" className="scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              title={
                <>
                  The people behind <span className="text-brand">Commitment.</span>
                </>
              }
              intro="Harvey and Artemis founded Commitment to bring exceptional, AI-powered customer service within reach of every ambitious business."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {TEAM.map((m, k) => (
                <Reveal
                  key={m.name}
                  delay={k * 100}
                  className="lift flex flex-col gap-8 rounded-[2rem] border-2 border-ink bg-background p-8 sm:flex-row sm:items-start md:p-10"
                >
                  <img
                    src={m.photo}
                    alt={`Portrait of ${m.name}`}
                    width={176}
                    height={176}
                    className="size-36 shrink-0 self-center rounded-2xl border-2 border-ink bg-surface object-cover sm:self-start lg:size-44"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="display text-4xl">{m.name}</h3>
                    <p className="display mt-1 text-lg text-brand">{m.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-brand"
                    >
                      <Linkedin className="size-4" /> Connect on LinkedIn
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · HOW WE DO IT */}
        <section id="how-it-works" className="scroll-mt-20 bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              title={
                <>
                  How we <span className="text-brand">do it.</span>
                </>
              }
              intro="We combine business strategy, customer understanding and technical expertise to build agents that actually work."
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {METHOD.map((m, k) => (
                <MethodCard key={m.stage} m={m} k={k} />
              ))}
            </div>
          </div>
        </section>

        {/* 6 · THE COMMITMENT VALUE */}
        <section id="value" className="scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              title={
                <>
                  Your CRM's AI agent. <span className="text-brand">Or Commitment.</span>
                </>
              }
              intro="Powerful AI is only part of the equation. We bring the strategy, implementation and ongoing support needed to make it work for your business."
            />
            <Reveal className="mt-14">
              <table className="w-full border-separate border-spacing-0 text-left">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="pb-4 align-bottom text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      Capability
                    </th>
                    <th
                      scope="col"
                      className="w-24 min-w-24 px-2 pb-4 text-center align-bottom md:w-48 md:min-w-48 md:px-4"
                    >
                      <span className="display block text-sm md:text-xl">
                        Your CRM's own AI agent
                      </span>
                      <span className="mt-1 block text-[11px] font-medium text-muted-foreground md:text-xs">
                        Software alone
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="w-24 min-w-24 rounded-t-2xl border-x-2 border-t-2 border-ink bg-paper px-2 pb-4 pt-5 text-center align-bottom md:w-48 md:min-w-48 md:px-4"
                    >
                      <Mascot className="mx-auto mb-2 h-8 w-auto md:h-10" />
                      <span className="display block text-sm md:text-xl">Commitment</span>
                      <span className="mt-1 block text-[11px] font-medium text-muted-foreground md:text-xs">
                        Managed service
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {VALUE.map((v, k) => {
                    const last = k === VALUE.length - 1;
                    return (
                      <tr key={v.t}>
                        <th
                          scope="row"
                          className="border-t border-border py-4 pr-3 text-sm font-medium md:py-5 md:text-lg"
                        >
                          {v.t}
                        </th>
                        <td className="border-t border-border px-2 py-4 text-center md:py-5">
                          {v.crm ? <Tick /> : <Dash />}
                        </td>
                        <td
                          className={cn(
                            "border-x-2 border-t border-x-ink border-t-border bg-paper px-2 py-4 text-center md:py-5",
                            last && "rounded-b-2xl border-b-2 border-b-ink",
                          )}
                        >
                          <Tick />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                Native CRM capabilities vary by provider and plan. Comparison illustrates the
                additional implementation and optimisation services offered by Commitment.
              </p>
            </Reveal>
            <Reveal
              delay={150}
              className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            >
              <p className="display max-w-3xl text-4xl leading-tight md:text-5xl">
                We don't just give you an agent.{" "}
                <span className="text-brand">We make sure it works.</span>
              </p>
              <BookingLink
                className={buttonVariants({
                  variant: "pill",
                  size: "xl",
                  className: "shrink-0 self-start md:self-auto",
                })}
              >
                Let's build your agent ↗
              </BookingLink>
            </Reveal>
          </div>
        </section>

        {/* 7 · WHO WE HELP */}
        <section id="who-we-help" className="scroll-mt-20 bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              title={
                <>
                  Built for <span className="text-brand">ambitious</span> businesses.
                </>
              }
            />
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {INDUSTRIES.map((s, k) => (
                <Reveal
                  key={s.t}
                  delay={k * 80}
                  className="lift flex h-full flex-col rounded-3xl border-2 border-ink bg-background p-6 md:p-8"
                >
                  <div className="relative flex h-40 items-center justify-center rounded-2xl bg-surface">
                    <span className="display absolute left-4 top-4 text-xl text-brand">{s.n}</span>
                    <Icon src={s.i} className="size-28" />
                  </div>
                  <h3 className="display mt-6 text-3xl">{s.t}</h3>
                  <p className="mt-3 text-muted-foreground">{s.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 9 · CTA */}
        <section className="bg-brand py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="relative max-w-3xl">
              <Reveal>
                <h2 className="display text-6xl text-brand-foreground md:text-7xl xl:text-8xl">
                  Better customer service starts here.
                </h2>
                <p className="mt-6 max-w-xl text-xl text-brand-foreground">
                  Discover how a bespoke AI agent could transform the way your business supports its
                  customers.
                </p>
                <BookingLink
                  className={buttonVariants({
                    variant: "pill",
                    size: "xl",
                    className: "mt-10 hover:bg-ink hover:shadow-pop",
                  })}
                >
                  Book a free consultation ↗
                </BookingLink>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
