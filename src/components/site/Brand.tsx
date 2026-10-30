import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import mascot from "@/assets/mascot.png";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/lib/site-config";

export function Mascot({ className, idle = false }: { className?: string; idle?: boolean }) {
  return (
    <img
      src={mascot}
      alt=""
      aria-hidden="true"
      className={cn("select-none", idle && "mascot-idle", className)}
      draggable={false}
    />
  );
}

export function Logo({ className, size = "md" }: { className?: string; size?: "md" | "lg" }) {
  return (
    <Link to="/" className={cn("inline-flex items-center gap-2", className)} aria-label="Commitment home">
      <Mascot className={size === "lg" ? "h-14 w-auto" : "h-10 w-auto"} />
      <span className={cn("display lowercase text-ink", size === "lg" ? "text-4xl" : "text-2xl")}>
        commitment
      </span>
    </Link>
  );
}

export function Icon({ src, className, alt = "" }: { src: string; className?: string; alt?: string }) {
  return <img src={src} alt={alt} aria-hidden={alt ? undefined : true} className={cn("mix-blend-multiply object-contain", className)} loading="lazy" />;
}

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "section" | "li" }) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as never}
      data-shown={shown}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function BookingLink({ children, className }: { children: ReactNode; className?: string }) {
  if (BOOKING_URL.startsWith("/")) {
    return (
      <Link to="/contact" className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={BOOKING_URL} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export function SectionHeading({ eyebrow, title, intro, className }: { eyebrow?: string; title: ReactNode; intro?: string; className?: string }) {
  return (
    <Reveal className={cn("max-w-4xl", className)}>
      {eyebrow && (
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-ink px-3 py-1 text-xs font-semibold uppercase tracking-widest">
          <span className="size-2 rounded-full bg-slime ring-1 ring-ink" /> {eyebrow}
        </p>
      )}
      <h2 className="display text-5xl text-ink md:text-7xl">{title}</h2>
      {intro && <p className="mt-6 max-w-xl text-lg text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}
