import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BookingLink, Icon, Mascot, Reveal, SectionHeading } from "@/components/site/Brand";
import { Footer, Nav } from "@/components/site/Chrome";
import { InboxMockup } from "@/components/site/InboxMockup";
import { WorkflowDemo } from "@/components/site/WorkflowDemo";

import clock from "@/assets/icons/clock.png";
import phone from "@/assets/icons/phone.png";
import hierarchy from "@/assets/icons/hierarchy.png";
import chat from "@/assets/icons/chat.png";
import gears from "@/assets/icons/gears.png";
import target from "@/assets/icons/target.png";
import bulb from "@/assets/icons/bulb.png";
import search from "@/assets/icons/search.png";
import flow from "@/assets/icons/flow.png";
import laptop from "@/assets/icons/laptop.png";
import growth from "@/assets/icons/growth.png";
import calendar from "@/assets/icons/calendar.png";
import cash from "@/assets/icons/cash.png";
import contract from "@/assets/icons/contract.png";
import team from "@/assets/icons/team.png";
import heart from "@/assets/icons/heart.png";
import checklist from "@/assets/icons/checklist.png";
import moneybag from "@/assets/icons/moneybag.png";
import sync from "@/assets/icons/sync.png";
import harveyPhoto from "@/assets/harvey.png.asset.json";
import artemisPhoto from "@/assets/artemis.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Commitment — Practical AI & automation for growing businesses" },
      { name: "description", content: "Less admin. Smarter processes. More growth. Commitment helps SMEs automate repetitive work and improve customer experiences with practical AI." },
      { property: "og:title", content: "Commitment — Less admin. Smarter processes. More growth." },
      { property: "og:description", content: "Practical AI and automation for small and medium-sized businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const PROBLEMS = [
  { n: "01", t: "Repetitive admin", d: "Manual processes eat into valuable time.", i: clock },
  { n: "02", t: "Slow responses", d: "Missed messages become missed opportunities.", i: phone },
  { n: "03", t: "Disconnected systems", d: "Your tools don't always talk to each other.", i: hierarchy },
];

const SERVICES = [
  { t: "Customer service automation", d: "AI assistants that manage enquiries, prepare responses and support customers faster.", i: chat },
  { t: "Process automation", d: "Automate repetitive workflows, data entry, document processing and internal operations.", i: gears },
  { t: "Sales and lead automation", d: "Capture, qualify and follow up with leads while keeping CRM information organised.", i: target },
  { t: "AI strategy and implementation", d: "Identify high-impact AI opportunities and implement solutions that fit your business.", i: bulb },
];

const TEAM = [
  {
    name: "Harvey Hill",
    role: "CEO & Co-founder",
    photo: harveyPhoto.url,
    linkedin: "https://www.linkedin.com/in/harveyhill21",
    bio: "Bristol medical student and Imperial Business School graduate with a medical background, combining scientific thinking with commercial acumen. Experienced in optimising operations in VC-backed healthtech and leading digital transformation and AI implementation across organisations employing over 8,000 people. Expert in translating complex challenges into practical, scalable solutions.",
  },
  {
    name: "Artemis Webster",
    role: "CTO & Co-founder",
    photo: artemisPhoto.url,
    linkedin: "https://www.linkedin.com/in/artemis-webster/",
    bio: "Software engineer at Rolls-Royce with a background in computational chemistry and training at the Machine Learning Institute. Experienced in designing secure AI systems and building applications that improve productivity at FTSE 100 companies. Combines software engineering and machine learning expertise to turn complex business challenges into practical, intelligent solutions.",
  },
];

const STEPS = [
  { n: "01", t: "Discover", d: "We understand your business and identify opportunities for improvement.", i: search },
  { n: "02", t: "Design", d: "We develop a practical solution tailored to your workflows.", i: flow },
  { n: "03", t: "Build", d: "We implement and integrate the AI solution with your existing tools.", i: laptop },
  { n: "04", t: "Improve", d: "We monitor results, refine performance and help your business scale.", i: growth },
];

