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
    bio: null,
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
    bio: "Khawaja Muhammad Ali is a senior legal practitioner specializing in corporate, taxation and commercial law. With extensive experience in complex tax matters, financial disputes and corporate advisory, he represents and advises clients before tax authorities and regulatory forums, including the FBR and RTO Lahore. His practice is built on deep legal expertise, strategic counsel and effective client representation.",
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
    bio: "Khawaja Muhammad Ibrahim trained directly under Khawaja Mahmood Ayaz and under Rana Sikandar Hayat, building a strong practical grounding in tax advisory, FBR proceedings and litigation support. He now works across income tax, sales tax and regulatory matters at the chamber.",
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
