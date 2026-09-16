"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageFallback } from "@/components/InsightImage";

export default function BookCover({ cover, title }) {
  const [failed, setFailed] = useState(false);
  if (!cover || failed) {
    return <ImageFallback label={cover ? "Cover unavailable" : "Cover pending"} sub={title} />;
  }
  const src = cover.startsWith("/") || cover.startsWith("http") ? cover : `/${cover}`;
  return (
    <Image
      fill
      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      className="object-cover"
      src={src}
      alt={`${title} — cover`}
      onError={() => setFailed(true)}
    />
  );
}
