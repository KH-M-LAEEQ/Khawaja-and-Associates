import { SITE_URL } from "@/lib/siteConfig";
import { practiceAreas } from "@/lib/practiceAreas";
import { teamMembers } from "@/lib/team";
import { publications } from "@/lib/publications";

export default function sitemap() {
  const staticRoutes = ["", "/practice", "/team", "/publications"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const practiceRoutes = practiceAreas.map((area) => ({
    url: `${SITE_URL}/practice/${area.slug}`,
    lastModified: new Date(),
  }));

  const teamRoutes = teamMembers.map((member) => ({
    url: `${SITE_URL}/team/${member.slug}`,
    lastModified: new Date(),
  }));

  // Placeholder publications (title/cover not yet supplied by the firm) are
  // excluded from the sitemap so search engines aren't asked to index
  // "REPLACE WITH BOOK TITLE" pages — they're still reachable via internal
  // links and will be included once real data replaces the placeholder.
  const publicationRoutes = publications
    .filter((book) => !book.placeholder)
    .map((book) => ({
      url: `${SITE_URL}/publications/${book.slug}`,
      lastModified: new Date(),
    }));

  return [...staticRoutes, ...practiceRoutes, ...teamRoutes, ...publicationRoutes];
}
