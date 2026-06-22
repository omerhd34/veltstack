"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BorderTraceProps {
  className?: string;
  radius?: number;
  borderWidth?: number;
  durationSec?: number;
}

function buildRoundedRectPath(
  width: number,
  height: number,
  radius: number,
  strokeWidth: number,
) {
  const inset = strokeWidth / 2;
  const r = Math.min(
    radius,
    (width - strokeWidth) / 2,
    (height - strokeWidth) / 2,
  );
  const x = inset;
  const y = inset;
  const w = width - strokeWidth;
  const h = height - strokeWidth;

  return `
    M ${x} ${y + r}
    A ${r} ${r} 0 0 1 ${x + r} ${y}
    L ${x + w - r} ${y}
    A ${r} ${r} 0 0 1 ${x + w} ${y + r}
    L ${x + w} ${y + h - r}
    A ${r} ${r} 0 0 1 ${x + w - r} ${y + h}
    L ${x + r} ${y + h}
    A ${r} ${r} 0 0 1 ${x} ${y + h - r}
    L ${x} ${y + r}
  `
    .replace(/\s+/g, " ")
    .trim();
}

export function BorderTrace({
  className,
  radius = 18,
  borderWidth = 2,
  durationSec = 3,
}: BorderTraceProps) {
  const hostRef = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const hasAnimatedRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
    radius,
    borderInset: borderWidth,
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    const parent = host?.parentElement;
    if (!parent) return;

    const update = () => {
      if (isAnimatingRef.current) return;
      const { width, height } = parent.getBoundingClientRect();
      const style = getComputedStyle(parent);
      const radiusPx = Number.parseFloat(style.borderTopLeftRadius) || radius;
      const borderInset =
        Number.parseFloat(style.borderTopWidth) || borderWidth;
      setLayout({ width, height, radius: radiusPx, borderInset });
      if (width > 0) setIsReady(true);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(parent);
    return () => observer.disconnect();
  }, [borderWidth, radius]);

  useEffect(() => {
    const parent = hostRef.current?.parentElement;
    const path = pathRef.current;
    if (!isReady || !parent || !path) return;

    const hideTrace = () => {
      path.classList.remove("border-trace-animate");
      path.style.removeProperty("stroke-dashoffset");
      path.style.removeProperty("opacity");
    };

    const finishTrace = () => {
      isAnimatingRef.current = false;
      hideTrace();
    };

    const startTrace = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      isAnimatingRef.current = true;
      path.style.removeProperty("stroke-dashoffset");
      path.style.removeProperty("opacity");
      path.classList.remove("border-trace-animate");
      void path.getBoundingClientRect();
      path.classList.add("border-trace-animate");
    };

    const resetTrace = () => {
      hasAnimatedRef.current = false;
      isAnimatingRef.current = false;
      hideTrace();
    };

    path.addEventListener("animationend", finishTrace);
    parent.addEventListener("mouseenter", startTrace);
    parent.addEventListener("mouseleave", resetTrace);

    return () => {
      path.removeEventListener("animationend", finishTrace);
      parent.removeEventListener("mouseenter", startTrace);
      parent.removeEventListener("mouseleave", resetTrace);
    };
  }, [isReady]);

  const strokeWidth = layout.borderInset || borderWidth;
  const path =
    layout.width > 0
      ? buildRoundedRectPath(
          layout.width,
          layout.height,
          layout.radius,
          strokeWidth,
        )
      : "";

  return (
    <span
      ref={hostRef}
      className={cn(
        "pointer-events-none absolute z-10 opacity-0 group-hover:opacity-100 motion-reduce:hidden",
        className,
      )}
      style={{
        top: -strokeWidth,
        right: -strokeWidth,
        bottom: -strokeWidth,
        left: -strokeWidth,
      }}
      aria-hidden
    >
      {path ? (
        <svg
          className="size-full"
          viewBox={`0 0 ${layout.width} ${layout.height}`}
        >
          <path
            ref={pathRef}
            d={path}
            fill="none"
            stroke="var(--brand-accent)"
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray="1"
            className="border-trace-path"
            style={
              {
                "--border-trace-duration": `${durationSec}s`,
              } as CSSProperties
            }
          />
        </svg>
      ) : null}
    </span>
  );
}
