"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type BorderTraceTrigger = "hover" | "focus" | "both";

interface BorderTraceProps {
  className?: string;
  radius?: number;
  borderWidth?: number;
  durationSec?: number;
  stroke?: string;
  loop?: boolean;
  trigger?: BorderTraceTrigger;
  active?: boolean;
}

function parseRadius(value: string) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function readBorderRadius(element: HTMLElement, fallback: number) {
  const style = getComputedStyle(element);
  const corners = [
    style.borderTopLeftRadius,
    style.borderTopRightRadius,
    style.borderBottomRightRadius,
    style.borderBottomLeftRadius,
  ].map(parseRadius);
  const radius = corners.some((value) => value > 0)
    ? Math.max(...corners)
    : fallback;
  const { width, height } = element.getBoundingClientRect();
  const cap = Math.min(width, height) / 2;

  return Math.min(radius, cap);
}

function buildRoundedRectPath(
  width: number,
  height: number,
  radius: number,
  strokeWidth: number,
) {
  const inset = strokeWidth / 2;
  const centerlineRadius = Math.max(0, radius - inset);
  const r = Math.min(
    centerlineRadius,
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
    H ${x + w - r}
    A ${r} ${r} 0 0 1 ${x + w} ${y + r}
    V ${y + h - r}
    A ${r} ${r} 0 0 1 ${x + w - r} ${y + h}
    H ${x + r}
    A ${r} ${r} 0 0 1 ${x} ${y + h - r}
    V ${y + r}
    Z
  `
    .replace(/\s+/g, " ")
    .trim();
}

export function BorderTrace({
  className,
  radius = 18,
  borderWidth = 3,
  durationSec = 3,
  stroke = "var(--border-trace-stroke)",
  loop = false,
  trigger = "both",
  active,
}: BorderTraceProps) {
  const hostRef = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const frameRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);
  const loopActiveRef = useRef(false);
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
    radius,
    strokeWidth: borderWidth,
    offsetTop: 0,
    offsetLeft: 0,
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    const target = host?.parentElement;
    if (!target) return;

    const measure = () => {
      const style = getComputedStyle(target);
      const strokeWidth =
        Number.parseFloat(style.borderTopWidth) || borderWidth;
      const borderTop = Number.parseFloat(style.borderTopWidth) || strokeWidth;
      const borderLeft =
        Number.parseFloat(style.borderLeftWidth) || strokeWidth;

      setLayout({
        width: target.offsetWidth,
        height: target.offsetHeight,
        radius: readBorderRadius(target, radius),
        strokeWidth,
        offsetTop: -borderTop,
        offsetLeft: -borderLeft,
      });

      if (target.offsetWidth > 0) setIsReady(true);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(target);
    window.addEventListener("scroll", measure, true);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", measure, true);
      window.removeEventListener("resize", measure);
    };
  }, [borderWidth, radius]);

  useEffect(() => {
    if (loop) return;

    const wrapper =
      hostRef.current?.closest(".group") ?? hostRef.current?.parentElement;
    const path = pathRef.current;
    if (!isReady || !wrapper || !path) return;

    const cancelFrame = () => {
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const hideTrace = () => {
      cancelFrame();
      path.style.opacity = "0";
      path.style.strokeDasharray = "none";
      path.style.strokeDashoffset = "0";
    };

    const finishTrace = () => {
      cancelFrame();
      hideTrace();
    };

    const startTrace = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      cancelFrame();
      const length = path.getTotalLength();
      if (!length) return;

      path.style.opacity = "1";
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      const durationMs = durationSec * 1000;
      const fadeStart = 0.97;
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / durationMs, 1);

        if (progress >= 1) {
          finishTrace();
          return;
        }

        path.style.strokeDashoffset = `${length * (1 - progress)}`;
        path.style.opacity =
          progress >= fadeStart
            ? `${1 - (progress - fadeStart) / (1 - fadeStart)}`
            : "1";

        frameRef.current = requestAnimationFrame(tick);
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const resetTrace = () => {
      hasAnimatedRef.current = false;
      finishTrace();
    };

    const onMouseEnter = () => {
      if (trigger === "focus") return;
      startTrace();
    };

    const onMouseLeave = () => {
      if (trigger === "focus") return;
      resetTrace();
    };

    const onFocusIn = () => {
      if (trigger === "hover") return;
      startTrace();
    };

    const onFocusOut = (event: Event) => {
      if (trigger === "hover") return;
      const relatedTarget = (event as FocusEvent).relatedTarget;
      if (wrapper.contains(relatedTarget as Node)) return;
      resetTrace();
    };

    wrapper.addEventListener("mouseenter", onMouseEnter);
    wrapper.addEventListener("mouseleave", onMouseLeave);
    wrapper.addEventListener("focusin", onFocusIn);
    wrapper.addEventListener("focusout", onFocusOut);

    return () => {
      cancelFrame();
      wrapper.removeEventListener("mouseenter", onMouseEnter);
      wrapper.removeEventListener("mouseleave", onMouseLeave);
      wrapper.removeEventListener("focusin", onFocusIn);
      wrapper.removeEventListener("focusout", onFocusOut);
    };
  }, [durationSec, isReady, loop, trigger]);

  useEffect(() => {
    if (!loop || !isReady) return;

    const wrapper =
      hostRef.current?.closest(".group") ?? hostRef.current?.parentElement;
    const path = pathRef.current;
    if (!wrapper || !path) return;

    let running = false;

    const cancelFrame = () => {
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const hideTrace = () => {
      loopActiveRef.current = false;
      path.style.opacity = "0";
      path.style.strokeDasharray = "none";
      path.style.strokeDashoffset = "0";
    };

    const shouldRun = () => {
      const hoverActive = trigger !== "focus" && wrapper.matches(":hover");
      const focusActive =
        trigger !== "hover" &&
        (wrapper.matches(":focus-within") || active === true);

      return hoverActive || focusActive;
    };

    const durationMs = durationSec * 1000;
    const startedAt = performance.now();

    const tick = (now: number) => {
      if (!shouldRun()) {
        running = false;
        hideTrace();
        return;
      }

      const length = path.getTotalLength();
      if (!length) {
        frameRef.current = requestAnimationFrame(tick);
        return;
      }

      loopActiveRef.current = true;
      const progress = ((now - startedAt) % durationMs) / durationMs;
      const segment = Math.max(length * 0.3, 1);
      path.style.opacity = "1";
      path.style.strokeDasharray = `${segment} ${length - segment}`;
      path.style.strokeDashoffset = `${length * progress}`;
      frameRef.current = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (running || !shouldRun()) return;
      running = true;
      cancelFrame();
      frameRef.current = requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      running = false;
      cancelFrame();
      hideTrace();
    };

    const onMouseEnter = () => {
      if (trigger === "focus") return;
      startLoop();
    };

    const onMouseLeave = () => {
      if (trigger === "focus") return;
      stopLoop();
    };

    const onFocusIn = () => {
      if (trigger === "hover") return;
      startLoop();
    };

    const onFocusOut = (event: Event) => {
      if (trigger === "hover") return;
      const relatedTarget = (event as FocusEvent).relatedTarget;
      if (wrapper.contains(relatedTarget as Node)) return;
      stopLoop();
    };

    if (shouldRun()) startLoop();

    wrapper.addEventListener("mouseenter", onMouseEnter);
    wrapper.addEventListener("mouseleave", onMouseLeave);
    wrapper.addEventListener("focusin", onFocusIn);
    wrapper.addEventListener("focusout", onFocusOut);

    return () => {
      stopLoop();
      wrapper.removeEventListener("mouseenter", onMouseEnter);
      wrapper.removeEventListener("mouseleave", onMouseLeave);
      wrapper.removeEventListener("focusin", onFocusIn);
      wrapper.removeEventListener("focusout", onFocusOut);
    };
  }, [durationSec, isReady, loop, trigger, active]);

  const path =
    layout.width > 0
      ? buildRoundedRectPath(
          layout.width,
          layout.height,
          layout.radius,
          layout.strokeWidth,
        )
      : "";

  return (
    <span
      ref={hostRef}
      className={cn(
        "pointer-events-none absolute z-20 motion-reduce:hidden",
        loop
          ? cn(
              "opacity-0",
              trigger !== "focus" && "group-hover:opacity-100",
              trigger !== "hover" && "group-focus-within:opacity-100",
              active !== undefined && "group-data-[active=true]:opacity-100",
            )
          : "opacity-0 group-hover:opacity-100",
        className,
      )}
      style={{
        top: layout.offsetTop,
        left: layout.offsetLeft,
        width: layout.width,
        height: layout.height,
      }}
      aria-hidden
    >
      {path ? (
        <svg
          className="size-full overflow-visible"
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          overflow="visible"
        >
          <path
            ref={pathRef}
            d={path}
            fill="none"
            stroke={stroke}
            strokeWidth={layout.strokeWidth}
            strokeLinecap={loop ? "round" : "butt"}
            strokeLinejoin="miter"
            strokeMiterlimit={2}
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
