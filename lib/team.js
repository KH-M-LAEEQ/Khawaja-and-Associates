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
      "Khawaja Mahmood Ayaz is a highly experienced senior lawyer and tax practitioner with nearly three decades of active legal practice, specializing in taxation, corporate and commercial law, civil matters, and legal advisory. Enrolled as an Advocate in 1995, he has maintained a longstanding professional standing across Lahore's District and High Court jurisdictions.",
      "His practice encompasses income tax and sales tax matters, tax assessments and appeals, FBR and RTO proceedings, tax litigation, financial and commercial disputes, corporate advisory, property and civil matters, and representation before judicial and regulatory forums. He has appeared in tax litigation before the Lahore High Court, including reported proceedings, and continues to advise and represent clients in complex legal and taxation matters.",
      "Beyond his practice, Khawaja Mahmood Ayaz has played an active role in Lahore's legal and tax fraternity, serving as Executive Member of the Punjab Bar Council, Member of the Executive Committee and General Secretary of the Lahore Tax Bar Association, Life Member of the Lahore High Court Bar Association, and Incharge of its Tax Lawyers Wing. His career reflects extensive courtroom experience, deep knowledge of taxation and commercial law, and a longstanding commitment to professional legal service and client representation.",
    ],
  },
  {
    slug: "khawaja-muhammad-ali",
    name: "Khawaja Muhammad Ali",
    role: "COUNSEL",
    designation: "Advocate • Tax & Corporate Practice",
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
      "Khawaja Muhammad Ibrahim is an Associate Counsel with a focused practice in taxation, corporate, commercial, and regulatory matters, representing the third generation of the family's legal tradition. He has trained under Khawaja Mahmood Ayaz and Rana Sikandar Hayat, gaining substantial practical exposure to tax advisory, FBR proceedings, income tax, sales tax, regulatory compliance, and litigation support.",
      "His work involves assisting clients with tax assessments, notices, appeals, regulatory requirements, and complex taxation matters, as well as supporting litigation and legal proceedings before relevant authorities and judicial forums. He approaches each matter with careful legal analysis, attention to detail, and a practical understanding of the commercial considerations underlying tax and regulatory disputes.",
      "At the chamber, he contributes to the preparation and development of legal opinions, case strategy, tax representations, and litigation briefs, working closely with senior counsel on complex matters. His practice reflects a strong commitment to professional integrity, rigorous legal preparation, and effective client service.",
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
    designation: "Advocate Supreme Court • Former Deputy Attorney-General for Pakistan",
    photo: "/assets/khawaja-saeed-uz-zafar.jpg",
    status: "former",
    metaDescription:
      "Former member of Khawaja and Associates, Advocate Supreme Court and former Deputy Attorney-General for Pakistan.",
    credentials: [
      { text: "Additional Attorney General of Pakistan", year: "2014" },
      { text: "Deputy Attorney General of Pakistan", year: "2002" },
      { text: "Senior Member, Pakistan Supreme Court Bar Council", year: null },
    ],
    bio: [
      "Khawaja Saeed-uz-Zafar was a distinguished member of Pakistan's legal fraternity whose career spanned constitutional, taxation, corporate, commercial, and public law. An Advocate Supreme Court and former Deputy Attorney-General for Pakistan, he appeared before the superior courts in a wide range of complex matters involving taxation, financial and commercial disputes, governmental authorities, regulatory questions, and constitutional issues.",
      "His reported appearances before the Supreme Court of Pakistan and Lahore High Court reflect substantial experience in high-level litigation and legal advocacy. His practice included significant matters concerning taxation and income-tax law, banking and financial institutions, foreign-exchange regulation, government and regulatory authorities, and commercial disputes.",
      "Throughout his career, Khawaja Saeed-uz-Zafar established a respected position within the legal profession through his courtroom advocacy, command of complex legal issues, and representation in matters of significant public and commercial importance. His professional legacy remains an important part of the firm's history and its tradition of advocacy before the superior courts.",
    ],
  },
];

export function getTeamMember(slug) {
  return teamMembers.find((m) => m.slug === slug);
}
