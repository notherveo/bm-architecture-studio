"use client";

import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Scroll-reveal wrapper that can render as any common HTML element (or Next's
 * `Link`). Falls back to a plain `div` for unknown tags. Respects reduced motion.
 */
const MOTION = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  section: motion.section,
  article: motion.article,
  blockquote: motion.blockquote,
  ul: motion.ul,
  li: motion.li,
  figure: motion.figure,
  form: motion.form,
  label: motion.label,
  input: motion.input,
  select: motion.select,
  textarea: motion.textarea,
  button: motion.button,
  a: motion.a,
  Link: motion.create(Link),
} as const;

type TagName = keyof typeof MOTION;

export default function Reveal({
  as = "div",
  children,
  className,
  initialDelay = 0,
  ...rest
}: {
  as?: TagName;
  children?: ReactNode;
  className?: string;
  initialDelay?: number;
  [key: string]: unknown;
}) {
  const reduce = useReducedMotion();
  const Component = (MOTION[as] ?? motion.div) as ElementType;

  return (
    <Component
      className={className}
      initial={reduce ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: initialDelay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
