// Falls back to a reserved placeholder domain (RFC 2606) until a real
// production domain is set via NEXT_PUBLIC_SITE_URL — update the env var
// before deploying so canonical URLs, sitemap, and Open Graph tags are correct.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://khawaja-associates.example";

export const SITE_NAME = "Khawaja and Associates";
