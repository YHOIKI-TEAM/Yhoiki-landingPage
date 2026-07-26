"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

interface DataUnitBisnis {
  logo: string;
  nama: string;
  tagline: string;
  deskripsi: string;
  fokus: string[];
}

const daftarUnitBisnis: DataUnitBisnis[] = [
  {
    logo: "/units/ndaki-icon-clean.jpg",
    nama: "NDaki",
    tagline: "Smart Hiking & Outdoor Ecosystem",
    deskripsi:
      "Platform teknologi berbasis digital ecosystem dan Artificial Intelligence untuk pengembangan solusi outdoor dan komunitas modern.",
    fokus: [
      "Smart Hiking Offline Ecosystem",
      "AI Offline Features",
      "Management Hiking",
      "Outdoor Technology Innovation",
    ],
  },
  {
    logo: "/units/yho-icon-clean.jpg",
    nama: "Yho Agency",
    tagline: "Digital Solutions untuk Bisnis Modern",
    deskripsi: "Unit bisnis yang berfokus pada layanan digital dan solusi teknologi untuk bisnis modern.",
    fokus: ["Website & App Development", "Visual Branding", "AI Automation Tools", "Social Media Management"],
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

function KartuUnitBisnis({ unit, index }: { unit: DataUnitBisnis; index: number }) {
  return (
    <div
      className="fade-up group relative overflow-hidden kartu-shadow rounded-2xl bg-[var(--warna-bg-permukaan)] p-8 transition-colors duration-500 hover:bg-[var(--warna-bg-permukaan-2)] lg:p-10"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-[rgba(var(--warna-brand-rgb),0.1)] blur-3xl transition-transform duration-700 group-hover:scale-110" />

      <div className="relative z-10 mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-[rgba(var(--warna-brand-rgb),0.15)]">
          <img src={unit.logo} alt={`Logo ${unit.nama}`} className="h-full w-full object-cover" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[var(--warna-teks-utama)] md:text-3xl">{unit.nama}</h3>
          <p className="text-sm font-medium text-[var(--warna-aksen)]">{unit.tagline}</p>
        </div>
      </div>

      <p className="relative z-10 mb-7 text-sm leading-relaxed text-[var(--warna-teks-sekunder)] md:text-base">
        {unit.deskripsi}
      </p>

      <div className="relative z-10 grid grid-cols-2 gap-3">
        {unit.fokus.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2.5 rounded-xl bg-[rgba(var(--warna-brand-rgb),0.07)] px-3.5 py-3 transition-colors group-hover:bg-[rgba(var(--warna-brand-rgb),0.12)]"
          >
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(var(--warna-brand-rgb),0.2)]">
              <Check size={11} className="text-[var(--warna-aksen)]" />
            </div>
            <span className="text-xs leading-snug font-medium text-[var(--warna-teks-sekunder)]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BusinessUnits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section
      id="business-units"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--warna-bg-dasar)] section-alt py-24"
    >
      <div className="bg-dots absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(var(--warna-brand-rgb),0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="fade-up mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--warna-teks-utama)] lg:text-5xl">
            Unit <span className="text-[var(--warna-brand)]">Bisnis Kami</span>
          </h2>
          <p className="text-sm text-[var(--warna-teks-sekunder)] md:text-base">
            Dua unit bisnis yang menjadi fondasi ekosistem produk dan layanan Yhoiki.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {daftarUnitBisnis.map((unit, index) => (
            <KartuUnitBisnis key={unit.nama} unit={unit} index={index} />
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
