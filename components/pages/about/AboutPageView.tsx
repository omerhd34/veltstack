import { getTranslations } from "next-intl/server";
import { ProcessSection } from "@/components/sections/process";
import { ServicesPageCTA } from "@/components/pages/services/ServicesPageCTA";
import { AboutContact } from "./AboutContact";
import { AboutHero } from "./AboutHero";
import { AboutSkills } from "./AboutSkills";
import { AboutStory } from "./AboutStory";

interface AboutPageViewProps {
  className?: string;
}

export async function AboutPageView({ className }: AboutPageViewProps) {
  const t = await getTranslations("about");

  const stats = t.raw("stats") as { value: string; label: string }[];
  const skillGroups = t.raw("skillGroups") as { label: string; tech: string[] }[];
  const contactItems = t.raw("contactItems") as {
    label: string;
    value: string;
    href?: string;
  }[];

  return (
    <div className={className}>
      <AboutHero
        badge={t("heroBadge")}
        tagline={t("heroTagline")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        subtitleSecondary={t("heroSubtitleSecondary")}
        imageAlt={t("heroImageAlt")}
        scrollLabel={t("scrollLabel")}
        stats={stats}
      />
      <AboutStory
        profileBadge={t("profileBadge")}
        profileTitle={t("profileTitle")}
        paragraphs={t.raw("profileParagraphs") as string[]}
      />
      <AboutSkills
        badge={t("skillsBadge")}
        title={t("skillsTitle")}
        subtitle={t("skillsSubtitle")}
        groups={skillGroups}
      />
      <ProcessSection />
      <AboutContact
        badge={t("contactBadge")}
        title={t("contactTitle")}
        subtitle={t("contactSubtitle")}
        items={contactItems}
      />
      <ServicesPageCTA
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        buttonLabel={t("ctaButton")}
        note={t("ctaNote")}
      />
    </div>
  );
}
