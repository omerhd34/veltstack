import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Veltstack",
    short_name: "Veltstack",
    description: "Full Stack Developer — Veltstack",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0F",
    theme_color: "#6C63FF",
    icons: [
      {
        src: "/images/favicons/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/favicons/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