const INDUSTRIES = [
  { t: "Estate agents", d: "Viewing requests, valuations and tenant queries handled faster.", i: calendar, hash: "what-we-do" },
  { t: "E-commerce businesses", d: "Order queries, returns and customer support around the clock.", i: cash, hash: "what-we-do" },
  { t: "Professional services", d: "Client intake, documents and follow-ups without the paperwork.", i: contract, hash: "how-it-works" },
  { t: "Growing SMEs", d: "Connected systems and less admin as your team scales.", i: team, hash: "how-it-works" },
];

const WHY = [
  { t: "Practical solutions, not technology for technology's sake", i: checklist },
  { t: "Designed around your existing workflows", i: sync },
  { t: "Affordable, scalable implementation", i: moneybag },
  { t: "Human-centred automation", i: heart },
  { t: "Focused on measurable business outcomes", i: target },
];

function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} fill="none" aria-hidden="true">
      <path className="draw-arrow stroke-ink" d="M4 24c22-14 52-16 100-6" strokeWidth="4" strokeLinecap="round" />
      <path className="draw-arrow stroke-brand" d="M92 8l16 10-14 12" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* HERO */}
        <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 md:px-8 md:pt-20">
          <div className="grid gap-10">
            <Reveal>
              <h1 className="display text-[3.4rem] text-ink sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.25rem]">
                Less admin.
                <br />
                <span className="text-brand">Smarter processes.</span>
                <br />
                More <span className="slime-mark">growth.</span>
              </h1>
            </Reveal>
            <Reveal delay={150} className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-[500px] text-lg leading-relaxed text-muted-foreground">
                We help ambitious businesses automate repetitive work, improve customer experiences and unlock growth with practical AI solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                <BookingLink className={buttonVariants({ variant: "pill", size: "xl" })}>Book a free consultation ↗</BookingLink>
                <a href="#in-action" className={buttonVariants({ variant: "pillOutline", size: "xl" })}>See how it works</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={250} className="mt-16 md:mt-20">
            <InboxMockup />
          </Reveal>
        </section>

        {/* PROBLEM */}
        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="The problem"
              title={<>Your team has <span className="text-brand">better things</span> to do.</>}
              intro="Too much time is spent on repetitive tasks and avoidable admin. We help you get that time back."
            />
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {PROBLEMS.map((p, k) => (
                <Reveal key={p.n} delay={k * 100} className="lift rounded-3xl border-2 border-ink bg-background p-7">
                  <div className="flex items-start justify-between">
                    <span className="display text-2xl text-brand">{p.n}.</span>
                    <Icon src={p.i} className="size-24" />
                  </div>
                  <h3 className="display mt-6 text-3xl">{p.t}</h3>
                  <p className="mt-2 text-muted-foreground">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="what-we-do" className="scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading eyebrow="What we do" title={<>We make work <span className="text-brand">work better.</span></>} />
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {SERVICES.map((s, k) => (
                <Reveal key={s.t} delay={k * 80} className="lift group flex flex-col justify-between gap-10 rounded-[2rem] border-2 border-ink bg-background p-8 md:min-h-[340px] md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <Icon src={s.i} className="size-32 transition-transform duration-500 group-hover:-rotate-6 md:size-40" />
                    <ArrowUpRight className="size-8 text-ink transition-colors group-hover:text-brand" />
                  </div>
                  <div>
                    <h3 className="display text-4xl md:text-5xl">{s.t}</h3>
                    <p className="mt-3 max-w-md text-muted-foreground">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="Meet the team"
              title={<>The people behind <span className="text-brand">Commitment.</span></>}
              intro="Harvey and Artemis founded Commitment to make practical AI something every ambitious business can use."
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {TEAM.map((m, k) => (
                <Reveal key={m.name} delay={k * 100} className="lift flex flex-col gap-8 rounded-[2rem] border-2 border-ink bg-background p-8 sm:flex-row sm:items-start md:p-10">
                  <img src={m.photo} alt={m.name} className="size-44 shrink-0 rounded-full border-2 border-ink object-cover" loading="lazy" />
                  <div>
                    <h3 className="display text-4xl">{m.name}</h3>
                    <p className="display mt-1 text-lg text-brand">{m.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                    <a href={m.linkedin} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-brand">
                      <Linkedin className="size-4" /> Connect on LinkedIn
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading eyebrow="How it works" title={<>Simple to start. <span className="text-brand">Powerful in practice.</span></>} />
            <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-4">
              {STEPS.map((s, k) => (
                <Reveal as="li" key={s.n} delay={k * 150} className="relative">
                  <Icon src={s.i} className="size-24" />
                  <p className="display mt-5 text-lg text-brand">{s.n}</p>
                  <h3 className="display text-4xl">
                    <span className={k % 2 ? "slime-mark" : ""}>{s.t}</span>
                  </h3>
                  <p className="mt-3 max-w-[16rem] text-muted-foreground">{s.d}</p>
                  {k < STEPS.length - 1 && <Arrow className="absolute -right-6 top-8 hidden w-24 md:block" />}
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section id="solutions" className="scroll-mt-20 bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading eyebrow="Who we help" title={<>Built for <span className="text-brand">ambitious</span> businesses.</>} />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {INDUSTRIES.map((s, k) => (
                <Reveal key={s.t} delay={k * 80}>
                  <Link to="/" hash={s.hash} className="lift group flex h-full flex-col rounded-3xl border-2 border-ink bg-background p-6">
                    <div className="flex h-36 items-center justify-center rounded-2xl bg-surface">
                      <Icon src={s.i} className="size-28" />
                    </div>
                    <h3 className="display mt-6 text-2xl">{s.t}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.d}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold group-hover:text-brand">
                      See services <ArrowUpRight className="size-4" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* IN ACTION */}
        <section id="in-action" className="scroll-mt-20 bg-surface py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeading
              eyebrow="See Commitment in action"
              title={<>One less task. <span className="text-brand">A lot more time.</span></>}
              intro="Here's how a typical customer enquiry gets handled — before and after Commitment. Switch between the two to compare."
            />
            <Reveal className="mt-14">
              <WorkflowDemo />
            </Reveal>
          </div>
        </section>

        {/* WHY */}
        <section id="about" className="scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Why Commitment?"
                title={<>Less complexity. <span className="text-brand">More possibility.</span></>}
                intro="Powerful AI shouldn't be reserved for big companies with big budgets. We make it accessible, useful and genuinely helpful for smaller businesses — without the jargon."
              />
              <Reveal delay={200}>
                <Mascot idle className="mt-10 h-48 w-auto" />
              </Reveal>
            </div>
            <ul className="divide-y-2 divide-ink border-y-2 border-ink">
              {WHY.map((w, k) => (
                <Reveal as="li" key={w.t} delay={k * 80} className="flex items-center gap-5 py-5">
                  <Icon src={w.i} className="size-16 shrink-0" />
                  <span className="display text-2xl md:text-3xl">{w.t}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-brand py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="relative max-w-3xl">
              <Reveal>
                <h2 className="display text-6xl text-brand-foreground md:text-8xl xl:text-9xl">Ready to work smarter?</h2>
                <p className="mt-6 text-xl text-brand-foreground">Let's find out what AI could do for your business.</p>
                <BookingLink className={buttonVariants({ variant: "pill", size: "xl", className: "mt-10 hover:bg-ink hover:shadow-pop" })}>
                  Book a free consultation ↗
                </BookingLink>
              </Reveal>
            </div>
          </div>
          <Mascot idle className="pointer-events-none absolute -bottom-6 right-4 hidden h-[26rem] w-auto md:block lg:right-24" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
