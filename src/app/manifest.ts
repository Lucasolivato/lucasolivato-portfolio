import type { MetadataRoute } from "next";
import { home, person } from "@/app/resources/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: home.title,
    short_name: person.firstName,
    description: home.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0C0E0F",
    theme_color: "#0C0E0F",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
