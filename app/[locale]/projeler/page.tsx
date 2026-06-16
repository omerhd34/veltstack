import { setRequestLocale } from "next-intl/server";
import { ProjectsPageView } from "@/components/pages/projects";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProjectsPageView />;
}
