export const contactEn = {
  heroBadge: "Contact",
  heroTitle: "Let's bring your project to life together",
  heroSubtitle:
    "Fill in the form or reach out directly for a new project, collaboration, or technical consultation — I usually respond within 24 hours.",
  heroScrollLabel: "Go to form",
  heroQuickContacts: [
    { label: "Phone", value: "+90 507 849 29 03", href: "tel:+905078492903" },
    {
      label: "Email",
      value: "demirome123@gmail.com",
      href: "mailto:demirome123@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "Ömer Halis Demir",
      href: "https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169",
    },
  ],

  formBadge: "Send a Message",
  formTitle: "Tell me about your project",
  formSubtitle:
    "Fill in the form below to share your needs — I'll get back to you with a tailored assessment on scope, timeline, and pricing.",

  fieldName: "Full Name",
  fieldNamePlaceholder: "Your first and last name",
  fieldEmail: "Email",
  fieldEmailPlaceholder: "example@domain.com",
  fieldPhone: "Phone",
  fieldPhonePlaceholder: "+90 5XX XXX XX XX",
  fieldPhoneOptional: "optional",
  fieldSubject: "Subject",
  fieldSubjectPlaceholder: "e.g. Corporate website redesign",
  fieldService: "Service Type",
  fieldServicePlaceholder: "Select a service",
  fieldBudget: "Budget Range",
  fieldBudgetPlaceholder: "Select a budget",
  fieldMessage: "Your Message",
  fieldMessagePlaceholder:
    "Describe your project, expectations, and any technical requirements…",
  fieldRequired: "Required field",

  serviceOptions: [
    { value: "kurumsal-web", label: "Corporate Website" },
    { value: "e-ticaret", label: "E-Commerce" },
    { value: "mobil-uygulama", label: "Mobile Application" },
    { value: "seo", label: "SEO Optimization" },
    { value: "diger", label: "Other / Not sure yet" },
  ],

  budgetOptions: [
    { value: "0k-15k", label: "$0 – $500" },
    { value: "15k-25k", label: "$500 – $750" },
    { value: "25k-50k", label: "$750 – $1,500" },
    { value: "50k-75k", label: "$1,500 – $2,200" },
    { value: "75k-100k", label: "$2,200 – $3,000" },
    { value: "100k+", label: "$3,000+" },
    { value: "belirsiz", label: "Not sure yet" },
  ],

  submitButton: "Send Message",
  submitting: "Sending…",

  successTitle: "Your message has been sent!",
  successMessage:
    "I'll get back to you as soon as possible, usually within 24 hours. Thank you!",
  successButtonBack: "Send another message",

  errorMessage:
    "Something went wrong. Please try again or send an email directly.",

  infoBadge: "Direct Contact",
  infoTitle: "Reach out on your preferred channel",

  contactItems: [
    { label: "Phone", value: "+90 507 849 29 03", href: "tel:+905078492903" },
    {
      label: "Email",
      value: "demirome123@gmail.com",
      href: "mailto:demirome123@gmail.com",
    },
    { label: "Location", value: "Istanbul / Turkey" },
    {
      label: "GitHub",
      value: "github.com/omerhd34",
      href: "https://github.com/omerhd34",
    },
    {
      label: "LinkedIn",
      value: "Ömer Halis Demir",
      href: "https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169",
    },
  ],

  responseTimeBadge: "Response Time",
  responseTimeValue: "~24 hours",
  responseTimeNote: "I usually reply the same day, within 24 hours at most.",

  processTitle: "How does it work?",
  processSteps: [
    {
      step: "01",
      title: "Send a message",
      desc: "Fill in the form or write directly.",
    },
    {
      step: "02",
      title: "Free consultation",
      desc: "We'll define scope, timeline, and pricing together.",
    },
    {
      step: "03",
      title: "Start building",
      desc: "Once agreed, I kick off development quickly.",
    },
  ],
} as const;
