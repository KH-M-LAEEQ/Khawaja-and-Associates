import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PublicationsSection from "@/components/PublicationsSection";

export const metadata = {
  title: "Publications",
  description: "Books and written works authored by members of Khawaja and Associates.",
};

export default function PublicationsPage() {
  return (
    <main>
      <section className="pt-16 md:pt-20 px-[7vw] pb-0">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Publications" }]} />
        <h1 className="font-serif font-medium text-display-l mt-3 mb-3">Publications</h1>
        <p className="font-serif text-[19px] leading-[1.5] text-[#39434c] max-w-[700px]">
          Books and written works authored by members of the chamber.
        </p>
      </section>

      <PublicationsSection />

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
