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
    "MongoDB",
    "Prisma",
    "Node.js",
    "REST API",
    "Vercel",
  ],
};

export const projectDemoUrls: Record<ProjectSlug, string> = {
  iqfinansai: "https://www.iqfinansai.com/",
  "yazici-ticaret": "https://yazici.gen.tr/",
  fablessi: "https://www.fablessi.com/",
  "uzman-klinik-psikolog": "https://www.nisademir.com/",
};

export const projectImageUrls: Partial<Record<ProjectSlug, string>> = {
  iqfinansai: "/IQfinansAI.png",
  "yazici-ticaret": "/YazıcıTicaret.png",
};

export const projectCoverGradients: Record<ProjectSlug, string> = {
  iqfinansai: "from-[#0a2e1f] via-[#145c3a] to-[#1a7a4a]",
  "yazici-ticaret": "from-[#1a2f4f] via-[#2a4a72] to-[#3a6090]",
  fablessi: "from-[#1e3d24] via-[#2d5c35] to-[#4a8f55]",
  "uzman-klinik-psikolog": "from-[#2a2540] via-[#3d3560] to-[#5a4f85]",
};
