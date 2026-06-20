"use client";

import { useEffect, useRef } from "react";
import { FileCheck, BadgeCheck, Landmark, Receipt, Target, CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusPerusahaan {
  Icon: typeof FileCheck;
  label: string;
  value: string;
}

const daftarMisi: string[] = [
  "Mengembangkan produk digital inovatif, efisien, dan mudah digunakan.",
  "Menghadirkan solusi SaaS untuk digitalisasi berbagai sektor industri.",
  "Memanfaatkan teknologi modern seperti AI, Blockchain, dan emerging technology lainnya.",
  "Membangun ekosistem teknologi adaptif terhadap perkembangan zaman.",
  "Menjaga kualitas, keamanan, dan kepercayaan produk serta layanan.",
];

const daftarStatusPerusahaan: StatusPerusahaan[] = [
  { Icon: FileCheck, label: "Bentuk Usaha", value: "Perseroan Perorangan" },
  { Icon: BadgeCheck, label: "Status", value: "Terdaftar & Aktif" },
  { Icon: Landmark, label: "Legalitas", value: "OSS & NIB Terverifikasi" },
  { Icon: Receipt, label: "Pajak", value: "Terdaftar" },
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

function KartuPengantar() {
  return (
    <div
      className={cn(
        "fade-up relative overflow-hidden rounded-2xl border border-[#4a7c59]/20 bg-[#0f1a0f] p-6 lg:p-8 lg:col-span-5",
        "flex flex-col justify-center transition-colors hover:bg-[#121f12]"
      )}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full mask-[linear-gradient(white,transparent)] opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a7c59_1px,transparent_1px)] bg-size-[24px] mix-blend-overlay" />
      </div>

      <h2 className="relative z-10 mb-6 text-3xl leading-tight font-bold text-[#f0fdf4] md:text-4xl">
        Perusahaan Teknologi <br />
        <span className="text-[#4a7c59]">Digital Terdepan</span> <br />
        di Asia Tenggara
      </h2>

      <p className="relative z-10 mb-4 text-base leading-relaxed text-[#a7c9b4]">
        PT Yhoiki Digital Nusantara adalah perusahaan teknologi yang berfokus pada pengembangan produk digital berbasis software (SaaS) serta pemanfaatan teknologi modern seperti Artificial Intelligence (AI), Blockchain dan teknologi baru lainnya.
      </p>
      <p className="relative z-10 text-base leading-relaxed text-[#a7c9b4]">
        Hadir sebagai respon terhadap meningkatnya kebutuhan digitalisasi, dengan tujuan menghadirkan solusi yang relevan, praktis, dan sesuai kebutuhan pengguna di era modern.
      </p>
    </div>
  );
}

function KartuStatusPerusahaan() {
  return (
    <div className="fade-up relative overflow-hidden rounded-2xl border border-[#4a7c59]/20 bg-[#0f1a0f] p-6 transition-colors hover:bg-[#121f12] lg:col-span-3 lg:p-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4a7c59]/40 bg-[#4a7c59]/20">
          <Landmark size={20} className="text-[#86efac]" />
        </div>
        <h3 className="text-2xl font-bold text-[#f0fdf4]">Company Status</h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {daftarStatusPerusahaan.map(({ Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3 rounded-xl border border-[#4a7c59]/20 bg-[#4a7c59]/5 p-4">
            <Icon size={18} className="mt-0.5 shrink-0 text-[#86efac]" />
            <div>
              <div className="mb-1 text-xs text-[#6b8f78]">{label}</div>
              <div className="text-sm font-medium text-[#f0fdf4]">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function KartuVisi() {
  return (
    <div className="fade-up relative overflow-hidden rounded-2xl border border-[#4a7c59]/20 bg-[#4a7c59]/5 p-6 transition-colors hover:bg-[#4a7c59]/10 lg:col-span-4 lg:p-8">
      <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#4a7c59]/15 blur-3xl" />

      <div className="relative z-10 mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4a7c59]/40 bg-[#4a7c59]/20">
          <Target size={20} className="text-[#86efac]" />
        </div>
        <h3 className="text-2xl font-bold text-[#f0fdf4]">Vision</h3>
      </div>

      <p className="relative z-10 leading-relaxed text-[#a7c9b4]">
        Menjadi perusahaan teknologi digital terdepan di Asia Tenggara yang menghadirkan inovasi berbasis software, AI, Blockchain, dan teknologi modern lainnya untuk menciptakan solusi digital yang berdampak, berkelanjutan, dan memudahkan kehidupan masyarakat.
      </p>
    </div>
  );
}

function KartuMisi() {
  return (
    <div className="fade-up relative overflow-hidden rounded-2xl border border-[#4a7c59]/20 bg-[#4a7c59]/5 p-6 transition-colors hover:bg-[#4a7c59]/10 lg:col-span-4 lg:p-8">
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#4a7c59]/15 blur-3xl" />

      <div className="relative z-10 mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4a7c59]/40 bg-[#4a7c59]/20">
          <CheckCircle2 size={20} className="text-[#86efac]" />
        </div>
        <h3 className="text-2xl font-bold text-[#f0fdf4]">Mission</h3>
      </div>

      <ul className="relative z-10 space-y-4">
        {daftarMisi.map((misi, index) => (
          <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-[#a7c9b4]">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#4a7c59]/30 bg-[#4a7c59]/20">
              <span className="text-xs font-bold text-[#86efac]">{index + 1}</span>
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
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-[#0a0d0a] py-24">
      <div className="bg-dots absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(74,124,89,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="fade-up mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#f0fdf4] lg:text-5xl">
            Mengenal Lebih Dekat <br />
            <span className="text-[#4a7c59]">Yhoiki</span>
          </h2>
          <p className="text-sm text-[#a7c9b4] md:text-base">
            Kenali visi, misi, dan ekosistem teknologi yang kami bangun untuk mendukung pertumbuhan digital Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-8">
          <KartuPengantar />
          <KartuStatusPerusahaan />
          <KartuVisi />
          <KartuMisi />
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