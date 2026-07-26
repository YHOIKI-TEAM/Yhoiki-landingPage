"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-light opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* CTA Banner */}
        <div className="fade-up relative rounded-3xl border border-[#4a7c59]/20 bg-[#f8fbf9] p-12 md:p-16 text-center overflow-hidden mb-16 shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#4a7c59]/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#4a7c59]/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10">
            <div className="badge-green mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4a7c59] animate-pulse" />
              Siap Berkolaborasi?
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#1a2e1a] mb-5">
              Mari Wujudkan
              <br />
              <span className="text-[#4a7c59]">Visi Digital</span> Anda
            </h2>
            <p className="text-[#374151] max-w-xl mx-auto mb-10 leading-relaxed">
              Hubungi kami untuk memulai perjalanan transformasi digital bisnis Anda
              bersama tim profesional Yhoiki.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:yhoikiteam@gmail.com"
                className="px-8 py-3.5 rounded-full font-semibold text-white bg-[#4a7c59] hover:bg-[#3d6b4a] transition-all duration-300 shadow-lg shadow-[#4a7c59]/25 hover:-translate-y-0.5"
              >
                yhoikiteam@gmail.com
              </a>
              <a
                href="tel:+6285117138037"
                className="px-8 py-3.5 rounded-full font-semibold text-[#4a7c59] border-2 border-[#4a7c59]/30 hover:border-[#4a7c59] hover:bg-[#4a7c59]/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                +62 851-1713-8037
              </a>
            </div>
          </div>
        </div>

        {/* Contact details row */}
        <div className="fade-up grid sm:grid-cols-3 gap-5 mb-16">
          {[
            { icon: "📍", label: "Alamat", value: "Kec. Tayu, Kab. Pati, Prov. Jawa Tengah" },
            { icon: "🌐", label: "Website", value: "yhoikicompany.site", href: "https://yhoikicompany.site" },
            { icon: "✉️", label: "Email", value: "yhoikiteam@gmail.com", href: "mailto:yhoikiteam@gmail.com" },
          ].map((c) => (
            <div
              key={c.label}
              className="p-6 rounded-xl border border-[#4a7c59]/15 bg-[#f8fbf9] text-center shadow-sm hover:border-[#4a7c59]/35 hover:shadow-md transition-all duration-200"
            >
              <span className="text-3xl mb-3 block">{c.icon}</span>
              <div className="text-xs text-[#6b7280] mb-1 uppercase tracking-wider font-medium">{c.label}</div>
              {c.href ? (
                <a href={c.href} className="text-sm text-[#4a7c59] hover:text-[#3d6b4a] font-medium transition-colors">
                  {c.value}
                </a>
              ) : (
                <div className="text-sm text-[#374151]">{c.value}</div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="fade-up border-t border-[#4a7c59]/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-[#4a7c59] flex items-center justify-center text-white font-bold text-sm shadow-sm">
              Y
            </div>
            <span className="text-[#374151] text-sm font-medium">PT Yhoiki Digital Nusantara</span>
          </div>
          <p className="text-[#9ca3af] text-sm">
            © 2024 Yhoiki · Beyond Limits Beyond Imaginations
          </p>
        </div>
      </div>
    </section>
  );
}
