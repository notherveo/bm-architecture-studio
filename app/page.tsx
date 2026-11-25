"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import ParallaxImage from "@/components/parallax-image";
import Reveal from "@/components/reveal";
import ProjectList from "@/components/project-list";

export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: containerRef });
  const heroImage = useTransform(scrollY, [0, 1000], [0, 30]);
  const heroImageReveal = useTransform(scrollY, [0, 1000], [0, 1]);
  const heroText = useTransform(scrollY, [0, 1000], [0, 100]);
  const heroTextReveal = useTransform(scrollY, [0, 1000], [0, 1]);
  const heroImageInView = useInView(containerRef, { once: true, margin: "-100px" });
  const heroTextInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Hero */ }
      <section className="relative h-screen w-full overflow-hidden">
        <ParallaxImage
          src="https://picsum.photos/seed/hero/2400/1600"
          alt="A sunlit interior with a sculptural staircase"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ "--parallax-y": heroImage } as React.CSSProperties}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Reveal as="h2" className="text-[11rem] sm:text-[14rem] leading-none font-[var(--font-playfair)] text-foreground opacity-0">
              STUDIO
            </Reveal>
            <Reveal as="h1" className="text-[11rem] sm:text-[14rem] leading-none font-[var(--font-playfair)] text-foreground opacity-0">
              MERIDIAN
            </Reveal>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-[1.125rem] text-muted-foreground"
          >
            A small architecture studio. A different way of making space.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[1rem] text-foreground hover:text-foreground/80 transition-colors"
            >
              Explore our work
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          style={{ clipPath: `inset(0 0 100% 0 calc(${heroImageReveal} * 100%))` }}
          className="absolute inset-0 pointer-events-none"
        />
      </section>

      {/* Intro */ }
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12 items-end">
          <div className="col-span-12 md:col-span-3">
            <Reveal as="span" className="text-[1.5rem] font-[var(--font-dm-sans)] text-muted-foreground">
              01
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal as="h2" className="text-[clamp(3rem,6vw,6rem)] leading-tight">
              We make space for what matters.
            </Reveal>
            <Reveal as="p" className="mt-6 text-lg text-muted-foreground max-w-2xl">
              We design buildings and interiors that feel different — quiet,
              confident, and made for the people who live in them. Our work
              spans residential, hospitality, and commercial projects across
              several countries.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured projects */ }
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <Reveal as="div" className="flex items-end justify-between mb-16">
          <div>
            <Reveal as="span" className="text-[1.5rem] font-[var(--font-dm-sans)] text-muted-foreground">
              02
            </Reveal>
            <Reveal as="h2" className="mt-3 text-[clamp(2.5rem,5vw,4rem)]">
              Selected projects
            </Reveal>
          </div>
          <Reveal as="Link" href="/projects" className="text-[1rem] underline underline-offset-4 hover:text-foreground">
            See all
          </Reveal>
        </Reveal>
        <ProjectList />
      </section>

      {/* Quote */ }
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <Reveal as="blockquote" className="text-[clamp(2rem,4vw,3.5rem)] leading-tight font-[var(--font-playfair)] text-foreground text-center">
          &ldquo;Good architecture is the one you stop noticing. It simply makes you feel at home.&rdquo;
        </Reveal>
      </section>

      {/* Press */ }
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <Reveal as="div" className="flex items-end justify-between mb-16">
          <div>
            <Reveal as="span" className="text-[1.5rem] font-[var(--font-dm-sans)] text-muted-foreground">
              03
            </Reveal>
            <Reveal as="h2" className="mt-3 text-[clamp(2.5rem,5vw,4rem)]">
              In the press
            </Reveal>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "ArchDaily", date: "October 2024" },
            { name: "Dezeen", date: "September 2024" },
            { name: "Architectural Review", date: "August 2024" },
          ].map((item) => (
            <Reveal key={item.name} as="div" className="p-6 border border-border rounded-xl">
              <Reveal as="p" className="text-[1.5rem] font-[var(--font-playfair)] text-foreground">
                {item.name}
              </Reveal>
              <Reveal as="p" className="mt-2 text-sm text-muted-foreground">
                {item.date}
              </Reveal>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */ }
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <Reveal as="div" className="text-center">
          <Reveal as="h2" className="text-[clamp(2.5rem,5vw,4rem)]">
            Let&rsquo;s talk about your project.
          </Reveal>
          <Reveal as="p" className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Whether you&rsquo;re planning a home, a restaurant, or a workspace,
            we&rsquo;d love to hear about it.
          </Reveal>
          <Reveal as="Link" href="/contact" className="mt-10 inline-flex items-center gap-2 text-[1rem] text-foreground underline underline-offset-4 hover:text-foreground/80">
            Get in touch
            <ArrowRight className="size-4" />
          </Reveal>
        </Reveal>
      </section>
    </div>
  );
}
