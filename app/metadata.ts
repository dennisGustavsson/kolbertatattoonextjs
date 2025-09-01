import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kolbertatattoo.se";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kolberta Tattoo | Award-Winning Tattoo Studio in Örebro",
  description:
    "Experience custom, award-winning tattoos at Kolberta Tattoo in Örebro. Book your session with our expert artists today!",
  keywords: [
    "tattoo",
    "Örebro",
    "tattoo studio",
    "award-winning",
    "custom tattoos",
    "Sweden",
    "tatuerare",
  ],
  authors: [{ name: "Kolberta Tattoo", url: "https://kolbertatattoo.se" }],
  openGraph: {
    title: "Kolberta Tattoo | Award-Winning Tattoo Studio in Örebro",
    description:
      "Experience custom, award-winning tattoos at Kolberta Tattoo in Örebro. Book your session with our expert artists today!",
    url: "https://kolbertatattoo.se",
    siteName: "Kolberta Tattoo",
    images: [
      {
        url: "/images/award-winning-tattoo-tatuerare-orebro-12.jpg",
        width: 1200,
        height: 630,
        alt: "Kolberta Tattoo Studio in Örebro",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolberta Tattoo | Award-Winning Tattoo Studio in Örebro",
    description:
      "Experience custom, award-winning tattoos at Kolberta Tattoo in Örebro. Book your session with our expert artists today!",
    images: [
      {
        url: "/images/award-winning-tattoo-tatuerare-orebro-12.jpg",
        width: 1200,
        height: 630,
        alt: "Kolberta Tattoo Studio in Örebro",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
