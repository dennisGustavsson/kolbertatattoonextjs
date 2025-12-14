import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kolbertatattoo.se";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title:
		"Kolberta Tattoo | Tatuerare specialicerad på neo-traditional stil och dalamotiv i Örebro",
	description: "Specialist inom neo-traditional stil och dalamotiv",
	keywords: [
		"tattoo",
		"Örebro",
		"tatueringsstudio",
		"prisbelönt",
		"skräddarsydda tatueringar",
		"Sverige",
		"tatuerare",
		"neotraditional",
		"kurbits",
		"tatuering",
		"neo-traditional",
	],
	authors: [{ name: "Kolberta Tattoo", url: "https://kolbertatattoo.se" }],
	openGraph: {
		title:
			"Kolberta Tattoo | Tatuerare specialicerad inom neo-traditional stil och dalamotiv",
		description:
			"Upplev skräddarsydda, prisbelönta tatueringar hos Kolberta Tattoo i Örebro. Boka din tid med Caroline idag!",
		url: "https://kolbertatattoo.se",
		siteName: "Kolberta Tattoo",
		images: [
			{
				url: "/images/Carro-and-Leon-portrait",
				width: 900,
				height: 630,
				alt: "Kolberta Tattoo i Örebro",
			},
		],
		locale: "sv_SE",
		type: "website",
	},
	icons: {
		icon: [
			{
				url: "/Component_portrait.png",
				type: "image/png",
			},
		],
		shortcut: "/Component_portrait.png",
		apple: "/Component_portrait.png",
	},
	alternates: {
		canonical: "https://kolbertatattoo.se",
	},

	robots: {
		index: true,
		follow: true,
		nocache: false,
	},
};
