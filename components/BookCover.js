"use client";

import { useState } from "react";
import { ImageFallback } from "@/components/InsightImage";

export default function BookCover({ cover, title }) {
  const [failed, setFailed] = useState(false);
  if (!cover || failed) {
    return <ImageFallback label={cover ? "Cover unavailable" : "Cover pending"} sub={title} />;
  }
  return <img src={cover} alt={`${title} — cover`} loading="lazy" onError={() => setFailed(true)} />;
}
