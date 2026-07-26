"use client";

import { useEffect, useRef } from "react";

const anggotaTim = [
  { nama: "Resta Nugroho", jabatan: "CEO", foto: null },
  { nama: "Aries Wijaya K.", jabatan: "COO", foto: null },
  { nama: "Anggun Amalia", jabatan: "CFO", foto: null },
  { nama: "Afanin Musfida", jabatan: "CTO", foto: null },
];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="bg-[#f8faf8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="fade-up mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#3a6b47] mb-3">Structure Organization</p>
          <h2 className="text-4xl font-bold text-[#1a2e1a] lg:text-5xl">Tim Kami</h2>
          <p className="mt-4 text-base text-[#4a6456]">Didukung oleh tim muda yang kreatif, adaptif, dan berkembang.</p>
        </div>

        <div className="fade-up grid grid-cols-2 gap-6 md:grid-cols-4">
          {anggotaTim.map(({ nama, jabatan }) => (
            <div key={nama} className="flex flex-col items-center text-center">
              {/* Avatar placeholder */}
              <div className="mb-4 relative">
                <div className="h-32 w-32 rounded-2xl bg-[#3a6b47]/10 flex items-center justify-center overflow-hidden">
                  <div className="h-full w-full flex items-end justify-center">
                    {/* Person silhouette */}
                    <svg viewBox="0 0 120 120" className="w-24 h-24 text-[#3a6b47]/30" fill="currentColor">
                      <circle cx="60" cy="38" r="22" />
                      <ellipse cx="60" cy="95" rx="35" ry="28" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#3a6b47] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {jabatan}
                </div>
              </div>
              <div className="mt-5">
                <div className="text-sm font-semibold text-[#1a2e1a]">{nama}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
