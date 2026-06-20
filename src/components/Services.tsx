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
  hoverClass: string;
  image: string;
}

const daftarLayanan: DataLayanan[] = [
  {
    Icon: Globe,
    title: "Website Development",
    desc: "Pengembangan website modern, responsif, dan scalable sesuai kebutuhan bisnis Anda.",
    tag: "Core Service",
    pills: ["Company Profile", "Landing Page", "Web App", "E-Commerce"],
    reverse: false,
    bgClass: "bg-[#0f1a0f]",
    hoverClass: "hover:bg-[#121f12]",
    image: "/right-hero.png",
  },
  {
    Icon: Smartphone,
    title: "App Development",
    desc: "Pengembangan aplikasi berbasis kebutuhan bisnis dan pengguna modern.",
    tag: "Mobile & Web",
    pills: ["Aplikasi iOS", "Aplikasi Android", "Lintas Platform"],
    reverse: true,
    bgClass: "bg-[#4a7c59]/5",
    hoverClass: "hover:bg-[#4a7c59]/10",
    image: "/right-hero.png",
  },
  {
    Icon: Palette,
    title: "Visual Branding",
    desc: "Pengembangan identitas visual dan desain digital yang modern, konsisten, dan relevan.",
    tag: "Design",
    pills: ["UI/UX Design", "Logo Design", "Brand Guidelines"],
    reverse: false,
    bgClass: "bg-[#0f1a0f]",
    hoverClass: "hover:bg-[#121f12]",
    image: "/right-hero.png",
  },
  {
    Icon: Bot,
    title: "Digital Solutions",
    desc: "Menyediakan solusi teknologi untuk mendukung transformasi digital bisnis Anda.",
    tag: "AI & Automation",
    pills: ["Sistem IoT", "Automasi Bisnis", "Data Analytics"],
    reverse: true,
    bgClass: "bg-[#4a7c59]/5",
    hoverClass: "hover:bg-[#4a7c59]/10",
    image: "/right-hero.png",
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
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function KartuLayanan({ layanan, index }: { layanan: DataLayanan; index: number }) {
  return (
    <div
      className={`
        fade-up group relative flex flex-col items-center gap-8 overflow-hidden rounded-3xl border
        border-[#4a7c59]/20 ${layanan.bgClass} p-8 transition-colors duration-500 md:gap-12
        ${layanan.hoverClass} lg:p-12
        ${layanan.reverse ? "md:flex-row-reverse" : "md:flex-row"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full mask-[linear-gradient(white,transparent)] opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a7c59_1px,transparent_1px)] bg-size-[24px] mix-blend-overlay" />
      </div>

      <div
        className={`pointer-events-none absolute top-0 h-64 w-64 -translate-y-1/2 rounded-full bg-[#4a7c59]/10 blur-3xl transition-transform duration-700 group-hover:scale-110 ${
          layanan.reverse ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
        }`}
      />

      <div className="relative z-10 w-full flex-1 space-y-6">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#4a7c59]/40 bg-[#4a7c59]/20">
            <layanan.Icon size={28} className="text-[#86efac]" />
          </div>
          <span className="rounded-full border border-[#4a7c59]/30 bg-[#4a7c59]/10 px-4 py-2 text-xs font-medium text-[#86efac]">
            {layanan.tag}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-[#f0fdf4] md:text-3xl lg:text-4xl">{layanan.title}</h3>
        <p className="text-sm leading-relaxed text-[#a7c9b4] md:text-base lg:text-lg">{layanan.desc}</p>

        <div className="flex flex-wrap gap-3 pt-4">
          {layanan.pills.map((pill, idx) => (
            <span
              key={idx}
              className="cursor-pointer rounded-full border border-[#4a7c59]/40 px-4 py-2 text-xs font-medium text-[#a7c9b4] transition-all hover:border-[#86efac]/50 hover:bg-[#4a7c59]/20 hover:text-[#86efac] md:text-sm"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="group/link relative z-10 mt-8 flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-[#86efac]">
          <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#86efac] after:transition-transform after:duration-300 group-hover/link:after:origin-bottom-left group-hover/link:after:scale-x-100">
            Pelajari lebih lanjut
          </span>
          <ChevronRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
        </div>
      </div>

      <div className="group/image relative flex h-64 w-full flex-1 items-center justify-center overflow-hidden rounded-2xl border border-[#4a7c59]/10 bg-[#0a0d0a]/60 md:h-87.5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,124,89,0.1)_0%,transparent_70%)]" />

        <img
          src={layanan.image}
          alt={layanan.title}
          className="relative z-10 h-[85%] w-[85%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover/image:scale-105"
        />
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden bg-[#0a0d0a] py-24">
      <div className="bg-dots absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(74,124,89,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="fade-up mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#f0fdf4] lg:text-5xl">
            Apa yang Kami Tawarkan
          </h2>
          <p className="text-sm text-[#a7c9b4] md:text-base">
            Layanan lengkap untuk kebutuhan transformasi digital bisnis Anda, dari pengembangan hingga strategi digital yang komprehensif.
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
          __html: `
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `,
        }}
      />
    </section>
  );
}