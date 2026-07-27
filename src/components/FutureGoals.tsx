"use client";

import { useEffect, useRef } from "react";

interface DataTujuan {
  nomor: string;
  judul: string;
  deskripsi: string;
}

const daftarTujuan: DataTujuan[] = [
  {
    nomor: "01",
    judul: "Membangun Ekosistem Digital yang Scalable",
    deskripsi: "Membangun ekosistem digital yang saling terintegrasi dan scalable.",
  },
  {
    nomor: "02",
    judul: "Ekspansi Internasional",
    deskripsi: "Mengembangkan perusahaan menuju pasar global.",
  },
  {
    nomor: "03",
    judul: "Inovasi AI & Teknologi",
    deskripsi: "Mengembangkan produk dan layanan berbasis AI serta teknologi modern.",
  },
  {
    nomor: "04",
    judul: "Pengembangan Produk & Startup",
    deskripsi: "Membangun berbagai produk digital inovatif di bawah ekosistem perusahaan.",
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

function ItemTujuan({ data, index, isLast }: { data: DataTujuan; index: number; isLast: boolean }) {
  return (
    <div className="fade-up relative flex gap-6 md:gap-8" style={{ transitionDelay: `${index * 120}ms` }}>
      {/* Node + garis penghubung vertikal */}
      <div className="relative flex shrink-0 flex-col items-center">
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--warna-brand)] shadow-lg shadow-[rgba(var(--warna-brand-rgb),0.3)] md:h-16 md:w-16">
          <span className="text-lg font-bold text-[var(--warna-bg-dasar)] md:text-xl">{data.nomor}</span>
        </div>
        {!isLast && (
          <div className="my-2 w-px flex-1 bg-gradient-to-b from-[rgba(var(--warna-brand-rgb),0.4)] to-[rgba(var(--warna-brand-rgb),0.05)]" />
        )}
      </div>

      {/* Konten */}
      <div className={`relative flex-1 ${isLast ? "" : "pb-12 md:pb-14"}`}>
        <div className="relative overflow-hidden rounded-2xl bg-[var(--warna-bg-permukaan)] p-6 transition-colors hover:bg-[var(--warna-bg-permukaan-2)] md:p-8">
          <span className="mb-2 block text-xs font-bold tracking-widest text-[var(--warna-aksen)]">
            LANGKAH {data.nomor}
          </span>
          <h3 className="mb-3 text-lg font-bold text-[var(--warna-teks-utama)] md:text-xl">{data.judul}</h3>
          <p className="text-sm leading-relaxed text-[var(--warna-teks-sekunder)] md:text-base">
            {data.deskripsi}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FutureGoals() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section
      id="future-goals"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--warna-bg-dasar)] py-24"
    >
      <div className="bg-dots absolute inset-0 opacity-20" />
      <div
        className="pointer-events-none absolute top-0 left-0 h-150 w-150"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(var(--warna-brand-rgb),0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="fade-up mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--warna-teks-utama)] lg:text-5xl">
            Rencana <span className="text-[var(--warna-brand)]">Masa Depan</span>
          </h2>
          <p className="text-sm text-[var(--warna-teks-sekunder)] md:text-base">
            Arah pertumbuhan jangka panjang yang menjadi fokus pengembangan Yhoiki ke depan.
          </p>
        </div>

        <div className="relative">
          {daftarTujuan.map((data, index) => (
            <ItemTujuan
              key={data.nomor}
              data={data}
              index={index}
              isLast={index === daftarTujuan.length - 1}
            />
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