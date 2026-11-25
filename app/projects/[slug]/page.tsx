import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/reveal";
import ParallaxImage from "@/components/parallax-image";

const projects = [
  {
    slug: "riverhouse",
    title: "Riverhouse",
    location: "Kew, London",
    year: "2023",
    programme: "Private residence",
    area: "2,800 sq ft",
    image: "https://picsum.photos/seed/project1/1600/1000",
    alt: "A riverside house with large windows and a sculptural staircase",
    description:
      "Riverhouse is a private residence perched on the banks of the Thames. The brief was simple: create a home that feels connected to the river without being dominated by it. The result is a house that opens onto the water through a series of progressively larger windows, culminating in a full-height opening that frames the river as a living painting.",
    facts: [
      { label: "Location", value: "Kew, London" },
      { label: "Year", value: "2023" },
      { label: "Programme", value: "Private residence" },
      { label: "Area", value: "2,800 sq ft" },
    ],
    images: [
      "https://picsum.photos/seed/project1-2/1200/800",
      "https://picsum.photos/seed/project1-3/1200/800",
      "https://picsum.photos/seed/project1-4/1200/800",
    ],
  },
  {
    slug: "apex",
    title: "Apex Tower",
    location: "Oslo, Norway",
    year: "2024",
    programme: "Commercial office",
    area: "120,000 sq ft",
    image: "https://picsum.photos/seed/project2/1600/1000",
    alt: "A modern office tower with a distinctive angular facade",
    description:
      "Apex Tower reimagines the traditional office building as a public plaza. The ground floor is entirely open to the street, with a café, gallery, and event space that spill out onto a widened pavement. Above, the office floors are organized around a central atrium that brings natural light to every workspace.",
    facts: [
      { label: "Location", value: "Oslo, Norway" },
      { label: "Year", value: "2024" },
      { label: "Programme", value: "Commercial office" },
      { label: "Area", value: "120,000 sq ft" },
    ],
    images: [
      "https://picsum.photos/seed/project2-2/1200/800",
      "https://picsum.photos/seed/project2-3/1200/800",
      "https://picsum.photos/seed/project2-4/1200/800",
    ],
  },
  {
    slug: "lighthouse",
    title: "Lighthouse",
    location: "Portland, Oregon",
    year: "2022",
    programme: "Restaurant",
    area: "4,500 sq ft",
    image: "https://picsum.photos/seed/project3/1600/1000",
    alt: "A restaurant with a dramatic interior lit by natural light",
    description:
      "Lighthouse brings the ocean inside. The restaurant's interior is dominated by a dramatic ceiling of exposed timber beams, lit from above by a series of skylights that change throughout the day. The dining room opens onto a private terrace that overlooks the harbor.",
    facts: [
      { label: "Location", value: "Portland, Oregon" },
      { label: "Year", value: "2022" },
      { label: "Programme", value: "Restaurant" },
      { label: "Area", value: "4,500 sq ft" },
    ],
    images: [
      "https://picsum.photos/seed/project3-2/1200/800",
      "https://picsum.photos/seed/project3-3/1200/800",
      "https://picsum.photos/seed/project3-4/1200/800",
    ],
  },
  {
    slug: "harbor",
    title: "Harbor House",
    location: "Bergen, Norway",
    year: "2023",
    programme: "Mixed-use",
    area: "6,200 sq ft",
    image: "https://picsum.photos/seed/project4/1600/1000",
    alt: "A mixed-use building with a distinctive curved facade",
    description:
      "Harbor House is a mixed-use development that reimagines the waterfront as a public space. The ground floor houses a public library and café, while the upper floors are residential apartments that open onto a private terrace overlooking the harbor.",
    facts: [
      { label: "Location", value: "Bergen, Norway" },
      { label: "Year", value: "2023" },
      { label: "Programme", value: "Mixed-use" },
      { label: "Area", value: "6,200 sq ft" },
    ],
    images: [
      "https://picsum.photos/seed/project4-2/1200/800",
      "https://picsum.photos/seed/project4-3/1200/800",
      "https://picsum.photos/seed/project4-4/1200/800",
    ],
  },
  {
    slug: "ocean",
    title: "Ocean Pavilion",
    location: "Santorini, Greece",
    year: "2024",
    programme: "Hotel",
    area: "8,500 sq ft",
    image: "https://picsum.photos/seed/project5/1600/1000",
    alt: "A seaside hotel with a distinctive white and blue color scheme",
    description:
      "Ocean Pavilion is a small luxury hotel perched on the cliffs of Santorini. The architecture draws inspiration from the traditional Cycladic whitewashed houses, but with a contemporary twist: clean lines, large glass surfaces, and a palette of white and deep blue.",
    facts: [
      { label: "Location", value: "Santorini, Greece" },
      { label: "Year", value: "2024" },
      { label: "Programme", value: "Hotel" },
      { label: "Area", value: "8,500 sq ft" },
    ],
    images: [
      "https://picsum.photos/seed/project5-2/1200/800",
      "https://picsum.photos/seed/project5-3/1200/800",
      "https://picsum.photos/seed/project5-4/1200/800",
    ],
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-24 md:py-36">
      <div className="grid grid-cols-12 gap-12 items-end">
        <div className="col-span-12 md:col-span-3">
          <Reveal as="span" className="text-[1.5rem] font-[var(--font-dm-sans)] text-muted-foreground">
            01
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-9">
          <Reveal as="Link" href="/projects" className="inline-flex items-center gap-2 text-[1rem] text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="size-4" /> Back to projects
          </Reveal>
          <Reveal as="h1" className="text-[clamp(3rem,6vw,5rem)] mt-4">
            {project.title}
          </Reveal>
          <Reveal as="p" className="mt-4 text-lg text-muted-foreground">
            {project.location} &bull; {project.year} &bull; {project.programme}
          </Reveal>
        </div>
      </div>

      <div className="mt-16">
        <ParallaxImage
          src={project.image}
          alt={project.alt}
          className="w-full h-[60vh] object-cover rounded-xl"
        />
      </div>

      <div className="mt-16 grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <Reveal as="div" className="space-y-6">
            {project.facts.map((fact) => (
              <Reveal key={fact.label} as="div" className="border-b border-border pb-4 last:border-0 last:pb-0">
                <Reveal as="p" className="text-sm font-[var(--font-dm-sans)] text-muted-foreground">
                  {fact.label}
                </Reveal>
                <Reveal as="p" className="mt-1 text-base font-[var(--font-playfair)] text-foreground">
                  {fact.value}
                </Reveal>
              </Reveal>
            ))}
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Reveal as="div" className="space-y-6">
            <Reveal as="h2" className="text-[clamp(1.5rem,3vw,2rem)]">
              The brief
            </Reveal>
            <Reveal as="p" className="text-lg text-muted-foreground">
              {project.description}
            </Reveal>
          </Reveal>
        </div>
      </div>

      <div className="mt-24">
        <Reveal as="h2" className="text-[clamp(1.5rem,3vw,2rem)]">
          Gallery
        </Reveal>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((image) => (
            <Reveal key={image} as="div" className="overflow-hidden rounded-xl">
              <ParallaxImage
                src={image}
                alt={`${project.title} detail`}
                className="w-full h-64 object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
