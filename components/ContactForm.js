"use client";

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Demo form — connect this to your backend/email service.");
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
      <button className="btn-primary mt-1" type="submit">
        Send Inquiry →
      </button>
    </form>
  );
}
