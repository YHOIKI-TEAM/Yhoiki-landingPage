"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface TautanNavigasi {
  label: string;
  href: string;
}

const tautanNavigasi: TautanNavigasi[] = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Keunggulan", href: "#why-choose-us" },
  { label: "Layanan", href: "#services" },
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
  return (
    <a href="#" className="group flex items-center">
      <img
        src="/logo.png"
        alt="Yhoiki Logo"
        className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105 md:h-14 md:w-14"
      />
      {/* FIX: typo "text-x" → "text-xl" */}
      <span className="text-xl font-bold tracking-tight text-[#f0fdf4] md:text-xl">Yhoiki</span>
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
          className="text-sm font-medium text-[#a7c9b4] transition-colors duration-200 hover:text-[#86efac]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function MenuMobile({ tutupMenu }: { tutupMenu: () => void }) {
  return (
    <div className="absolute top-full right-0 left-0 flex flex-col gap-2 border-b border-[#4a7c59]/20 bg-[#0a0d0a]/95 px-6 py-5 shadow-xl backdrop-blur-xl md:hidden">
      {tautanNavigasi.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={tutupMenu}
          className="border-b border-[#4a7c59]/10 py-3 text-base font-medium text-[#a7c9b4] transition-colors last:border-none hover:text-[#86efac]"
        >
          {link.label}
        </a>
      ))}
      {/* FIX: tambah CTA di mobile menu juga */}
      <a
        href="#contact"
        onClick={tutupMenu}
        className="mt-2 rounded-full bg-[#4a7c59] px-5 py-2.5 text-center text-sm font-semibold text-[#0a0d0a] transition-colors hover:bg-[#6aaa7d]"
      >
        Hubungi Kami
      </a>
    </div>
  );
}

export default function Navbar() {
  const sudahScroll = gunakanStatusScroll();
  const [menuMobileTerbuka, setMenuMobileTerbuka] = useState(false);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        sudahScroll
          ? "border-b border-[#4a7c59]/20 bg-[#0a0d0a]/85 py-3 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <LogoYhoiki />
        <TautanDesktop />

        {/* FIX: tambah CTA button di desktop nav */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="rounded-full bg-[#4a7c59] px-5 py-2 text-sm font-semibold text-[#0a0d0a] shadow-md shadow-[#4a7c59]/20 transition-all duration-300 hover:bg-[#6aaa7d] hover:-translate-y-0.5"
          >
            Hubungi Kami
          </a>
        </div>

        <button
          onClick={() => setMenuMobileTerbuka(!menuMobileTerbuka)}
          className="p-1 text-[#a7c9b4] transition-colors hover:text-[#86efac] md:hidden"
          aria-label="Toggle menu"
        >
          {menuMobileTerbuka ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuMobileTerbuka && <MenuMobile tutupMenu={() => setMenuMobileTerbuka(false)} />}
    </nav>
  );
}