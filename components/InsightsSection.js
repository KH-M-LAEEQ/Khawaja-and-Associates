"use client";

import { useEffect, useState } from "react";
import InsightImage from "@/components/InsightImage";

function timeAgo(iso) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const hours = Math.round(diffMs / 3.6e6);
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.round(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

export default function InsightsSection() {
  const [articles, setArticles] = useState(null);
  const [fetchedAt, setFetchedAt] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/articles.json", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (!Array.isArray(data.articles) || data.articles.length === 0) {
          throw new Error("No articles in feed");
        }
        setArticles(data.articles.slice(0, 3));
        setFetchedAt(data.fetchedAt || null);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-24 px-[7vw] bg-white" id="insights">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:items-end mb-10">
        <div>
          <div className="eyebrow">TAX INSIGHTS</div>
          <h2 className="font-serif font-medium text-display-l mt-3">
            Official updates.
            <br />
            <em className="italic text-brass">Straight from FBR.</em>
          </h2>
        </div>
        <a
          className="text-ink font-bold text-[12px] no-underline border-b border-brass pb-1 self-start"
          href="https://www.fbr.gov.pk/pr"
          target="_blank"
          rel="noopener"
        >
          View all on FBR →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[60px]" aria-live="polite">
        {failed && (
          <p className="col-span-full text-[#8c7b5a] text-[13px] py-5">
            Live updates are temporarily unavailable. Visit{" "}
            <a className="text-brass" href="https://www.fbr.gov.pk/pr" target="_blank" rel="noopener">
              fbr.gov.pk/pr
            </a>{" "}
            directly for the latest FBR press releases.
          </p>
        )}
        {!failed && !articles && (
          <p className="col-span-full text-[#8c7b5a] text-[13px] py-5">Loading latest updates from FBR…</p>
        )}
        {articles &&
          articles.map((item) => (
            <article key={item.url} className="border border-line pb-6">
              <a
                className="insight-image"
                href={item.url}
                target="_blank"
                rel="noopener"
                aria-label={`Read on FBR: ${item.title}`}
              >
                <InsightImage src={item.image} alt="" title={item.title} />
              </a>
              <div className="insight-meta">FBR PRESS RELEASE • {String(item.date).toUpperCase()}</div>
              <h3
                title={item.title}
                className="mx-6 mt-4 font-serif text-[21px] leading-[1.3] line-clamp-3"
              >
                {item.title}
              </h3>
              <a
                className="mx-6 mt-2 inline-block text-ink text-[11px] font-bold no-underline"
                href={item.url}
                target="_blank"
                rel="noopener"
              >
                Read on FBR ↗
              </a>
            </article>
          ))}
      </div>
      <p className="mt-6 text-[11px] text-[#8c8780]">
        Source:{" "}
        <a className="text-brass" href="https://www.fbr.gov.pk/pr" target="_blank" rel="noopener">
          Federal Board of Revenue (FBR), Government of Pakistan
        </a>{" "}
        — refreshed automatically, updated {fetchedAt ? timeAgo(fetchedAt) : "recently"}.
      </p>
    </section>
  );
}
