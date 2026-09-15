"use client";

import { useEffect, useState } from "react";
import BookCover from "@/components/BookCover";

export default function PublicationsSection() {
  const [books, setBooks] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/books.json", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (!Array.isArray(data.publications) || data.publications.length === 0) {
          throw new Error("No publications in books.json");
        }
        setBooks(data.publications);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-24 px-[7vw]" id="publications">
      <div className="eyebrow">PUBLICATIONS</div>
      <h2 className="font-serif font-medium text-display-l mt-3 mb-10">
        Authored <em className="italic text-brass">works.</em>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[60px]" aria-live="polite">
        {failed && (
          <p className="col-span-full text-[#8c7b5a] text-[13px] py-5">
            Publications are being updated — check back shortly.
          </p>
        )}
        {!failed && !books && (
          <p className="col-span-full text-[#8c7b5a] text-[13px] py-5">Loading publications…</p>
        )}
        {books &&
          books.map((book, i) => (
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
