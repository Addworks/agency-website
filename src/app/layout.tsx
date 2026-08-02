import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NAK Group | Venture Studio & Enterprise Engineering",
  description: "NAK Group is a dual-engine digital product Venture Studio delivering elite nearshore software engineering to GCC enterprises, with active SaaS products in Climate Tech, Web3 Trust, and FinTech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
