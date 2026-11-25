Build a complete, production-quality multi-page Next.js (App Router) website — a luxury,
art-direction-driven **architecture / interior design** practice. The feeling: a printed
architecture magazine. Photography-led, calm, restrained, expensive.

## Routes (all must be fully implemented and linked from the nav)
`/`, `/about`, `/projects`, `/projects/[slug]`, `/contact`

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` → `{ Button }`
- `@/components/ui/card` → `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` → `{ Badge }`
- `@/components/ui/input` → `{ Input }`
- `@/components/ui/label` → `{ Label }`
Everything else you MUST write yourself as a new file under `components/`. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create in this response.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1.
2. Icons are components: `<ArrowUpRight className="size-4" />`. NEVER write `{icon.size}`. NEVER wrap an icon in `<p>`.
3. Shared chrome (header/nav, footer) is defined in `app/layout.tsx` and rendered EXACTLY ONCE. Pages must NOT render the header or footer themselves.
4. Import every symbol you use. No unused imports. No `any`. Type props explicitly.
5. Photography matters here: use plain `<img>` (NEVER `next/image`) with `loading="lazy"`, a real `alt`, and `className="… object-cover"`. Use `https://picsum.photos/seed/<unique-slug>/<w>/<h>` (give architecture-ish seeds). Large full-bleed images are encouraged.
6. Respect reduced motion: read `useReducedMotion()` and skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy. No "Lorem ipsum", no "TODO", no "sample text".
8. Responsive mobile-first; never overflow horizontally.

## Design language
- Photography-led magazine layout: huge full-bleed images, generous whitespace, restrained type.
- Pair a refined **serif** display (e.g. `font-serif`, or a stack of `ui-serif, Georgia, "Times New Roman", serif`) with a clean sans for body; wide-tracked small-caps labels; hairline rules; large index numerals (01, 02…).
- Warm neutral palette (bone, sand, charcoal). Almost no color — let the photography carry it.

## Motion language (this site's signature — calm and slow; NO cursor, NO marquee)
- **Parallax** on the hero and section images (`useScroll` + `useTransform`).
- **Slow clip-path / scale image reveals** on scroll (~0.8–1.2s ease).
- A **full-screen project viewer** feel — clicking a project leads to an immersive detail page with large imagery and quiet transitions.
- A **sticky project index** that reveals an image preview on hover.
- A minimal route/page transition fade.

Write these components: `components/site-header.tsx`, `components/site-footer.tsx`, `components/reveal.tsx`, `components/parallax-image.tsx`, `components/project-list.tsx`, `components/page-transition.tsx`.

## Content
Fictional practice **"STUDIO MERIDIAN"**.
- `/` — full-bleed hero image + statement, a short intro, three featured projects, a quote, selected press.
- `/projects` — index of 5 projects (name, location, year, programme) as large editorial rows with hover previews.
- `/projects/[slug]` — dynamic detail route. Implement `generateStaticParams` returning the 5 slugs and `generateMetadata`. Render hero image, project facts (location / year / programme / area), a narrative, and a gallery grid. Handle an unknown slug with `notFound()`.
- `/about` — practice statement, approach/philosophy, recognition, team.
- `/contact` — studio addresses (2 offices) + enquiry form (name / email / project type / message).

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="…">…</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route above, and every component you reference.
