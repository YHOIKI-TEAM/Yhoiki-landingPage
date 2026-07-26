"use client";

import { useEffect, useRef } from "react";

const reasons = [
  {
    title: "Innovation Oriented",
    desc: "Berorientasi pada inovasi dan perkembangan teknologi modern.",
    icon: "💡",
    dark: false,
  },
  {
    title: "Adaptive & Scalable",
    desc: "Membangun solusi yang fleksibel dan scalable untuk kebutuhan masa depan.",
    icon: "📈",
    dark: true,
  },
  {
    title: "Solution Focused",
    desc: "Berfokus pada solusi digital yang relevan dan berdampak.",
    icon: "🎯",
    dark: true,
  },
  {
    title: "Young & Creative Team",
    desc: "Didukung oleh tim muda yang kreatif, adaptif, dan berkembang.",
    icon: "⚡",
    dark: false,
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-light opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="fade-up flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#4a7c59]" />
            <span className="section-label">Keunggulan Kami</span>
            <div className="h-px w-10 bg-[#4a7c59]" />
          </div>
          <h2 className="fade-up text-4xl md:text-5xl font-black text-[#1a2e1a] mb-4">
            Why Choose Us
          </h2>
          <p className="fade-up text-[#374151] max-w-xl mx-auto leading-relaxed">
            Kami hadir dengan nilai-nilai yang membedakan kami dari perusahaan teknologi lainnya.
          </p>
        </div>

        {/* 2x2 grid like PDF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[#4a7c59]/15 shadow-lg">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`fade-up p-10 md:p-12 transition-all duration-300 hover:scale-[1.01] relative ${
                r.dark
                  ? "bg-[#4a7c59] text-white"
                  : "bg-white text-[#1a2e1a]"
              } ${
                // borders between cells
                i === 0 || i === 1 ? "border-b border-[#4a7c59]/20" : ""
              } ${
                i === 0 || i === 2 ? "sm:border-r border-[#4a7c59]/20" : ""
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-5">{r.icon}</div>
              <h3 className={`text-xl font-black mb-3 ${r.dark ? "text-white" : "text-[#1a2e1a]"}`}>
                {r.title}
              </h3>
              <p className={`text-sm leading-relaxed ${r.dark ? "text-white/80" : "text-[#374151]"}`}>
                {r.desc}
              </p>

              {/* Center label overlay — only on the center intersection */}
              {i === 1 && (
                <div className="hidden sm:block absolute bottom-0 left-0 translate-y-1/2 -translate-x-0 z-20">
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Center "Why Choose Us" badge */}
        <div className="relative -mt-[1px] flex justify-center pointer-events-none">
          {/* invisible spacer — the badge is done via absolute overlay on grid */}
        </div>
      </div>
    </section>
  );
}
