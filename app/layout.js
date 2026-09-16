import { Newsreader, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME } from "@/lib/siteConfig";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const description =
  "Professional tax advisory, litigation and compliance services in Pakistan. Established in Lahore in 1964.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Pakistan`,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Pakistan`,
    description,
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Pakistan`,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE_NAME,
  description,
  url: SITE_URL,
  areaServed: "PK",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mehta Street, 16-E Temple Road, Mozang Chungi",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  telephone: "+92-321-9441019",
  email: "khmayaz@hotmail.com",
  foundingDate: "1964",
  priceRange: "$$",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
