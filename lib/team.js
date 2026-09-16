export const teamMembers = [
  {
    slug: "khawaja-mahmood-ayaz",
    name: "Khawaja Mahmood Ayaz",
    role: "SENIOR COUNSEL",
    designation: "Advocate • Tax Practitioner",
    photo: "/assets/khawaja-mahmood-ayaz.jpeg",
    status: "current",
    metaDescription:
      "Senior Counsel at Khawaja and Associates, enrolled as an Advocate in 1995 with three decades of dedicated tax law practice.",
    credentials: [
      { text: "Enrolled as an Advocate — three decades of dedicated tax law practice", year: "1995" },
      { text: "Executive Member, Punjab Bar Council", year: null },
      { text: "Member, Executive Committee, Lahore Tax Bar Association", year: "2011" },
      { text: "Youngest-ever General Secretary, Lahore Tax Bar Association", year: "2014" },
      { text: "Life Member, Lahore High Court Bar Association", year: null },
      { text: "Incharge, Tax Lawyers Wing — Lahore High Court Bar Association", year: "1997–2000" },
      { text: "Member, Lahore Tax Advisors Club", year: null },
    ],
    bio: [
      "Khawaja Mahmood Ayaz is a distinguished senior tax lawyer with nearly three decades of dedicated experience in taxation, corporate and commercial law. Enrolled as an Advocate in 1995, he has built an extensive practice in tax litigation, corporate advisory, financial disputes and representation before tax authorities and superior judicial forums.",
      "Over the course of his career he has held several prominent positions within the legal and tax fraternity, including Executive Member of the Punjab Bar Council, Member of the Executive Committee of the Lahore Tax Bar Association, and General Secretary of the Lahore Tax Bar Association. He also serves as Incharge of the Tax Lawyers Wing of the Lahore High Court Bar Association and is a Life Member of the Lahore High Court Bar Association.",
      "With extensive courtroom and advisory experience, Khawaja Mahmood Ayaz is recognized for his deep understanding of tax law, strategic legal counsel, and committed representation of clients in complex taxation and commercial matters.",
    ],
  },
  {
    slug: "khawaja-muhammad-ali",
    name: "Khawaja Muhammad Ali",
    role: "COUNSEL",
    designation: "Advocate & Partner • Tax & Corporate Practice",
    photo: "/assets/khawaja-muhammad-ali.jpg",
    status: "current",
    metaDescription:
      "Senior legal practitioner at Khawaja and Associates specializing in corporate, taxation and commercial law.",
    credentials: null,
    bio: [
      "Khawaja Muhammad Ali is a senior legal practitioner with extensive experience in corporate, taxation, and commercial law. His practice encompasses complex tax matters, financial disputes, tax rectifications, and legal representations before tax authorities and relevant forums, including the Regional Tax Office (RTO) Lahore and the Federal Board of Revenue (FBR).",
      "He has advised a diverse range of businesses, SMEs, and commercial clients on corporate compliance, business structuring, partnership matters, and other legal and regulatory requirements. His practice is distinguished by a thorough understanding of taxation and commercial law, combined with a practical and solution-oriented approach to complex legal matters.",
      "Khawaja Muhammad Ali has also maintained longstanding professional engagement with the Lahore Tax Bar Association (LTBA) and the wider legal community. His experience and professional standing reflect a sustained commitment to excellence in legal practice, strategic counsel, and effective representation of clients before tax and regulatory authorities.",
    ],
  },
  {
    slug: "khawaja-muhammad-ibrahim",
    name: "Khawaja Muhammad Ibrahim",
    role: "COUNSEL",
    designation: "Associate Counsel • Tax Practice",
    photo: "/assets/khawaja-muhammad-ibrahim.jpg",
    status: "current",
    metaDescription:
      "Associate Counsel at Khawaja and Associates, trained under Khawaja Mahmood Ayaz and Rana Sikandar Hayat.",
    credentials: null,
    bio: [
      "Khawaja Muhammad Ibrahim trained directly under Khawaja Mahmood Ayaz and under Rana Sikandar Hayat, building a strong practical grounding in tax advisory, FBR proceedings and litigation support. He now works across income tax, sales tax and regulatory matters at the chamber.",
    ],
  },
  {
    slug: "khawaja-muhammad-asghar",
    name: "Khawaja Muhammad Asghar",
    role: "FORMER MEMBER",
    designation: "Senior Consultant • Tax Practitioner • Advocate High Court",
    photo: "/assets/khawaja-muhammad-asghar.jpg",
    status: "former",
    metaDescription:
      "Former member of Khawaja and Associates and former General Secretary of the Lahore Tax Bar Association.",
    credentials: [
      { text: "Former General Secretary, Lahore Tax Bar Association", year: "1987" },
      { text: "Member — Lahore High Court Bar Association", year: "1964" },
      { text: "Executive Member, Punjab Bar Council", year: null },
      {
        text: "Senior Member, FBR Liaison & Coordination Committee — represented Lahore's tax practitioners before regional tax commissioners",
        year: null,
      },
    ],
    bio: null,
  },
  {
    slug: "khawaja-saeed-uz-zafar",
    name: "Khawaja Saeed uz Zafar",
    role: "FORMER MEMBER",
    designation: "Senior Advocate • Supreme Court of Pakistan",
    photo: "/assets/khawaja-saeed-uz-zafar.jpg",
    status: "former",
    metaDescription:
      "Former member of Khawaja and Associates, Additional Attorney General and Deputy Attorney General of Pakistan.",
    credentials: [
      { text: "Additional Attorney General of Pakistan", year: "2014" },
      { text: "Deputy Attorney General of Pakistan", year: "2002" },
      { text: "Senior Member, Pakistan Supreme Court Bar Council", year: null },
    ],
    bio: null,
  },
];

export function getTeamMember(slug) {
  return teamMembers.find((m) => m.slug === slug);
}
