import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toLatinUppercase(value: string): string {
  return value.toLocaleUpperCase("en-US").replace(/\u0130/g, "I");
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function truncateToSentences(text: string, maxSentences = 2): string {
  const parts = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (parts.length <= maxSentences) return text.trim();
  return parts.slice(0, maxSentences).join(" ").trim();
}
