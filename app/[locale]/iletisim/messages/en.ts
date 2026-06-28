export const contactEn = {
  formBadge: "Send a Message",
  formTitle: "Tell us about your project",

  fieldName: "Full Name",
  fieldNamePlaceholder: "Your first and last name",
  fieldEmail: "Email",
  fieldEmailPlaceholder: "example@company.com",
  fieldPhone: "Phone",
  fieldPhonePlaceholder: "5XX XXX XX XX",
  fieldPhoneCountryLabel: "Country code",
  fieldPhoneOptional: "optional",
  fieldService: "Service Type",
  fieldServicePlaceholder: "Select a service.",
  fieldPackage: "Package Selection",
  fieldPackagePlaceholder: "Select a package.",
  fieldTier: "Tier",
  fieldTierPlaceholder: "Select a tier.",
  fieldBudget: "Budget Range",
  fieldBudgetPlaceholder: "Select a budget.",
  fieldMessage: "Your Message",
  fieldMessageOptional: "optional",
  fieldMessagePlaceholder:
    "Describe your project, expectations, and any technical requirements…",

  serviceOptions: [
    { value: "web-sitesi-gelistirme", label: "Web Site Development" },
    { value: "web-sitesi-yenileme", label: "Web & App Redesign" },
    { value: "uygulama-gelistirme", label: "App Development" },
    { value: "seo-hizmetleri", label: "SEO Services" },
    { value: "teknik-denetim", label: "Technical Audit" },
    { value: "bakim-ve-destek", label: "Maintenance & Support" },
    { value: "diger", label: "Other / Not sure yet" },
  ],

  tierOptions: [
    { value: "temel", label: "Basic" },
    { value: "standart", label: "Standard" },
    { value: "pro", label: "Pro" },
    { value: "belirsiz", label: "Not sure yet" },
  ],

  servicePackages: {
    "web-sitesi-gelistirme": [
      { value: "portfolio", label: "Portfolio / Showcase Website" },
      { value: "corporate", label: "Corporate Website" },
      { value: "ecommerce", label: "E-Commerce Website" },
    ],
    "web-sitesi-yenileme": [
      { value: "portfolio", label: "Portfolio / Showcase Site Redesign" },
      { value: "corporate", label: "Corporate Website Redesign" },
      { value: "ecommerce", label: "E-Commerce Website Redesign" },
    ],
    "uygulama-gelistirme": [
      { value: "portfolio", label: "Showcase / Portfolio App" },
      { value: "corporate", label: "Corporate Mobile App" },
      { value: "ecommerce", label: "E-Commerce Mobile App" },
    ],
    "seo-hizmetleri": [
      { value: "seoServices", label: "Digital Marketing & SEO" },
    ],
    "teknik-denetim": [
      { value: "webAudit", label: "Website Technical Audit" },
      { value: "appAudit", label: "Mobile App Technical Audit" },
      {
        value: "infrastructureAudit",
        label: "Infrastructure & Security Audit",
      },
    ],
    "bakim-ve-destek": [
      { value: "maintenanceServices", label: "Maintenance & Support Services" },
    ],
  },

  budgetOptions: [
    { value: "0k-15k", label: "$0 - $500" },
    { value: "15k-25k", label: "$500 - $750" },
    { value: "25k-50k", label: "$750 - $1,500" },
    { value: "50k-75k", label: "$1,500 - $2,200" },
    { value: "75k-100k", label: "$2,200 - $3,000" },
    { value: "100k+", label: "$3,000+" },
    { value: "belirsiz", label: "Not sure yet" },
  ],

  submitButton: "Send and Get a Quote",
  submitting: "Sending…",

  successTitle: "Your message has been sent!",
  successMessage:
    "Our expert team will get back to you as soon as possible, usually within 24 hours with a customized roadmap. Thank you!",
  successButtonBack: "Send another message",

  errorMessage:
    "Something went wrong. Please try again or send an email directly.",

  infoBadge: "Contact Channels",
  infoTitle: "Reach out on your preferred channel.",

  contactItems: [
    { label: "Phone", value: "+90 507 849 29 03", href: "tel:+905078492903" },
    {
      label: "WhatsApp",
      href: "https://wa.me/905078492903",
      value: "+90 507 849 29 03",
    },
    {
      label: "Email",
      value: "demirome123@gmail.com",
      href: "mailto:demirome123@gmail.com",
    },
    {
      label: "Portfolio | Ömer Halis Demir",
      value: "omerhalisdemir.com.tr",
      href: "https://www.omerhalisdemir.com.tr/",
    },
    {
      label: "LinkedIn",
      value: "ömer-halis-demir-7a9b79169",
      href: "https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169",
    },
    {
      label: "GitHub",
      value: "omerhd34",
      href: "https://github.com/omerhd34",
    },
  ],

  workflowBadge: "Our process",
  workflowTitleLead: "From form to project,",
  workflowTitleAccent: "four steps are enough.",
  workflowSubtitle:
    "From submission to proposal to kickoff, we tell you what happens at each stage upfront.",
  workflowSteps: [
    {
      step: "1",
      title: "Fill Out the Form",
      desc: "Share a few project basics, the form takes just a few minutes.",
      timing: "1 minute",
    },
    {
      step: "2",
      title: "We Review Your Request",
      desc: "We review your goals, clarify scope together, and confirm the best approach within 24 hours.",
      timing: "Within 24 hours",
    },
    {
      step: "3",
      title: "We Prepare Your Proposal",
      desc: "We prepare and send a detailed proposal covering scope, cost, and delivery timeline.",
      timing: "Within 48 hours",
    },
    {
      step: "4",
      title: "We Start the Project",
      desc: "After approval, we start development and keep you updated throughout.",
      timing: "Immediately",
    },
  ],
} as const;
