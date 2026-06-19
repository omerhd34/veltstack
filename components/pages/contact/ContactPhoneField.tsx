"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { phoneCountryCodes } from "./phone-country-codes";

function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length <= 3) return digits;
  if (digits.length <= 6) {
    return `${digits.slice(0, 3)} ${digits.slice(3)}`;
  }
  if (digits.length <= 8) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }

  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8)}`;
}

function normalizeCountryQuery(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  return digits ? `+${digits}` : "";
}

function filterCountryCodes(query: string) {
  if (!query || query === "+") return phoneCountryCodes;

  return phoneCountryCodes.filter((code) => code.value.startsWith(query));
}

interface ContactPhoneFieldProps {
  id: string;
  placeholder: string;
  countryCodeLabel: string;
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
}

export function ContactPhoneField({
  id,
  placeholder,
  countryCodeLabel,
  countryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
}: ContactPhoneFieldProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(countryCode);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCodes = useMemo(() => filterCountryCodes(query), [query]);

  useEffect(() => {
    setQuery(countryCode);
  }, [countryCode]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        commitQuery();
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open, query, countryCode]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setQuery(countryCode);
        setOpen(false);
        inputRef.current?.blur();
      }
    }

    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open, countryCode]);

  function commitQuery() {
    const exact = phoneCountryCodes.find((code) => code.value === query);
    if (exact) {
      onCountryCodeChange(exact.value);
      setQuery(exact.value);
      return;
    }

    setQuery(countryCode);
  }

  function selectCode(value: string) {
    onCountryCodeChange(value);
    setQuery(value);
    setOpen(false);
    inputRef.current?.blur();
  }

  return (
    <div
      className={cn(
        "flex rounded-xl border border-border/70 bg-background transition-all",
        "hover:border-border focus-within:border-brand-accent/50 focus-within:ring-3 focus-within:ring-brand-accent/10",
        open && "relative z-20",
      )}
    >
      <div
        ref={containerRef}
        className="relative flex shrink-0 items-stretch rounded-l-xl border-r border-border/70"
      >
        <input
          ref={inputRef}
          type="text"
          inputMode="tel"
          aria-label={countryCodeLabel}
          autoComplete="tel-country-code"
          value={query}
          onFocus={() => {
            setOpen(true);
            setQuery(countryCode);
          }}
          onChange={(e) => {
            setQuery(normalizeCountryQuery(e.target.value));
            setOpen(true);
          }}
          onBlur={() => {
            window.setTimeout(() => {
              commitQuery();
              setOpen(false);
            }, 120);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && filteredCodes.length > 0) {
              e.preventDefault();
              selectCode(filteredCodes[0].value);
            }
          }}
          className="w-19 min-w-19 border-0 bg-transparent py-3 pl-3 pr-1 text-sm font-medium text-foreground outline-none"
        />

        <button
          type="button"
          tabIndex={-1}
          aria-label={countryCodeLabel}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            setOpen((prev) => !prev);
            inputRef.current?.focus();
          }}
          className={cn(
            "flex items-center pr-2 text-muted-foreground transition-colors",
            open && "text-foreground",
          )}
        >
          <LuChevronDown
            className={cn(
              "size-3.5 transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </button>

        {open && (
          <ul
            role="listbox"
            className="absolute left-0 top-full z-50 mt-1 max-h-48 w-32 overflow-auto rounded-xl border border-border/60 bg-card py-1 shadow-[0_8px_30px_rgb(0_0_0/0.08)]"
          >
            {filteredCodes.map((code) => {
              const isSelected = countryCode === code.value;

              return (
                <li key={code.value} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => selectCode(code.value)}
                    className={cn(
                      "flex w-full px-3 py-2 text-left text-sm transition-colors",
                      isSelected
                        ? "bg-brand-accent/10 font-medium text-brand-accent"
                        : "text-foreground hover:bg-muted/50",
                    )}
                  >
                    {code.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <input
        id={id}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        value={phoneNumber}
        onChange={(e) => onPhoneNumberChange(formatPhoneNumber(e.target.value))}
        placeholder={placeholder}
        maxLength={13}
        className="min-w-0 flex-1 rounded-r-xl border-0 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none"
      />
    </div>
  );
}
