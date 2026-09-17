import Link from "next/link";
import { practiceAreas, categories } from "@/lib/practiceAreas";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Practice Areas",
  description:
    "Comprehensive tax counsel for individuals, companies and organizations operating in Pakistan.",
};

export default function PracticePage() {
  return (
    <main>
      <section className="pt-16 md:pt-20 px-[7vw] pb-16">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Practice Areas" }]} />
        <Link className="text-ink font-bold text-[12px] no-underline border-b border-brass pb-1" href="/#home">
          ← Back to home
        </Link>
        <h1 className="font-serif font-medium text-display-l mt-4 mb-3">Practice Areas</h1>
        <p className="font-serif text-[19px] leading-[1.5] text-[#39434c] max-w-[700px]">
          Comprehensive tax counsel for individuals, companies and organizations operating in Pakistan.
        </p>
      </section>

      <section className="py-16 md:py-20 px-[7vw] bg-[#121a22] text-[#f5f3ee]">
        {categories.map((cat, i) => {
          const areas = practiceAreas.filter((a) => a.category === cat.key);
          const cols = areas.length >= 3 ? "lg:grid-cols-3" : "";
          return (
            <div key={cat.key} className={i < categories.length - 1 ? "mb-14" : ""}>
              <div className="eyebrow !text-brass mb-5">{cat.label}</div>
              <div className={`grid sm:grid-cols-2 ${cols} border-t border-l border-[#3b444c]`}>
                {areas.map((area) => (
                  <Link
                    key={area.slug}
                    className="group p-7 border-r border-b border-[#3b444c] min-h-[190px] block no-underline transition-colors duration-200 hover:bg-brass"
                    href={`/practice/${area.slug}`}
                  >
                    <span className="font-mono text-[10px] text-brass group-hover:text-[#121922] transition-colors">
                      {area.categoryTag}
                    </span>
                    <h3 className="font-serif text-[22px] mt-5 mb-2 group-hover:text-[#121922] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-[12px] text-[#aeb5bc] group-hover:text-[#2b241a] transition-colors">
                      {area.cardDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="py-16 md:py-20 px-[7vw] bg-[#b18b4d] text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="font-mono text-label uppercase text-[#e8d7b6]">LET&apos;S DISCUSS YOUR MATTER</div>
          <h2 className="font-serif font-medium text-display-l mt-3">
            Have a tax matter that
            <br />
            needs <em className="italic text-white">counsel?</em>
          </h2>
        </div>
        <Link className="btn-light" href="/#contact">
          Contact the Chamber →
        </Link>
      </section>
    </main>
  );
}
