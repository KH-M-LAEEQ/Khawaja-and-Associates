import Link from "next/link";
import Seal from "@/components/Seal";

export default function Footer() {
  return (
    <footer className="bg-dark text-[#c9cdd0] px-[7vw] py-11 grid md:grid-cols-[1fr_auto] gap-8">
      <div className="flex items-center gap-3 text-white">
        <Seal className="w-10 h-10 text-[12px]" />
        <div>
          <b className="block">KHAWAJA AND ASSOCIATES</b>
          <small className="block text-[#818991] mt-1">Tax Lawyers &amp; Legal Advisory • Lahore, Pakistan</small>
        </div>
      </div>
      <div className="flex gap-5 items-center flex-wrap">
        <Link className="text-[#c9cdd0] no-underline text-[11px]" href="/">About</Link>
        <Link className="text-[#c9cdd0] no-underline text-[11px]" href="/practice">Practice</Link>
        <Link className="text-[#c9cdd0] no-underline text-[11px]" href="/team">Team</Link>
        <Link className="text-[#c9cdd0] no-underline text-[11px]" href="/#insights">Insights</Link>
        <Link className="text-[#c9cdd0] no-underline text-[11px]" href="/#location">Location</Link>
        <Link className="text-[#c9cdd0] no-underline text-[11px]" href="/#contact">Contact</Link>
      </div>
      <p className="col-span-full text-[#9aa2a8] text-[12px] leading-[1.7] max-w-[640px] m-0">
        Established in 1964, the chamber was founded to provide dependable, practical tax counsel to
        individuals and businesses across Lahore. Almost five decades on, with a longstanding presence
        within the Lahore Tax Bar, that same commitment to careful advisory and dedicated representation
        continues to guide the practice today. Our senior associates have twice been elected General
        Secretary of the Lahore Tax Bar Association, with one also serving as Incharge of the Tax Lawyers
        Wing at the Lahore High Court Bar Association.
      </p>
      <div className="col-span-full">
        <span className="block font-mono text-[10px] tracking-[0.18em] text-[#927647] mb-2.5">CONTACT</span>
        <div className="flex flex-wrap gap-3 gap-x-8">
          <a className="text-white font-serif text-[20px] font-semibold no-underline hover:text-brass" href="tel:+923219441019">+92 321-9441019</a>
          <a className="text-white font-serif text-[20px] font-semibold no-underline hover:text-brass" href="tel:+923236300905">+92 323-6300905</a>
          <a className="text-white font-serif text-[20px] font-semibold no-underline hover:text-brass" href="tel:+923248060396">+92 324-8060396</a>
        </div>
      </div>
      <div className="col-span-full border-t border-[#2b333a] pt-5 text-[#747d85] text-[9px]">
        © 2026 Khawaja and Associates. All rights reserved.
      </div>
    </footer>
  );
}
