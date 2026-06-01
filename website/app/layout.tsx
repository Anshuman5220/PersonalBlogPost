import type { Metadata } from "next";
import { IBM_Plex_Sans, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anshuman Bhadauria | AI Blog and Case Studies",
  description:
    "Writing and case studies on agentic AI, evaluation, RAG, and enterprise delivery by Anshuman Bhadauria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitializationScript = `(() => {
    try {
      const storageKey = 'site-theme';
      const storedTheme = window.localStorage.getItem(storageKey);
      const theme = storedTheme === 'light' || storedTheme === 'dark'
        ? storedTheme
        : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (_error) {
      document.documentElement.dataset.theme = 'light';
      document.documentElement.style.colorScheme = 'light';
    }
  })();`;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitializationScript}
        </Script>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
