import Link from "next/link";
import { notFound } from "next/navigation";
import { practiceAreas, getPracticeArea } from "@/lib/practiceAreas";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return {
    title: `${area.title} | Khawaja and Associates`,
    description: area.metaDescription,
  };
}

export default async function PracticeAreaPage({ params }) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  return (
    <main>
      <section className="pt-16 md:pt-20 px-[7vw] pb-0">
        <Link className="text-ink font-bold text-[12px] no-underline border-b border-brass pb-1" href="/practice">
          ← All practice areas
        </Link>
        <div className="eyebrow mt-6">{area.categoryLabel}</div>
        <h1 className="font-serif font-medium text-display-l mt-3 mb-3">{area.title}</h1>
        <p className="font-serif text-[19px] leading-[1.5] text-[#39434c] max-w-[700px]">{area.lead}</p>
      </section>

      <section className="pt-14 pb-24 px-[7vw]">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-[8vw]">
          <div>
            <h2 className="font-serif text-[26px] mb-6">Our expertise</h2>
            <ul className="grid gap-3.5 list-none p-0 m-0">
              {area.expertise.map((item) => (
                <li
                  key={item}
                  className="relative pl-6 text-[14px] text-[#39434c] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[1px] before:bg-brass"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-[26px] mb-6">How we can help</h2>
            <p className="text-[#68717a] text-[14px] mb-4">
              Our approach combines technical knowledge of Pakistan&apos;s tax framework with direct, practical
              representation. We work closely with clients to understand the commercial context behind each
              matter and to identify the most defensible and efficient path forward.
            </p>
            <p className="text-[#68717a] text-[14px] mb-4">
              Whether you are facing a routine compliance requirement or a complex dispute, the chamber is
              available to advise, represent and guide you through the relevant process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-[7vw] bg-[#b18b4d] text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="font-mono text-label uppercase text-[#e8d7b6]">LET&apos;S DISCUSS YOUR MATTER</div>
          <h2 className="font-serif font-medium text-display-l mt-3">
            Have a matter involving
            <br />
            {area.ctaTopic} that needs <em className="italic text-white">counsel?</em>
          </h2>
        </div>
        <Link className="btn-light" href="/#contact">
          Contact the Chamber →
        </Link>
      </section>
    </main>
  );
}
