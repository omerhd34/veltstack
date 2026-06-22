interface LocalBusinessSchemaProps {
  className?: string;
}

export function LocalBusinessSchema({ className }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Veltstack",
    url: "https://www.veltstack.com",
    description:
      "Full Stack Developer — kurumsal web sitesi, e-ticaret, mobil uygulama ve SEO hizmetleri.",
  };

  return (
    <script
      type="application/ld+json"
      className={className}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
