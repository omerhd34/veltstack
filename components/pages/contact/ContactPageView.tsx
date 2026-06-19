import { getTranslations } from "next-intl/server";
import { ContactForm } from "./ContactForm";

interface ContactPageViewProps {
  className?: string;
}

export async function ContactPageView({ className }: ContactPageViewProps) {
  const t = await getTranslations("contact");

  const serviceOptions = t.raw("serviceOptions") as {
    value: string;
    label: string;
  }[];

  const tierOptions = t.raw("tierOptions") as {
    value: string;
    label: string;
  }[];

  const servicePackages = t.raw("servicePackages") as Record<
    string,
    { value: string; label: string }[]
  >;

  const budgetOptions = t.raw("budgetOptions") as {
    value: string;
    label: string;
  }[];

  const contactItems = t.raw("contactItems") as {
    label: string;
    value?: string;
    href?: string;
  }[];

  const workflowSteps = t.raw("workflowSteps") as {
    step: string;
    title: string;
    desc: string;
    timing: string;
  }[];

  return (
    <div className={className}>
      <ContactForm
        formBadge={t("formBadge")}
        formTitle={t("formTitle")}
        fieldName={t("fieldName")}
        fieldNamePlaceholder={t("fieldNamePlaceholder")}
        fieldEmail={t("fieldEmail")}
        fieldEmailPlaceholder={t("fieldEmailPlaceholder")}
        fieldPhone={t("fieldPhone")}
        fieldPhonePlaceholder={t("fieldPhonePlaceholder")}
        fieldPhoneCountryLabel={t("fieldPhoneCountryLabel")}
        fieldPhoneOptional={t("fieldPhoneOptional")}
        fieldService={t("fieldService")}
        fieldServicePlaceholder={t("fieldServicePlaceholder")}
        fieldPackage={t("fieldPackage")}
        fieldPackagePlaceholder={t("fieldPackagePlaceholder")}
        fieldTier={t("fieldTier")}
        fieldTierPlaceholder={t("fieldTierPlaceholder")}
        fieldBudget={t("fieldBudget")}
        fieldBudgetPlaceholder={t("fieldBudgetPlaceholder")}
        fieldMessage={t("fieldMessage")}
        fieldMessageOptional={t("fieldMessageOptional")}
        fieldMessagePlaceholder={t("fieldMessagePlaceholder")}
        submitButton={t("submitButton")}
        submitting={t("submitting")}
        successTitle={t("successTitle")}
        successMessage={t("successMessage")}
        successButtonBack={t("successButtonBack")}
        errorMessage={t("errorMessage")}
        serviceOptions={serviceOptions}
        tierOptions={tierOptions}
        servicePackages={servicePackages}
        budgetOptions={budgetOptions}
        infoBadge={t("infoBadge")}
        infoTitle={t("infoTitle")}
        contactItems={contactItems}
        workflowBadge={t("workflowBadge")}
        workflowTitleLead={t("workflowTitleLead")}
        workflowTitleAccent={t("workflowTitleAccent")}
        workflowSubtitle={t("workflowSubtitle")}
        workflowSteps={workflowSteps}
      />
    </div>
  );
}
