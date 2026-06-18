"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Business Units", href: "#units" },
  { label: "Team", href: "#team" },
  { label: "Roadmap", href: "#goals" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#0a0d0a]/85 backdrop-blur-xl border-b border-[#4a7c59]/20 shadow-lg shadow-[#000]/30"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#4a7c59] flex items-center justify-center group-hover:bg-[#6aaa7d] transition-colors duration-300">
            <span className="text-white font-bold text-base">Y</span>
          </div>
          <span className="font-semibold text-[#f0fdf4] text-lg tracking-tight">
            Yhoiki
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#6b8f78] hover:text-[#86efac] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA group */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:yhoikiteam@gmail.com"
            className="px-4 py-2 text-sm text-[#86efac] hover:text-[#f0fdf4] transition-colors duration-200"
          >
            Hubungi
          </a>
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold rounded-full text-[#0a0d0a] bg-[#4a7c59] hover:bg-[#6aaa7d] transition-all duration-300 shadow-md shadow-[#4a7c59]/25 hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#a7c9b4] hover:text-[#86efac] transition-colors p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0d0a]/97 backdrop-blur-xl border-b border-[#4a7c59]/20 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[#a7c9b4] hover:text-[#86efac] transition-colors py-1 text-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-2 pt-4 border-t border-[#4a7c59]/15">
            <a
              href="mailto:yhoikiteam@gmail.com"
              className="flex-1 text-center px-4 py-2.5 text-sm font-medium rounded-full border border-[#4a7c59]/50 text-[#86efac] hover:bg-[#4a7c59]/20 transition-all"
            >
              Hubungi
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center px-4 py-2.5 text-sm font-semibold rounded-full text-[#0a0d0a] bg-[#4a7c59] hover:bg-[#6aaa7d] transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}