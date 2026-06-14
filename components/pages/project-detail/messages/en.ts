export const projectDetailsEn = {
  statusCompleted: "Completed",
  statusActive: "Active",
  demo: "Demo",
  showMore: "Show More",
  showLess: "Show Less",
  detailsTitle: "Project Details",
  featuresTitle: "All Features",
  teamTitle: "Team",
  roleTitle: "My Role",
  teamSolo: "Solo",
  roleFullStack: "Full Stack Developer",
  metricsTitle: "Project Metrics",
  iqfinansai: {
    summary:
      "A modern platform for AI-powered financial analysis, visualization and reporting.",
    details:
      "Frontend built with Next.js and React; Redux for state management. Node.js REST API, Prisma ORM and MySQL infrastructure. Interactive charts with Recharts and a PDF reporting module.",
    features: [
      "AI-powered financial analysis",
      "Interactive visualization with Recharts",
      "PDF reporting module",
      "User dashboard and data management",
      "RESTful API architecture",
      "Responsive, performance-focused UI",
    ],
    metrics: [
      {
        value: "12 weeks",
        label: "Development Time",
      },
      {
        value: "Active",
        label: "Status",
      },
      {
        value: "Integrated",
        label: "Payments",
      },
      {
        value: "500+",
        label: "Registered Users",
      },
    ],
  },
  "yazici-ticaret": {
    summary:
      "End-to-end e-commerce experience for white goods and electronics.",
    details:
      "Platform built with Next.js, React and Node.js; order tracking, admin panel and secure checkout flows. MongoDB database and Vercel deployment.",
    features: [
      "Secure payment integration",
      "Order tracking system",
      "Admin panel",
      "Responsive design",
      "SSR and SEO optimization",
      "Category and product management",
    ],
    metrics: [
      {
        value: "11 weeks",
        label: "Development Time",
      },
      {
        value: "Active",
        label: "Status",
      },
      {
        value: "Integrated",
        label: "Payments",
      },
    ],
  },
  "uzman-klinik-psikolog": {
    summary:
      "An appointment, SEO and trust-focused clinical psychologist website.",
    details:
      "Next.js and React frontend with a RESTful API layer backed by MongoDB and Prisma ORM. Server-side rendering, dynamic content management and responsive design with Tailwind CSS.",
    features: [
      "Appointment request system",
      "SEO optimization (SSR)",
      "Dynamic content management",
      "Contact form integration",
      "Responsive design",
      "Accessibility-focused interface",
    ],
    metrics: [
      {
        value: "4 weeks",
        label: "Development Time",
      },
      {
        value: "Active",
        label: "Status",
      },
    ],
  },
  fablessi: {
    summary:
      "Premium corporate product showcase for garden and balcony furniture.",
    details:
      "Corporate catalog site built with Next.js, React and Node.js. Hero carousel, WhatsApp and phone routing, Prisma and MySQL backend.",
    features: [
      "Corporate product catalog and presentation structure",
      "Quick contact via WhatsApp and phone",
      "Hero carousel and visual showcase",
      "Responsive premium visual design",
      "SEO-friendly page structure",
      "Easily updatable content areas",
    ],
    metrics: [
      {
        value: "30 days",
        label: "Development Time",
      },
      {
        value: "Corporate Catalog",
        label: "Site Type",
      },
      {
        value: "Garden & Balcony",
        label: "Industry",
      },
      {
        value: "Active",
        label: "Status",
      },
    ],
  },
} as const;
