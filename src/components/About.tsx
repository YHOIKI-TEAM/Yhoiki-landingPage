"use client";

import { useEffect, useRef } from "react";
import { FileCheck, BadgeCheck, Landmark, Receipt, Target, CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const missions = [
  "Mengembangkan produk digital inovatif, efisien, dan mudah digunakan.",
  "Menghadirkan solusi SaaS untuk digitalisasi berbagai sektor industri.",
  "Memanfaatkan teknologi modern seperti AI, Blockchain, dan emerging technology lainnya.",
  "Membangun ekosistem teknologi adaptif terhadap perkembangan zaman.",
  "Menjaga kualitas, keamanan, dan kepercayaan produk serta layanan.",
];

export default function About() {
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
    <section id="about" ref={ref} className="relative py-24 overflow-hidden bg-[#0a0d0a]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(74,124,89,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="fade-up mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#f0fdf4] lg:text-5xl mb-4">
            Mengenal Lebih Dekat <br />
            <span className="text-[#4a7c59]">PT Yhoiki Digital</span>
          </h2>
          <p className="text-[#a7c9b4] text-sm md:text-base">
            Kenali visi, misi, dan ekosistem teknologi yang kami bangun untuk mendukung pertumbuhan digital Anda.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-8">
          
          {/* Card 1: Intro (Span 5) */}
          <div className={cn(
            "fade-up relative overflow-hidden rounded-2xl border border-[#4a7c59]/20 bg-[#0f1a0f] p-6 lg:p-8 lg:col-span-5",
            "flex flex-col justify-center transition-colors hover:bg-[#121f12]"
          )}>
            {/* Background Pattern */}
            <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)] opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a7c59_1px,transparent_1px)] bg-[size:24px] mix-blend-overlay" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0fdf4] mb-6 leading-tight relative z-10">
              Perusahaan Teknologi <br />
              <span className="text-[#4a7c59]">Digital Terdepan</span> <br />
              di Asia Tenggara
            </h2>

            <p className="text-[#a7c9b4] text-base leading-relaxed mb-4 relative z-10">
              PT Yhoiki Digital Nusantara adalah perusahaan teknologi yang berfokus pada pengembangan produk digital berbasis software (SaaS) serta pemanfaatan teknologi modern seperti Artificial Intelligence (AI), Blockchain dan teknologi baru lainnya.
            </p>
            <p className="text-[#a7c9b4] text-base leading-relaxed relative z-10">
              Hadir sebagai respon terhadap meningkatnya kebutuhan digitalisasi, dengan tujuan menghadirkan solusi yang relevan, praktis, dan sesuai kebutuhan pengguna di era modern.
            </p>
          </div>

          {/* Card 2: Legalitas / Company Status (Span 3) - Dark Background */}
          <div className={cn(
            "fade-up relative overflow-hidden rounded-2xl border border-[#4a7c59]/20 bg-[#0f1a0f] p-6 lg:p-8 lg:col-span-3 transition-colors hover:bg-[#121f12]"
          )}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#4a7c59]/20 border border-[#4a7c59]/40 flex items-center justify-center">
                <Landmark size={20} className="text-[#86efac]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f0fdf4]">Company Status</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { Icon: FileCheck, label: "Bentuk Usaha", value: "Perseroan Perorangan" },
                { Icon: BadgeCheck, label: "Status", value: "Terdaftar & Aktif" },
                { Icon: Landmark, label: "Legalitas", value: "OSS & NIB Terverifikasi" },
                { Icon: Receipt, label: "Pajak", value: "Terdaftar" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="p-4 rounded-xl border border-[#4a7c59]/20 bg-[#4a7c59]/5 flex items-start gap-3">
                  <Icon size={18} className="text-[#86efac] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-[#6b8f78] mb-1">{label}</div>
                    <div className="text-sm font-medium text-[#f0fdf4]">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Vision (Span 4) - Green Background */}
          <div className={cn(
            "fade-up relative overflow-hidden rounded-2xl border border-[#4a7c59]/20 bg-[#4a7c59]/5 p-6 lg:p-8 lg:col-span-4 transition-colors hover:bg-[#4a7c59]/10"
          )}>
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#4a7c59]/15 -translate-y-1/2 translate-x-1/2 pointer-events-none blur-3xl" />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-[#4a7c59]/20 border border-[#4a7c59]/40 flex items-center justify-center">
                <Target size={20} className="text-[#86efac]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f0fdf4]">Vision</h3>
            </div>
            
            <p className="text-[#a7c9b4] leading-relaxed relative z-10">
              Menjadi perusahaan teknologi digital terdepan di Asia Tenggara yang menghadirkan inovasi berbasis software, AI, Blockchain, dan teknologi modern lainnya untuk menciptakan solusi digital yang berdampak, berkelanjutan, dan memudahkan kehidupan masyarakat.
            </p>
          </div>

          {/* Card 4: Mission (Span 4) - Green Background */}
          <div className={cn(
            "fade-up relative overflow-hidden rounded-2xl border border-[#4a7c59]/20 bg-[#4a7c59]/5 p-6 lg:p-8 lg:col-span-4 transition-colors hover:bg-[#4a7c59]/10"
          )}>
            {/* Subtle glow added for consistency with Vision */}
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#4a7c59]/15 translate-y-1/2 -translate-x-1/2 pointer-events-none blur-3xl" />

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-[#4a7c59]/20 border border-[#4a7c59]/40 flex items-center justify-center">
                <CheckCircle2 size={20} className="text-[#86efac]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f0fdf4]">Mission</h3>
            </div>

            <ul className="space-y-4 relative z-10">
              {missions.map((m, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#a7c9b4] leading-relaxed items-start">
                  <div className="w-6 h-6 rounded-full bg-[#4a7c59]/20 flex items-center justify-center shrink-0 mt-0.5 border border-[#4a7c59]/30">
                    <span className="text-[#86efac] text-xs font-bold">{i + 1}</span>
                  </div>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

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