import Link from "next/link";
import Image from "next/image";
import { teamMembers } from "@/lib/team";

export const metadata = {
  title: "Our Team | Khawaja and Associates",
  description:
    "Meet the advocates and tax practitioners of Khawaja and Associates, Lahore.",
};

export default function TeamPage() {
  const current = teamMembers.filter((m) => m.status === "current");
  const former = teamMembers.filter((m) => m.status === "former");

  return (
    <main>
      <section className="pt-16 md:pt-20 px-[7vw] pb-16">
        <Link className="text-ink font-bold text-[12px] no-underline border-b border-brass pb-1" href="/">
          ← Back to home
        </Link>
        <h1 className="font-serif font-medium text-display-l mt-4 mb-3">Our Team</h1>
        <p className="font-serif text-[19px] leading-[1.5] text-[#39434c] max-w-[700px]">
          The advocates and tax practitioners behind the chamber&apos;s legacy of counsel.
        </p>
      </section>

      <section className="pb-24 px-[7vw]" id="professionals">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {current.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group block bg-white border border-line no-underline text-ink transition-colors hover:border-brass"
            >
              <div className="relative w-full aspect-[4/5]">
                <Image
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                  src={member.photo}
                  alt={member.name}
                />
              </div>
              <div className="p-7">
                <span className="eyebrow">{member.role}</span>
                <h3 className="font-serif text-[24px] mt-2 mb-1 group-hover:text-brass transition-colors">
                  {member.name}
                </h3>
                <p className="text-[11px] tracking-[0.1em] uppercase text-[#927647] mb-4">
                  {member.designation}
                </p>
                <span className="text-ink text-[12px] font-bold border-b border-brass pb-1">
                  View profile →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {former.length > 0 && (
        <section className="py-24 px-[7vw] bg-[#121a22] text-[#f5f3ee]" id="former-members">
          <div className="eyebrow !text-brass">FORMER MEMBERS</div>
          <h2 className="font-serif font-medium text-display-l mt-3 mb-10">
            In honor of those who <em className="italic text-brass">came before.</em>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {former.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group block bg-[#182129] border border-[#3b444c] no-underline transition-colors hover:border-brass"
              >
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                    src={member.photo}
                    alt={member.name}
                  />
                </div>
                <div className="p-7">
                  <span className="eyebrow !text-brass">{member.role}</span>
                  <h3 className="font-serif text-[24px] mt-2 mb-1 text-white group-hover:text-brass transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[11px] tracking-[0.1em] uppercase text-[#c9a15c] mb-4">
                    {member.designation}
                  </p>
                  <span className="text-white text-[12px] font-bold border-b border-brass pb-1">
                    View profile →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 px-[7vw] bg-[#b18b4d] text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="font-mono text-label uppercase text-[#e8d7b6]">LET&apos;S DISCUSS YOUR MATTER</div>
          <h2 className="font-serif font-medium text-display-l mt-3">
            Have a tax matter
            <br />
            that needs <em className="italic text-white">counsel?</em>
          </h2>
        </div>
        <Link className="btn-light" href="/#contact">
          Contact the Chamber →
        </Link>
      </section>
    </main>
  );
}
