import { getTranslations } from "next-intl/server";
import { ClientLogosSlider } from "./ClientLogosSlider";

interface ClientLogosSectionProps {
  className?: string;
}

export async function ClientLogosSection({
  className,
}: ClientLogosSectionProps) {
  const t = await getTranslations("home");

  return (
    <section
      className={`border-y border-border bg-muted/30 px-4 py-16 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-site">
        <p className="mb-8 text-center text-sm text-muted-foreground">
          {t("clientLogosLabel")}
        </p>
        <ClientLogosSlider />
      </div>
    </section>
  );
}
