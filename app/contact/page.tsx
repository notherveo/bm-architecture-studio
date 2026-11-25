import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";

export const metadata = { title: "Contact" };

export default function ContactPage() {
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
            Let&rsquo;s talk.
          </Reveal>
          <Reveal as="p" className="mt-6 text-lg text-muted-foreground max-w-xl">
            Whether you&rsquo;re planning a project or just curious about what
            we do, we&rsquo;d love to hear from you.
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
            Get in touch
          </Reveal>
          <Reveal as="p" className="mt-6 text-lg text-muted-foreground">
            Send us a message and we&rsquo;ll get back to you within 48 hours.
          </Reveal>
          <Reveal as="form" className="mt-12 space-y-6">
            <div>
              <Reveal as="label" className="block text-sm font-medium text-foreground">
                Name
              </Reveal>
              <Reveal as="input" type="text" className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <Reveal as="label" className="block text-sm font-medium text-foreground">
                Email
              </Reveal>
              <Reveal as="input" type="email" className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <Reveal as="label" className="block text-sm font-medium text-foreground">
                Project type
              </Reveal>
              <Reveal as="select" className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select a type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="hospitality">Hospitality</option>
                <option value="other">Other</option>
              </Reveal>
            </div>
            <div>
              <Reveal as="label" className="block text-sm font-medium text-foreground">
                Message
              </Reveal>
              <Reveal as="textarea" rows={6} className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <Reveal as="button" type="submit" className="w-full rounded-lg bg-primary text-white px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors">
              Send message
            </Reveal>
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
            Our offices
          </Reveal>
          <Reveal as="div" className="mt-8 space-y-6">
            {[
              {
                city: "London",
                address: "12 Bermondsey Street, London SE1 3UD",
                phone: "+44 20 7123 4567",
                email: "london@studiomeridian.com",
              },
              {
                city: "Copenhagen",
                address: "28 Vesterbrogade, 1620 Copenhagen",
                phone: "+45 33 22 11 00",
                email: "copenhagen@studiomeridian.com",
              },
            ].map((office) => (
              <Reveal key={office.city} as="div" className="border-b border-border pb-6 last:border-0 last:pb-0">
                <Reveal as="h3" className="text-xl font-[var(--font-playfair)] text-foreground">
                  {office.city}
                </Reveal>
                <Reveal as="p" className="mt-2 text-base text-muted-foreground">
                  {office.address}
                </Reveal>
                <Reveal as="p" className="mt-1 text-base text-muted-foreground">
                  {office.phone}
                </Reveal>
                <Reveal as="p" className="mt-1 text-base text-muted-foreground">
                  {office.email}
                </Reveal>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </div>

      <div className="mt-24 text-center">
        <Reveal as="Link" href="/" className="inline-flex items-center gap-2 text-[1rem] text-foreground hover:text-foreground/80 transition-colors">
          Back to home
          <ArrowRight className="size-4" />
        </Reveal>
      </div>
    </div>
  );
}
