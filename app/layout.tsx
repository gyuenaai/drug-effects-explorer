import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Substance Effects Archive — Educational Harm Reduction",
  description: "Lightweight educational explorer of common drugs: benefits, risks, immediate and long-term effects, and interaction analysis for multi-select mixing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600;6..72,700&family=Public+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
