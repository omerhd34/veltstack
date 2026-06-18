import { SiteContainer } from "@/components/layout/SiteContainer";
import { ContactFormFields } from "./ContactFormFields";
import { ContactInfo } from "./ContactInfo";
import { ContactProcess } from "./ContactProcess";

interface SelectOption {
  value: string;
  label: string;
}

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface ContactFormProps {
  formBadge: string;
  formTitle: string;
  formSubtitle: string;

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

  infoBadge: string;
  infoTitle: string;
  contactItems: ContactItem[];

  responseTimeBadge: string;
  responseTimeValue: string;
  responseTimeNote: string;
  processTitle: string;
  processSteps: ProcessStep[];

  className?: string;
}

export function ContactForm({
  formBadge,
  formTitle,
  formSubtitle,
  infoBadge,
  infoTitle,
  contactItems,
  responseTimeBadge,
  responseTimeValue,
  responseTimeNote,
  processTitle,
  processSteps,
  className,
  ...fieldLabels
}: ContactFormProps) {
  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-title"
      className={`scroll-mt-16 bg-[#F8F9FA] py-20 md:py-28 ${className ?? ""}`}
    >
      <SiteContainer className="px-6 sm:px-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16 xl:gap-20">
          {/* Left – Form */}
          <div>
            <span className="inline-block rounded-full border border-brand-accent/30 bg-brand-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              {formBadge}
            </span>
            <h2
              id="contact-form-title"
              className="mt-5 font-(family-name:--font-heading) text-3xl font-bold tracking-tight md:text-4xl"
            >
              {formTitle}
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
              {formSubtitle}
            </p>

            <div className="mt-10 rounded-2xl border border-border/60 bg-card p-6 shadow-[0_2px_16px_rgb(0_0_0/0.04)] sm:p-8">
              <ContactFormFields
                labels={{
                  ...fieldLabels,
                  serviceOptions: fieldLabels.serviceOptions,
                  budgetOptions: fieldLabels.budgetOptions,
                }}
              />
            </div>
          </div>

          {/* Right – Info + Process */}
          <div className="flex flex-col gap-8 lg:pt-22">
            <ContactInfo
              badge={infoBadge}
              title={infoTitle}
              items={contactItems}
            />

            <div className="h-px bg-border/60" aria-hidden />

            <ContactProcess
              responseTimeBadge={responseTimeBadge}
              responseTimeValue={responseTimeValue}
              responseTimeNote={responseTimeNote}
              processTitle={processTitle}
              processSteps={processSteps}
            />
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
