"use client";

import React, { useCallback, useMemo, useState } from "react";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";

export type OrbitIconConfig = {
  icon: React.ReactNode;
  label?: string;
  angleOffset?: number;
  emphasis?: boolean;
  iconSize?: number;
};

export type OrbitConfig = {
  id: number;
  radiusFactor: number;
  speed: number;
  icons: OrbitIconConfig[];
  iconSize: number;
  label?: string;
  orbitColor?: string;
  orbitThickness?: number;
};

export type BeamCircleProps = {
  size?: number;
  orbits: OrbitConfig[];
  centerIcon?: React.ReactNode;
  className?: string;
};

function getOrbitPosition(
  halfSize: number,
  orbitRadius: number,
  angleDeg: number,
) {
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    top: halfSize + orbitRadius * Math.sin(angleRad),
    left: halfSize + orbitRadius * Math.cos(angleRad),
  };
}

function findOrbitIdAtPoint(
  orbits: OrbitConfig[],
  size: number,
  clientX: number,
  clientY: number,
  rect: DOMRect,
): number | null {
  const halfSize = size / 2;
  const cx = rect.left + halfSize;
  const cy = rect.top + halfSize;
  const dx = clientX - cx;
  const dy = clientY - cy;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const hitSlop = 26;

  let bestId: number | null = null;
  let bestDelta = Infinity;

  for (const orbit of orbits) {
    const orbitRadius = (size * orbit.radiusFactor) / 2;
    const delta = Math.abs(distance - orbitRadius);
    if (delta <= hitSlop && delta < bestDelta) {
      bestDelta = delta;
      bestId = orbit.id;
    }
  }

  return bestId;
}

