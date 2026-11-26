"use client";
import * as React from "react";

import { useScroll, useTransform } from "motion/react";
import { type CSSProperties, type ReactNode } from "react";

export default function ParallaxImage({
  src,
  alt,
  className,
  style,
  loading,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  loading?: "lazy" | "eager";
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 30]);
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      style={{
        ...style,
        "--parallax-y": y,
      } as React.CSSProperties}
    />
  );
}
