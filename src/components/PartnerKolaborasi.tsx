"use client";

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";

/**
 * Section "Partner & Kolaborasi" — satu banner besar ala hero-CTA (bukan grid
 * kartu), langsung arahkan ke WhatsApp untuk pengajuan kerja sama. Tipografi
 * disamakan dengan section lain (font-bold tracking-tight, tanpa badge label).
 *
 * TODO: sesuaikan nomor WhatsApp, teks pesan default, dan angka statistik
 * ("mitraAktif" / "waktuRespon") sesuai data asli.
 */

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

          <div className="relative z-10 flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-center md:gap-20 lg:gap-28">
            {/* Kiri: headline, deskripsi, statistik */}
            <div className="max-w-xl">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--warna-bg-dasar)] lg:text-5xl">
                Mari Berkolaborasi dengan Kami
              </h2>

              <p className="mb-8 max-w-md text-lg leading-relaxed text-[rgba(var(--warna-bg-dasar-rgb),0.85)]">
                Terbuka untuk kerja sama bisnis, teknologi, maupun kebutuhan korporat. Satu pesan WhatsApp
                cukup untuk memulai diskusi kemitraan dengan tim kami.
              </p>

              <div className="flex items-center gap-6">
                <div>
                  <p className="text-2xl font-bold text-[var(--warna-bg-dasar)]">15+</p>
                  <p className="text-sm text-[rgba(var(--warna-bg-dasar-rgb),0.75)]">Mitra Aktif</p>
                </div>
                <div className="h-10 w-px bg-[rgba(var(--warna-bg-dasar-rgb),0.25)]" />
                <div>
                  <p className="text-2xl font-bold text-[var(--warna-bg-dasar)]">{"< 24 Jam"}</p>
                  <p className="text-sm text-[rgba(var(--warna-bg-dasar-rgb),0.75)]">Waktu Respon</p>
                </div>
              </div>
            </div>

            {/* Kanan: tombol besar langsung ke WhatsApp */}
            <div className="flex w-full flex-col items-center gap-3 md:w-auto">
              <a
                href={`https://wa.me/6285117138037?text=${pesanWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--warna-bg-dasar)] px-7 py-3.5 font-semibold text-[var(--warna-teks-utama)] shadow-lg transition-all duration-300 hover:-translate-y-0.5 md:w-auto"
              >
                <MessageCircle size={20} className="text-[var(--warna-aksen)]" />
                Hubungi via WhatsApp
              </a>
              <p className="text-center text-sm text-[rgba(var(--warna-bg-dasar-rgb),0.75)]">
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