import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GENE.AI 2026 | Genome Engineering & AI Summit",
  description: "DST-TIDE Sponsored Summit on Genome Engineering & Artificial Intelligence. March 17-18, 2026 at Sathyabama Institute of Science & Technology, Chennai.",
  keywords: ["GENE.AI", "Genome Engineering", "Artificial Intelligence", "Conference", "Sathyabama", "Chennai", "DST-TIDE"],
  authors: [{ name: "Sathyabama Institute of Science & Technology" }],
  openGraph: {
    title: "GENE.AI 2026 | Genome Engineering & AI Summit",
    description: "Translational Research to Clinical Impact - March 17-18, 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
