"use client";

/**
 * Section "Komunitas" — ajakan bergabung ke channel komunitas Yhoiki.
 *
 * TODO: ganti `href` di bawah dengan link grup/channel yang sebenarnya.
 * - WhatsApp: sudah diisi dengan nomor yang sama seperti di Footer, ganti ke
 *   link grup komunitas kalau berbeda dari nomor konsultasi.
 * - Discord & Facebook: masih placeholder "#", isi dengan link invite/Page asli.
 */

interface CommunityItem {
  id: string;
  nama: string;
  deskripsi: string;
  href: string;
  warna: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

function IkonWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.39 1.29 4.86L2 22l5.36-1.4a9.9 9.9 0 0 0 4.68 1.19h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.13-2.9-7-1.87-1.87-4.36-2.9-7.01-2.9zm5.81 14.16c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.93-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.15.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.13-.28.28-.12.55.16.27.71 1.17 1.53 1.89 1.05.94 1.94 1.23 2.21 1.37.27.14.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.07.11.07.62-.17 1.3z" />
    </svg>
  );
}

function IkonDiscord(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.028C.533 9.046-.319 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.891.076.076 0 0 0-.04.107c.36.698.772 1.363 1.225 1.993a.077.077 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.334-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.334-.946 2.42-2.157 2.42z" />
    </svg>
  );
}

function IkonFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

const daftarKomunitas: CommunityItem[] = [
  {
    id: "whatsapp",
    nama: "WhatsApp Group",
    deskripsi: "Diskusi cepat, update layanan, dan konsultasi langsung dengan tim Yhoiki.",
    href: "https://wa.me/6285117138037",
    warna: "#25D366",
    icon: IkonWhatsApp,
  },
  {
    id: "discord",
    nama: "Discord Server",
    deskripsi: "Ruang komunitas untuk developer, kolaborator, dan pengguna berbagi ide.",
    href: "#",
    warna: "#5865F2",
    icon: IkonDiscord,
  },
  {
    id: "facebook",
    nama: "Facebook Page",
    deskripsi: "Ikuti berita terbaru, studi kasus, dan aktivitas PT Yhoiki Digital Nusantara.",
    href: "#",
    warna: "#1877F2",
    icon: IkonFacebook,
  },
];

function KartuKomunitas({ item }: { item: CommunityItem }) {
  const Icon = item.icon;
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl bg-[var(--warna-bg-permukaan)] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
    >
      {/* Glow warna brand komunitas, muncul halus saat hover */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-25"
        style={{ backgroundColor: item.warna }}
      />

      <div
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundColor: `${item.warna}1A`, color: item.warna }}
      >
        <Icon className="h-7 w-7" />
      </div>

      <div className="relative">
        <h3 className="mb-1 text-lg font-bold text-[var(--warna-teks-utama)]">{item.nama}</h3>
        <p className="text-sm leading-relaxed text-[var(--warna-teks-sekunder)]">{item.deskripsi}</p>
      </div>

      <span className="relative mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--warna-aksen)] transition-transform group-hover:translate-x-1">
        Gabung sekarang →
      </span>
    </a>
  );
}

export default function Community() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-[var(--warna-bg-dasar)] py-24"
    >
      <div className="bg-dots absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(var(--warna-brand-rgb),0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--warna-teks-utama)] lg:text-5xl">
            Bergabung dengan Komunitas Kami
          </h2>
          <p className="text-lg leading-relaxed text-[var(--warna-teks-sekunder)]">
            Terhubung dengan tim dan pengguna Yhoiki lainnya lewat channel favorit Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {daftarKomunitas.map((item) => (
            <KartuKomunitas key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}