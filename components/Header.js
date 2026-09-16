"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav h-[84px] px-[5vw] flex items-center justify-between bg-parchment/95 border-b border-line sticky top-0 z-10">
      <Link className="flex items-center text-ink no-underline" href="/">
        <span className="flex items-baseline gap-1 sm:gap-1.5 flex-wrap">
          <b className="font-serif font-semibold text-[15px] sm:text-[20px] tracking-[0.04em] leading-tight whitespace-nowrap">KHAWAJA</b>
          <b className="font-serif font-semibold text-[15px] sm:text-[20px] tracking-[0.04em] leading-tight whitespace-nowrap">AND ASSOCIATES</b>
        </span>
      </Link>
      <button
        className={`menu md:hidden bg-transparent border-0 text-2xl leading-none transition-colors ${open ? "text-brass" : "text-ink"}`}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>
      <nav
        id="primary-nav"
        className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 absolute md:static top-[72px] right-0 md:top-auto md:right-auto bg-parchment md:bg-transparent p-5 md:p-0 border md:border-0 border-line`}
      >
        <Link className="text-ink no-underline text-[13px] hover:text-brass active:text-brass transition-colors" href="/" onClick={() => setOpen(false)}>About</Link>
        <Link className="text-ink no-underline text-[13px] hover:text-brass active:text-brass transition-colors" href="/practice" onClick={() => setOpen(false)}>Practice Areas</Link>
        <Link className="text-ink no-underline text-[13px] hover:text-brass active:text-brass transition-colors" href="/team" onClick={() => setOpen(false)}>Our Team</Link>
        <Link className="text-ink no-underline text-[13px] hover:text-brass active:text-brass transition-colors" href="/#publications" onClick={() => setOpen(false)}>Publications</Link>
        <Link className="text-ink no-underline text-[13px] hover:text-brass active:text-brass transition-colors" href="/#insights" onClick={() => setOpen(false)}>Tax Insights</Link>
        <Link className="text-ink no-underline text-[13px] hover:text-brass active:text-brass transition-colors" href="/#location" onClick={() => setOpen(false)}>Location</Link>
        <Link className="text-ink no-underline text-[13px] border border-ink px-4 py-2.5 hover:text-brass hover:border-brass active:text-brass active:border-brass transition-colors" href="/#contact" onClick={() => setOpen(false)}>Contact Chamber</Link>
      </nav>
    </header>
  );
}
