"use client";

import { useEffect, useRef } from "react";
import { Globe, Smartphone, Palette, Bot, ChevronRight } from "lucide-react";

interface DataLayanan {
  Icon: typeof Globe;
  title: string;
  desc: string;
  tag: string;
  pills: string[];
  reverse: boolean;
  bgClass: string;
  ilustrasi: React.ReactNode;
}

// Ilustrasi SVG inline per layanan
function IlustrasiWebDev() {
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="flat-illustration h-full w-full">
      {/* Browser window */}
      <rect
        x="20"
        y="20"
        width="280"
        height="180"
        rx="12"
        fill="var(--warna-bg-permukaan)"
        stroke="var(--warna-brand)"
        strokeWidth="1.5"
      />
      {/* Top bar */}
      <rect x="20" y="20" width="280" height="32" rx="12" fill="var(--warna-bg-permukaan-2)" />
      <rect x="20" y="40" width="280" height="12" fill="var(--warna-bg-permukaan-2)" />
      {/* Dots */}
      <circle cx="40" cy="36" r="5" fill="var(--warna-brand)" />
      <circle cx="56" cy="36" r="5" fill="var(--warna-brand)" />
      <circle cx="72" cy="36" r="5" fill="var(--warna-brand)" />
      {/* URL bar */}
      <rect x="90" y="28" width="160" height="16" rx="8" fill="var(--warna-bg-dasar)" />
      <text x="115" y="40" fill="var(--warna-brand)" fontSize="8" fontFamily="monospace">
        yhoiki.digital
      </text>
      {/* Content */}
      <rect x="36" y="68" width="100" height="10" rx="4" fill="var(--warna-brand)" />
      <rect x="36" y="84" width="140" height="6" rx="3" fill="var(--warna-brand)" />
      <rect x="36" y="96" width="120" height="6" rx="3" fill="var(--warna-brand)" />
      <rect x="36" y="116" width="80" height="28" rx="8" fill="var(--warna-brand)" />
      <text x="52" y="134" fill="var(--warna-bg-dasar)" fontSize="9" fontWeight="bold">
        Mulai →
      </text>
      {/* Right image block */}
      <rect
        x="180"
        y="64"
        width="104"
        height="108"
        rx="8"
        fill="var(--warna-bg-permukaan-2)"
        stroke="var(--warna-brand)"
        strokeWidth="1"
      />
      <rect x="192" y="76" width="80" height="48" rx="4" fill="var(--warna-brand)" />
      <circle cx="232" cy="100" r="16" fill="var(--warna-brand)" />
      <rect x="192" y="132" width="50" height="6" rx="3" fill="var(--warna-brand)" />
      <rect x="192" y="144" width="35" height="6" rx="3" fill="var(--warna-brand)" />
      {/* Nav dots bottom */}
      <circle cx="148" cy="190" r="4" fill="var(--warna-brand)" />
      <circle cx="160" cy="190" r="4" fill="var(--warna-brand)" />
      <circle cx="172" cy="190" r="4" fill="var(--warna-brand)" />
    </svg>
  );
}

function IlustrasiAppDev() {
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="flat-illustration h-full w-full">
      {/* Phone frame kiri */}
      <rect
        x="60"
        y="20"
        width="80"
        height="140"
        rx="16"
        fill="var(--warna-bg-permukaan)"
        stroke="var(--warna-brand)"
        strokeWidth="1.5"
      />
      <rect x="68" y="32" width="64" height="100" rx="6" fill="var(--warna-bg-dasar)" />
      {/* Notch */}
      <rect x="86" y="26" width="28" height="8" rx="4" fill="var(--warna-bg-permukaan-2)" />
      {/* App content */}
      <rect x="74" y="40" width="52" height="8" rx="3" fill="var(--warna-brand)" />
      <rect x="74" y="54" width="52" height="32" rx="6" fill="var(--warna-bg-permukaan-2)" />
      <circle cx="100" cy="70" r="8" fill="var(--warna-brand)" />
      <rect x="74" y="92" width="36" height="5" rx="2" fill="var(--warna-brand)" />
      <rect x="74" y="102" width="24" height="5" rx="2" fill="var(--warna-brand)" />
      <rect x="74" y="116" width="52" height="10" rx="5" fill="var(--warna-brand)" />
      {/* Home bar */}
      <rect x="85" y="152" width="30" height="4" rx="2" fill="var(--warna-brand)" />

      {/* Phone frame kanan (iOS style) */}
      <rect
        x="180"
        y="36"
        width="80"
        height="140"
        rx="16"
        fill="var(--warna-bg-permukaan)"
        stroke="var(--warna-brand)"
        strokeWidth="1.5"
      />
      <rect x="188" y="48" width="64" height="100" rx="6" fill="var(--warna-bg-dasar)" />
      <rect x="204" y="41" width="28" height="8" rx="4" fill="var(--warna-bg-permukaan-2)" />
      {/* App content mirrored */}
      <rect x="194" y="56" width="52" height="8" rx="3" fill="var(--warna-brand)" />
      <rect x="194" y="70" width="52" height="32" rx="6" fill="var(--warna-bg-permukaan-2)" />
      <circle cx="220" cy="86" r="8" fill="var(--warna-aksen)" />
      <rect x="194" y="108" width="36" height="5" rx="2" fill="var(--warna-brand)" />
      <rect x="194" y="118" width="24" height="5" rx="2" fill="var(--warna-brand)" />
      <rect x="194" y="132" width="52" height="10" rx="5" fill="var(--warna-brand)" />
      <rect x="205" y="168" width="30" height="4" rx="2" fill="var(--warna-brand)" />

      {/* Signal / connection arrow */}
      <path
        d="M148 90 L176 90"
        stroke="var(--warna-brand)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path d="M170 84 L176 90 L170 96" stroke="var(--warna-brand)" strokeWidth="1.5" />
    </svg>
  );
}

