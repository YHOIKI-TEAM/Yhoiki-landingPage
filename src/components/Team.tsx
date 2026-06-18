"use client";

import { useEffect, useRef } from "react";
import { Lightbulb, Layers, Target, Zap } from "lucide-react";

const team = [
  { name: "Resta Nugroho", role: "CEO", initials: "RN", color: "#4a7c59" },
  { name: "Aries Wijaya K.", role: "COO", initials: "AW", color: "#3d6e4e" },
  { name: "Anggun Amalia", role: "CFO", initials: "AA", color: "#5a8a6a" },
  { name: "Afanin Musfida", role: "CTO", initials: "AM", color: "#2d5a3d" },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  return (
    <div className="group pb-2" style={{ animationDelay: `${index * 100}ms` }}>
      <div
        className={`
          fade-up relative rounded-2xl border border-[#4a7c59]/20 bg-[#0f1a0f] p-6 text-center overflow-hidden
          transition-all duration-500
          group-hover:border-[#4a7c59]/50
          group-hover:-translate-y-2
          group-hover:shadow-lg group-hover:shadow-[#4a7c59]/15
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a7c59]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10">
          <div className="relative mx-auto mb-4 w-20 h-20">
            <div
              className="w-full h-full rounded-full flex items-center justify-center text-xl font-bold text-white transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: member.color }}
            >
              {member.initials}
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-[#86efac] scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-40 transition-all duration-500 pointer-events-none" />
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#4a7c59]/20 border border-[#4a7c59]/30 text-[#86efac] text-xs font-medium mb-3">
            {member.role}
          </div>

          <h3 className="font-semibold text-[#f0fdf4] text-lg">{member.name}</h3>
          <p className="text-[#6b8f78] text-sm mt-1">PT Yhoiki Digital Nusantara</p>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
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
    <section id="team" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="fade-up flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#4a7c59]" />
            <span className="text-[#86efac] text-sm tracking-widest uppercase">Tim Kami</span>
            <div className="h-px w-12 bg-[#4a7c59]" />
          </div>
          <h2 className="fade-up text-4xl md:text-5xl font-bold text-[#f0fdf4] mb-4">
            Structure Organization
          </h2>
          <p className="fade-up text-[#a7c9b4] max-w-xl mx-auto">
            Tim muda yang kreatif, adaptif, dan berkembang bersama membangun
            ekosistem digital Indonesia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 pt-20 border-t border-[#4a7c59]/15">
          <div className="fade-up text-center mb-12">
            <h3 className="text-3xl font-bold text-[#f0fdf4] mb-3">Why Choose Us</h3>
            <p className="text-[#a7c9b4]">Keunggulan yang membedakan kami dari yang lain</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: Lightbulb, title: "Innovation Oriented", desc: "Berorientasi pada inovasi dan perkembangan teknologi modern." },
              { Icon: Layers, title: "Adaptive & Scalable", desc: "Membangun solusi yang fleksibel dan scalable untuk kebutuhan masa depan." },
              { Icon: Target, title: "Solution Focused", desc: "Berfokus pada solusi digital yang relevan dan berdampak." },
              { Icon: Zap, title: "Young & Creative Team", desc: "Didukung oleh tim muda yang kreatif, adaptif, dan berkembang." },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="fade-up group pb-2"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-full p-6 rounded-xl border border-[#4a7c59]/20 bg-[#0f1a0f] transition-all duration-300 group-hover:border-[#4a7c59]/40 group-hover:-translate-y-1">
                  <Icon size={28} className="text-[#86efac] mb-4" />
                  <h4 className="font-semibold text-[#f0fdf4] mb-2">{title}</h4>
                  <p className="text-sm text-[#6b8f78] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}