"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  type MotionValue,
} from "framer-motion";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { BorderTrace } from "@/components/ui/BorderTrace";

export interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  yearClassName?: string;
}

export interface ScrollTimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  animationOrder?: "sequential" | "staggered" | "simultaneous";
  cardAlignment?: "alternating" | "left" | "right";
  lineColor?: string;
  progressIndicator?: boolean;
  cardVariant?: "default" | "elevated" | "outlined" | "filled";
  cardEffect?: "none" | "glow" | "shadow" | "bounce";
  parallaxIntensity?: number;
  progressLineWidth?: number;
  progressLineCap?: "round" | "square";
  dateFormat?: "text" | "badge";
  className?: string;
  revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
  connectorStyle?: "dots" | "line" | "dashed";
  perspective?: boolean;
  darkMode?: boolean;
}

interface TimelineEventRowProps {
  event: TimelineEvent;
  index: number;
  activeIndex: number;
  cardAlignment: ScrollTimelineProps["cardAlignment"];
  revealAnimation: ScrollTimelineProps["revealAnimation"];
  animationOrder: ScrollTimelineProps["animationOrder"];
  cardVariant: ScrollTimelineProps["cardVariant"];
  cardEffect: ScrollTimelineProps["cardEffect"];
  perspective: boolean;
  dateFormat: ScrollTimelineProps["dateFormat"];
  parallaxIntensity: number;
  smoothProgress: MotionValue<number>;
  setRef: (el: HTMLDivElement | null) => void;
  setMarkerRef: (el: HTMLButtonElement | null) => void;
  onMarkerClick: (index: number) => void;
}

function TimelineEventRow({
  event,
  index,
  activeIndex,
  cardAlignment,
  revealAnimation,
  animationOrder,
  cardVariant,
  cardEffect,
  perspective,
  dateFormat,
  parallaxIntensity,
  smoothProgress,
  setRef,
  setMarkerRef,
  onMarkerClick,
}: TimelineEventRowProps) {
  const yOffset = useTransform(
    smoothProgress,
    [0, 1],
    [parallaxIntensity * 100, -parallaxIntensity * 100],
  );

  const baseDelay =
    animationOrder === "simultaneous"
      ? 0
      : animationOrder === "staggered"
        ? index * 0.2
        : index * 0.3;

  const initialStates = {
    fade: { opacity: 0, y: 20 },
    slide: {
      x:
        cardAlignment === "left"
          ? -100
          : cardAlignment === "right"
            ? 100
            : index % 2 === 0
              ? -100
              : 100,
      opacity: 0,
    },
    scale: { scale: 0.8, opacity: 0 },
    flip: { rotateY: 90, opacity: 0 },
    none: { opacity: 1 },
  };

  const cardVariants = {
    initial: initialStates[revealAnimation ?? "fade"],
    whileInView: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        delay: baseDelay,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
      },
    },
  };

  const variantClasses = {
    default: "bg-card border shadow-sm",
    elevated: "bg-card border border-border/40 shadow-md",
    outlined: "bg-card/50 backdrop-blur border-2 border-brand-accent/20",
    filled: "bg-brand-accent/10 border border-brand-accent/30",
  };

  const effectClasses = {
    none: "",
    glow: "hover:shadow-[0_0_15px_rgb(58_107_82/0.35)]",
    shadow: "hover:shadow-lg hover:-translate-y-1",
    bounce: "hover:scale-[1.03] hover:shadow-md active:scale-[0.97]",
  };

  const columnClass =
    cardAlignment === "alternating"
      ? index % 2 === 0
        ? "lg:col-start-1 lg:w-[calc(100%-3rem)]"
        : "lg:col-start-2 lg:ml-auto lg:w-[calc(100%-3rem)]"
      : cardAlignment === "left"
        ? "lg:col-start-1 lg:w-[calc(100%-3rem)]"
        : "lg:col-start-2 lg:ml-auto lg:w-[calc(100%-3rem)]";

  const perspectiveClass = perspective
    ? "transform transition-transform hover:rotate-y-1 hover:rotate-x-1"
    : "";

  return (
    <div
      ref={setRef}
      id={event.id ? `timeline-${event.id}` : `timeline-item-${index}`}
      className={cn(
        "relative mb-14 scroll-mt-28 py-3 md:mb-16",
        "lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-4",
      )}
    >
      <button
        ref={setMarkerRef}
        type="button"
        onClick={() => onMarkerClick(index)}
        aria-label={event.title}
        className={cn(
          "absolute top-1/2 left-1/2 z-40 flex size-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
        )}
      >
        <motion.span
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full border-4 bg-white",
            index <= activeIndex ? "border-brand-accent" : "border-[#8aab99]",
          )}
          animate={
            index <= activeIndex
              ? {
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 0px rgba(58,107,82,0)",
                    "0 0 12px rgba(58,107,82,0.6)",
                    "0 0 0px rgba(58,107,82,0)",
                  ],
                }
              : {}
          }
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
        />
      </button>

      <motion.div
        className={cn(
          "relative z-30 mt-12 w-full lg:mt-0",
          columnClass,
          perspectiveClass,
        )}
        variants={cardVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, margin: "-100px" }}
        style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
      >
        <button
          type="button"
          onClick={() => onMarkerClick(index)}
          aria-label={event.title}
          className={cn(
            "group relative w-full overflow-hidden rounded-2xl bg-white p-6 text-left",
            "border-trace-hover-fallback box-border border-[3px] border-solid border-[#8aab99]",
            "shadow-[0_2px_8px_rgb(0,0,0,0.04),0_12px_32px_rgb(58,107,82,0.07)]",
            "cursor-pointer transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgb(58,107,82,0.14)]",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
            variantClasses[cardVariant ?? "default"],
            effectClasses[cardEffect ?? "none"],
          )}
        >
          <BorderTrace durationSec={2.5} />

          {dateFormat === "badge" ? (
            <span
              className={cn(
                "absolute right-5 top-5 font-mono text-3xl font-bold leading-none tracking-tight text-brand-accent/20 transition-colors duration-500 group-hover:text-brand-accent/35",
                event.yearClassName,
              )}
            >
              {event.year}
            </span>
          ) : (
            <p className="absolute right-5 top-5 font-mono text-3xl font-bold leading-none text-brand-accent/20">
              {event.year}
            </p>
          )}

          <div className="flex items-center gap-3 pr-14">
            {event.icon || (
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/20 transition-all duration-500 group-hover:scale-105 group-hover:bg-brand-accent group-hover:text-brand-accent-foreground group-hover:ring-brand-accent/50">
                <Calendar className="size-4" aria-hidden />
              </span>
            )}
            <h3 className="font-(family-name:--font-heading) text-xl font-bold leading-snug tracking-tight text-[#0A0A0F]">
              {event.title}
            </h3>
          </div>
          {event.subtitle && (
            <p className="mt-1 pr-4 font-medium text-foreground/60">
              {event.subtitle}
            </p>
          )}
          <p className="mt-3 text-[0.9375rem] leading-[1.75] text-foreground/60">
            {event.description}
          </p>
        </button>
      </motion.div>
    </div>
  );
}

