import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-24 md:py-36">
      <div className="text-center">
        <h1 className="text-[clamp(3rem,6vw,5rem)] font-[var(--font-playfair)] text-foreground">
          404
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          This page doesn&rsquo;t exist, or has moved on.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-[1rem] text-foreground hover:text-foreground/80 transition-colors"
        >
          <ArrowLeft className="size-4" /> Back to home
        </Link>
      </div>
    </div>
  );
}
