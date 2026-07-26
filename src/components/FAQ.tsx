"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, MessageCircleQuestion, ArrowRight } from "lucide-react";

interface ItemFAQ {
  pertanyaan: string;
  jawaban: string;
}

const daftarFAQ: ItemFAQ[] = [
  {
    pertanyaan: "Bagaimana proses kerja sama dengan Yhoiki?",
    jawaban:
      "Prosesnya melalui 3 tahap: (1) Konsultasi kebutuhan secara gratis lewat form, WhatsApp, atau email, (2) Penyusunan proposal teknis beserta estimasi biaya dan timeline, (3) Pengembangan bertahap dengan update progres berkala hingga proyek selesai dan diserahterimakan.",
  },
  {
    pertanyaan: "Berapa estimasi biaya dan lama pengerjaan proyek?",
    jawaban:
      "Biaya dan timeline bergantung pada kompleksitas kebutuhan — mulai dari landing page sederhana (1-2 minggu) hingga sistem web/AI yang lebih besar (4-8 minggu). Kami akan memberikan estimasi tertulis setelah sesi konsultasi awal, tanpa biaya.",
  },
  {
    pertanyaan: "Yhoiki masih perusahaan baru, kenapa harus percaya?",
    jawaban:
      "Kami memang perusahaan yang baru berdiri, dan kami sampaikan ini secara terbuka. Justru karena itu, setiap klien mendapat perhatian penuh dari tim inti kami secara langsung — bukan dialihkan ke tim junior atau antrean proyek. Legalitas usaha kami juga sudah terdaftar resmi dan dapat diverifikasi kapan saja.",
  },
  {
    pertanyaan: "Apakah ada revisi jika hasil belum sesuai?",
    jawaban:
      "Ya. Setiap proyek menyertakan sesi revisi yang disepakati di awal proposal, agar hasil akhir sesuai kebutuhan sebelum serah terima.",
  },
  {
    pertanyaan: "Apakah PT Yhoiki Digital Nusantara legal dan terdaftar?",
    jawaban:
      "Ya. PT Yhoiki Digital Nusantara berbentuk Perseroan Perorangan yang berstatus terdaftar dan aktif, dengan NIB & OSS terverifikasi serta registrasi pajak yang sah. Detail dokumen dapat diberikan kepada calon klien atau partner yang membutuhkan verifikasi lebih lanjut.",
  },
];

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

// FIX: bug "item hilang saat diklik" — sebelumnya class "fade-up" (untuk animasi
// scroll-reveal) digabung dalam satu className dinamis bersama class `terbuka`.
// Setiap kali `terbuka` berubah, React menulis ulang className, ikut menghapus
// class "visible" yang ditambahkan IntersectionObserver secara imperatif — akibatnya
// item balik ke opacity:0 (seolah hilang). Sekarang wrapper "fade-up" dipisah,
// className-nya statis dan tidak pernah ditimpa oleh state `terbuka`.
function ItemAkordeon({
  item,
  nomor,
  terbuka,
  onToggle,
}: {
  item: ItemFAQ;
  nomor: number;
  terbuka: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="fade-up">
      <div
        className={`overflow-hidden rounded-2xl border kartu-shadow bg-[var(--warna-bg-permukaan)] transition-colors duration-300 ${
          terbuka
            ? "border-[rgba(var(--warna-brand-rgb),0.35)]"
            : "border-transparent hover:bg-[var(--warna-bg-permukaan-2)]"
        }`}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-5 py-5 text-left md:gap-5 md:px-7 md:py-6"
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors duration-300 md:h-11 md:w-11 ${
              terbuka
                ? "bg-[var(--warna-brand)] text-[var(--warna-bg-dasar)]"
                : "bg-[rgba(var(--warna-brand-rgb),0.15)] text-[var(--warna-aksen)]"
            }`}
          >
            {String(nomor).padStart(2, "0")}
          </span>
          <span className="flex-1 text-sm font-semibold text-[var(--warna-teks-utama)] md:text-base">
            {item.pertanyaan}
          </span>
          <ChevronDown
            size={20}
            className={`shrink-0 text-[var(--warna-aksen)] transition-transform duration-300 ${terbuka ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className="grid transition-all duration-300 ease-in-out"
          style={{ gridTemplateRows: terbuka ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <p className="px-5 pb-6 pl-[3.75rem] text-sm leading-relaxed text-[var(--warna-teks-sekunder)] md:px-7 md:pb-7 md:pl-[4.75rem] md:text-base">
              {item.jawaban}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);
  const [indeksTerbuka, setIndeksTerbuka] = useState<number | null>(0);

  return (
    <section id="faq" ref={sectionRef} className="relative overflow-hidden bg-[var(--warna-bg-dasar)] py-24 md:py-28">
      <div className="bg-dots absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(var(--warna-brand-rgb),0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Kolom kiri: intro + ajakan kontak, sticky di layar besar */}
          <div className="fade-up lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[rgba(var(--warna-brand-rgb),0.12)] px-4 py-1.5 text-xs font-bold tracking-widest text-[var(--warna-aksen)] uppercase">
                FAQ
              </span>
              <h2 className="mb-5 text-4xl font-bold tracking-tight text-[var(--warna-teks-utama)] lg:text-5xl">
                Pertanyaan yang <span className="text-[var(--warna-brand)]">Sering Diajukan</span>
              </h2>
              <p className="mb-8 text-base leading-relaxed text-[var(--warna-teks-sekunder)]">
                Jawaban jujur untuk keraguan yang paling sering muncul sebelum memutuskan bekerja sama dengan
                kami.
              </p>

              <a
                href="#contact"
                className="group flex items-center gap-4 rounded-2xl bg-[rgba(var(--warna-brand-rgb),0.07)] p-5 transition-colors hover:bg-[rgba(var(--warna-brand-rgb),0.12)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(var(--warna-brand-rgb),0.2)]">
                  <MessageCircleQuestion size={22} className="text-[var(--warna-aksen)]" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-[var(--warna-teks-utama)]">
                    Masih ada pertanyaan lain?
                  </span>
                  <span className="block text-xs text-[var(--warna-teks-muted)]">Langsung hubungi tim kami</span>
                </span>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-[var(--warna-aksen)] transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Kolom kanan: daftar pertanyaan */}
          <div className="flex flex-col gap-4 lg:col-span-8">
            {daftarFAQ.map((item, index) => (
              <ItemAkordeon
                key={item.pertanyaan}
                item={item}
                nomor={index + 1}
                terbuka={indeksTerbuka === index}
                onToggle={() => setIndeksTerbuka((sebelumnya) => (sebelumnya === index ? null : index))}
              />
            ))}
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