export const ScrollTimeline = ({
  events,
  title,
  subtitle,
  animationOrder = "sequential",
  cardAlignment = "alternating",
  lineColor = "bg-brand-accent/25",
  progressIndicator = true,
  cardVariant = "default",
  cardEffect = "none",
  parallaxIntensity = 0.2,
  progressLineWidth = 2,
  progressLineCap = "round",
  dateFormat = "badge",
  revealAnimation = "fade",
  className = "",
  connectorStyle = "line",
  perspective = false,
  darkMode = false,
}: ScrollTimelineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const markerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const markerTopsRef = useRef<number[]>([]);
  const lockedMarkerIndexRef = useRef<number | null>(null);
  const showHeader = Boolean(title || subtitle);

  const indicatorTarget = useMotionValue(0);
  const indicatorTop = useSpring(indicatorTarget, {
    stiffness: 75,
    damping: 24,
    mass: 1,
    restDelta: 0.5,
  });
  const progressHeightPx = useTransform(indicatorTop, (value) => `${value}px`);
  const activeIndexRef = useRef(activeIndex);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const measureMarkers = useCallback(() => {
    const track = timelineTrackRef.current;
    if (!track) return;

    markerTopsRef.current = markerRefs.current.map((marker) => {
      if (!marker) return 0;
      const trackRect = track.getBoundingClientRect();
      const markerRect = marker.getBoundingClientRect();
      return markerRect.top + markerRect.height / 2 - trackRect.top;
    });
  }, []);

  const syncIndicator = useCallback(() => {
    const track = timelineTrackRef.current;
    if (!track) return;

    measureMarkers();
    const tops = markerTopsRef.current;
    if (tops.length === 0) return;

    const lockedIndex = lockedMarkerIndexRef.current;
    if (lockedIndex !== null && tops[lockedIndex] !== undefined) {
      indicatorTarget.set(tops[lockedIndex]);
      if (lockedIndex !== activeIndexRef.current) {
        setActiveIndex(lockedIndex);
      }
      return;
    }

    const trackRect = track.getBoundingClientRect();
    const viewportAnchor = window.innerHeight * 0.5;
    const y = Math.max(
      0,
      Math.min(viewportAnchor - trackRect.top, trackRect.height),
    );
    indicatorTarget.set(y);

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    tops.forEach((top, index) => {
      const distance = Math.abs(top - y);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndexRef.current) {
      setActiveIndex(closestIndex);
    }
  }, [indicatorTarget, measureMarkers]);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useLayoutEffect(() => {
    syncIndicator();
  }, [events.length, syncIndicator]);

  useEffect(() => {
    const track = timelineTrackRef.current;
    if (!track) return;

    let frameId: number | null = null;

    const scheduleSync = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        syncIndicator();
      });
    };

    const observer = new ResizeObserver(scheduleSync);
    observer.observe(track);
    window.addEventListener("resize", scheduleSync);
    window.addEventListener("scroll", scheduleSync, { passive: true });
    scheduleSync();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", scheduleSync);
      window.removeEventListener("scroll", scheduleSync);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, [syncIndicator]);

  const scrollToIndex = (index: number) => {
    measureMarkers();

    const tops = markerTopsRef.current;
    if (tops[index] !== undefined) {
      lockedMarkerIndexRef.current = index;
      setActiveIndex(index);
      indicatorTarget.set(tops[index]);
    }

    const element = timelineRefs.current[index];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    window.setTimeout(() => {
      if (lockedMarkerIndexRef.current === index) {
        lockedMarkerIndexRef.current = null;
        measureMarkers();
      }
    }, 900);
  };

  const connectorWidthClass =
    connectorStyle === "dots"
      ? "w-1 rounded-full"
      : connectorStyle === "dashed"
        ? "[mask-image:linear-gradient(to_bottom,black_33%,transparent_33%,transparent_66%,black_66%)] [mask-size:1px_12px]"
        : "";

  return (
    <div
      ref={scrollRef}
      className={cn(
        "relative w-full overflow-hidden",
        showHeader ? "min-h-screen" : "min-h-0",
        darkMode ? "bg-background text-foreground" : "",
        className,
      )}
    >
      {showHeader && (
        <div className="px-4 py-16 text-center">
          {title && (
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h2>
          )}
          {subtitle && (
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="relative w-full pb-24">
        <div ref={timelineTrackRef} className="relative mx-auto">
          <div
            className={cn(
              "absolute top-0 left-1/2 z-10 h-full -translate-x-1/2 transform",
              lineColor,
              connectorWidthClass,
            )}
            style={
              connectorStyle !== "dots"
                ? { width: progressLineWidth }
                : undefined
            }
          />

          {progressIndicator && (
            <>
              <motion.div
                className="absolute top-0 z-10"
                style={{
                  height: progressHeightPx,
                  width: progressLineWidth,
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                  background:
                    "linear-gradient(to bottom, #58a67d, #3a6b52, #2d5a44)",
                  boxShadow: `
                    0 0 15px rgba(58,107,82,0.5),
                    0 0 25px rgba(58,107,82,0.3)
                  `,
                }}
              />
              <motion.div
                className="absolute z-20"
                style={{
                  top: progressHeightPx,
                  left: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              >
                <motion.div
                  className="h-5 w-5 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(58,107,82,0.85) 0%, rgba(88,166,125,0.5) 40%, rgba(58,107,82,0) 70%)",
                    boxShadow: `
                      0 0 15px 4px rgba(58, 107, 82, 0.6),
                      0 0 25px 8px rgba(88, 166, 125, 0.4),
                      0 0 40px 15px rgba(45, 90, 68, 0.2)
                    `,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </>
          )}

          <div className="relative z-20">
            {events.map((event, index) => (
              <TimelineEventRow
                key={event.id || index}
                event={event}
                index={index}
                activeIndex={activeIndex}
                cardAlignment={cardAlignment}
                revealAnimation={revealAnimation}
                animationOrder={animationOrder}
                cardVariant={cardVariant}
                cardEffect={cardEffect}
                perspective={perspective}
                dateFormat={dateFormat}
                parallaxIntensity={parallaxIntensity}
                smoothProgress={smoothProgress}
                setRef={(el) => {
                  timelineRefs.current[index] = el;
                }}
                setMarkerRef={(el) => {
                  markerRefs.current[index] = el;
                }}
                onMarkerClick={scrollToIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
