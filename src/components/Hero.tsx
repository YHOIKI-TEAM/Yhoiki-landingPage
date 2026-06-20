"use client";

import { useEffect, useRef, useState } from "react";
import { Code2 } from "lucide-react";

interface BadgeStatistik {
  posisi: string;
  nilai: number;
  label: string;
}

const tagLayanan: string[] = [
  "SaaS Platform",
  "AI Solutions",
  "Blockchain",
  "Web Development",
  "App Development",
  "Digital Agency",
];

const kataBerputar: string[] = [
  "Smarter Digital",
  "AI-Powered",
  "Blockchain-Ready",
  "Future-Proof",
  "Scalable SaaS",
];

const badgeStatistik: BadgeStatistik[] = [
  { posisi: "absolute top-10 left-0 lg:-left-6 z-20", nilai: 5, label: "Tahun Pengalaman" },
  { posisi: "absolute top-1/2 -translate-y-1/2 right-0 lg:-right-8 z-20", nilai: 100, label: "Klien dari Berbagai Industri" },
  { posisi: "absolute bottom-16 left-4 lg:-left-2 z-20", nilai: 48, label: "Proyek yang Sukses" },
];

function AngkaBerjalan({ tujuan }: { tujuan: number }) {
  const [hitungan, setHitungan] = useState(0);
  const elemenRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let waktuMulai: number | null = null;
          const durasi = 2500;

          const animasikan = (timestamp: number) => {
            if (!waktuMulai) waktuMulai = timestamp;
            const progres = Math.min((timestamp - waktuMulai) / durasi, 1);
            const easeOutQuart = 1 - Math.pow(1 - progres, 4);

            setHitungan(Math.floor(easeOutQuart * tujuan));

            if (progres < 1) {
              requestAnimationFrame(animasikan);
            }
          };

          requestAnimationFrame(animasikan);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elemenRef.current) {
      observer.observe(elemenRef.current);
    }

    return () => observer.disconnect();
  }, [tujuan]);

  return <span ref={elemenRef}>{hitungan}</span>;
}

function gunakanAnimasiMasuk(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const elemenFadeUp = ref.current?.querySelectorAll(".fade-up");
    const timer = setTimeout(() => {
      elemenFadeUp?.forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);
}

function gunakanRotasiKata() {
  const [indeksKata, setIndeksKata] = useState(0);
  const [tampil, setTampil] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTampil(false);
      setTimeout(() => {
        setIndeksKata((sebelumnya) => (sebelumnya + 1) % kataBerputar.length);
        setTampil(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return { indeksKata, tampil };
}

function TagLayananList() {
  return (
    <div className="fade-up flex flex-wrap gap-2">
      {tagLayanan.map((tag) => (
        <span
          key={tag}
          className="cursor-default rounded-full border border-[#4a7c59]/25 bg-[#4a7c59]/8 px-3 py-1 text-xs text-[#6b8f78] transition-colors hover:border-[#4a7c59]/50 hover:text-[#86efac]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function BadgeStatistikItem({ data }: { data: BadgeStatistik }) {
  return (
    <div className={`${data.posisi} flex items-center rounded-xl border border-[#4a7c59]/30 bg-linear-to-r from-[#0f1a0f] to-[#132413] px-6 py-4 shadow-2xl`}>
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-[#f0fdf4] md:text-5xl">
            <AngkaBerjalan tujuan={data.nilai} />
          </span>
          <span className="text-3xl font-bold text-[#86efac]">+</span>
        </div>
        <span className="mt-1 block text-xs font-medium text-[#86efac]/80">{data.label}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiMasuk(sectionRef);
  const { indeksKata, tampil } = gunakanRotasiKata();

  return (
    <section ref={sectionRef} className="relative flex flex-col justify-center overflow-hidden bg-[#0a0d0a] pt-16 pb-12 lg:pt-20">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 70% 40%, rgba(74,124,89,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h1 className="fade-up mb-6 text-5xl leading-[1.08] font-bold text-[#f0fdf4] md:text-6xl">
              Your Partner in{" "}
              <span
                className="block transition-all duration-300"
                style={{
                  opacity: tampil ? 1 : 0,
                  transform: tampil ? "translateY(0)" : "translateY(-8px)",
                  color: "#4a7c59",
                  minHeight: "1.2em",
                }}
              >
                {kataBerputar[indeksKata]}
              </span>
              Transformation
            </h1>

            <p className="fade-up mb-10 max-w-lg text-lg leading-relaxed text-[#a7c9b4]">
              PT Yhoiki Digital Nusantara menghadirkan solusi software inovatif
              berbasis AI, Blockchain, dan SaaS untuk membantu bisnis Anda
              tumbuh di era digital.
            </p>

            <div className="fade-up mb-12 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4a7c59] px-7 py-3.5 font-semibold text-[#0a0d0a] shadow-lg shadow-[#4a7c59]/30 transition-all duration-300 hover:bg-[#6aaa7d]"
              >
                Mulai Sekarang
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#4a7c59]/50 px-7 py-3.5 font-medium text-[#86efac] transition-all duration-300 hover:bg-[#4a7c59]/15"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>

            <TagLayananList />
          </div>

          <div className="fade-up relative flex min-h-155 w-full items-center justify-center lg:justify-end">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-87.5 w-87.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4a7c59]/20 blur-[100px]" />

            <div className="relative z-10 w-full overflow-hidden" style={{ height: "620px" }}>
              <img
                src="/right-hero.png"
                alt="Digital Transformation Professional"
                className="absolute inset-0 h-full w-full object-cover drop-shadow-2xl"
                style={{
                  objectPosition: "center center",
                  transform: "scale(1)",
                  transformOrigin: "center center",
                }}
              />
            </div>

            {badgeStatistik.map((data, index) => (
              <BadgeStatistikItem key={index} data={data} />
            ))}

            <div className="absolute right-8 bottom-24 z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#4a7c59]/20 bg-[#4a7c59]/10 shadow-2xl backdrop-blur-md lg:right-4">
              <Code2 size={28} className="text-[#86efac]" />
            </div>
          </div>
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