import booksData from "@/public/books.json";

export const publications = Array.isArray(booksData?.publications) ? booksData.publications : [];

export function getPublication(slug) {
  return publications.find((p) => p.slug === slug);
}

export function getPublicationsByAuthorName(authorName) {
  return publications.filter((p) => p.author === authorName);
}
