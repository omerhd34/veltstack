import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/hizmetler/web-sitesi",
        destination: "/hizmetler/web-sitesi-gelistirme",
        permanent: true,
      },
      {
        source: "/en/hizmetler/web-sitesi",
        destination: "/en/hizmetler/web-sitesi-gelistirme",
        permanent: true,
      },
      {
        source: "/hizmetler/uygulama",
        destination: "/hizmetler/uygulama-gelistirme",
        permanent: true,
      },
      {
        source: "/en/hizmetler/uygulama",
        destination: "/en/hizmetler/uygulama-gelistirme",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
