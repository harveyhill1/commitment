import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BookingLink, Logo } from "./Brand";
import { CONTACT_EMAIL, SITE_DOMAIN } from "@/lib/site-config";

const NAV = [
  { label: "What we do", hash: "what-we-do" },
  { label: "Team", hash: "team" },
  { label: "How it works", hash: "how-it-works" },
  { label: "Solutions", hash: "solutions" },
  { label: "About", hash: "about" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.hash} to="/" hash={n.hash} className="text-sm font-medium text-ink/80 transition-colors hover:text-brand">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="text-sm font-medium text-ink/80 transition-colors hover:text-brand">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <BookingLink className={buttonVariants({ variant: "pill", size: "pill", className: "hidden sm:inline-flex" })}>
            Let's talk ↗
          </BookingLink>
          <button
            className="inline-flex size-11 items-center justify-center rounded-full border-2 border-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.hash} to="/" hash={n.hash} onClick={() => setOpen(false)} className="display block py-3 text-3xl">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="display block py-3 text-3xl text-brand">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <Logo size="lg" />
          <p className="display mt-5 text-2xl">
            Less admin. <span className="text-brand">More growth.</span>
          </p>
        </div>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" hash="solutions" className="hover:text-brand">Solutions</Link></li>
          <li><Link to="/" hash="how-it-works" className="hover:text-brand">How it works</Link></li>
          <li><Link to="/" hash="team" className="hover:text-brand">Team</Link></li>
          <li><Link to="/" hash="about" className="hover:text-brand">About</Link></li>
          <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
          <li><Link to="/privacy" className="hover:text-brand">Privacy</Link></li>
        </ul>
        <div className="space-y-2 text-sm">
          <a href={`mailto:${CONTACT_EMAIL}`} className="block font-semibold hover:text-brand">{CONTACT_EMAIL}</a>
          <p className="text-muted-foreground">{SITE_DOMAIN}</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-8 text-xs text-muted-foreground md:px-8">
        © {new Date().getFullYear()} Commitment. Made with heart.
      </div>
    </footer>
  );
}
