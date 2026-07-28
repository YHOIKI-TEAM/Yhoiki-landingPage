"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Cpu, Building2, MessageCircle, type LucideIcon } from "lucide-react";


function gunakanAnimasiFadeUp(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const pesanWhatsApp = encodeURIComponent(
  "Halo Yhoiki, saya tertarik untuk menjajaki kerja sama/partnership. Boleh minta informasi lebih lanjut?",
);

interface LangkahKerjaSama {
  nomor: string;
  judul: string;
  deskripsi: string;
}

const daftarLangkahKerjaSama: LangkahKerjaSama[] = [
  {
    nomor: "01",
    judul: "Diskusi Kebutuhan",
    deskripsi: "Ceritakan tujuan kerja sama lewat WhatsApp, tim kami akan menggali kebutuhan lebih dalam.",
  },
  {
    nomor: "02",
    judul: "Proposal & Kesepakatan",
    deskripsi: "Kami susun skema kolaborasi dan lingkup kerja yang jelas sebelum kesepakatan disetujui bersama.",
  },
  {
    nomor: "03",
    judul: "Mulai Kolaborasi",
    deskripsi: "Eksekusi dimulai dengan komunikasi berkala agar progres kerja sama tetap transparan.",
  },
];

interface KategoriKerjaSama {
  icon: LucideIcon;
  judul: string;
  deskripsi: string;
}

const daftarKategoriKerjaSama: KategoriKerjaSama[] = [
  {
    icon: Briefcase,
    judul: "Mitra Bisnis",
    deskripsi: "Kemitraan atau kolaborasi dengan UMKM, komunitas, maupun instansi.",
  },
  {
    icon: Cpu,
    judul: "Kolaborasi Riset & Teknologi",
    deskripsi: "Pengembangan produk bersama atau riset teknologi jangka panjang, seperti Web-GIS dan aplikasi digital.",
  },
  {
    icon: Building2,
    judul: "Kemitraan Korporat & Instansi",
    deskripsi: "Kerja sama strategis dengan perusahaan atau instansi untuk hubungan bisnis berkelanjutan.",
  },
];

export default function PartnerKolaborasi() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section id="partner" ref={sectionRef} className="relative bg-[var(--warna-bg-dasar)] py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div
          className="fade-up relative overflow-hidden rounded-3xl p-10 md:p-14"
          style={{
            background: "linear-gradient(135deg, var(--warna-brand) 0%, var(--warna-brand-terang) 100%)",
          }}
        >
          {/* Grid pattern overlay, konsisten dengan .bg-grid di globals.css */}
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center lg:gap-16">
            {/* Kiri: headline, deskripsi ringkas, badge kategori kerja sama */}
            <div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--warna-bg-dasar)] lg:text-5xl">
                Terbuka untuk Kemitraan Bisnis
              </h2>

              <p className="mb-3 max-w-md text-lg leading-relaxed text-[rgba(var(--warna-bg-dasar-rgb),0.85)]">
                Khusus untuk perusahaan, komunitas, atau instansi yang ingin membangun kerja sama jangka
                panjang dengan Yhoiki — bukan untuk pengerjaan proyek satuan.
              </p>
              <p className="mb-6 max-w-md text-sm leading-relaxed text-[rgba(var(--warna-bg-dasar-rgb),0.7)]">
                Sedang cari tim untuk mengerjakan proyek Anda? Langsung hubungi kami lewat form di bagian{" "}
                <a href="#contact" className="font-semibold underline underline-offset-2">
                  Hubungi Kami
                </a>{" "}
                di bawah.
              </p>

              <div className="flex flex-wrap gap-3">
                {daftarKategoriKerjaSama.map((kategori) => {
                  const Icon = kategori.icon;
                  return (
                    <div
                      key={kategori.judul}
                      className="flex items-center gap-2 rounded-full bg-[rgba(var(--warna-bg-dasar-rgb),0.15)] px-4 py-2"
                    >
                      <Icon size={16} className="text-[var(--warna-bg-dasar)]" />
                      <span className="text-sm font-semibold text-[var(--warna-bg-dasar)]">{kategori.judul}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Kanan: alur kerja sama + tombol WhatsApp */}
            <div className="rounded-2xl bg-[rgba(var(--warna-bg-dasar-rgb),0.1)] p-6 md:p-8">
              <div className="flex flex-col gap-5">
                {daftarLangkahKerjaSama.map((langkah, idx) => (
                  <div key={langkah.nomor} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--warna-bg-dasar)] text-sm font-bold text-[var(--warna-brand)]">
                        {langkah.nomor}
                      </span>
                      {idx < daftarLangkahKerjaSama.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-[rgba(var(--warna-bg-dasar-rgb),0.3)]" />
                      )}
                    </div>
                    <div className="pb-1">
                      <p className="font-semibold text-[var(--warna-bg-dasar)]">{langkah.judul}</p>
                      <p className="text-sm leading-relaxed text-[rgba(var(--warna-bg-dasar-rgb),0.8)]">
                        {langkah.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/6285117138037?text=${pesanWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--warna-bg-dasar)] px-7 py-3.5 font-semibold text-[var(--warna-teks-utama)] shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle size={20} className="text-[var(--warna-aksen)]" />
                Hubungi via WhatsApp
              </a>
              <p className="mt-3 text-center text-sm text-[rgba(var(--warna-bg-dasar-rgb),0.75)]">
                Gratis · Tanpa Ribet · Respon Cepat
              </p>
            </div>
          </div>
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