import type { MetadataRoute } from "next";
import prisma from "@/lib/prisma";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const staticPages = [
  "/",
  "/hizmetler",
  "/projeler",
  "/blog",
  "/hakkimda",
  "/iletisim",
] as const;

function localizedUrl(locale: (typeof routing.locales)[number], href: string) {
  return `https://www.veltstack.com${getPathname({ locale, href })}`;
}
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = staticPages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, page),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "/" ? 1 : 0.8,
    })),
  );

  try {
    const [projects, posts, services] = await Promise.all([
      prisma.project.findMany({ select: { slug: true, createdAt: true } }),
      prisma.post.findMany({
        where: { isPublished: true },
        select: { slug: true, updatedAt: true },
      }),
      prisma.service.findMany({ select: { slug: true } }),
    ]);

    const serviceEntries = services.flatMap((service: { slug: string }) =>
      routing.locales.map((locale) => ({
        url: localizedUrl(locale, `/hizmetler/${service.slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.9,
      })),
    );

    const projectEntries = projects.flatMap(
      (project: { slug: string; createdAt: Date }) =>
        routing.locales.map((locale) => ({
          url: localizedUrl(locale, `/projeler/${project.slug}`),
          lastModified: project.createdAt,
          changeFrequency: "yearly" as const,
          priority: 0.7,
        })),
    );

    const postEntries = posts.flatMap(
      (post: { slug: string; updatedAt: Date }) =>
        routing.locales.map((locale) => ({
          url: localizedUrl(locale, `/blog/${post.slug}`),
          lastModified: post.updatedAt,
          changeFrequency: "weekly" as const,
          priority: 0.8,
        })),
    );

    return [
      ...staticEntries,
      ...serviceEntries,
      ...projectEntries,
      ...postEntries,
    ];
  } catch {
    return staticEntries;
  }
}
