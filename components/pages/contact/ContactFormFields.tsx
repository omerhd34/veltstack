"use client";

import { useState } from "react";
import { LuCheck, LuLoader, LuRotateCcw } from "react-icons/lu";
import { BorderTrace } from "@/components/ui/BorderTrace";
import { cn } from "@/lib/utils";
import { ContactFormFieldShell } from "./ContactFormFieldShell";
import { ContactFormSelect } from "./ContactFormSelect";
import { ContactPhoneField } from "./ContactPhoneField";
import { defaultPhoneCountryCode } from "./phone-country-codes";

interface SelectOption {
  value: string;
  label: string;
}

type ServicePackagesMap = Record<string, SelectOption[]>;

interface ContactFormFieldsProps {
  labels: {
    fieldName: string;
    fieldNamePlaceholder: string;
    fieldEmail: string;
    fieldEmailPlaceholder: string;
    fieldPhone: string;
    fieldPhonePlaceholder: string;
    fieldPhoneCountryLabel: string;
    fieldPhoneOptional: string;
    fieldService: string;
    fieldServicePlaceholder: string;
    fieldPackage: string;
    fieldPackagePlaceholder: string;
    fieldTier: string;
    fieldTierPlaceholder: string;
    fieldBudget: string;
    fieldBudgetPlaceholder: string;
    fieldMessage: string;
    fieldMessageOptional: string;
    fieldMessagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    successButtonBack: string;
    errorMessage: string;
    serviceOptions: SelectOption[];
    tierOptions: SelectOption[];
    servicePackages: ServicePackagesMap;
    budgetOptions: SelectOption[];
  };
  className?: string;
}

type FormState = "idle" | "submitting" | "success" | "error";

const inputInner =
  "w-full rounded-[9px] border-0 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-0";

const labelBase = "mb-1.5 block text-[0.8125rem] text-foreground/80";

const labelText = "font-semibold";

