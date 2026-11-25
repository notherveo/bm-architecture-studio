"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import ParallaxImage from "@/components/parallax-image";
import Reveal from "@/components/reveal";

const projects = [
  {
    slug: "riverhouse",
    title: "Riverhouse",
    location: "Kew, London",
    year: "2023",
    programme: "Private residence",
    image: "https://picsum.photos/seed/project1/1600/1000",
    alt: "A riverside house with large windows and a sculptural staircase",
  },
  {
    slug: "apex",
    title: "Apex Tower",
    location: "Oslo, Norway",
    year: "2024",
    programme: "Commercial office",
    image: "https://picsum.photos/seed/project2/1600/1000",
    alt: "A modern office tower with a distinctive angular facade",
  },
  {
    slug: "lighthouse",
    title: "Lighthouse",
    location: "Portland, Oregon",
    year: "2022",
    programme: "Restaurant",
    image: "https://picsum.photos/seed/project3/1600/1000",
    alt: "A restaurant with a dramatic interior lit by natural light",
  },
  {
    slug: "harbor",
    title: "Harbor House",
    location: "Bergen, Norway",
    year: "2023",
    programme: "Mixed-use",
    image: "https://picsum.photos/seed/project4/1600/1000",
    alt: "A mixed-use building with a distinctive curved facade",
  },
  {
    slug: "ocean",
    title: "Ocean Pavilion",
    location: "Santorini, Greece",
    year: "2024",
    programme: "Hotel",
    image: "https://picsum.photos/seed/project5/1600/1000",
    alt: "A seaside hotel with a distinctive white and blue color scheme",
  },
];

export default function ProjectList() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: containerRef });
  const image = useTransform(scrollY, [0, 1000], [0, 30]);
  const imageReveal = useTransform(scrollY, [0, 1000], [0, 1]);
  const imageInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="space-y-24">
      {projects.map((project, i) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-12 items-center"
        >
          <div className="col-span-12 sm:col-span-7 lg:col-span-5">
            <ParallaxImage
              src={project.image}
              alt={project.alt}
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-xl"
              style={{ "--parallax-y": image } as React.CSSProperties}
            />
            <motion.div
              style={{ clipPath: `inset(0 0 100% 0 calc(${imageReveal} * 100%))` }}
              className="absolute inset-0 pointer-events-none"
            />
          </div>
          <div className="col-span-12 sm:col-span-5 lg:col-span-7">
            <Reveal as="span" className="text-[1.5rem] font-[var(--font-dm-sans)] text-muted-foreground">
              {i + 1}
            </Reveal>
            <Reveal as="h2" className="mt-3 text-[clamp(2rem,4vw,3rem)]">
              {project.title}
            </Reveal>
            <Reveal as="p" className="mt-2 text-base text-muted-foreground">
              {project.location} &bull; {project.year} &bull; {project.programme}
            </Reveal>
            <Reveal as="Link" href={`/projects/${project.slug}`} className="mt-8 inline-flex items-center gap-2 text-[1rem] text-foreground hover:text-foreground/80 transition-colors">
              Explore project
              <ArrowRight className="size-4" />
            </Reveal>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
