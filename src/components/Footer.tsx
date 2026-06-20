"use client";

import React from "react";

interface TautanFooter {
  href: string;
  label: string;
}

interface GrupTautanFooter {
  title: string;
  links: TautanFooter[];
}

interface TautanSosial {
  icon: (props: React.ComponentProps<"svg">) => React.JSX.Element;
  href: string;
}

const grupTautanFooter: GrupTautanFooter[] = [
  {
    title: "Perusahaan",
    links: [
      { href: "#about", label: "Tentang Kami" },
      { href: "#why-choose-us", label: "Keunggulan Kami" },
      { href: "#contact", label: "Kontak" },
      { href: "#", label: "Karir" },
    ],
  },
  {
    title: "Layanan",
    links: [
      { href: "#services", label: "Website Development" },
      { href: "#services", label: "Mobile Apps" },
      { href: "#services", label: "IoT Development" },
      { href: "#services", label: "Digital Ads" },
      { href: "#services", label: "Visual Branding" },
    ],
  },
  {
    title: "Dukungan",
    links: [
      { href: "#", label: "Pusat Bantuan" },
      { href: "#", label: "FAQ" },
      { href: "https://wa.me/6285117138037", label: "Konsultasi IT Gratis" },
      { href: "#", label: "Status Layanan" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Syarat & Ketentuan" },
      { href: "#", label: "Kebijakan Privasi" },
      { href: "#", label: "Keamanan Data" },
      { href: "#", label: "Lisensi" },
    ],
  },
];

const tautanSosial: TautanSosial[] = [
  { icon: IkonFacebook, href: "#" },
  { icon: IkonInstagram, href: "#" },
  { icon: IkonLinkedin, href: "#" },
  { icon: IkonTwitter, href: "#" },
];

function GrupTautan({ grup }: { grup: GrupTautanFooter }) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-bold tracking-wider text-[#f0fdf4] uppercase">{grup.title}</h3>
      <ul className="space-y-4 text-sm text-[#a7c9b4]">
        {grup.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="transition-colors hover:text-[#86efac]">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IkonSosial({ tautan }: { tautan: TautanSosial }) {
  const Icon = tautan.icon;
  return (
    <a
      href={tautan.href}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4a7c59]/40 text-[#a7c9b4] transition-all hover:border-[#86efac]/50 hover:bg-[#4a7c59]/20 hover:text-[#86efac]"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function TombolUnduhAplikasi() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="#"
        className="flex items-center gap-2 rounded-xl border border-[#4a7c59]/40 bg-[#0f1a0f] px-4 py-2 text-[#f0fdf4] transition-colors hover:bg-[#4a7c59]/20"
      >
        <IkonApple className="h-6 w-6" />
        <div className="flex flex-col items-start justify-center">
          <span className="mb-1 text-[9px] leading-none text-[#a7c9b4]">Download on the</span>
          <span className="text-sm leading-none font-bold">App Store</span>
        </div>
      </a>

      <a
        href="#"
        className="flex items-center gap-2 rounded-xl border border-[#4a7c59]/40 bg-[#0f1a0f] px-4 py-2 text-[#f0fdf4] transition-colors hover:bg-[#4a7c59]/20"
      >
        <IkonPlayStore className="ml-1 h-5 w-5" />
        <div className="flex flex-col items-start justify-center">
          <span className="mb-1 text-[9px] leading-none text-[#a7c9b4]">GET IT ON</span>
          <span className="text-sm leading-none font-bold">Google Play</span>
        </div>
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#4a7c59]/20 bg-[#0a0d0a] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {grupTautanFooter.map((grup, index) => (
            <GrupTautan key={index} grup={grup} />
          ))}
        </div>

        <div className="mb-8 h-px w-full bg-[#4a7c59]/20" />

        <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            {tautanSosial.map((tautan, index) => (
              <IkonSosial key={index} tautan={tautan} />
            ))}
          </div>

          <TombolUnduhAplikasi />
        </div>

        <div className="mb-6 h-px w-full bg-[#4a7c59]/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#6b8f78] md:flex-row">
          <p>© {new Date().getFullYear()} PT Yhoiki Digital Nusantara. All rights reserved.</p>
          <div className="flex items-center gap-2 font-semibold tracking-wider uppercase">
            <span>Beyond Limits</span>
            <span className="text-[#86efac]">✦</span>
            <span>Beyond Imaginations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IkonFacebook(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IkonInstagram(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IkonLinkedin(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IkonTwitter(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function IkonApple(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.546,12.763c0.024-1.87,1.004-3.597,2.597-4.576c-1.009-1.442-2.64-2.323-4.399-2.378 c-1.851-0.194-3.645,1.107-4.588,1.107c-0.961,0-2.413-1.088-3.977-1.056C6.122,5.927,4.25,7.068,3.249,8.867 c-2.131,3.69-0.542,9.114,1.5,12.097c1.022,1.461,2.215,3.092,3.778,3.035c1.529-0.063,2.1-0.975,3.945-0.975 c1.828,0,2.364,0.975,3.958,0.938c1.64-0.027,2.674-1.467,3.66-2.942c0.734-1.041,1.299-2.191,1.673-3.408 C19.815,16.788,18.548,14.879,18.546,12.763z" />
      <path d="M15.535,3.847C16.429,2.773,16.87,1.393,16.763,0c-1.366,0.144-2.629,0.797-3.535,1.829 c-0.895,1.019-1.349,2.351-1.261,3.705C13.352,5.548,14.667,4.926,15.535,3.847z" />
    </svg>
  );
}

function IkonPlayStore(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m21.762,9.942L4.67.378c-.721-.466-1.635-.504-2.393-.099-.768.411-1.246,1.208-1.246,2.08v19.282c0,.872.477,1.668,1.246,2.079.755.404,1.668.37,2.393-.098l17.092-9.564c.756-.423,1.207-1.192,1.207-2.058s-.451-1.635-1.207-2.058Zm-5.746-1.413l-2.36,2.36L5.302,2.534l10.714,5.995ZM2.604,21.906V2.094l9.941,9.906L2.604,21.906Zm2.698-.439l8.355-8.355,2.36,2.36-10.714,5.995Zm15.692-8.78l-3.552,1.987-2.674-2.674,2.674-2.674,3.552,1.987c.363.203.402.548.402.686s-.039.483-.402.686Z" />
    </svg>
  );
}