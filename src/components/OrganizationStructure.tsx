"use client";

import { useEffect, useRef } from "react";

interface DataPengurus {
  nama: string;
  posisi: string;
  foto: string;
}

const daftarPengurus: DataPengurus[] = [
  { nama: "Resta Nugroho", posisi: "CEO", foto: "/team/resta.jpg" },
  { nama: "Aries Wijaya K.", posisi: "COO", foto: "/team/aries.jpg" },
  { nama: "Anggun Amalia", posisi: "CFO", foto: "/team/anggun.jpg" },
  { nama: "Afanin Musfida", posisi: "CTO", foto: "/team/afanin.jpg" },
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

function KartuPengurus({ data, index }: { data: DataPengurus; index: number }) {
  return (
    <div
      className="fade-up group relative flex flex-col overflow-hidden kartu-shadow rounded-2xl bg-[var(--warna-bg-permukaan)] transition-colors hover:bg-[var(--warna-bg-permukaan-2)]"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-64 w-full overflow-hidden bg-[rgba(var(--warna-brand-rgb),0.1)]">
        <img
          src={data.foto}
          alt={data.nama}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col items-center gap-2 p-6 text-center">
        <span className="rounded-full bg-[rgba(var(--warna-brand-rgb),0.15)] px-4 py-1 text-xs font-bold tracking-wider text-[var(--warna-aksen)]">
          {data.posisi}
        </span>
        <h3 className="text-lg font-bold text-[var(--warna-teks-utama)]">{data.nama}</h3>
      </div>
    </div>
  );
}

export default function OrganizationStructure() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section
      id="structure"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--warna-bg-dasar)] section-alt py-24"
    >
      <div className="bg-dots absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(var(--warna-brand-rgb),0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="fade-up mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--warna-teks-utama)] lg:text-5xl">
            Struktur <span className="text-[var(--warna-brand)]">Organisasi</span>
          </h2>
          <p className="text-sm text-[var(--warna-teks-sekunder)] md:text-base">
            Tim inti yang memimpin arah strategis dan operasional PT Yhoiki Digital Nusantara.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {daftarPengurus.map((data, index) => (
            <KartuPengurus key={data.nama} data={data} index={index} />
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
