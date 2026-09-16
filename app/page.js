import Link from "next/link";
import Seal from "@/components/Seal";
import InsightsSection from "@/components/InsightsSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main id="home">
      <section className="min-h-[640px] px-[7vw] py-16 md:py-0 grid md:grid-cols-[1.08fr_.92fr] gap-12 md:gap-[8vw] items-center bg-stone">
        <div>
          <div className="eyebrow">ESTABLISHED TAX LAW PRACTICE • LAHORE</div>
          <h1 className="font-serif font-medium text-display-xl my-5 text-ink">
            A legacy of tax counsel
            <br />
            <em className="italic text-brass">since 1964.</em>
          </h1>
          <p className="max-w-[590px] text-graphite text-body-l">
            Established in 1964, the chamber has spent almost five decades at the heart of the Lahore Tax
            Bar — helping shape Pakistan&apos;s tax structure and building a legacy of trusted, high-caliber
            counsel that continues to guide the practice today. Our senior associates have twice been elected
            General Secretary of the Lahore Tax Bar Association, with one also serving as Incharge of the Tax
            Lawyers Wing at the Lahore High Court Bar Association.
          </p>
          <div className="flex gap-3.5 flex-wrap mt-8 mb-9">
            <a className="btn-primary" href="#contact">
              Request a Consultation <span>→</span>
            </a>
            <Link className="btn-ghost" href="/practice">
              Explore Practice Areas
            </Link>
          </div>
        </div>
        <div className="relative max-w-[470px] mx-auto w-full hidden md:block">
          <div className="bg-[#d5d0c5] p-4 border border-[#b8763f] shadow-lift">
            <img
              className="h-[460px] w-full object-cover object-top"
              src="/assets/khawaja-mahmood-ayaz.jpeg"
              alt="Khawaja Mahmood Ayaz, Senior Counsel"
            />
            <div className="bg-white px-5 py-4">
              <span className="block text-[10px] text-[#8c7b5a] tracking-[0.15em] uppercase">Senior Tax Counsel</span>
              <b className="block font-serif text-[18px]">Khawaja Mahmood Ayaz</b>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 bg-ink text-white px-5 py-4 shadow-seal flex items-center gap-4">
            <Seal className="w-11 h-11 text-[13px]" />
            <span className="w-px h-9 bg-white/20"></span>
            <div>
              <span className="block text-brass text-[10px] font-mono tracking-[0.1em]">EST.</span>
              <b className="block font-serif text-[22px] leading-none mt-1">1964</b>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-line flex justify-around py-5 px-[5vw] gap-5 flex-wrap">
        {["FEDERAL TAXATION", "PROVINCIAL TAXATION", "TAX LITIGATION", "ADVISORY", "COMPLIANCE"].map((t) => (
          <span key={t} className="font-mono text-[9px] tracking-[0.18em] text-[#717982]">
            {t}
          </span>
        ))}
      </section>

      <section className="py-24 md:py-28 px-[7vw]" id="professionals">
        <div className="eyebrow">OUR TEAM</div>
        <h2 className="font-serif font-medium text-display-l mt-3 mb-10">
          People behind the <em className="italic text-brass">practice.</em>
        </h2>

        <div className="grid gap-6">
        <div className="flex flex-wrap gap-6 items-stretch">
          {/* Featured: Khawaja Mahmood Ayaz — real credentials, register treatment */}
          <article className="flex flex-col md:flex-row bg-white border border-line flex-[1.6_1_560px]">
            <Link href="/team/khawaja-mahmood-ayaz" className="contents">
              <img
                className="w-full md:w-[300px] h-[280px] md:h-auto object-cover object-top shrink-0"
                src="/assets/khawaja-mahmood-ayaz.jpeg"
                alt="Khawaja Mahmood Ayaz"
              />
            </Link>
            <div className="p-8 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="eyebrow">SENIOR COUNSEL</span>
              </div>
              <Link href="/team/khawaja-mahmood-ayaz" className="no-underline text-ink hover:text-brass transition-colors">
                <h3 className="font-serif text-[30px] my-1">Khawaja Mahmood Ayaz</h3>
              </Link>
              <p className="text-[11px] tracking-[0.1em] uppercase text-[#927647] mb-5">
                Advocate • Tax Practitioner
              </p>
              <div>
                <div className="reg-row">
                  <p>Enrolled as an Advocate — three decades of dedicated tax law practice</p>
                  <span className="reg-year">1995</span>
                </div>
                <div className="reg-row">
                  <p>Executive Member, Punjab Bar Council</p>
                </div>
                <div className="reg-row">
                  <p>Member, Executive Committee, Lahore Tax Bar Association</p>
                  <span className="reg-year">2011</span>
                </div>
                <div className="reg-row">
                  <p>Youngest-ever General Secretary, Lahore Tax Bar Association</p>
                  <span className="reg-year">2014</span>
                </div>
                <div className="reg-row">
                  <p>Life Member, Lahore High Court Bar Association</p>
                </div>
                <div className="reg-row">
                  <p>Incharge, Tax Lawyers Wing — Lahore High Court Bar Association</p>
                  <span className="reg-year">1997–2000</span>
                </div>
                <div className="reg-row">
                  <p>Member, Lahore Tax Advisors Club</p>
                </div>
              </div>
            </div>
          </article>

          {/* Secondary: Khawaja Muhammad Ali */}
          <article className="bg-white border border-line flex-[1.1_1_300px] max-w-[400px]">
            <Link href="/team/khawaja-muhammad-ali" className="block">
              <img
                className="w-full h-[333px] object-cover object-top"
                src="/assets/khawaja-muhammad-ali.jpg"
                alt="Khawaja Muhammad Ali"
              />
            </Link>
            <div className="p-8">
              <div className="eyebrow mb-2">COUNSEL</div>
              <Link href="/team/khawaja-muhammad-ali" className="no-underline text-ink hover:text-brass transition-colors">
                <h3 className="font-serif text-[26px] my-1">Khawaja Muhammad Ali</h3>
              </Link>
              <p className="text-[11px] tracking-[0.1em] uppercase text-[#927647] mb-4">
                Advocate &amp; Partner • Tax &amp; Corporate Practice
              </p>
              <p className="text-body-m text-graphite m-0">
                Khawaja Muhammad Ali is a senior legal practitioner specializing in corporate, taxation and
                commercial law. With extensive experience in complex tax matters, financial disputes and
                corporate advisory, he represents and advises clients before tax authorities and
                regulatory forums, including the FBR and RTO Lahore. His practice is built on deep legal
                expertise, strategic counsel and effective client representation.
              </p>
            </div>
          </article>
        </div>

        {/* Secondary: Khawaja Muhammad Ibrahim — own row below */}
        <article className="bg-white border border-line max-w-[400px]">
          <Link href="/team/khawaja-muhammad-ibrahim" className="block">
            <img
              className="w-full h-[333px] object-cover object-top"
              src="/assets/khawaja-muhammad-ibrahim.jpg"
              alt="Khawaja Muhammad Ibrahim"
            />
          </Link>
          <div className="p-8">
            <div className="eyebrow mb-2">COUNSEL</div>
            <Link href="/team/khawaja-muhammad-ibrahim" className="no-underline text-ink hover:text-brass transition-colors">
              <h3 className="font-serif text-[26px] my-1">Khawaja Muhammad Ibrahim</h3>
            </Link>
            <p className="text-[11px] tracking-[0.1em] uppercase text-[#927647] mb-4">
              Associate Counsel • Tax Practice
            </p>
            <p className="text-body-m text-graphite m-0">
              Khawaja Muhammad Ibrahim trained directly under Khawaja Mahmood Ayaz and under Rana Sikandar
              Hayat, building a strong practical grounding in tax advisory, FBR proceedings and litigation
              support. He now works across income tax, sales tax and regulatory matters at the chamber.
            </p>
          </div>
        </article>
        </div>
      </section>

      <section className="py-24 px-[7vw] bg-[#121a22] text-[#f5f3ee]" id="former-members">
        <div className="eyebrow !text-brass">FORMER MEMBERS</div>
        <h2 className="font-serif font-medium text-display-l mt-3 mb-10">
          In honor of those who <em className="italic text-brass">came before.</em>
        </h2>

        <div className="flex flex-wrap gap-6 items-stretch">
          <article className="bg-[#182129] border border-[#3b444c] flex-1 min-w-[300px] max-w-[400px]">
            <Link href="/team/khawaja-muhammad-asghar" className="block">
              <img
                className="w-full h-[323px] object-cover object-top"
                src="/assets/khawaja-muhammad-asghar.jpg"
                alt="Khawaja Muhammad Asghar"
              />
            </Link>
            <div className="p-8">
              <div className="eyebrow !text-brass mb-2">FORMER MEMBER</div>
              <Link href="/team/khawaja-muhammad-asghar" className="no-underline hover:text-brass transition-colors">
                <h3 className="font-serif text-[26px] my-1">Khawaja Muhammad Asghar</h3>
              </Link>
              <p className="text-[11px] tracking-[0.1em] uppercase text-[#c9a15c] mb-5">
                Senior Consultant • Tax Practitioner • Advocate High Court
              </p>
              <div>
                <div className="reg-row !border-[#3b444c]">
                  <p className="!text-[#d3d8dc]">Former General Secretary, Lahore Tax Bar Association</p>
                  <span className="reg-year">1987</span>
                </div>
                <div className="reg-row !border-[#3b444c]">
                  <p className="!text-[#d3d8dc]">Member — Lahore High Court Bar Association</p>
                  <span className="reg-year">1964</span>
                </div>
                <div className="reg-row !border-[#3b444c]">
                  <p className="!text-[#d3d8dc]">Executive Member, Punjab Bar Council</p>
                </div>
                <div className="reg-row !border-[#3b444c]">
                  <p className="!text-[#d3d8dc]">
                    Senior Member, FBR Liaison &amp; Coordination Committee — represented Lahore&apos;s tax
                    practitioners before regional tax commissioners
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-[#182129] border border-[#3b444c] flex-1 min-w-[300px] max-w-[400px]">
            <Link href="/team/khawaja-saeed-uz-zafar" className="block">
              <img
                className="w-full h-[323px] object-cover object-top"
                src="/assets/khawaja-saeed-uz-zafar.jpg"
                alt="Khawaja Saeed uz Zafar"
              />
            </Link>
            <div className="p-8">
              <div className="eyebrow !text-brass mb-2">FORMER MEMBER</div>
              <Link href="/team/khawaja-saeed-uz-zafar" className="no-underline hover:text-brass transition-colors">
                <h3 className="font-serif text-[26px] my-1">Khawaja Saeed uz Zafar</h3>
              </Link>
              <p className="text-[11px] tracking-[0.1em] uppercase text-[#c9a15c] mb-5">
                Senior Advocate • Supreme Court of Pakistan
              </p>
              <div>
                <div className="reg-row !border-[#3b444c]">
                  <p className="!text-[#d3d8dc]">Additional Attorney General of Pakistan</p>
                  <span className="reg-year">2014</span>
                </div>
                <div className="reg-row !border-[#3b444c]">
                  <p className="!text-[#d3d8dc]">Deputy Attorney General of Pakistan</p>
                  <span className="reg-year">2002</span>
                </div>
                <div className="reg-row !border-[#3b444c]">
                  <p className="!text-[#d3d8dc]">Senior Member, Pakistan Supreme Court Bar Council</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#e7e2d7] py-24 px-[12vw] text-center">
        <div className="font-serif text-brass text-[80px] h-[56px]">&ldquo;</div>
        <blockquote className="font-serif font-medium text-[clamp(27px,3.5vw,48px)] leading-[1.25] max-w-[1000px] mx-auto mt-4 mb-6">
          Good tax counsel is not simply about knowing the law. It is about understanding the client&apos;s
          position and finding the most defensible path forward.
        </blockquote>
        <span className="font-mono text-[10px] tracking-[0.18em] text-[#776d60]">— CHAMBER PHILOSOPHY</span>
      </section>

      <PublicationsSection />
      <InsightsSection />

      <section className="py-16 md:py-20 px-[7vw] bg-[#b18b4d] text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="font-mono text-label uppercase text-[#e8d7b6]">LET&apos;S DISCUSS YOUR MATTER</div>
          <h2 className="font-serif font-medium text-display-l mt-3">
            Have a tax matter
            <br />
            that needs <em className="italic text-white">counsel?</em>
          </h2>
        </div>
        <a className="btn-light" href="#contact">
          Contact the Chamber →
        </a>
      </section>

      <section className="py-24 px-[7vw] bg-stone" id="contact">
        <div className="grid md:grid-cols-[1fr_.8fr] gap-12 md:gap-[10vw]">
          <div>
            <div className="eyebrow">CONTACT</div>
            <h2 className="font-serif font-medium text-display-l mt-3 mb-4">
              Start a <em className="italic text-brass">conversation.</em>
            </h2>
            <p className="text-[#6d757d]">
              For consultations and professional inquiries, contact the chamber directly.
            </p>
            <div className="mt-10 grid gap-5">
              <div>
                <span className="block text-[9px] tracking-[0.18em] text-[#927647]">OFFICE</span>
                <b className="block font-serif text-[18px]">Mehta Street, 16-E Temple Road</b>
                <small className="block text-[10px] text-[#858b90]">Mozang Chungi, Lahore, Pakistan</small>
              </div>
              <div>
                <span className="block text-[9px] tracking-[0.18em] text-[#927647]">OFFICE PHONE</span>
                <b className="block font-serif text-[18px]">042-36361182</b>
                <small className="block text-[10px] text-[#858b90]">Office landline</small>
              </div>
              <div>
                <span className="block text-[9px] tracking-[0.18em] text-[#927647]">FAX</span>
                <b className="block font-serif text-[18px]">042-36375620</b>
              </div>
              <div>
                <span className="block text-[9px] tracking-[0.18em] text-[#927647]">EMAIL</span>
                <b className="block font-serif text-[18px]">khmayaz@hotmail.com</b>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="py-24 px-[7vw] bg-white" id="location">
        <div className="eyebrow">LOCATION</div>
        <h2 className="font-serif font-medium text-display-l mt-3 mb-2">
          Find us <em className="italic text-brass">in Lahore.</em>
        </h2>
        <p className="text-graphite mb-8">Mehta Street, 16-E Temple Road, Mozang Chungi, Lahore, Pakistan.</p>
        <div className="border border-line shadow-lift overflow-hidden mb-8">
          <iframe
            src="https://www.google.com/maps?q=Mehta+Street,+16-E+Temple+Road,+Mozang+Chungi,+Lahore,+Pakistan&output=embed"
            width="100%"
            height="440"
            style={{ border: 0 }}
            className="block"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Khawaja and Associates office location"
          ></iframe>
        </div>
        <a
          className="btn-primary"
          href="https://maps.app.goo.gl/CkDcVv4SMB61EP4r5"
          target="_blank"
          rel="noopener"
        >
          Get Directions on Google Maps →
        </a>
      </section>
    </main>
  );
}
