"use client";

import { useState } from "react";
import { LuArrowRight, LuCheck, LuLoader, LuRotateCcw } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface ContactFormFieldsProps {
  labels: {
    fieldName: string;
    fieldNamePlaceholder: string;
    fieldEmail: string;
    fieldEmailPlaceholder: string;
    fieldPhone: string;
    fieldPhonePlaceholder: string;
    fieldPhoneOptional: string;
    fieldSubject: string;
    fieldSubjectPlaceholder: string;
    fieldService: string;
    fieldServicePlaceholder: string;
    fieldBudget: string;
    fieldBudgetPlaceholder: string;
    fieldMessage: string;
    fieldMessagePlaceholder: string;
    fieldRequired: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    successButtonBack: string;
    errorMessage: string;
    serviceOptions: SelectOption[];
    budgetOptions: SelectOption[];
  };
  className?: string;
}

type FormState = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-brand-accent/50 focus:ring-3 focus:ring-brand-accent/10 hover:border-border";

const labelBase =
  "mb-1.5 block text-[0.8125rem] font-semibold text-foreground/80";

export function ContactFormFields({
  labels,
  className,
}: ContactFormFieldsProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone:
        (form.elements.namedItem("phone") as HTMLInputElement).value ||
        undefined,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      service:
        (form.elements.namedItem("service") as HTMLSelectElement).value ||
        undefined,
      budget:
        (form.elements.namedItem("budget") as HTMLSelectElement).value ||
        undefined,
      content: (form.elements.namedItem("content") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json?.error ?? "Server error");
      }

      setFormState("success");
    } catch {
      setFormState("error");
      setErrorMsg(labels.errorMessage);
    }
  }

  if (formState === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-5 rounded-2xl border border-brand-accent/25 bg-brand-accent/5 px-8 py-16 text-center",
          className,
        )}
      >
        <div className="flex size-16 items-center justify-center rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent">
          <LuCheck className="size-7" strokeWidth={2.5} />
        </div>
        <div>
          <h3 className="font-(family-name:--font-heading) text-xl font-bold text-foreground">
            {labels.successTitle}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {labels.successMessage}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setFormState("idle")}
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand-accent/40 hover:text-brand-accent"
        >
          <LuRotateCcw className="size-3.5" aria-hidden />
          {labels.successButtonBack}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("space-y-5", className)}
    >
      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelBase}>
            {labels.fieldName}
            <span className="ml-1 text-brand-accent" aria-hidden>
              *
            </span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder={labels.fieldNamePlaceholder}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelBase}>
            {labels.fieldEmail}
            <span className="ml-1 text-brand-accent" aria-hidden>
              *
            </span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={labels.fieldEmailPlaceholder}
            className={inputBase}
          />
        </div>
      </div>

      {/* Phone + Subject */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-phone" className={labelBase}>
            {labels.fieldPhone}
            <span className="ml-2 text-[0.75rem] font-normal text-muted-foreground">
              ({labels.fieldPhoneOptional})
            </span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={labels.fieldPhonePlaceholder}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="cf-subject" className={labelBase}>
            {labels.fieldSubject}
            <span className="ml-1 text-brand-accent" aria-hidden>
              *
            </span>
          </label>
          <input
            id="cf-subject"
            name="subject"
            type="text"
            required
            minLength={5}
            maxLength={200}
            placeholder={labels.fieldSubjectPlaceholder}
            className={inputBase}
          />
        </div>
      </div>

      {/* Service + Budget */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-service" className={labelBase}>
            {labels.fieldService}
          </label>
          <select
            id="cf-service"
            name="service"
            className={cn(
              inputBase,
              "cursor-pointer appearance-none bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E\")] bg-size-[16px] bg-position-[right_14px_center] bg-no-repeat pr-10",
            )}
          >
            <option value="">{labels.fieldServicePlaceholder}</option>
            {labels.serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-budget" className={labelBase}>
            {labels.fieldBudget}
          </label>
          <select
            id="cf-budget"
            name="budget"
            className={cn(
              inputBase,
              "cursor-pointer appearance-none bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E\")] bg-size-[16px] bg-position-[right_14px_center] bg-no-repeat pr-10",
            )}
          >
            <option value="">{labels.fieldBudgetPlaceholder}</option>
            {labels.budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-content" className={labelBase}>
          {labels.fieldMessage}
          <span className="ml-1 text-brand-accent" aria-hidden>
            *
          </span>
        </label>
        <textarea
          id="cf-content"
          name="content"
          required
          minLength={20}
          maxLength={2000}
          rows={6}
          placeholder={labels.fieldMessagePlaceholder}
          className={cn(inputBase, "resize-none leading-relaxed")}
        />
      </div>

      {/* Error message */}
      {formState === "error" && errorMsg && (
        <p
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-brand-accent px-8 text-sm font-semibold text-white transition-all hover:bg-brand-accent/85 disabled:pointer-events-none disabled:opacity-60"
      >
        {formState === "submitting" ? (
          <>
            <LuLoader className="size-4 animate-spin" aria-hidden />
            {labels.submitting}
          </>
        ) : (
          <>
            {labels.submitButton}
            <LuArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </>
        )}
      </button>

      <p className="text-center text-[0.75rem] text-muted-foreground/60">
        <span aria-hidden className="text-brand-accent">
          *
        </span>{" "}
        {labels.fieldRequired}
      </p>
    </form>
  );
}
