import { motion } from "motion/react";
import Reveal from "@/components/reveal";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-24 md:py-36">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <Reveal as="span" className="text-[1.5rem] font-[var(--font-dm-sans)] text-muted-foreground">
            01
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Reveal as="h1" className="text-[clamp(3rem,6vw,5rem)]">
            A different way of making space.
          </Reveal>
          <Reveal as="p" className="mt-6 text-lg text-muted-foreground">
            STUDIO MERIDIAN was founded in 2018 by three architects who were
            tired of buildings that looked good on paper but felt ordinary in
            person. We&rsquo;ve since designed 47 projects across six
            countries, and every one of them started with a simple question: what
            would this place feel like?
          </Reveal>
          <Reveal as="p" className="mt-6 text-lg text-muted-foreground">
            We work with clients who value quality over speed, and who believe
            that a building should be an extension of the life it holds. Our
            approach is deliberate: we spend more time listening than designing,
            and we&rsquo;re happy to walk away from a project that doesn&rsquo;t
            feel right.
          </Reveal>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <Reveal as="span" className="text-[1.5rem] font-[var(--font-dm-sans)] text-muted-foreground">
            02
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Reveal as="h2" className="text-[clamp(2.5rem,5vw,4rem)]">
            Our philosophy
          </Reveal>
          <Reveal as="p" className="mt-6 text-lg text-muted-foreground">
            We believe that good architecture is quiet architecture. It doesn&rsquo;t
            shout for attention — it simply makes the people in it feel better.
            That&rsquo;s why we focus on three things:
          </Reveal>
          <Reveal as="ul" className="mt-8 space-y-4">
            {[
              { text: "Light, treated as a material." },
              { text: "Proportion, more important than ornament." },
              { text: "The everyday rituals of the people who live here." },
            ].map((item, i) => (
              <Reveal key={item.text} as="li" className="flex items-start gap-3" initialDelay={i * 100}>
                <span className="mt-1.5 size-2 rounded-full bg-primary" />
                <span className="text-base">{item.text}</span>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <Reveal as="span" className="text-[1.5rem] font-[var(--font-dm-sans)] text-muted-foreground">
            03
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Reveal as="h2" className="text-[clamp(2.5rem,5vw,4rem)]">
            Recognition
          </Reveal>
          <Reveal as="p" className="mt-6 text-lg text-muted-foreground">
            Our work has been featured in ArchDaily, Dezeen, and Architectural
            Review. We&rsquo;ve received the Good Design Award twice, and were
            shortlisted for the International Architecture Prize in 2023. But the
            best recognition comes from the people who live in our buildings.
          </Reveal>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <Reveal as="span" className="text-[1.5rem] font-[var(--font-dm-sans)] text-muted-foreground">
            04
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Reveal as="h2" className="text-[clamp(2.5rem,5vw,4rem)]">
            The team
          </Reveal>
          <Reveal as="p" className="mt-6 text-lg text-muted-foreground">
            We&rsquo;re a small team of about 15 people — architects, designers,
            engineers, and the occasional photographer. Everyone wears many
            hats, and everyone is happy to argue about the perfect door handle.
          </Reveal>
        </div>
      </div>
    </div>
  );
}
