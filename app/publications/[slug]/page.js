import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookCover from "@/components/BookCover";
import { publications, getPublication } from "@/lib/publications";
import { getTeamMemberByName } from "@/lib/team";
import { SITE_NAME } from "@/lib/siteConfig";

export function generateStaticParams() {
  return publications.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const book = getPublication(slug);
  if (!book) return {};
  return {
    title: book.placeholder ? "Publication" : book.title,
    description: book.description || `A publication by ${book.author || SITE_NAME}.`,
    robots: book.placeholder ? { index: false, follow: true } : undefined,
  };
}

export default async function PublicationPage({ params }) {
  const { slug } = await params;
  const book = getPublication(slug);
  if (!book) notFound();

  const author = book.author ? getTeamMemberByName(book.author) : null;

  const jsonLd = !book.placeholder
    ? {
        "@context": "https://schema.org",
        "@type": "Book",
        name: book.title,
        author: book.author ? { "@type": "Person", name: book.author } : undefined,
        datePublished: book.year || undefined,
        description: book.description || undefined,
      }
    : null;

  return (
    <main>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <section className="pt-16 md:pt-20 px-[7vw] pb-0">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Publications", href: "/publications" },
            { label: book.placeholder ? "Publication" : book.title },
          ]}
        />
      </section>

      <section className="pt-6 pb-24 px-[7vw]">
        {book.placeholder && (
          <div className="pending p-6 mb-10 max-w-[700px]">
            <span className="pending-tag">TODO</span>
            <p className="text-[13px] text-graphite leading-[1.7] pr-16">
              TODO: VERIFIED CONTENT REQUIRED — this publication&apos;s title, cover and description
              are placeholders pending verified information from the firm.
            </p>
          </div>
        )}
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-[8vw]">
          <div className="book-cover border border-line shadow-lift h-[380px]">
            <BookCover cover={book.cover} title={book.title || "Untitled"} />
          </div>
          <div>
            {book.year ? (
              <span className="font-mono text-[10px] tracking-[0.18em] text-[#8d7244]">{book.year}</span>
            ) : null}
            <h1 className="font-serif font-medium text-display-l mt-2 mb-3">{book.title || "Untitled"}</h1>
            {author ? (
              <p className="text-[13px] tracking-[0.05em] uppercase text-[#8d7244] mb-6">
                By{" "}
                <Link className="text-ink hover:text-brass transition-colors" href={`/team/${author.slug}`}>
                  {author.name}
                </Link>
              </p>
            ) : book.author ? (
              <p className="text-[13px] tracking-[0.05em] uppercase text-[#8d7244] mb-6">By {book.author}</p>
            ) : null}
            {book.description ? (
              <p className="text-[#68717a] text-[14px] leading-[1.7] max-w-[640px] mb-6">{book.description}</p>
            ) : null}
            {book.link ? (
              <a className="btn-primary" href={book.link} target="_blank" rel="noopener">
                More about this book →
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-[7vw] bg-[#b18b4d] text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="font-mono text-label uppercase text-[#e8d7b6]">LET&apos;S DISCUSS YOUR MATTER</div>
          <h2 className="font-serif font-medium text-display-l mt-3">
            Have a tax matter
            <br />
            that needs <em className="italic text-white">counsel?</em>
          </h2>
        </div>
        <Link className="btn-light" href="/#contact">
          Contact the Chamber →
        </Link>
      </section>
    </main>
  );
}
