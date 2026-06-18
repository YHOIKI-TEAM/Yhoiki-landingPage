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
    color: "from-[#1a2e1a] to-[#0f1a0f]",
  },
  {
    Icon: Smartphone,
    title: "App Development",
    desc: "Pengembangan aplikasi berbasis kebutuhan bisnis dan pengguna modern.",
    tag: "Mobile & Web",
    large: false,
    color: "from-[#162016] to-[#0a0d0a]",
  },
  {
    Icon: Palette,
    title: "Visual Branding",
    desc: "Pengembangan identitas visual dan desain digital yang modern, konsisten, dan relevan untuk kebutuhan brand serta bisnis di era digital.",
    tag: "Design",
    large: false,
    color: "from-[#162016] to-[#0a0d0a]",
  },
  {
    Icon: Bot,
    title: "Digital Solutions",
    desc: "Menyediakan solusi teknologi untuk mendukung transformasi digital bisnis dan organisasi.",
    tag: "AI & Automation",
    large: false,
    color: "from-[#1a2e1a] to-[#0f1a0f]",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <div
      className={`group pb-2 ${service.large ? "lg:col-span-2 lg:row-span-2" : ""}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`
          fade-up h-full relative rounded-2xl border border-[#4a7c59]/20
          bg-gradient-to-br ${service.color} p-6 overflow-hidden
          transition-all duration-500
          group-hover:border-[#4a7c59]/50
          group-hover:shadow-lg group-hover:shadow-[#4a7c59]/10
          group-hover:-translate-y-1
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a7c59]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#4a7c59]/5 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#4a7c59]/15 border border-[#4a7c59]/25 flex items-center justify-center">
              <service.Icon size={18} className="text-[#86efac]" />
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full border border-[#4a7c59]/30 text-[#86efac] bg-[#4a7c59]/10">
              {service.tag}
            </span>
          </div>

          <h3 className={`font-bold text-[#f0fdf4] mb-2 ${service.large ? "text-2xl" : "text-lg"}`}>
            {service.title}
          </h3>
          <p className={`text-[#a7c9b4] leading-relaxed ${service.large ? "text-base" : "text-sm"}`}>
            {service.desc}
          </p>

          {service.large && (
            <div className="mt-6 flex items-center gap-2 text-[#86efac] text-sm font-medium cursor-pointer">
              <span>Pelajari lebih lanjut</span>
              <ChevronRight size={15} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="fade-up flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#4a7c59]" />
            <span className="text-[#86efac] text-sm tracking-widest uppercase">Layanan Kami</span>
            <div className="h-px w-12 bg-[#4a7c59]" />
          </div>
          <h2 className="fade-up text-4xl md:text-5xl font-bold text-[#f0fdf4] mb-4">
            Apa yang Kami Tawarkan
          </h2>
          <p className="fade-up text-[#a7c9b4] max-w-xl mx-auto">
            Layanan lengkap untuk kebutuhan transformasi digital bisnis Anda, dari pengembangan
            hingga strategi digital yang komprehensif.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-rows-auto gap-4">
          <ServiceCard service={services[0]} index={0} />
          {services.slice(1).map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}