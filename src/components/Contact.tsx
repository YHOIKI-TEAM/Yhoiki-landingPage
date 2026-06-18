"use client";

import { useEffect, useRef } from "react";
import { MapPin, Globe, Mail } from "lucide-react";

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
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(74,124,89,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* CTA Banner */}
        <div className="fade-up relative rounded-3xl border border-[#4a7c59]/30 bg-gradient-to-br from-[#1a2e1a] to-[#0a0d0a] p-12 md:p-16 text-center overflow-hidden mb-20">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4a7c59]/40 bg-[#4a7c59]/10 mb-6 text-sm text-[#86efac]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#86efac] animate-pulse" />
              Siap Berkolaborasi?
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#f0fdf4] mb-6">
              Mari Wujudkan
              <br />
              <span className="text-[#4a7c59]">Visi Digital</span> Anda
            </h2>
            <p className="text-[#a7c9b4] max-w-xl mx-auto mb-10">
              Hubungi kami untuk memulai perjalanan transformasi digital bisnis Anda
              bersama tim profesional Yhoiki.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:yhoikiteam@gmail.com"
                className="px-8 py-3.5 rounded-full font-medium text-[#0a0d0a] bg-[#4a7c59] hover:bg-[#6aaa7d] transition-all duration-300 shadow-lg shadow-[#4a7c59]/30 hover:-translate-y-0.5"
              >
                yhoikiteam@gmail.com
              </a>
              <a
                href="tel:+6285117138037"
                className="px-8 py-3.5 rounded-full font-medium text-[#86efac] border border-[#4a7c59]/50 hover:bg-[#4a7c59]/15 transition-all duration-300 hover:-translate-y-0.5"
              >
                +62 851-1713-8037
              </a>
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div className="fade-up grid sm:grid-cols-3 gap-6 mb-20">
          {[
            { Icon: MapPin, label: "Alamat", value: "Kec. Tayu, Kab. Pati, Prov. Jawa Tengah", href: undefined },
            { Icon: Globe, label: "Website", value: "yhoikicompany.site", href: "https://yhoikicompany.site" },
            { Icon: Mail, label: "Email", value: "yhoikiteam@gmail.com", href: "mailto:yhoikiteam@gmail.com" },
          ].map(({ Icon, label, value, href }) => (
            <div key={label} className="p-6 rounded-xl border border-[#4a7c59]/20 bg-[#0f1a0f] text-center">
              <Icon size={28} className="text-[#86efac] mx-auto mb-3" />
              <div className="text-xs text-[#6b8f78] mb-1 uppercase tracking-wider">{label}</div>
              {href ? (
                <a href={href} className="text-sm text-[#86efac] hover:text-[#4ade80] transition-colors">
                  {value}
                </a>
              ) : (
                <div className="text-sm text-[#a7c9b4]">{value}</div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="fade-up border-t border-[#4a7c59]/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-[#4a7c59] flex items-center justify-center text-white font-bold text-sm">
              Y
            </div>
            <span className="text-[#a7c9b4] text-sm">PT Yhoiki Digital Nusantara</span>
          </div>
          <p className="text-[#4a7c59] text-sm">© 2024 Yhoiki · Beyond Limits Beyond Imaginations</p>
        </div>
      </div>
    </section>
  );
}