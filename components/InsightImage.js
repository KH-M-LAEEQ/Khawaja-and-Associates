"use client";

import { useState } from "react";
import Image from "next/image";

const ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16"></rect>
    <circle cx="9" cy="10" r="1.5"></circle>
    <path d="M4 17l5-5 3 3 4-4 4 4" />
  </svg>
);

export function ImageFallback({ label, sub }) {
  return (
    <div className="img-fallback">
      {ICON}
      <b>{label}</b>
      {sub ? <span>{sub}</span> : null}
    </div>
  );
}

export default function InsightImage({ src, alt, title }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <ImageFallback label="Image unavailable" sub={title} />;
  return (
    <Image
      fill
      sizes="(min-width: 768px) 33vw, 100vw"
      className="object-cover"
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}
