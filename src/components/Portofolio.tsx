"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

interface DataProduk {
  id: number;
  nama: string;
  tagline: string;
  deskripsi: string;
  fitur: string[];
  preview: string;
}

const daftarProduk: DataProduk[] = [
  {
    id: 1,
    nama: "NDaki",
    tagline: "Smart Hiking & Outdoor Ecosystem",
    deskripsi:
      "Platform teknologi berbasis digital ecosystem dan Artificial Intelligence untuk pengembangan solusi outdoor dan komunitas modern.",
    fitur: ["Smart Hiking Offline Ecosystem", "AI Offline Features", "Management Hiking"],
    preview: "/units/ndaki-preview.jpg",
  },
  {
    id: 2,
    nama: "Yho Agency",
    tagline: "Digital Solutions untuk Bisnis Modern",
    deskripsi: "Unit bisnis yang berfokus pada layanan digital dan solusi teknologi untuk bisnis modern.",
    fitur: ["Website & App Development", "Visual Branding", "AI Automation Tools"],
    preview: "/units/yho-preview.jpg",
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

function KartuProduk({ produk, index }: { produk: DataProduk; index: number }) {
  return (
    <div
      className="fade-up group relative flex flex-col overflow-hidden kartu-shadow rounded-2xl bg-[var(--warna-bg-permukaan)] transition-colors duration-300 hover:bg-[var(--warna-bg-permukaan-2)]"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-56 w-full overflow-hidden bg-white">
        <img src={produk.preview} alt={`Tampilan produk ${produk.nama}`} className="h-full w-full object-cover" />
      </div>

      <div className="relative z-10 p-6 lg:p-8">
        <h3 className="mb-1 text-xl font-bold text-[var(--warna-teks-utama)]">{produk.nama}</h3>
        <p className="mb-4 text-sm font-medium text-[var(--warna-aksen)]">{produk.tagline}</p>
        <p className="mb-6 text-sm leading-relaxed text-[var(--warna-teks-sekunder)]">{produk.deskripsi}</p>

        <div className="space-y-3">
          {produk.fitur.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-[var(--warna-teks-sekunder)]">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(var(--warna-brand-rgb),0.2)]">
                <Check size={12} className="text-[var(--warna-aksen)]" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section id="portfolio" ref={sectionRef} className="relative bg-[var(--warna-bg-dasar)] section-alt py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(var(--warna-brand-rgb),0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="fade-up mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--warna-teks-utama)] lg:text-5xl">
            Produk Digital <span className="text-[var(--warna-brand)]">yang Kami Kembangkan</span>
          </h2>
          <p className="text-sm text-[var(--warna-teks-sekunder)] md:text-base">
            NDaki dan Yho Agency — dua unit bisnis yang menjadi wujud nyata dari visi teknologi Yhoiki.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {daftarProduk.map((produk, index) => (
            <KartuProduk key={produk.id} produk={produk} index={index} />
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
