import { SiteContainer } from "@/components/layout/SiteContainer";
import { ContactFormFields } from "./ContactFormFields";
import {
  ContactInfo,
  ContactSectionBadge,
  ContactSectionHeader,
  ContactSectionTitle,
} from "./ContactInfo";
import { ContactWorkflowSection } from "./ContactWorkflowSection";

interface SelectOption {
  value: string;
  label: string;
}

interface ContactItem {
  label: string;
  value?: string;
  href?: string;
}

interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
  timing: string;
}

interface ContactFormProps {
  formBadge: string;
  formTitle: string;

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
  servicePackages: Record<string, SelectOption[]>;
  budgetOptions: SelectOption[];

  infoBadge: string;
  infoTitle: string;
  contactItems: ContactItem[];

  workflowBadge: string;
  workflowTitleLead: string;
  workflowTitleAccent: string;
  workflowSubtitle: string;
  workflowSteps: WorkflowStep[];

  className?: string;
}

export function ContactForm({
  formBadge,
  formTitle,
  infoBadge,
  infoTitle,
  contactItems,
  workflowBadge,
  workflowTitleLead,
  workflowTitleAccent,
  workflowSubtitle,
  workflowSteps,
  className,
  ...fieldLabels
}: ContactFormProps) {
  const formLabels = {
    ...fieldLabels,
    serviceOptions: fieldLabels.serviceOptions,
    tierOptions: fieldLabels.tierOptions,
    servicePackages: fieldLabels.servicePackages,
    budgetOptions: fieldLabels.budgetOptions,
  };

  const formCard = (
    <div className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-[0_2px_16px_rgb(0_0_0/0.04)] sm:p-8">
      <ContactFormFields labels={formLabels} />
    </div>
  );

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-title"
      className={`scroll-mt-16 bg-[#F8F9FA] pt-10 pb-16 md:pt-12 md:pb-20 ${className ?? ""}`}
    >
      <SiteContainer>
        {/* Mobile */}
        <div className="flex flex-col gap-12 lg:hidden">
          <section>
            <ContactSectionHeader
              badge={formBadge}
              title={formTitle}
              titleAs="h1"
              titleId="contact-form-title"
            />
            <div className="mt-10">{formCard}</div>
          </section>

          <ContactInfo
            badge={infoBadge}
            title={infoTitle}
            items={contactItems}
            showHeader={false}
          />
        </div>

        {/* Desktop: sol başlık + içerik, sağda yalnızca kanallar */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_380px] lg:grid-rows-[auto_1fr] lg:items-stretch lg:gap-x-16 lg:gap-y-10 xl:gap-x-20">
          <div>
            <ContactSectionBadge badge={formBadge} />
            <div className="mt-5">
              <ContactSectionTitle
                title={formTitle}
                titleAs="h1"
                titleId="contact-form-title"
              />
            </div>
          </div>
          <div aria-hidden />
          <div className="h-full">{formCard}</div>
          <ContactInfo
            badge={infoBadge}
            title={infoTitle}
            items={contactItems}
            showHeader={false}
            stretchItems
            className="h-full"
          />
        </div>

        <div className="mt-16 rounded-3xl border border-border/60 bg-card p-8 shadow-[0_2px_16px_rgb(0_0_0/0.04)] md:mt-20 md:p-12">
          <ContactWorkflowSection
            badge={workflowBadge}
            titleLead={workflowTitleLead}
            titleAccent={workflowTitleAccent}
            subtitle={workflowSubtitle}
            steps={workflowSteps}
          />
        </div>
      </SiteContainer>
    </section>
  );
}
