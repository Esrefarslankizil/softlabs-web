import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "SoftLabs — Yerel firmalar için yazılım",
  description:
    "Yerel işletmeler için web, mobil ve operasyon yazılımı. Net süreç, ölçülebilir sonuç.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-text-main antialiased selection:bg-primary-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
