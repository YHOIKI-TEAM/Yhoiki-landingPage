"use client";

import { useEffect, useRef } from "react";
import { Target, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const daftarMisi: string[] = [
  "Mengembangkan produk digital inovatif, efisien, dan mudah digunakan.",
  "Menghadirkan solusi SaaS untuk digitalisasi berbagai sektor industri.",
  "Memanfaatkan teknologi modern seperti AI, Blockchain, dan emerging technology lainnya.",
  "Membangun ekosistem teknologi adaptif terhadap perkembangan zaman.",
  "Menjaga kualitas, keamanan, dan kepercayaan produk serta layanan.",
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

function KartuPengantar() {
  return (
    <div
      className={cn(
        "fade-up relative overflow-hidden kartu-shadow rounded-2xl bg-[var(--warna-bg-permukaan)] lg:col-span-2",
        "transition-colors hover:bg-[var(--warna-bg-permukaan-2)]",
      )}
    >
      <div className="foto-gedung relative h-48 w-full overflow-hidden md:h-64">
        <img
          src="/building-about.jpg"
          alt="Gedung PT Yhoiki Digital Nusantara"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 flex h-full items-end p-6 md:p-8">
          <span className="rounded-full bg-[rgba(var(--warna-bg-dasar-rgb),0.6)] px-4 py-2 text-xs font-semibold tracking-wider text-[var(--warna-teks-utama)] uppercase backdrop-blur-md">
            PT Yhoiki Digital Nusantara
          </span>
        </div>
      </div>

      <div className="relative p-6 lg:p-10">
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full mask-[linear-gradient(white,transparent)] opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--warna-brand-rgb),1)_1px,transparent_1px)] bg-size-[24px] mix-blend-overlay" />
        </div>

        <h2 className="relative z-10 mb-6 text-3xl leading-tight font-bold text-[var(--warna-teks-utama)] md:text-4xl">
          Perusahaan Teknologi <span className="text-[var(--warna-brand)]">Digital Terdepan</span> di Asia
          Tenggara
        </h2>

        <p className="relative z-10 mb-4 text-base leading-relaxed text-[var(--warna-teks-sekunder)]">
          PT Yhoiki Digital Nusantara adalah perusahaan teknologi yang berfokus pada pengembangan produk
          digital berbasis software (SaaS) serta pemanfaatan teknologi modern seperti Artificial Intelligence
          (AI), Blockchain dan teknologi baru lainnya.
        </p>
        <p className="relative z-10 text-base leading-relaxed text-[var(--warna-teks-sekunder)]">
          Hadir sebagai respon terhadap meningkatnya kebutuhan digitalisasi, dengan tujuan menghadirkan solusi
          yang relevan, praktis, dan sesuai kebutuhan pengguna di era modern.
        </p>
      </div>
    </div>
  );
}

function KartuVisi() {
  return (
    <div className="fade-up relative overflow-hidden rounded-2xl bg-[rgba(var(--warna-brand-rgb),0.05)] p-6 transition-colors hover:bg-[rgba(var(--warna-brand-rgb),0.1)] lg:p-8">
      <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-[rgba(var(--warna-brand-rgb),0.15)] blur-3xl" />

      <div className="relative z-10 mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(var(--warna-brand-rgb),0.2)]">
          <Target size={20} className="text-[var(--warna-aksen)]" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--warna-teks-utama)]">Visi</h3>
      </div>

      <p className="relative z-10 leading-relaxed text-[var(--warna-teks-sekunder)]">
        Menjadi perusahaan teknologi digital terdepan di Asia Tenggara yang menghadirkan inovasi berbasis
        software, AI, Blockchain, dan teknologi modern lainnya untuk menciptakan solusi digital yang
        berdampak, berkelanjutan, dan memudahkan kehidupan masyarakat.
      </p>
    </div>
  );
}

function KartuMisi() {
  return (
    <div className="fade-up relative overflow-hidden rounded-2xl bg-[rgba(var(--warna-brand-rgb),0.05)] p-6 transition-colors hover:bg-[rgba(var(--warna-brand-rgb),0.1)] lg:p-8">
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 -translate-x-1/2 translate-y-1/2 rounded-full bg-[rgba(var(--warna-brand-rgb),0.15)] blur-3xl" />

      <div className="relative z-10 mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(var(--warna-brand-rgb),0.2)]">
          <CheckCircle2 size={20} className="text-[var(--warna-aksen)]" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--warna-teks-utama)]">Misi</h3>
      </div>

      <ul className="relative z-10 space-y-4">
        {daftarMisi.map((misi, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm leading-relaxed text-[var(--warna-teks-sekunder)]"
          >
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(var(--warna-brand-rgb),0.2)]">
              <span className="text-xs font-bold text-[var(--warna-aksen)]">{index + 1}</span>
            </div>
            <span>{misi}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--warna-bg-dasar)] py-24"
    >
      <div className="bg-dots absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(var(--warna-brand-rgb),0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="fade-up mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--warna-teks-utama)] lg:text-5xl">
            Mengenal Lebih Dekat <br />
            <span className="text-[var(--warna-brand)]">Yhoiki</span>
          </h2>
          <p className="text-sm text-[var(--warna-teks-sekunder)] md:text-base">
            Kenali visi, misi, dan ekosistem teknologi yang kami bangun untuk mendukung pertumbuhan digital
            Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <KartuPengantar />
          <KartuVisi />
          <KartuMisi />
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
