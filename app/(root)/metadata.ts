import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kolbertatattoo.se";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kolberta Tattoo | Prisbelönt tatueringsstudio i Örebro",
  description:
    "Upplev skräddarsydda, prisbelönta tatueringar på Kolberta Tattoo i Örebro. Boka din tid med våra experttatuerare idag!",
  keywords: [
    "tattoo",
    "Örebro",
    "tatueringsstudio",
    "prisbelönt",
    "skräddarsydda tatueringar",
    "Sverige",
    "tatuerare",
  ],
  authors: [{ name: "Kolberta Tattoo", url: "https://kolbertatattoo.se" }],
  openGraph: {
    title: "Kolberta Tattoo | Prisbelönt tatueringsstudio i Örebro",
    description:
      "Upplev skräddarsydda, prisbelönta tatueringar på Kolberta Tattoo i Örebro. Boka din tid med våra experttatuerare idag!",
    url: "https://kolbertatattoo.se",
    siteName: "Kolberta Tattoo",
    images: [
      {
        url: "/images/award-winning-tattoo-tatuerare-orebro-12.jpg",
        width: 1200,
        height: 630,
        alt: "Kolberta Tattoo Studio i Örebro",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
