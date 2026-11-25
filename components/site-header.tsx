import Link from "next/link";
import { motion } from "motion/react";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 backdrop-blur-md bg-background/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-[1.5rem] font-[var(--font-playfair)] text-foreground">
          STUDIO MERIDIAN
        </Link>
        <nav className="hidden sm:flex items-center gap-8">
          {["About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[0.9375rem] text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
