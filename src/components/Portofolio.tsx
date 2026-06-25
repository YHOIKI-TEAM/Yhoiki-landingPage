"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";


interface DataProyek {
  id: number;
  kategori: string;
  nama: string;
  deskripsi: string;
  tags: string[];
  tahun: string;
}

const daftarProyek: DataProyek[] = [
  {
    id: 1,
    kategori: "Sistem Informasi",
    nama: "SIPOKAR",
    deskripsi:
      "Sistem manajemen ekowisata berbasis web untuk Kebun Raya Mangrove Medokan Ayu — mencakup tiket digital, portal UMKM, dashboard pengunjung, dan sistem dompet cashless terintegrasi Midtrans.",
    tags: ["Spring Boot", "Supabase", "Midtrans", "Thymeleaf"],
    tahun: "2025",
  },
  {
    id: 2,
    kategori: "Web GIS & Visualisasi 3D",
    nama: "NAPAK",
    deskripsi:
      "Platform Web-GIS mitigasi longsor berbasis data ESDM, BMKG, PVMBG, BPS, dan Disdukcapil. Dilengkapi simulasi 3D interaktif dan algoritma scoring risiko empat parameter.",
    tags: ["Next.js", "React Three Fiber", "TypeScript", "Vercel"],
    tahun: "2025",
  },
  {
    id: 3,
    kategori: "Company Profile",
    nama: "Landing Page PT Yhoiki",
    deskripsi:
      "Landing page perusahaan dengan desain modern, animasi scroll, dan arsitektur komponen modular menggunakan Next.js dan Framer Motion.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    tahun: "2025",
  },
  {
    id: 4,
    kategori: "Sistem Informasi",
    nama: "SIPOKAR",
    deskripsi:
      "Sistem manajemen ekowisata berbasis web untuk Kebun Raya Mangrove Medokan Ayu — mencakup tiket digital, portal UMKM, dashboard pengunjung, dan sistem dompet cashless terintegrasi Midtrans.",
    tags: ["Spring Boot", "Supabase", "Midtrans", "Thymeleaf"],
    tahun: "2025",
  },
  {
    id: 5,
    kategori: "Web GIS & Visualisasi 3D",
    nama: "NAPAK",
    deskripsi:
      "Platform Web-GIS mitigasi longsor berbasis data ESDM, BMKG, PVMBG, BPS, dan Disdukcapil. Dilengkapi simulasi 3D interaktif dan algoritma scoring risiko empat parameter.",
    tags: ["Next.js", "React Three Fiber", "TypeScript", "Vercel"],
    tahun: "2025",
  },
  {
    id: 6,
    kategori: "Company Profile",
    nama: "Landing Page PT Yhoiki",
    deskripsi:
      "Landing page perusahaan dengan desain modern, animasi scroll, dan arsitektur komponen modular menggunakan Next.js dan Framer Motion.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    tahun: "2025",
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
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function KartuProyek({ proyek, index }: { proyek: DataProyek; index: number }) {
  return (
    <div
      className="fade-up group relative flex flex-col overflow-hidden rounded-2xl border border-[#4a7c59]/20 bg-[#0f1a0f] p-6 transition-colors duration-300 hover:bg-[#121f12] lg:p-8"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4a7c59]/10 blur-3xl" />

      <div className="relative z-10 mb-4 flex items-center justify-between">
        <span className="rounded-full border border-[#4a7c59]/30 bg-[#4a7c59]/10 px-3 py-1 text-xs font-medium text-[#86efac]">
          {proyek.kategori}
        </span>
        <span className="text-xs text-[#4a7c59]/60">{proyek.tahun}</span>
      </div>

      <h3 className="relative z-10 mb-3 text-xl font-bold text-[#f0fdf4]">{proyek.nama}</h3>
      <p className="relative z-10 mb-6 flex-1 text-sm leading-relaxed text-[#a7c9b4]">{proyek.deskripsi}</p>

      <div className="relative z-10 flex flex-wrap gap-2">
        {proyek.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#4a7c59]/20 bg-[#4a7c59]/5 px-3 py-1 text-xs text-[#6b8f78] transition-colors hover:text-[#86efac]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section ref={sectionRef} className="relative bg-[#0a0d0a] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(74,124,89,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="fade-up mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#f0fdf4] lg:text-5xl">
            Proyek yang <span className="text-[#4a7c59]">Telah Kami Kerjakan</span>
          </h2>
          <p className="text-sm text-[#a7c9b4] md:text-base">
            Beberapa proyek yang mencerminkan kemampuan teknis dan komitmen kami terhadap solusi digital yang berdampak nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {daftarProyek.map((proyek, index) => (
            <KartuProyek key={proyek.id} proyek={proyek} index={index} />
          ))}
        </div>

        {/* Placeholder jujur untuk testimonial — diaktifkan kalau sudah ada klien nyata */}
        <div className="fade-up mt-12 rounded-2xl border border-[#4a7c59]/20 bg-[#4a7c59]/5 px-8 py-6 text-center">
          <Quote size={24} className="mx-auto mb-3 text-[#4a7c59]/40" />
          <p className="text-sm text-[#6b8f78]">
            Kami sedang membangun rekam jejak bersama klien pertama kami.{" "}
            <a href="#contact" className="text-[#86efac] underline-offset-4 hover:underline">
              Jadilah yang pertama.
            </a>
          </p>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `,
        }}
      />
    </section>
  );
}