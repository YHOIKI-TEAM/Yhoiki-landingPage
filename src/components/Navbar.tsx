"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTema } from "@/context/ThemeContext";

interface TautanNavigasi {
  label: string;
  href: string;
}

const tautanNavigasi: TautanNavigasi[] = [
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Keunggulan", href: "#why-choose-us" },
  { label: "Partner", href: "#partner" },
  { label: "FAQ", href: "#faq" },
];

function gunakanStatusScroll() {
  const [sudahScroll, setSudahScroll] = useState(false);

  useEffect(() => {
    const tanganiScroll = () => setSudahScroll(window.scrollY > 40);
    window.addEventListener("scroll", tanganiScroll);
    return () => window.removeEventListener("scroll", tanganiScroll);
  }, []);

  return sudahScroll;
}

function LogoYhoiki() {
  const { tema } = useTema();
  const srcLogo = tema === "light" ? "/logo2.png" : "/logo.png";

  return (
    <a href="#" className="group flex items-center gap-2">
      <img
        src={srcLogo}
        alt="Yhoiki Logo"
        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105 md:h-12 md:w-12"
      />
      <span className="text-xl font-bold tracking-tight text-[var(--warna-teks-utama)] md:text-xl">
        Yhoiki
      </span>
    </a>
  );
}

function TautanDesktop() {
  return (
    <div className="hidden items-center gap-8 md:flex">
      {tautanNavigasi.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-[var(--warna-teks-sekunder)] transition-colors duration-200 hover:text-[var(--warna-aksen)]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function MenuMobile({ tutupMenu }: { tutupMenu: () => void }) {
  return (
    <div className="absolute top-full right-0 left-0 flex flex-col gap-2 bg-[rgba(var(--warna-bg-dasar-rgb),0.95)] px-6 py-5 shadow-xl backdrop-blur-xl md:hidden">
      {tautanNavigasi.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={tutupMenu}
          className="py-3 text-base font-medium text-[var(--warna-teks-sekunder)] transition-colors hover:text-[var(--warna-aksen)]"
        >
          {link.label}
        </a>
      ))}
      {/* FIX: tambah CTA di mobile menu juga */}
      <a
        href="#contact"
        onClick={tutupMenu}
        className="mt-2 rounded-full bg-[var(--warna-brand)] px-5 py-2.5 text-center text-sm font-semibold text-[var(--warna-bg-dasar)] transition-colors hover:bg-[var(--warna-brand-terang)]"
      >
        Hubungi Kami
      </a>
    </div>
  );
}

function TombolTema() {
  const { tema, toggleTema } = useTema();

  return (
    <button
      onClick={toggleTema}
      aria-label="Ganti tema"
      className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--warna-teks-sekunder)] transition-all hover:bg-[rgba(var(--warna-brand-rgb),0.15)] hover:text-[var(--warna-aksen)]"
    >
      {tema === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function Navbar() {
  const sudahScroll = gunakanStatusScroll();
  const [menuMobileTerbuka, setMenuMobileTerbuka] = useState(false);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        sudahScroll
          ? "bg-[rgba(var(--warna-bg-dasar-rgb),0.85)] py-3 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <LogoYhoiki />
        <TautanDesktop />

        {/* FIX: tambah CTA button di desktop nav */}
        <div className="hidden items-center gap-3 md:flex">
          <TombolTema />
          <a
            href="#contact"
            className="rounded-full bg-[var(--warna-brand)] px-5 py-2 text-sm font-semibold text-[var(--warna-bg-dasar)] shadow-md shadow-[rgba(var(--warna-brand-rgb),0.2)] transition-all duration-300 hover:bg-[var(--warna-brand-terang)] hover:-translate-y-0.5"
          >
            Hubungi Kami
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <TombolTema />
          <button
            onClick={() => setMenuMobileTerbuka(!menuMobileTerbuka)}
            className="p-1 text-[var(--warna-teks-sekunder)] transition-colors hover:text-[var(--warna-aksen)]"
            aria-label="Toggle menu"
          >
            {menuMobileTerbuka ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {menuMobileTerbuka && <MenuMobile tutupMenu={() => setMenuMobileTerbuka(false)} />}
    </nav>
  );
}
