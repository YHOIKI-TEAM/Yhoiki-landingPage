"use client";

import { useEffect, useRef } from "react";
import { Mountain, Building2, Compass, BrainCircuit, Wifi, Lightbulb, Code2, Megaphone, Bot, LayoutDashboard } from "lucide-react";

const units = [
  {
    Icon: Mountain,
    name: "NDakti",
    tagline: "Smart Outdoor Ecosystem",
    desc: "Platform teknologi berbasis digital ecosystem dan Artificial Intelligence untuk pengembangan solusi outdoor dan komunitas modern.",
    features: [
      { Icon: Compass, text: "Smart Hiking Offline Ecosystem" },
      { Icon: BrainCircuit, text: "AI Offline Features" },
      { Icon: Wifi, text: "Management Hiking" },
      { Icon: Lightbulb, text: "Outdoor Technology Innovation" },
    ],
    accent: "#4a7c59",
    bg: "from-[#1a2e1a] to-[#0a0d0a]",
  },
  {
    Icon: Building2,
    name: "Yho Agency",
    tagline: "Digital Agency for Modern Business",
    desc: "Unit bisnis yang berfokus pada layanan digital dan solusi teknologi untuk bisnis modern.",
    features: [
      { Icon: Code2, text: "Website & App Development" },
      { Icon: LayoutDashboard, text: "Visual Branding" },
      { Icon: Bot, text: "AI Automation Tools" },
      { Icon: Megaphone, text: "Social Media Management" },
    ],
    accent: "#6aaa7d",
    bg: "from-[#162016] to-[#0a0d0a]",
  },
];

export default function BusinessUnits() {
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
    <section id="units" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-15" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(74,124,89,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="fade-up flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#4a7c59]" />
            <span className="text-[#86efac] text-sm tracking-widest uppercase">Business Units</span>
            <div className="h-px w-12 bg-[#4a7c59]" />
          </div>
          <h2 className="fade-up text-4xl md:text-5xl font-bold text-[#f0fdf4] mb-4">
            Unit Bisnis Kami
          </h2>
          <p className="fade-up text-[#a7c9b4] max-w-xl mx-auto">
            Dua unit bisnis yang berfokus pada solusi teknologi berbeda namun saling melengkapi
            dalam ekosistem digital Yhoiki.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {units.map((unit, i) => (
            <div
              key={unit.name}
              className="fade-up group pb-2"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div
                className={`relative rounded-2xl border border-[#4a7c59]/20 bg-gradient-to-br ${unit.bg} p-8 overflow-hidden transition-all duration-500 group-hover:border-[#4a7c59]/60 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-[#4a7c59]/15`}
              >
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${unit.accent}, transparent)` }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center border"
                      style={{ borderColor: `${unit.accent}40`, background: `${unit.accent}15` }}
                    >
                      <unit.Icon size={22} style={{ color: unit.accent }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#f0fdf4]">{unit.name}</h3>
                      <p className="text-xs text-[#86efac]">{unit.tagline}</p>
                    </div>
                  </div>

                  <p className="text-[#a7c9b4] text-sm leading-relaxed mb-6">{unit.desc}</p>

                  <ul className="space-y-2.5">
                    {unit.features.map(({ Icon: FIcon, text }) => (
                      <li key={text} className="flex items-center gap-3 text-sm text-[#a7c9b4]">
                        <FIcon size={14} className="text-[#4a7c59] shrink-0" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}