const BeamCircle: React.FC<BeamCircleProps> = ({
  size = 300,
  orbits,
  centerIcon,
  className,
}) => {
  const halfSize = size / 2;
  const [pausedRings, setPausedRings] = useState<Set<number>>(() => new Set());
  const [selectedOrbitId, setSelectedOrbitId] = useState<number | null>(null);

  const selectedOrbitLabel = useMemo(
    () => orbits.find((orbit) => orbit.id === selectedOrbitId)?.label ?? null,
    [orbits, selectedOrbitId],
  );

  const linearEase = (t: number) => t;

  const rotationTransition = useCallback(
    (duration: number): Transition => ({
      repeat: Infinity,
      duration,
      ease: linearEase,
    }),
    [],
  );

  const pauseRing = useCallback((ringId: number) => {
    setPausedRings((current) => {
      if (current.has(ringId)) return current;
      const next = new Set(current);
      next.add(ringId);
      return next;
    });
  }, []);

  const resumeRing = useCallback((ringId: number) => {
    setPausedRings((current) => {
      if (!current.has(ringId)) return current;
      const next = new Set(current);
      next.delete(ringId);
      return next;
    });
  }, []);

  const handleRingPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const orbitId = findOrbitIdAtPoint(
        orbits,
        size,
        event.clientX,
        event.clientY,
        event.currentTarget.getBoundingClientRect(),
      );

      if (orbitId === null) return;

      setSelectedOrbitId((current) => (current === orbitId ? null : orbitId));
    },
    [orbits, size],
  );

  const CenterIcon = useMemo(
    () => (
      <motion.div
        className="pointer-events-auto grid place-content-center rounded-full bg-white shadow-lg ring-1 ring-[#00D4AA]/20"
        style={{ width: halfSize * 0.2, height: halfSize * 0.2 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        {centerIcon}
      </motion.div>
    ),
    [halfSize, centerIcon],
  );

  return (
    <TooltipProvider delayDuration={0} skipDelayDuration={0}>
      <div
        className={cn(
          "flex flex-col items-center bg-transparent p-4",
          className,
        )}
      >
        <div
          className="relative mx-auto shrink-0"
          style={{ width: size, height: size }}
        >
          <div
            className="absolute inset-0 z-10 cursor-pointer"
            onPointerDown={handleRingPointerDown}
            aria-hidden
          />

          {orbits.map((orbit) => {
            const orbitDiameter = size * orbit.radiusFactor;
            const orbitRadius = orbitDiameter / 2;
            const ringStagger =
              orbit.icons.length > 0 ? 360 / orbit.icons.length / 2 : 0;
            const isPaused =
              pausedRings.has(orbit.id) || selectedOrbitId === orbit.id;
            const isSelected = selectedOrbitId === orbit.id;

            return (
              <React.Fragment key={orbit.id}>
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute rounded-full border border-dashed transition-all duration-200",
                    isSelected
                      ? "border-[#00D4AA] bg-[#00D4AA]/10 shadow-[0_0_24px_rgb(0_212_170/0.2)]"
                      : "",
                  )}
                  style={{
                    width: orbitDiameter,
                    height: orbitDiameter,
                    top: halfSize - orbitRadius,
                    left: halfSize - orbitRadius,
                    borderColor: isSelected ? undefined : orbit.orbitColor,
                    borderWidth: isSelected ? 2 : orbit.orbitThickness || 1,
                  }}
                />

                <motion.div
                  className="pointer-events-none absolute inset-0"
                  style={{ width: size, height: size }}
                  animate={isPaused ? false : { rotate: 360 }}
                  transition={rotationTransition(orbit.speed)}
                >
                  {orbit.icons.map((orbitIcon, iconIndex) => {
                    const angleDeg =
                      orbitIcon.angleOffset ??
                      ringStagger + (360 / orbit.icons.length) * iconIndex;
                    const { top, left } = getOrbitPosition(
                      halfSize,
                      orbitRadius,
                      angleDeg,
                    );

                    return (
                      <div
                        key={iconIndex}
                        className="pointer-events-auto absolute z-20"
                        style={{
                          top,
                          left,
                          transform: "translate(-50%, -50%)",
                        }}
                        onPointerDown={(event) => event.stopPropagation()}
                        onPointerEnter={() => pauseRing(orbit.id)}
                        onPointerLeave={() => resumeRing(orbit.id)}
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.button
                              type="button"
                              className={cn(
                                "grid cursor-default place-content-center rounded-full border-0 p-0",
                                orbitIcon.emphasis
                                  ? "z-30 bg-linear-to-br from-[#00D4AA]/20 via-white to-white ring-[2.5px] ring-[#00D4AA] shadow-[0_0_0_4px_rgb(0_212_170/0.18),0_0_28px_rgb(0_212_170/0.55)]"
                                  : "bg-white/90 opacity-75 shadow-sm ring-1 ring-white/15",
                              )}
                              style={{
                                width: orbitIcon.iconSize ?? orbit.iconSize,
                                height: orbitIcon.iconSize ?? orbit.iconSize,
                              }}
                              animate={isPaused ? false : { rotate: -360 }}
                              transition={rotationTransition(orbit.speed)}
                              aria-label={orbitIcon.label}
                            >
                              <div
                                className="flex shrink-0 items-center justify-center leading-none [&_img]:max-h-full [&_img]:max-w-full [&_img]:object-contain [&_svg]:h-[1em] [&_svg]:w-[1em]"
                                style={{
                                  fontSize:
                                    (orbitIcon.iconSize ?? orbit.iconSize) *
                                    (orbitIcon.emphasis ? 0.58 : 0.5),
                                }}
                              >
                                {orbitIcon.icon}
                              </div>
                            </motion.button>
                          </TooltipTrigger>
                          {orbitIcon.label ? (
                            <TooltipContent
                              side="top"
                              sideOffset={8}
                              className="z-50 border-0 bg-emerald-950 text-emerald-50 ring-1 ring-emerald-800/60"
                            >
                              {orbitIcon.label}
                            </TooltipContent>
                          ) : null}
                        </Tooltip>
                      </div>
                    );
                  })}
                </motion.div>
              </React.Fragment>
            );
          })}

          <div className="pointer-events-none absolute inset-0 z-30 grid place-content-center">
            {CenterIcon}
          </div>
        </div>

        <p
          className="mt-4 w-full min-h-6 shrink-0 text-center font-(family-name:--font-heading) text-sm font-semibold tracking-tight text-[#00D4AA] md:text-base"
          aria-live="polite"
        >
          {selectedOrbitLabel ?? "\u00A0"}
        </p>
      </div>
    </TooltipProvider>
  );
};

export default BeamCircle;
