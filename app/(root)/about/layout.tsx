import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Om Kolberta Tattoo",
	description:
		"Kolberta Tattoo i Örebro – konstnärlig kvalitet och personlig service i varje tatuering.",
};

export default function AboutLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<main
			style={{
				padding: "3.5rem 1.25rem 5rem",
			}}
		>
			<div
				style={{
					margin: "0 auto",
					maxWidth: "65rem",
				}}
			>
				{children}
			</div>
		</main>
	);
}
