"use client";

import { useRef, useEffect, ReactNode } from "react";
import { useInView, useMotionValue, useSpring, type SpringType } from "motion/react";

export default function Reveal({
  as: Tag = "p",
  children,
  className,
  initialDelay = 0,
  ...props
}: {
  as?: React.ComponentType<{ className?: string }>;
  children: ReactNode;
  className?: string;
  initialDelay?: number;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const delay = useRef(0);
  useEffect(() => {
    if (delay.current === 0) delay.current = initialDelay;
  }, [initialDelay]);
  const motionValue = useMotionValue(0);
  const smoothed = useSpring(motionValue, {
    mass: 0.5,
    stiffness: 100,
    damping: 30,
  });
  useEffect(() => {
    if (isInView) {
      const element = ref.current;
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            motionValue.set(element.getBoundingClientRect().top);
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(element);
      return () => observer.disconnect();
    }
  }, [isInView, motionValue]);
  return (
    <Tag
      ref={ref}
      className={className}
      style={{ transform: `translate3d(0, ${smoothed}px, 0)` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
