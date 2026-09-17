import Link from "next/link";
import BookCover from "@/components/BookCover";
import { publications } from "@/lib/publications";

export default function PublicationsSection({ volumeOneOnly = false }) {
  const items = volumeOneOnly ? publications.filter((b) => b.volume === 1) : publications;
  const failed = items.length === 0;

  return (
    <section className="py-24 px-[7vw]" id="publications">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:items-end mb-10">
        <div>
          <div className="eyebrow">PUBLICATIONS</div>
          <h2 className="font-serif font-medium text-display-l mt-3">
            Authored <em className="italic text-brass">works.</em>
          </h2>
        </div>
        {volumeOneOnly && (
          <Link
            className="text-ink font-bold text-[12px] no-underline border-b border-brass pb-1 self-start"
            href="/publications"
          >
            View all Publications →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[60px]">
        {failed && (
          <p className="col-span-full text-[#8c7b5a] text-[13px] py-5">
            Publications are being updated — check back shortly.
          </p>
        )}
        {items.map((book, i) => (
          <article key={book.slug || book.title || i} className="book-card">
            {book.slug ? (
              <Link href={`/publications/${book.slug}`} className="book-cover block">
                <BookCover cover={book.cover} title={book.title || "Untitled"} />
              </Link>
            ) : book.link ? (
              <a href={book.link} target="_blank" rel="noopener" className="book-cover block">
                <BookCover cover={book.cover} title={book.title || "Untitled"} />
              </a>
            ) : (
              <div className="book-cover">
                <BookCover cover={book.cover} title={book.title || "Untitled"} />
              </div>
            )}
            <div className="book-info">
              {book.year ? <div className="book-year">{book.year}</div> : null}
              <h3>{book.title || "Untitled"}</h3>
              {book.author ? <p className="book-author">{book.author}</p> : null}
              {book.description ? <p>{book.description}</p> : null}
              {book.slug ? (
                <Link href={`/publications/${book.slug}`}>More about this book →</Link>
              ) : book.link ? (
                <a href={book.link} target="_blank" rel="noopener">
                  More about this book →
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
