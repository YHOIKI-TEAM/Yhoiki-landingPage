"use client";

import { useEffect, useRef } from "react";
import { Building2, ShieldCheck, Briefcase, FileBadge2, ReceiptText } from "lucide-react";

interface DataLegalitas {
  Icon: typeof Building2;
  label: string;
  value: string;
}

const daftarLegalitas: DataLegalitas[] = [
  { Icon: Building2, label: "Bentuk Usaha", value: "Perseroan Perorangan" },
  { Icon: ShieldCheck, label: "Status Perusahaan", value: "Terdaftar & Aktif" },
  { Icon: Briefcase, label: "Bidang Usaha", value: "Teknologi & Solusi Digital" },
  { Icon: FileBadge2, label: "Legalitas Usaha", value: "OSS & NIB Terverifikasi" },
  { Icon: ReceiptText, label: "Registrasi Pajak", value: "Terdaftar" },
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

function KartuDeskripsiLegal() {
  return (
    <div className="fade-up relative overflow-hidden kartu-shadow rounded-2xl bg-[var(--warna-bg-permukaan)] p-8 transition-colors hover:bg-[var(--warna-bg-permukaan-2)] lg:col-span-5">
      <p className="text-base leading-relaxed text-[var(--warna-teks-sekunder)]">
        PT Yhoiki Digital Nusantara merupakan perusahaan legal berbentuk Perseroan Perorangan yang bergerak di
        bidang teknologi digital, pengembangan sistem, solusi AI, dan layanan digital modern di Indonesia.
      </p>

      <div className="mt-6 rounded-xl bg-[rgba(var(--warna-brand-rgb),0.05)] p-5">
        <p className="text-sm leading-relaxed text-[var(--warna-teks-muted)]">
          Detail dokumen legal perusahaan dan data verifikasi lanjutan dapat diberikan kepada client, partner,
          investor, atau pihak terkait yang telah terverifikasi dalam proses kerja sama maupun kebutuhan
          bisnis resmi.
        </p>
      </div>
    </div>
  );
}

function KartuDaftarLegalitas() {
  return (
    <div className="fade-up relative overflow-hidden rounded-2xl bg-[rgba(var(--warna-brand-rgb),0.05)] p-8 transition-colors hover:bg-[rgba(var(--warna-brand-rgb),0.1)] lg:col-span-7">
      <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-[rgba(var(--warna-brand-rgb),0.15)] blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {daftarLegalitas.map(({ Icon, label, value }) => (
          <div
            key={label}
            className="flex items-start gap-3 rounded-xl bg-[rgba(var(--warna-bg-dasar-rgb),0.4)] p-4"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(var(--warna-brand-rgb),0.2)]">
              <Icon size={16} className="text-[var(--warna-aksen)]" />
            </div>
            <div>
              <div className="mb-1 text-sm text-[var(--warna-teks-muted)]">{label}</div>
              <div className="text-sm font-medium text-[var(--warna-teks-utama)]">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LegalInfo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section
      id="legal"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--warna-bg-dasar)] py-24"
    >
      <div className="bg-dots absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(var(--warna-brand-rgb),0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="fade-up mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--warna-teks-utama)] lg:text-5xl">
            Legalitas & <span className="text-[var(--warna-brand)]">Informasi Perusahaan</span>
          </h2>
          <p className="text-sm text-[var(--warna-teks-sekunder)] md:text-base">
            Informasi legalitas resmi yang menjamin keabsahan dan kredibilitas perusahaan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <KartuDeskripsiLegal />
          <KartuDaftarLegalitas />
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
