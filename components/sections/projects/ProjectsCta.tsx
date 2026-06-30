import { LuEye } from "react-icons/lu";
import { getTranslations } from "next-intl/server";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCtaLink";

interface ProjectsCtaProps {
  className?: string;
}

export async function ProjectsCta({ className }: ProjectsCtaProps) {
  const t = await getTranslations("home");

  return (
    <PrimaryCtaLink
      href="/projeler"
      className={className}
      showArrow={false}
      leadingIcon={<LuEye className="size-5" aria-hidden />}
    >
      {t("projectsCta")}
    </PrimaryCtaLink>
  );
}
