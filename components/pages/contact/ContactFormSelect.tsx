"use client";

import { useEffect, useRef, useState } from "react";
import { LuCheck, LuChevronDown } from "react-icons/lu";
import { ContactFormFieldShell } from "./ContactFormFieldShell";
import { cn } from "@/lib/utils";

export interface ContactSelectOption {
  value: string;
  label: string;
}

interface ContactFormSelectProps {
  id: string;
  name: string;
  required?: boolean;
  placeholder: string;
  options: readonly ContactSelectOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const dropdownPanelClassName =
  "absolute z-50 mt-1.5 max-h-60 w-full overflow-auto rounded-xl border border-border/60 bg-card py-1.5 shadow-[0_8px_30px_rgb(0_0_0/0.08)] [scrollbar-color:var(--brand-accent)_rgb(var(--brand-accent-rgb)/0.1)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-brand-accent/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-accent";

export function ContactFormSelect({
  id,
  name,
  required,
  placeholder,
  options,
  value,
  onChange,
  className,
}: ContactFormSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedLabel = options.find((o) => o.value === value)?.label;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <input type="hidden" name={name} value={value} required={required} />

      <ContactFormFieldShell active={open}>
        <button
          type="button"
          id={id}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "flex w-full items-center justify-between rounded-[9px] border-0 bg-background px-4 py-3 text-sm outline-none focus-visible:ring-0",
            !selectedLabel && "text-muted-foreground/50",
          )}
        >
          <span className="truncate pr-2 text-left">
            {selectedLabel ?? placeholder}
          </span>
          <LuChevronDown
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </button>
      </ContactFormFieldShell>

      {open && (
        <ul
          role="listbox"
          aria-labelledby={id}
          className={dropdownPanelClassName}
        >
          {options.map((opt) => {
            const isSelected = value === opt.value;

            return (
              <li key={opt.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors",
                    isSelected
                      ? "bg-brand-accent/10 font-medium text-brand-accent"
                      : "text-foreground hover:bg-muted/50",
                  )}
                >
                  <span className="leading-snug">{opt.label}</span>
                  {isSelected && (
                    <LuCheck className="size-4 shrink-0" strokeWidth={2.5} />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
