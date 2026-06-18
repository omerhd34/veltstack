import { useLayoutEffect, useRef, type RefObject } from "react";
import {
  desktopGridQuery,
  packageAccordionDurationMs,
} from "./package-accordion";

export function clearGroupMinHeights(container: HTMLElement) {
  container.querySelectorAll<HTMLElement>("[data-package-group]").forEach((el) => {
    el.style.minHeight = "";
  });
}

function isGroupExpanded(element: HTMLElement) {
  return (
    element.querySelector("button")?.getAttribute("aria-expanded") === "true"
  );
}

export function syncGroupHeights(container: HTMLElement) {
  clearGroupMinHeights(container);

  if (!window.matchMedia(desktopGridQuery).matches) {
    return;
  }

  const cards = container.querySelectorAll<HTMLElement>("[data-package-card]");
  if (!cards.length) {
    return;
  }

  const groupsByLabel = new Map<string, HTMLElement[]>();

  cards.forEach((card) => {
    card.querySelectorAll<HTMLElement>("[data-package-group]").forEach((element) => {
      const label = element.dataset.packageGroupLabel;
      if (!label) {
        return;
      }

      const row = groupsByLabel.get(label) ?? [];
      row.push(element);
      groupsByLabel.set(label, row);
    });
  });

  groupsByLabel.forEach((elements) => {
    const expandedElements = elements.filter(isGroupExpanded);

    if (!expandedElements.length) {
      let maxCollapsedHeight = 0;
      elements.forEach((element) => {
        maxCollapsedHeight = Math.max(
          maxCollapsedHeight,
          element.getBoundingClientRect().height,
        );
      });
      elements.forEach((element) => {
        element.style.minHeight = `${maxCollapsedHeight}px`;
      });
      return;
    }

    let maxExpandedHeight = 0;
    expandedElements.forEach((element) => {
      maxExpandedHeight = Math.max(
        maxExpandedHeight,
        element.getBoundingClientRect().height,
      );
    });

    expandedElements.forEach((element) => {
      element.style.minHeight = `${maxExpandedHeight}px`;
    });
  });
}

export function usePackageGroupHeightSync(
  containerRef: RefObject<HTMLElement | null>,
  layoutDeps: unknown[],
  openGroupsKey: string,
) {
  const isAnimatingRef = useRef(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const runLayoutSync = () => {
      if (isAnimatingRef.current) {
        return;
      }

      window.requestAnimationFrame(() => {
        syncGroupHeights(container);
      });
    };

    runLayoutSync();

    const mediaQuery = window.matchMedia(desktopGridQuery);
    const resizeObserver = new ResizeObserver(runLayoutSync);

    resizeObserver.observe(container);
    mediaQuery.addEventListener("change", runLayoutSync);
    window.addEventListener("resize", runLayoutSync);

    return () => {
      resizeObserver.disconnect();
      mediaQuery.removeEventListener("change", runLayoutSync);
      window.removeEventListener("resize", runLayoutSync);
      clearGroupMinHeights(container);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, layoutDeps);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    isAnimatingRef.current = true;
    clearGroupMinHeights(container);

    const syncTimer = window.setTimeout(() => {
      syncGroupHeights(container);
      isAnimatingRef.current = false;
    }, packageAccordionDurationMs);

    return () => {
      window.clearTimeout(syncTimer);
      isAnimatingRef.current = false;
    };
  }, [containerRef, openGroupsKey]);
}
