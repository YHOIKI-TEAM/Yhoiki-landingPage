"use client";

import { useEffect, useRef } from "react";
import { Globe, Rocket, BrainCircuit, Settings } from "lucide-react";

const goals = [
  {
    num: "01",
    Icon: Globe,
    title: "Build Scalable Digital Ecosystem",
    desc: "Membangun ekosistem digital yang saling terintegrasi dan scalable.",
  },
  {
    num: "02",
    Icon: Rocket,
    title: "International Expansion",
    desc: "Mengembangkan perusahaan menuju pasar global Asia Tenggara dan dunia.",
  },
  {
    num: "03",
    Icon: BrainCircuit,
    title: "AI & Technology Innovation",
    desc: "Mengembangkan produk dan layanan berbasis AI serta teknologi modern.",
  },
  {
    num: "04",
    Icon: Settings,
    title: "Product & Startup Development",
    desc: "Membangun berbagai produk digital inovatif di bawah ekosistem perusahaan.",
  },
];

export default function FutureGoals() {
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
    <section id="goals" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d0a] via-[#0d160d] to-[#0a0d0a]" />
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(74,124,89,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="fade-up flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#4a7c59]" />
            <span className="text-[#86efac] text-sm tracking-widest uppercase">Roadmap</span>
            <div className="h-px w-12 bg-[#4a7c59]" />
          </div>
          <h2 className="fade-up text-4xl md:text-5xl font-bold text-[#f0fdf4] mb-4">Future Goals</h2>
          <p className="fade-up text-[#a7c9b4] max-w-xl mx-auto">
            Visi jangka panjang Yhoiki untuk membangun ekosistem digital yang berdampak global.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4a7c59]/40 to-transparent -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {goals.map((goal, i) => (
              <div
                key={goal.num}
                className={`fade-up relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ animationDelay: `${i * 150}ms`, marginBottom: "2rem" }}
              >
                <div className={`w-full lg:w-5/12 group pb-2 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                  <div className="p-6 rounded-2xl border border-[#4a7c59]/20 bg-[#0f1a0f] transition-all duration-300 group-hover:border-[#4a7c59]/40 group-hover:-translate-y-1">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <goal.Icon size={22} className="text-[#86efac] shrink-0" />
                      <span className="text-4xl font-black text-[#4a7c59]/30 leading-none">{goal.num}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#f0fdf4] mb-2">{goal.title}</h3>
                    <p className="text-sm text-[#a7c9b4] leading-relaxed">{goal.desc}</p>
                  </div>
                </div>

                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#4a7c59] border-4 border-[#0a0d0a] shadow-lg shadow-[#4a7c59]/40" />
                </div>

                <div className="hidden lg:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}