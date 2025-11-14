import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Portfolio | Software Engineer",
  description: "Software Engineer — iOS, AI, and Product Builder",
  keywords: ["software engineer", "iOS", "AI", "React", "Next.js", "portfolio"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: "Portfolio | Software Engineer",
    description: "Software Engineer — iOS, AI, and Product Builder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Software Engineer",
    description: "Software Engineer — iOS, AI, and Product Builder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
