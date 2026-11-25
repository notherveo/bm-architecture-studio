import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <Link href="/" className="text-[1.5rem] font-[var(--font-playfair)] text-foreground">
          STUDIO MERIDIAN
        </Link>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <span>•</span>
          <Link href="/projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-8 text-sm text-muted-foreground">
        © 2026 STUDIO MERIDIAN. All rights reserved.
      </div>
    </footer>
  );
}