function IlustrasiVisualBranding() {
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="flat-illustration h-full w-full">
      {/* Color palette circles */}
      <circle cx="80" cy="80" r="40" fill="var(--warna-brand)" />
      <circle cx="130" cy="80" r="40" fill="var(--warna-aksen)" />
      <circle
        cx="105"
        cy="120"
        r="40"
        fill="var(--warna-bg-permukaan)"
        stroke="var(--warna-brand)"
        strokeWidth="1.5"
      />

      {/* Typography block */}
      <rect
        x="180"
        y="30"
        width="120"
        height="60"
        rx="8"
        fill="var(--warna-bg-permukaan)"
        stroke="var(--warna-brand)"
        strokeWidth="1"
      />
      <text x="192" y="56" fill="var(--warna-teks-utama)" fontSize="18" fontWeight="bold" fontFamily="serif">
        Aa
      </text>
      <rect x="192" y="66" width="40" height="3" rx="1" fill="var(--warna-brand)" />
      <rect x="192" y="73" width="60" height="3" rx="1" fill="var(--warna-brand)" />

      {/* Logo sketch */}
      <rect
        x="180"
        y="108"
        width="120"
        height="88"
        rx="8"
        fill="var(--warna-bg-permukaan)"
        stroke="var(--warna-brand)"
        strokeWidth="1"
      />
      <polygon
        points="220,128 240,118 260,128 260,148 240,158 220,148"
        stroke="var(--warna-brand)"
        strokeWidth="1.5"
        fill="var(--warna-brand)"
      />
      <text x="225" y="141" fill="var(--warna-aksen)" fontSize="10" fontWeight="bold">
        Y
      </text>
      <rect x="192" y="165" width="60" height="4" rx="2" fill="var(--warna-brand)" />
      <rect x="192" y="174" width="40" height="4" rx="2" fill="var(--warna-brand)" />

      {/* Grid overlay hint */}
      <line
        x1="20"
        y1="20"
        x2="20"
        y2="200"
        stroke="var(--warna-brand)"
        strokeWidth="0.5"
        strokeDasharray="4 4"
      />
      <line
        x1="160"
        y1="20"
        x2="160"
        y2="200"
        stroke="var(--warna-brand)"
        strokeWidth="0.5"
        strokeDasharray="4 4"
      />
      <line
        x1="20"
        y1="110"
        x2="300"
        y2="110"
        stroke="var(--warna-brand)"
        strokeWidth="0.5"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

function IlustrasiDigitalSolutions() {
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="flat-illustration h-full w-full">
      {/* Central hub */}
      <circle
        cx="160"
        cy="110"
        r="28"
        fill="var(--warna-bg-permukaan-2)"
        stroke="var(--warna-brand)"
        strokeWidth="1.5"
      />
      <circle cx="160" cy="110" r="14" fill="var(--warna-brand)" />
      <text x="154" y="115" fill="var(--warna-teks-utama)" fontSize="12" fontWeight="bold">
        AI
      </text>

      {/* Node IoT */}
      <circle
        cx="60"
        cy="60"
        r="20"
        fill="var(--warna-bg-permukaan)"
        stroke="var(--warna-brand)"
        strokeWidth="1"
      />
      <text x="49" y="64" fill="var(--warna-aksen)" fontSize="8">
        IoT
      </text>
      <line
        x1="78"
        y1="74"
        x2="134"
        y2="96"
        stroke="var(--warna-brand)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* Node Analytics */}
      <circle
        cx="260"
        cy="60"
        r="20"
        fill="var(--warna-bg-permukaan)"
        stroke="var(--warna-brand)"
        strokeWidth="1"
      />
      <text x="244" y="64" fill="var(--warna-aksen)" fontSize="8">
        Data
      </text>
      <line
        x1="242"
        y1="74"
        x2="186"
        y2="96"
        stroke="var(--warna-brand)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* Node Automation */}
      <circle
        cx="60"
        cy="160"
        r="20"
        fill="var(--warna-bg-permukaan)"
        stroke="var(--warna-brand)"
        strokeWidth="1"
      />
      <text x="45" y="164" fill="var(--warna-aksen)" fontSize="8">
        Auto
      </text>
      <line
        x1="78"
        y1="148"
        x2="134"
        y2="124"
        stroke="var(--warna-brand)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* Node Cloud */}
      <circle
        cx="260"
        cy="160"
        r="20"
        fill="var(--warna-bg-permukaan)"
        stroke="var(--warna-brand)"
        strokeWidth="1"
      />
      <text x="246" y="164" fill="var(--warna-aksen)" fontSize="8">
        Cloud
      </text>
      <line
        x1="242"
        y1="148"
        x2="186"
        y2="124"
        stroke="var(--warna-brand)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* Pulse rings */}
      <circle cx="160" cy="110" r="40" stroke="var(--warna-brand)" strokeWidth="0.75" />
      <circle cx="160" cy="110" r="55" stroke="var(--warna-brand)" strokeWidth="0.5" />
    </svg>
  );
}

