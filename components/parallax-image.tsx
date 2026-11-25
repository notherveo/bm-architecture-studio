"use client";

import { useScroll, useTransform } from "motion/react";
import { type CSSProperties, type ReactNode } from "react";

export default function ParallaxImage({
  src,
  alt,
  className,
  style,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 30]);
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        ...style,
        "--parallax-y": y,
      } as React.CSSProperties}
    />
  );
}
