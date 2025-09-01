import type { Metadata } from "next";
import { metadata } from "./metadata";
import {
  Geist,
  Geist_Mono,
  Manrope,
  Outfit,
  Rethink_Sans,
} from "next/font/google";
import "./globals.css";
import "./styles/scss/style.scss";

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

// Replace CSS @import Google Fonts with next/font for better preload & no render-blocking
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
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
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${outfit.variable} ${rethinkSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
