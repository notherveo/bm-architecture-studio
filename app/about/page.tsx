import ParallaxImage from "@/components/parallax-image";
import Reveal from "@/components/reveal";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* 01 — Intro */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-24 md:py-36">
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
      </section>

      {/* Full-bleed image */}
      <section className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden">
        <ParallaxImage
          src="https://picsum.photos/seed/meridian-facade/2400/1600"
          alt="A concrete and glass facade catching low afternoon light"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      {/* 02 — Philosophy */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-24 md:py-36">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-4">
            <Reveal as="span" className="text-[1.5rem] font-[var(--font-dm-sans)] text-muted-foreground">
              02
            </Reveal>
            <Reveal as="div" className="mt-10 hidden overflow-hidden rounded-xl md:block">
              <ParallaxImage
                src="https://picsum.photos/seed/meridian-light/1200/1600"
                alt="Sunlight moving slowly across a plaster wall in a quiet room"
                loading="lazy"
                className="w-full h-full object-cover"
              />
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
            <Reveal as="div" className="mt-12 overflow-hidden rounded-xl">
              <ParallaxImage
                src="https://picsum.photos/seed/meridian-detail/1600/1000"
                alt="A close detail of a timber stair, handrail and shadow"
                loading="lazy"
                className="w-full h-[360px] object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 — Recognition */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-24 md:py-36">
        <div className="grid grid-cols-12 gap-12">
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
            <div className="mt-12 grid grid-cols-2 gap-4">
              {[
                {
                  src: "https://picsum.photos/seed/meridian-award-1/1200/900",
                  alt: "A published residential project photographed at dusk",
                },
                {
                  src: "https://picsum.photos/seed/meridian-award-2/1200/900",
                  alt: "An award-winning public interior with a clerestory window",
                },
              ].map((image) => (
                <Reveal key={image.src} as="div" className="overflow-hidden rounded-xl">
                  <ParallaxImage
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-52 sm:h-64 object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Team */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-24 md:py-36">
        <div className="grid grid-cols-12 gap-12">
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
      </section>

      {/* Full-bleed team image */}
      <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
        <ParallaxImage
          src="https://picsum.photos/seed/meridian-model/2400/1400"
          alt="A physical study model on the studio's worktable"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>
    </div>
  );
}
