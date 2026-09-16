import BookCover from "@/components/BookCover";
import booksData from "@/public/books.json";

export default function PublicationsSection() {
  const books = Array.isArray(booksData?.publications) ? booksData.publications : [];
  const failed = books.length === 0;

  return (
    <section className="py-24 px-[7vw]" id="publications">
      <div className="eyebrow">PUBLICATIONS</div>
      <h2 className="font-serif font-medium text-display-l mt-3 mb-10">
        Authored <em className="italic text-brass">works.</em>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[60px]">
        {failed && (
          <p className="col-span-full text-[#8c7b5a] text-[13px] py-5">
            Publications are being updated — check back shortly.
          </p>
        )}
        {books.map((book, i) => (
          <article key={book.title || i} className="book-card">
            <div className="book-cover">
              <BookCover cover={book.cover} title={book.title || "Untitled"} />
            </div>
            <div className="book-info">
              {book.year ? <div className="book-year">{book.year}</div> : null}
              <h3>{book.title || "Untitled"}</h3>
              {book.author ? <p className="book-author">{book.author}</p> : null}
              {book.description ? <p>{book.description}</p> : null}
              {book.link ? (
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
