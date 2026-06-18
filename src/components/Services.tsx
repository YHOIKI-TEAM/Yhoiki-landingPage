"use client";

import { useEffect, useRef } from "react";
import { Globe, Smartphone, Palette, Bot, ChevronRight } from "lucide-react";

const services = [
  {
    Icon: Globe,
    title: "Website Development",
    desc: "Pengembangan website modern, responsif, dan scalable sesuai kebutuhan bisnis Anda.",
    tag: "Core Service",
    large: true,
    bgClass: "bg-[#0f1a0f]",
    hoverClass: "hover:bg-[#121f12]",
    gridClass: "md:col-span-2 lg:col-span-2 lg:row-span-2", // Kiri (Besar)
  },
  {
    Icon: Smartphone,
    title: "App Development",
    desc: "Pengembangan aplikasi berbasis kebutuhan bisnis dan pengguna modern.",
    tag: "Mobile & Web",
    large: false,
    bgClass: "bg-[#4a7c59]/5",
    hoverClass: "hover:bg-[#4a7c59]/10",
    gridClass: "md:col-span-2 lg:col-span-2", // Kanan Atas (Melebar)
  },
  {
    Icon: Palette,
    title: "Visual Branding",
    desc: "Pengembangan identitas visual dan desain digital yang modern, konsisten, dan relevan.",
    tag: "Design",
    large: false,
    bgClass: "bg-[#0f1a0f]",
    hoverClass: "hover:bg-[#121f12]",
    gridClass: "md:col-span-1 lg:col-span-1", // Kanan Bawah (Kiri)
  },
  {
    Icon: Bot,
    title: "Digital Solutions",
    desc: "Menyediakan solusi teknologi untuk mendukung transformasi digital bisnis Anda.",
    tag: "AI & Automation",
    large: false,
    bgClass: "bg-[#4a7c59]/5",
    hoverClass: "hover:bg-[#4a7c59]/10",
    gridClass: "md:col-span-1 lg:col-span-1", // Kanan Bawah (Kanan)
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <div className={`group ${service.gridClass}`}>
      <div
        className={`
          fade-up h-full relative rounded-2xl border border-[#4a7c59]/20
          ${service.bgClass} p-6 lg:p-8 overflow-hidden
          transition-colors duration-500 ${service.hoverClass}
          flex flex-col justify-between
        `}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Background Pattern for Large Card */}
        {service.large && (
          <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)] opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a7c59_1px,transparent_1px)] bg-[size:24px] mix-blend-overlay" />
          </div>
        )}

        {/* Subtle glow effect */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#4a7c59]/15 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700 pointer-events-none blur-3xl" />

        <div className="relative z-10 flex-1">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#4a7c59]/20 border border-[#4a7c59]/40 flex items-center justify-center">
              <service.Icon size={24} className="text-[#86efac]" />
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full border border-[#4a7c59]/30 text-[#86efac] bg-[#4a7c59]/10 font-medium">
              {service.tag}
            </span>
          </div>

          <h3 className={`font-bold text-[#f0fdf4] mb-3 ${service.large ? "text-3xl" : "text-xl"}`}>
            {service.title}
          </h3>
          <p className={`text-[#a7c9b4] leading-relaxed ${service.large ? "text-base" : "text-sm"}`}>
            {service.desc}
          </p>
        </div>

        {/* Learn More link for large card pinned to bottom */}
        {service.large && (
          <div className="relative z-10 mt-8 flex items-center gap-2 text-[#86efac] text-sm font-medium cursor-pointer group/link w-fit">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#86efac] after:transition-transform after:duration-300 group-hover/link:after:origin-bottom-left group-hover/link:after:scale-x-100">
              Pelajari lebih lanjut
            </span>
            <ChevronRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="relative py-24 overflow-hidden bg-[#0a0d0a]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(74,124,89,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="fade-up mx-auto mb-16 max-w-2xl text-center">
          
          <h2 className="text-4xl font-extrabold tracking-tight text-[#f0fdf4] lg:text-5xl mb-4">
            Apa yang Kami Tawarkan
          </h2>
          <p className="text-[#a7c9b4] text-sm md:text-base">
            Layanan lengkap untuk kebutuhan transformasi digital bisnis Anda, dari pengembangan hingga strategi digital yang komprehensif.
          </p>
        </div>

        {/* Bento Box Grid (Sekarang pakai grid-cols-4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />
    </section>
  );
}