export function ContactFormFields({
  labels,
  className,
}: ContactFormFieldsProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedTier, setSelectedTier] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState<string>(
    defaultPhoneCountryCode,
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const basePackageOptions =
    selectedService && labels.servicePackages[selectedService]
      ? labels.servicePackages[selectedService]
      : labels.servicePackages["web-sitesi-gelistirme"];

  const unknownOption = labels.budgetOptions.find(
    (o) => o.value === "belirsiz",
  )!;
  const packageOptions = [...basePackageOptions, unknownOption];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: phoneNumber.trim()
        ? `${phoneCountryCode} ${phoneNumber.trim()}`
        : undefined,
      service: selectedService,
      servicePackage: selectedPackage,
      serviceTier: selectedTier,
      budget: selectedBudget,
      content:
        (
          form.elements.namedItem("content") as HTMLTextAreaElement
        ).value.trim() || "",
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
          onClick={() => {
            setFormState("idle");
            setSelectedService("");
            setSelectedPackage("");
            setSelectedTier("");
            setSelectedBudget("");
            setPhoneCountryCode(defaultPhoneCountryCode);
            setPhoneNumber("");
          }}
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
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelBase}>
            <span className={labelText}>
              {labels.fieldName}
              <span className="ml-1 text-brand-accent" aria-hidden>
                *
              </span>
            </span>
          </label>
          <ContactFormFieldShell>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              placeholder={labels.fieldNamePlaceholder}
              className={inputInner}
            />
          </ContactFormFieldShell>
        </div>
        <div>
          <label htmlFor="cf-email" className={labelBase}>
            <span className={labelText}>
              {labels.fieldEmail}
              <span className="ml-1 text-brand-accent" aria-hidden>
                *
              </span>
            </span>
          </label>
          <ContactFormFieldShell>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={labels.fieldEmailPlaceholder}
              className={inputInner}
            />
          </ContactFormFieldShell>
        </div>
      </div>

      <div>
        <label htmlFor="cf-phone" className={labelBase}>
          <span className={labelText}>{labels.fieldPhone}</span>
          <span className="ml-1.5 text-[0.75rem] font-normal text-muted-foreground">
            ({labels.fieldPhoneOptional})
          </span>
        </label>
        <ContactPhoneField
          id="cf-phone"
          placeholder={labels.fieldPhonePlaceholder}
          countryCodeLabel={labels.fieldPhoneCountryLabel}
          countryCode={phoneCountryCode}
          phoneNumber={phoneNumber}
          onCountryCodeChange={setPhoneCountryCode}
          onPhoneNumberChange={setPhoneNumber}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-service" className={labelBase}>
            <span className={labelText}>
              {labels.fieldService}
              <span className="ml-1 text-brand-accent" aria-hidden>
                *
              </span>
            </span>
          </label>
          <ContactFormSelect
            id="cf-service"
            name="service"
            required
            placeholder={labels.fieldServicePlaceholder}
            options={labels.serviceOptions}
            value={selectedService}
            onChange={(value) => {
              setSelectedService(value);
              setSelectedPackage("");
            }}
          />
        </div>
        <div>
          <label htmlFor="cf-package" className={labelBase}>
            <span className={labelText}>
              {labels.fieldPackage}
              <span className="ml-1 text-brand-accent" aria-hidden>
                *
              </span>
            </span>
          </label>
          <ContactFormSelect
            id="cf-package"
            name="servicePackage"
            required
            placeholder={labels.fieldPackagePlaceholder}
            options={packageOptions}
            value={selectedPackage}
            onChange={setSelectedPackage}
          />
        </div>
        <div>
          <label htmlFor="cf-tier" className={labelBase}>
            <span className={labelText}>
              {labels.fieldTier}
              <span className="ml-1 text-brand-accent" aria-hidden>
                *
              </span>
            </span>
          </label>
          <ContactFormSelect
            id="cf-tier"
            name="serviceTier"
            required
            placeholder={labels.fieldTierPlaceholder}
            options={labels.tierOptions}
            value={selectedTier}
            onChange={setSelectedTier}
          />
        </div>
        <div>
          <label htmlFor="cf-budget" className={labelBase}>
            <span className={labelText}>
              {labels.fieldBudget}
              <span className="ml-1 text-brand-accent" aria-hidden>
                *
              </span>
            </span>
          </label>
          <ContactFormSelect
            id="cf-budget"
            name="budget"
            required
            placeholder={labels.fieldBudgetPlaceholder}
            options={labels.budgetOptions}
            value={selectedBudget}
            onChange={setSelectedBudget}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-content" className={labelBase}>
          <span className={labelText}>{labels.fieldMessage}</span>
          <span className="ml-1.5 text-[0.75rem] font-normal text-muted-foreground">
            ({labels.fieldMessageOptional})
          </span>
        </label>
        <ContactFormFieldShell>
          <textarea
            id="cf-content"
            name="content"
            maxLength={2000}
            rows={4}
            placeholder={labels.fieldMessagePlaceholder}
            className={cn(inputInner, "resize-none leading-relaxed")}
          />
        </ContactFormFieldShell>
      </div>

      {formState === "error" && errorMsg && (
        <p
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className={cn(
          "group relative flex h-12 w-full items-center justify-center gap-2 overflow-visible rounded-full px-8",
          "border-trace-hover-fallback box-border border-[3px] border-solid border-transparent",
          "bg-transparent text-sm font-semibold text-white",
          "transition-all duration-1000 ease-in-out motion-reduce:transition-none",
          "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-accent/25",
          "disabled:pointer-events-none disabled:opacity-60",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-[-3px] rounded-full bg-brand-accent",
            "shadow-[0_4px_14px_rgb(58_107_82/0.25)] transition-all duration-1000 ease-in-out motion-reduce:transition-none",
            "group-hover:bg-[#325a45] group-hover:shadow-[0_6px_18px_rgb(58_107_82/0.3)]",
            "group-disabled:shadow-none",
          )}
        />
        <BorderTrace durationSec={2.5} radius={24} />
        <span className="relative z-10 inline-flex items-center gap-2">
          {formState === "submitting" ? (
            <>
              <LuLoader className="size-4 animate-spin" aria-hidden />
              {labels.submitting}
            </>
          ) : (
            labels.submitButton
          )}
        </span>
      </button>
    </form>
  );
}
