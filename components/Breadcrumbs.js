import Link from "next/link";
import { SITE_URL } from "@/lib/siteConfig";

// items: [{ label, href }, ...] — the last item is treated as the current
// page (rendered without a link) regardless of whether it has an href.
export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] tracking-[0.04em] text-[#7a756e]">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">/</span>}
                {isLast || !item.href ? (
                  <span className="text-[#7a756e]" aria-current={isLast ? "page" : undefined}>
                    {item.label}
                  </span>
                ) : (
                  <Link className="text-[#7a756e] hover:text-brass transition-colors" href={item.href}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
