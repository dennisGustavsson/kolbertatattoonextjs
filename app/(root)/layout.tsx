import { metadata } from "./metadata";
import { Analytics } from "@vercel/analytics/next";
import {
	EB_Garamond,
	Geist,
	Geist_Mono,
	Limelight,
	Playfair_Display,
} from "next/font/google";
import "../globals.css";
import "../styles/scss/style.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

// System fonts (small) kept for base text
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
});

const ebGaramond = EB_Garamond({
	variable: "--font-eb-garamond",
	subsets: ["latin"],
	display: "swap",
});

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
	display: "swap",
});

const limelight = Limelight({
	variable: "--font-limelight",
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export { metadata };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='sv'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} ${playfair.variable} ${limelight.variable} antialiased background-theme`}
			>
				<div id='site-chrome' className='flex min-h-screen flex-col'>
					<Header />
					<main id='main-content' className='flex-grow'>
						{children}
					</main>
					<Footer />
				</div>
				<div id='overlay-root' />
				<Analytics />
			</body>
		</html>
	);
}
