import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import ProjectList from "@/components/project-list";
import Reveal from "@/components/reveal";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-24 md:py-36">
      <div className="grid grid-cols-12 gap-12 items-end">
        <div className="col-span-12 md:col-span-3">
          <Reveal as="span" className="text-[1.5rem] font-[var(--font-dm-sans)] text-muted-foreground">
            01
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-9">
          <Reveal as="h1" className="text-[clamp(3rem,6vw,5rem)]">
            Our work
          </Reveal>
          <Reveal as="p" className="mt-6 text-lg text-muted-foreground max-w-xl">
            47 projects across six countries. Every one of them started with a
            simple question: what would this place feel like?
          </Reveal>
        </div>
      </div>

      <div className="mt-24">
        <ProjectList />
      </div>

      <div className="mt-24 text-center">
        <Reveal as="p" className="text-lg text-muted-foreground">
          Still looking? We&rsquo;re working on more projects.
        </Reveal>
      </div>
    </div>
  );
}
