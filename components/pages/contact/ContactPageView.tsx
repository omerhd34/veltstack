import { getTranslations } from "next-intl/server";
import { ContactHero } from "./ContactHero";
import { ContactForm } from "./ContactForm";

interface ContactPageViewProps {
  className?: string;
}

export async function ContactPageView({ className }: ContactPageViewProps) {
  const t = await getTranslations("contact");

  const heroQuickContacts = t.raw("heroQuickContacts") as {
    label: string;
    value: string;
    href: string;
  }[];

  const serviceOptions = t.raw("serviceOptions") as {
    value: string;
    label: string;
  }[];

  const budgetOptions = t.raw("budgetOptions") as {
    value: string;
    label: string;
  }[];

  const contactItems = t.raw("contactItems") as {
    label: string;
    value: string;
    href?: string;
  }[];

  const processSteps = t.raw("processSteps") as {
    step: string;
    title: string;
    desc: string;
  }[];

  return (
    <div className={className}>
      <ContactHero
        badge={t("heroBadge")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        scrollLabel={t("heroScrollLabel")}
        quickContacts={heroQuickContacts}
      />

      <ContactForm
        formBadge={t("formBadge")}
        formTitle={t("formTitle")}
        formSubtitle={t("formSubtitle")}
        fieldName={t("fieldName")}
        fieldNamePlaceholder={t("fieldNamePlaceholder")}
        fieldEmail={t("fieldEmail")}
        fieldEmailPlaceholder={t("fieldEmailPlaceholder")}
        fieldPhone={t("fieldPhone")}
        fieldPhonePlaceholder={t("fieldPhonePlaceholder")}
        fieldPhoneOptional={t("fieldPhoneOptional")}
        fieldSubject={t("fieldSubject")}
        fieldSubjectPlaceholder={t("fieldSubjectPlaceholder")}
        fieldService={t("fieldService")}
        fieldServicePlaceholder={t("fieldServicePlaceholder")}
        fieldBudget={t("fieldBudget")}
        fieldBudgetPlaceholder={t("fieldBudgetPlaceholder")}
        fieldMessage={t("fieldMessage")}
        fieldMessagePlaceholder={t("fieldMessagePlaceholder")}
        fieldRequired={t("fieldRequired")}
        submitButton={t("submitButton")}
        submitting={t("submitting")}
        successTitle={t("successTitle")}
        successMessage={t("successMessage")}
        successButtonBack={t("successButtonBack")}
        errorMessage={t("errorMessage")}
        serviceOptions={serviceOptions}
        budgetOptions={budgetOptions}
        infoBadge={t("infoBadge")}
        infoTitle={t("infoTitle")}
        contactItems={contactItems}
        responseTimeBadge={t("responseTimeBadge")}
        responseTimeValue={t("responseTimeValue")}
        responseTimeNote={t("responseTimeNote")}
        processTitle={t("processTitle")}
        processSteps={processSteps}
      />
    </div>
  );
}
