import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Source_Serif_4 } from "next/font/google";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const uiFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ui",
});

const bodyFont = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "BITACORA",
  description: "Revista digital BITACORA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-theme="light"
      style={{ colorScheme: "light" }}
      className={`${displayFont.variable} ${uiFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
