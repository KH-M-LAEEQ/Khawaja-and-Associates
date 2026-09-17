"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpnqljb";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white p-8 border border-line">
        <span className="eyebrow">THANK YOU</span>
        <h3 className="font-serif text-[22px] mt-2 mb-2">Your inquiry has been sent.</h3>
        <p className="text-[14px] text-graphite">
          A member of the chamber will get back to you shortly. For urgent matters, please call
          one of the numbers listed here directly.
        </p>
      </div>
    );
  }

  return (
    <form className="bg-white p-8 border border-line" onSubmit={handleSubmit}>
      <label className="block text-[10px] tracking-[0.12em] uppercase font-bold mb-4">
        Name
        <input
          className="block w-full border-0 border-b border-[#cfcac0] py-3 bg-transparent font-sans text-[14px] outline-none"
          name="name"
          required
          placeholder="Your full name"
        />
      </label>
      <label className="block text-[10px] tracking-[0.12em] uppercase font-bold mb-4">
        Email
        <input
          className="block w-full border-0 border-b border-[#cfcac0] py-3 bg-transparent font-sans text-[14px] outline-none"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
        />
      </label>
      <label className="block text-[10px] tracking-[0.12em] uppercase font-bold mb-4">
        Phone
        <input
          className="block w-full border-0 border-b border-[#cfcac0] py-3 bg-transparent font-sans text-[14px] outline-none"
          name="phone"
          placeholder="+92 ..."
        />
      </label>
      <label className="block text-[10px] tracking-[0.12em] uppercase font-bold mb-4">
        How can we help?
        <textarea
          className="block w-full border-0 border-b border-[#cfcac0] py-3 bg-transparent font-sans text-[14px] outline-none resize-y"
          name="message"
          rows={4}
          placeholder="Briefly describe your tax matter"
        />
      </label>
      {status === "error" && (
        <p className="text-[13px] text-oxblood mb-4">
          Something went wrong sending your message. Please try again, or contact the chamber
          directly using the details on this page.
        </p>
      )}
      <button className="btn-primary mt-1 disabled:opacity-60 disabled:cursor-not-allowed" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Inquiry →"}
      </button>
    </form>
  );
}
