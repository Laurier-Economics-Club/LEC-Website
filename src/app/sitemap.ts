import type { MetadataRoute } from "next"

import { site } from "@/content/site"

const paths = ["", "/about", "/events", "/team", "/join", "/contact"]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path || "/"}`,
  }))
}
