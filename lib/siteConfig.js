// Falls back to the production domain until NEXT_PUBLIC_SITE_URL overrides it —
// keep the env var set in deployment so canonical URLs, sitemap, and Open Graph
// tags stay correct if the domain ever changes.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://khawajalaw.site";

export const SITE_NAME = "Khawaja and Associates";
