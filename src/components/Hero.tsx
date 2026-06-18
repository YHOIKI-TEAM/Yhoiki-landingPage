"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Play,
  Code2,
  ShieldCheck,
  Users,
  Database,
  Cloud,
  Cpu,
  Server,
  Triangle,
  GitBranch,  
  PenTool,
  CreditCard,
  BrainCircuit
} from "lucide-react";

// Import komponen UI yang baru dibuat
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const tags = [
  "SaaS Platform",
  "AI Solutions",
  "Blockchain",
  "Web Development",
  "App Development",
  "Digital Agency",
];

// Rotating words for the headline
const rotatingWords = [
  "Smarter Digital",
  "AI-Powered",
  "Blockchain-Ready",
  "Future-Proof",
  "Scalable SaaS",
];

// Nama-nama perusahaan ternama
const partnerLogos = [
  { id: "google-cloud", icon: Cloud, label: "Google Cloud" },
  { id: "aws", icon: Server, label: "AWS" },
  { id: "vercel", icon: Triangle, label: "Vercel" }, // Menggunakan Triangle karena mirip logo Vercel
  { id: "github", icon: GitBranch, label: "GitHub" },
  { id: "figma", icon: PenTool, label: "Figma" },
  { id: "stripe", icon: CreditCard, label: "Stripe" },
  { id: "openai", icon: BrainCircuit, label: "OpenAI" },
  { id: "supabase", icon: Database, label: "Supabase" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    const timer = setTimeout(() => {
      els?.forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Rotating text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative  lg:pt-36 flex flex-col justify-center pt-24 overflow-hidden bg-[#0a0d0a]"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(74,124,89,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Main grid: text + image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <div>
            {/* Pill badge */}
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4a7c59]/40 bg-[#4a7c59]/10 mb-8 text-sm text-[#86efac]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#86efac] animate-pulse" />
              Teknologi · AI · Blockchain · SaaS
            </div>

            {/* Headline with rotating word */}
            <h1 className="fade-up text-5xl md:text-6xl font-bold text-[#f0fdf4] leading-[1.08] mb-6">
              Your Partner in{" "}
              <span
                className="block transition-all duration-300"
                style={{
                  opacity: fade ? 1 : 0,
                  transform: fade ? "translateY(0)" : "translateY(-8px)",
                  color: "#4a7c59",
                  minHeight: "1.2em",
                }}
              >
                {rotatingWords[wordIndex]}
              </span>
              Transformation
            </h1>

            <p className="fade-up text-[#a7c9b4] text-lg leading-relaxed mb-10 max-w-lg">
              PT Yhoiki Digital Nusantara menghadirkan solusi software inovatif
              berbasis AI, Blockchain, dan SaaS untuk membantu bisnis Anda
              tumbuh di era digital.
            </p>

            {/* CTA row */}
            <div className="fade-up flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#0a0d0a] bg-[#4a7c59] hover:bg-[#6aaa7d] transition-all duration-300 shadow-lg shadow-[#4a7c59]/30 hover:-translate-y-0.5"
              >
                Mulai Sekarang
                <ArrowRight size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-[#86efac] border border-[#4a7c59]/50 hover:bg-[#4a7c59]/15 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="w-7 h-7 rounded-full bg-[#4a7c59]/30 flex items-center justify-center">
                  <Play size={12} fill="currentColor" />
                </span>
                Pelajari Lebih Lanjut
              </a>
            </div>

            {/* Tags */}
            <div className="fade-up flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs border border-[#4a7c59]/25 text-[#6b8f78] bg-[#4a7c59]/8 hover:border-[#4a7c59]/50 hover:text-[#86efac] transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right column: Image with Floating Cards */}
          <div className="fade-up relative flex items-center justify-center lg:justify-end w-full min-h-[620px]">
            {/* Soft glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#4a7c59]/30 rounded-full blur-[80px] pointer-events-none" />

            {/* Main Image Container */}
            <div className="relative w-full z-10 overflow-hidden" style={{ height: "620px" }}>
              <img
                src="/right-hero.png"
                alt="Digital Transformation Professional"
                className="absolute inset-0 w-full h-full object-cover drop-shadow-2xl"
                style={{
                  objectPosition: "center center",
                  transform: "scale(1)",
                  transformOrigin: "center center",
                }}
              />
            </div>

            {/* Floating Card 1: Pengalaman (Top Left) */}
            <div className="absolute top-10 left-0 lg:-left-10 z-20 flex flex-col justify-center px-6 py-4 rounded-2xl bg-[#0f1a0f]/90 backdrop-blur-md border border-[#4a7c59]/30 shadow-xl shadow-black/50 hover:-translate-y-1 transition-transform">
              <span className="text-3xl font-black text-[#f0fdf4] mb-1">
                48+
              </span>
              <span className="text-xs font-medium text-[#a7c9b4]">
                Proyek Deployed
              </span>
            </div>

            {/* Floating Card 2: Klien/SaaS (Middle Right) */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-8 z-20 flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#0f1a0f]/90 backdrop-blur-md border border-[#4a7c59]/30 shadow-xl shadow-black/50 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#4a7c59]/20 flex items-center justify-center text-[#86efac]">
                <Users size={24} />
              </div>
              <div>
                <span className="block text-2xl font-black text-[#f0fdf4]">
                  100+
                </span>
                <span className="text-xs font-medium text-[#a7c9b4]">
                  Klien
                </span>
              </div>
            </div>

            {/* Floating Card 3: OSS Verified (Bottom Left) */}
            <div className="absolute bottom-20 left-4 lg:-left-6 z-20 flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0f1a0f]/90 backdrop-blur-md border border-[#4a7c59]/30 shadow-xl shadow-black/50 hover:-translate-y-1 transition-transform">
              <ShieldCheck size={20} className="text-[#86efac]" />
              <div>
                <span className="block text-sm font-bold text-[#f0fdf4]">
                  OSS Verified
                </span>
                <span className="text-[10px] text-[#a7c9b4]">
                  Legal & Terpercaya
                </span>
              </div>
            </div>

            {/* Floating Card 4: Icon Only (Bottom Right) */}
            <div className="absolute bottom-10 right-10 lg:right-6 z-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6aaa7d] to-[#4a7c59] flex items-center justify-center shadow-lg shadow-[#4a7c59]/40 hover:scale-105 transition-transform">
              <Code2 size={28} className="text-[#0a0d0a]" />
            </div>
          </div>
        </div>

        {/* Partner strip - UPDATED WITH INFINITE SLIDER */}
        <div className="fade-up border-t border-[#4a7c59]/15 pt-10">
          <p className="text-center text-xs text-[#4a7c59] uppercase tracking-widest mb-6">
            Partner Companies
          </p>
          
          <div className="relative w-full overflow-hidden h-[100px]">
            <InfiniteSlider 
              className="flex h-full w-full items-center" 
              duration={30} 
              durationOnHover={50}
              gap={64}
            >
              {partnerLogos.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-3 text-[#4a7c59]/60 hover:text-[#86efac] transition-colors cursor-default"
                >
                  <p.icon size={44} />
                  <span className="text-2xl font-bold tracking-wide whitespace-nowrap">
                    {p.label}
                  </span>
                </div>
              ))}
            </InfiniteSlider>

            {/* Efek Blur/Gradient di Kiri dan Kanan agar slider terlihat smooth saat muncul/hilang */}
            <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#0a0d0a] to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#0a0d0a] to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>

      {/* CSS untuk efek fade-up */}
      <style dangerouslySetInnerHTML={{__html: `
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />
    </section>
  );
}