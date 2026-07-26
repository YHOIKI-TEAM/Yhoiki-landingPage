"use client";

import { useEffect, useRef } from "react";
import { Network, Globe2, BrainCircuit, Rocket } from "lucide-react";

interface DataTujuan {
  Icon: typeof Network;
  nomor: string;
  judul: string;
  deskripsi: string;
}

const daftarTujuan: DataTujuan[] = [
  {
    Icon: Network,
    nomor: "01",
    judul: "Membangun Ekosistem Digital yang Scalable",
    deskripsi: "Membangun ekosistem digital yang saling terintegrasi dan scalable.",
  },
  {
    Icon: Globe2,
    nomor: "02",
    judul: "Ekspansi Internasional",
    deskripsi: "Mengembangkan perusahaan menuju pasar global.",
  },
  {
    Icon: BrainCircuit,
    nomor: "03",
    judul: "Inovasi AI & Teknologi",
    deskripsi: "Mengembangkan produk dan layanan berbasis AI serta teknologi modern.",
  },
  {
    Icon: Rocket,
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

function ItemTujuan({ data, index }: { data: DataTujuan; index: number }) {
  return (
    <div
      className="fade-up group relative flex flex-col items-center px-2 text-center md:items-start md:text-left"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative z-10 mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--warna-brand)] shadow-lg shadow-[rgba(var(--warna-brand-rgb),0.3)] transition-transform duration-300 group-hover:-translate-y-1">
        <data.Icon size={26} className="text-[var(--warna-bg-dasar)]" />
      </div>

      <span className="mb-2 text-xs font-bold tracking-widest text-[var(--warna-aksen)]">
        LANGKAH {data.nomor}
      </span>
      <h3 className="mb-3 text-lg font-bold text-[var(--warna-teks-utama)] md:text-xl">{data.judul}</h3>
      <p className="text-sm leading-relaxed text-[var(--warna-teks-sekunder)]">{data.deskripsi}</p>
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

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div
            className="pointer-events-none absolute top-8 right-0 left-0 hidden h-0.5 bg-[rgba(var(--warna-brand-rgb),0.2)] md:block"
            style={{ marginLeft: "12.5%", marginRight: "12.5%" }}
          />
          {daftarTujuan.map((data, index) => (
            <ItemTujuan key={data.nomor} data={data} index={index} />
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
