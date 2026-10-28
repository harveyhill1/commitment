import { createFileRoute } from "@tanstack/react-router";
import { Footer, Nav } from "@/components/site/Chrome";
import { CONTACT_EMAIL } from "@/lib/site-config";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Commitment" },
      { name: "description", content: "How Commitment handles the information you share with us." },
      { property: "og:title", content: "Privacy — Commitment" },
      { property: "og:description", content: "How Commitment handles your information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto max-w-3xl px-5 py-20 md:px-8">
        <h1 className="display text-6xl">Privacy</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          We only use the details you share with us to respond to your enquiry. We never sell your data. Our full privacy policy is coming soon — in the meantime, email{" "}
          <a className="font-bold text-ink underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with any questions.
        </p>
      </main>
      <Footer />
    </div>
  );
}
