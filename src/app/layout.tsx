import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Yhoiki Digital Nusantara - Your Partner in Digital Transformation",
  description: "Beyond Limits, Beyond Imaginations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} bg-[#0a0d0a] font-sans text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}