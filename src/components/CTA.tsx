"use client";

import { useEffect, useRef } from "react";

function gunakanAnimasiFadeUp(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section id="contact" ref={sectionRef} className="relative bg-[#0a0d0a] py-24 md:py-32">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-100 w-200 -translate-x-1/2"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(74,124,89,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="fade-up relative overflow-hidden rounded-3xl border border-[#4a7c59]/30 bg-linear-to-br from-[#1a2e1a] to-[#0a0d0a] p-10 text-center md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(134,239,172,0.15)_1px,transparent_1px)] bg-size-[20px_20px] opacity-20" />

          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-bold text-[#f0fdf4] md:text-5xl lg:text-6xl">
              Mari Wujudkan
              <br />
              <span className="text-[#4a7c59]">Visi Digital</span> Anda
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-sm text-[#a7c9b4] md:text-base">
              Hubungi kami untuk memulai perjalanan transformasi digital bisnis Anda
              bersama tim profesional Yhoiki.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:yhoikiteam@gmail.com"
                className="rounded-full bg-[#4a7c59] px-8 py-3.5 font-medium text-[#0a0d0a] shadow-lg shadow-[#4a7c59]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6aaa7d]"
              >
                yhoikiteam@gmail.com
              </a>
              <a
                href="tel:+6285117138037"
                className="rounded-full border border-[#4a7c59]/50 px-8 py-3.5 font-medium text-[#86efac] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4a7c59]/15"
              >
                +62 851-1713-8037
              </a>
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