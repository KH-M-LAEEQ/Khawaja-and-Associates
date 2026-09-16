import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { teamMembers, getTeamMember } from "@/lib/team";
import Seal from "@/components/Seal";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};
  return {
    title: `${member.name} | Khawaja and Associates`,
    description: member.metaDescription,
  };
}

export default async function TeamMemberPage({ params }) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  return (
    <main>
      <section className="pt-16 md:pt-20 px-[7vw] pb-0">
        <Link className="text-ink font-bold text-[12px] no-underline border-b border-brass pb-1" href="/team">
          ← Back to team
        </Link>
        <div className="eyebrow mt-6">{member.role}</div>
        <h1 className="font-serif font-medium text-display-l mt-3 mb-2">{member.name}</h1>
        <p className="text-[13px] tracking-[0.05em] uppercase text-[#927647]">{member.designation}</p>
      </section>

      <section className="pt-14 pb-24 px-[7vw]">
        <div className="grid md:grid-cols-[340px_1fr] gap-10 md:gap-[8vw]">
          <div>
            <div className="relative w-full aspect-[4/5] border border-line shadow-lift overflow-hidden">
              <Image
                fill
                priority
                sizes="(min-width: 768px) 340px, 100vw"
                className="object-cover object-top"
                src={member.photo}
                alt={member.name}
              />
            </div>
            <div className="flex items-center gap-3 mt-5">
              <Seal className="w-9 h-9 text-[11px]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-graphite">
                Khawaja and Associates
              </span>
            </div>
          </div>

          <div>
            {member.bio ? (
              <>
                <h2 className="font-serif text-[26px] mb-6">Profile</h2>
                {member.bio.map((paragraph) => (
                  <p key={paragraph} className="text-[#68717a] text-[14px] leading-[1.7] mb-4 max-w-[640px]">
                    {paragraph}
                  </p>
                ))}
              </>
            ) : null}
            {member.credentials ? (
              <>
                <h2 className={`font-serif text-[26px] mb-6 ${member.bio ? "mt-10" : ""}`}>Credentials</h2>
                <div>
                  {member.credentials.map((c) => (
                    <div key={c.text} className="reg-row">
                      <p>{c.text}</p>
                      {c.year ? <span className="reg-year">{c.year}</span> : null}
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>

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
