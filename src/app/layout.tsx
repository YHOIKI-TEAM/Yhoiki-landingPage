import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT Yhoiki Digital Nusantara — Beyond Limits Beyond Imaginations",
  description:
    "Perusahaan teknologi digital terdepan yang berfokus pada pengembangan produk digital berbasis software (SaaS), AI, Blockchain, dan teknologi modern lainnya.",
  keywords: ["SaaS", "AI", "Blockchain", "Website Development", "App Development", "Digital Solutions"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
