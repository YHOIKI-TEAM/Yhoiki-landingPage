"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";

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

function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  function kirimViaWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const teks = encodeURIComponent(
      `Halo Yhoiki, saya ${nama} (${email}).\n\n${pesan}`,
    );
    window.open(`https://wa.me/6285117138037?text=${teks}`, "_blank");
  }

  const kelasInput =
    "w-full rounded-xl border border-[rgba(var(--warna-brand-rgb),0.25)] bg-[var(--warna-bg-dasar)] px-4 py-3 text-sm text-[var(--warna-teks-utama)] placeholder:text-[var(--warna-teks-muted)] outline-none transition-colors focus:border-[var(--warna-brand)]";

  return (
    <form onSubmit={kirimViaWhatsApp} className="flex flex-col gap-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder="Nama Anda"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className={kelasInput}
        />
        <input
          type="email"
          required
          placeholder="Email Anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={kelasInput}
        />
      </div>
      <textarea
        required
        placeholder="Ceritakan kebutuhan digital bisnis Anda..."
        rows={4}
        value={pesan}
        onChange={(e) => setPesan(e.target.value)}
        className={kelasInput}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--warna-brand)] px-6 py-3.5 font-semibold text-[var(--warna-bg-dasar)] shadow-lg shadow-[rgba(var(--warna-brand-rgb),0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--warna-brand-terang)]"
      >
        <Send size={18} />
        Kirim Pesan
      </button>
    </form>
  );
}

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--warna-bg-dasar)] py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-100 w-200 -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(var(--warna-brand-rgb),0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="fade-up mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-[var(--warna-teks-utama)] md:text-5xl lg:text-6xl">
            Mari Wujudkan
            <br />
            <span className="text-[var(--warna-aksen)]">Visi Digital</span> Anda
          </h2>
          <p className="mx-auto max-w-xl text-sm text-[var(--warna-teks-sekunder)] md:text-base">
            Konsultasi awal tidak dipungut biaya. Ceritakan kebutuhan Anda lewat form, WhatsApp, atau email — tim
            kami akan merespons secepatnya.
          </p>
        </div>

        <div className="fade-up kartu-shadow grid gap-0 overflow-hidden rounded-3xl bg-[var(--warna-bg-permukaan)] md:grid-cols-2">
          {/* Panel kiri: channel kontak langsung, WhatsApp jadi opsi utama karena paling minim friction */}
          <div className="flex flex-col justify-center gap-4 bg-[var(--warna-bg-elevated)] p-10 md:p-12">
            <a
              href="https://wa.me/6285117138037"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-[var(--warna-brand)] p-4 shadow-lg shadow-[rgba(var(--warna-brand-rgb),0.25)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--warna-bg-dasar)]">
                <MessageCircle size={22} className="text-[var(--warna-brand)]" />
              </span>
              <span>
                <span className="block text-xs font-medium text-[rgba(var(--warna-bg-dasar-rgb),0.8)]">
                  Paling cepat direspons
                </span>
                <span className="block font-semibold text-[var(--warna-bg-dasar)]">WhatsApp: +62 851-1713-8037</span>
              </span>
            </a>

            <a
              href="mailto:yhoikiteam@gmail.com"
              className="flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-[var(--warna-bg-permukaan-2)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(var(--warna-brand-rgb),0.15)]">
                <Mail size={20} className="text-[var(--warna-aksen)]" />
              </span>
              <span className="font-medium text-[var(--warna-teks-utama)]">yhoikiteam@gmail.com</span>
            </a>
          </div>

          {/* Panel kanan: form langsung di halaman, tidak wajib pindah ke aplikasi lain */}
          <div className="p-10 md:p-12">
            <FormKontak />
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