import { SITE_URL } from "@/lib/siteConfig";
import { practiceAreas } from "@/lib/practiceAreas";
import { teamMembers } from "@/lib/team";

export default function sitemap() {
  const staticRoutes = ["", "/practice", "/team"].map((path) => ({
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

  return [...staticRoutes, ...practiceRoutes, ...teamRoutes];
}
