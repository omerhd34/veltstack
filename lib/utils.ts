import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** CSS uppercase on `lang="tr"` maps i → İ; use for Latin-style badge labels. */
export function toLatinUppercase(value: string): string {
  return value.toLocaleUpperCase("en-US").replace(/\u0130/g, "I")
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://")
}
