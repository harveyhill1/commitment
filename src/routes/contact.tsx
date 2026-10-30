import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Mascot, Reveal } from "@/components/site/Brand";
import { Footer, Nav } from "@/components/site/Chrome";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Commitment — Book a free AI consultation" },
      { name: "description", content: "Tell us which process you'd like to improve and we'll show you what AI could do for your business." },
      { property: "og:title", content: "Contact Commitment" },
      { property: "og:description", content: "Book a free consultation with Commitment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const INDUSTRIES = ["Estate agency", "E-commerce", "Professional services", "Other SME"];
const PROCESSES = ["Customer enquiries", "Lead follow-up", "Data entry & documents", "Internal operations", "Not sure yet"];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid work email").max(255),
  company: z.string().trim().min(1, "Please enter your company").max(120),
  industry: z.string().min(1, "Please choose an industry"),
  process: z.string().min(1, "Please choose a process"),
  message: z.string().trim().max(1000, "Please keep it under 1,000 characters").optional(),
});
type Values = z.infer<typeof schema>;

const field = "w-full rounded-xl border-2 border-ink bg-background px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15";

function Contact() {
  const [sent, setSent] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (v: Values) => {
    await new Promise((r) => setTimeout(r, 500));
    setSent(v.name.split(" ")[0] ?? v.name);
  };

  const Err = ({ k }: { k: keyof Values }) =>
    errors[k] ? <p className="mt-1.5 text-sm font-medium text-brand" role="alert">{errors[k]?.message}</p> : null;

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <h1 className="display text-6xl md:text-8xl">
            Let's <span className="text-brand">talk.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Tell us what's slowing your team down. We'll come back with practical ideas — no jargon, no obligation.
          </p>
          <p className="mt-8 text-sm">
            Prefer email? <a className="font-bold underline decoration-brand decoration-2 underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          {!BOOKING_URL.startsWith("/") && (
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="mt-4 inline-block font-bold text-brand">Or book a call directly ↗</a>
          )}
          <Mascot idle className="mt-12 hidden h-56 w-auto lg:block" />
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="rounded-[2rem] border-2 border-ink bg-slime p-10 shadow-pop" role="status">
              <Mascot className="h-24 w-auto" />
              <h2 className="display mt-6 text-5xl">Thanks, {sent}!</h2>
              <p className="mt-3 text-lg">We've got your message and will be in touch within one working day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-[2rem] border-2 border-ink p-6 md:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-bold">Name</label>
                  <input id="name" autoComplete="name" className={cn(field, errors.name && "border-brand")} aria-invalid={!!errors.name} {...register("name")} />
                  <Err k="name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-bold">Work email</label>
                  <input id="email" type="email" autoComplete="email" className={cn(field, errors.email && "border-brand")} aria-invalid={!!errors.email} {...register("email")} />
                  <Err k="email" />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-bold">Company</label>
                <input id="company" autoComplete="organization" className={cn(field, errors.company && "border-brand")} aria-invalid={!!errors.company} {...register("company")} />
                <Err k="company" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="industry" className="mb-1.5 block text-sm font-bold">Industry</label>
                  <select id="industry" defaultValue="" className={cn(field, errors.industry && "border-brand")} aria-invalid={!!errors.industry} {...register("industry")}>
                    <option value="" disabled>Choose…</option>
                    {INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
                  </select>
                  <Err k="industry" />
                </div>
                <div>
                  <label htmlFor="process" className="mb-1.5 block text-sm font-bold">What process would you like to improve?</label>
                  <select id="process" defaultValue="" className={cn(field, errors.process && "border-brand")} aria-invalid={!!errors.process} {...register("process")}>
                    <option value="" disabled>Choose…</option>
                    {PROCESSES.map((i) => <option key={i}>{i}</option>)}
                  </select>
                  <Err k="process" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-bold">Message <span className="font-normal text-muted-foreground">(optional)</span></label>
                <textarea id="message" rows={4} className={field} {...register("message")} />
                <Err k="message" />
              </div>
              <Button type="submit" variant="pill" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? "Sending…" : "Send enquiry ↗"}
              </Button>
            </form>
          )}
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
