"use client";

import React from "react";
import { useTema } from "@/context/ThemeContext";

/**
 * FIX: Hapus semua link placeholder (#) yang belum siap.
 * Prinsip: lebih baik sedikit link yang jujur daripada banyak link palsu.
 *
 * Yang dihapus:
 * - Karir (belum ada halaman)
 * - Pusat Bantuan, FAQ, Status Layanan (belum ada)
 * - Syarat & Ketentuan, Kebijakan Privasi, Keamanan Data, Lisensi (belum ada)
 *
 * Yang dipertahankan: link yang punya destination nyata (anchor section atau URL aktif)
 *
 * FIX: Social icons — hanya tampilkan kalau ada akun. Kosongi array tautanSosial
 * kalau semua belum siap, atau isi href dengan URL akun nyata.
 */

interface TautanFooter {
  href: string;
  label: string;
  eksternal?: boolean;
}

interface GrupTautanFooter {
  title: string;
  links: TautanFooter[];
}

interface TautanSosial {
  icon: (props: React.ComponentProps<"svg">) => React.JSX.Element;
  href: string;
  label: string;
}

const grupTautanFooter: GrupTautanFooter[] = [
  {
    title: "Perusahaan",
    links: [
      { href: "#about", label: "Tentang Kami" },
      { href: "#portfolio", label: "Portofolio" },
      { href: "#why-choose-us", label: "Keunggulan Kami" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Kontak" },
      // FIX:"Karir"dihapus — belum ada halaman/posisi terbuka
    ],
  },
  {
    title: "Layanan",
    links: [
      { href: "#services", label: "Website Development" },
      { href: "#services", label: "App Development" },
      { href: "#services", label: "Visual Branding" },
      { href: "#services", label: "Digital Solutions" },
    ],
  },
  {
    title: "Hubungi Kami",
    links: [
      // FIX: Ganti link dummy dengan kontak yang bisa diklik
      { href: "mailto:yhoikiteam@gmail.com", label: "yhoikiteam@gmail.com", eksternal: true },
      { href: "https://wa.me/6285117138037", label: "WhatsApp Konsultasi", eksternal: true },
      // FIX:"Pusat Bantuan","FAQ","Status Layanan"dihapus
    ],
  },
  {
    title: "Legal",
    links: [{ href: "#legal", label: "Legalitas Perusahaan" }],
  },
];

/**
 * FIX: Isi href dengan URL akun sosmed nyata, atau kosongkan array ini kalau belum ada.
 * Contoh kalau akun Instagram sudah ada: { icon: IkonInstagram, href:"https://instagram.com/yhoiki", label:"Instagram"}
 */
const tautanSosial: TautanSosial[] = [
  // Uncomment dan isi URL nyata kalau sudah punya akun:
  // { icon: IkonInstagram, href:"https://instagram.com/yhoiki.id", label:"Instagram"},
  // { icon: IkonLinkedin, href:"https://linkedin.com/company/yhoiki", label:"LinkedIn"},
];

function GrupTautan({ grup }: { grup: GrupTautanFooter }) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-bold tracking-wider text-[var(--warna-teks-utama)] uppercase">
        {grup.title}
      </h3>
      <ul className="space-y-4 text-sm text-[var(--warna-teks-sekunder)]">
        {grup.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.eksternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`transition-colors hover:text-[var(--warna-aksen)] ${
                link.href === "#" ? "cursor-default opacity-40 hover:text-[var(--warna-teks-sekunder)]" : ""
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { tema } = useTema();
  const srcLogo = tema === "light" ? "/logo2.png" : "/logo.png";

  return (
    <footer className="bg-[var(--warna-bg-dasar)] section-alt pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Logo & tagline di footer */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <img src={srcLogo} alt="Yhoiki Logo" className="h-8 w-8 object-contain" />
              <span className="text-lg font-bold text-[var(--warna-teks-utama)]">Yhoiki</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--warna-teks-muted)]">
              Solusi digital berbasis AI, Blockchain, dan SaaS untuk pertumbuhan bisnis Anda.
            </p>
          </div>

          {/* FIX: Social icons hanya muncul kalau ada di array (saat ini kosong = tidak render) */}
          {tautanSosial.length > 0 && (
            <div className="flex items-center gap-3">
              {tautanSosial.map((tautan) => {
                const Icon = tautan.icon;
                return (
                  <a
                    key={tautan.label}
                    href={tautan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tautan.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--warna-teks-sekunder)] transition-all hover:bg-[rgba(var(--warna-brand-rgb),0.2)] hover:text-[var(--warna-aksen)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div className="mb-12 h-px w-full bg-[rgba(var(--warna-brand-rgb),0.2)]" />

        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {grupTautanFooter.map((grup, index) => (
            <GrupTautan key={index} grup={grup} />
          ))}
        </div>

        <div className="h-px w-full bg-[rgba(var(--warna-brand-rgb),0.2)]" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-[var(--warna-teks-muted)] md:flex-row">
          <p>© {new Date().getFullYear()} PT Yhoiki Digital Nusantara. All rights reserved.</p>
          <div className="flex items-center gap-2 font-semibold tracking-wider uppercase">
            <span>Beyond Limits</span>
            <span className="text-[var(--warna-aksen)]">✦</span>
            <span>Beyond Imaginations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