const daftarLayanan: DataLayanan[] = [
  {
    Icon: Globe,
    title: "Website Development",
    desc: "Pengembangan website modern, responsif, dan scalable sesuai kebutuhan bisnis Anda.",
    tag: "Core Service",
    pills: ["Company Profile", "Landing Page", "Web App", "E-Commerce"],
    reverse: false,
    bgClass: "bg-[var(--warna-bg-permukaan)]",
    ilustrasi: <IlustrasiWebDev />,
  },
  {
    Icon: Smartphone,
    title: "App Development",
    desc: "Pengembangan aplikasi berbasis kebutuhan bisnis dan pengguna modern.",
    tag: "Mobile & Web",
    pills: ["Aplikasi iOS", "Aplikasi Android", "Lintas Platform"],
    reverse: true,
    bgClass: "bg-[var(--warna-bg-elevated)]",
    ilustrasi: <IlustrasiAppDev />,
  },
  {
    Icon: Palette,
    title: "Visual Branding",
    desc: "Pengembangan identitas visual dan desain digital yang modern, konsisten, dan relevan.",
    tag: "Design",
    pills: ["UI/UX Design", "Logo Design", "Brand Guidelines"],
    reverse: false,
    bgClass: "bg-[var(--warna-bg-permukaan)]",
    ilustrasi: <IlustrasiVisualBranding />,
  },
  {
    Icon: Bot,
    title: "Digital Solutions",
    desc: "Menyediakan solusi teknologi IoT, otomatisasi, dan analitik data untuk mendukung transformasi digital bisnis Anda.",
    tag: "AI & Automation",
    pills: ["Sistem IoT", "Automasi Bisnis", "Data Analytics"],
    reverse: true,
    bgClass: "bg-[var(--warna-bg-elevated)]",
    ilustrasi: <IlustrasiDigitalSolutions />,
  },
];

function gunakanAnimasiFadeUp(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function KartuLayanan({ layanan, index }: { layanan: DataLayanan; index: number }) {
  return (
    <div
      className={`fade-up kartu-shadow group relative flex flex-col items-center gap-8 overflow-hidden rounded-3xl 
 ${layanan.bgClass} p-8 md:gap-12 lg:p-12
 ${layanan.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative z-10 w-full flex-1 space-y-6">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--warna-bg-permukaan-2)]">
            <layanan.Icon size={28} className="text-[var(--warna-aksen)]" />
          </div>
          <span className="rounded-full bg-[var(--warna-bg-permukaan-2)] px-4 py-2 text-xs font-medium text-[var(--warna-aksen)]">
            {layanan.tag}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-[var(--warna-teks-utama)] md:text-3xl lg:text-4xl">
          {layanan.title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--warna-teks-sekunder)] md:text-base lg:text-lg">
          {layanan.desc}
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          {layanan.pills.map((pill, idx) => (
            <span
              key={idx}
              className="cursor-pointer rounded-full bg-[var(--warna-bg-permukaan-2)] px-4 py-2 text-xs font-medium text-[var(--warna-teks-sekunder)] transition-colors hover:text-[var(--warna-aksen)] md:text-sm"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* FIX: Hapus"Pelajari lebih lanjut"karena belum ada halaman tujuan */}
      </div>

      {/* FIX: Ganti image dengan ilustrasi SVG inline per layanan */}
      <div className="group/image relative flex h-64 w-full flex-1 items-center justify-center overflow-hidden rounded-2xl bg-[var(--warna-bg-dasar)] md:h-[350px]">
        <div className="relative z-10 h-full w-full p-4 transition-transform duration-500 group-hover/image:scale-105">
          {layanan.ilustrasi}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--warna-bg-dasar)] py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="fade-up mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--warna-teks-utama)] lg:text-5xl">
            Apa yang Kami Tawarkan
          </h2>
          <p className="text-sm text-[var(--warna-teks-sekunder)] md:text-base">
            Layanan lengkap untuk kebutuhan transformasi digital bisnis Anda, dari pengembangan hingga
            strategi digital yang komprehensif.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {daftarLayanan.map((layanan, index) => (
            <KartuLayanan key={layanan.title} layanan={layanan} index={index} />
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `.fade-up {
 opacity: 0;
 transform: translateY(20px);
 transition: opacity 0.6s ease-out, transform 0.6s ease-out;
 }
 .fade-up.visible {
 opacity: 1;
 transform: translateY(0);
 }`,
        }}
      />
    </section>
  );
}
