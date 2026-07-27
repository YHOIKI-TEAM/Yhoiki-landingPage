import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yhoiki Digital Nusantara - Your Partner in Digital Transformation",
  description: "Beyond Limits, Beyond Imaginations",
};

const antiFlicker = `(function(){try{var t=localStorage.getItem('yhoiki-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: antiFlicker }} />
      </head>
      {/* Tambahkan w-full dan overflow-x-hidden pada properti className */}
      <body
        className="font-sans antialiased w-full overflow-x-hidden"
        style={{ backgroundColor: "var(--warna-bg-dasar)", color: "var(--warna-teks-utama)" }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}