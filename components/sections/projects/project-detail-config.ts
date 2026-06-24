import type { ProjectSlug } from "./project-items";

export const projectTechStacks: Record<ProjectSlug, string[]> = {
  iqfinansai: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Prisma",
    "MySQL",
    "Redux",
    "REST API",
    "Railway",
    "Shopier",
    "CollectAPI",
  ],
  "yazici-ticaret": [
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "Mongoose",
    "Node.js",
    "REST API",
    "Vercel",
  ],
  fablessi: [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "MySQL",
    "Prisma",
    "REST API",
    "Vercel",
  ],
  "uzman-klinik-psikolog": [
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "MySQL",
    "Prisma",
    "Node.js",
    "REST API",
    "Vercel",
  ],
  portfolio: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "next-intl",
    "Vercel",
  ],
  onlinemuhasebe: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Prisma",
    "MongoDB",
    "REST API",
    "Vercel",
  ],
};

export const projectDemoUrls: Record<ProjectSlug, string> = {
  iqfinansai: "https://www.iqfinansai.com/",
  "yazici-ticaret": "https://yazici.gen.tr/",
  fablessi: "https://www.fablessi.com/",
  "uzman-klinik-psikolog": "https://www.nisademir.com/",
  portfolio: "https://www.omerhalisdemir.com.tr/",
  onlinemuhasebe: "https://www.onlinemuhasebe.org/",
};

export const projectImageUrls: Partial<Record<ProjectSlug, string>> = {
  iqfinansai: "/images/IQfinansAI.png",
  "yazici-ticaret": "/images/YazıcıTicaret.png",
};

export const projectCoverGradients: Record<ProjectSlug, string> = {
  iqfinansai: "from-[#0a2e1f] via-[#145c3a] to-[#1a7a4a]",
  "yazici-ticaret": "from-[#1a2f4f] via-[#2a4a72] to-[#3a6090]",
  fablessi: "from-[#1e3d24] via-[#2d5c35] to-[#4a8f55]",
  "uzman-klinik-psikolog": "from-[#2a2540] via-[#3d3560] to-[#5a4f85]",
  portfolio: "from-[#1a2a3a] via-[#2a4058] to-[#3a5878]",
  onlinemuhasebe: "from-[#0a1628] via-[#1a3a6a] to-[#2563eb]",
};
