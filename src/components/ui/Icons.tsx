/**
 * Set ikon SVG kustom untuk Yhoiki Landing Page.
 *
 * Dirancang dengan motif garis tunggal (single-stroke) dan sudut lengkung
 * yang konsisten dengan bentuk logo Yhoiki (lengkungan mangkuk/figure),
 * bukan ikon generik dari library umum. Semua ikon mewarisi warna dari
 * `currentColor` sehingga otomatis menyesuaikan tema terang/gelap.
 */

import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base(props: IconProps) {
  const { size = 22, ...rest } = props;
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...rest,
  };
}

/** Globe dengan garis lintang melengkung asimetris — Website Development */
export function IconGlobe(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.6 9.5h16.8" />
      <path d="M3.6 14.5h16.8" />
      <path d="M12 3.5c2.4 2.3 3.6 5.3 3.6 8.5s-1.2 6.2-3.6 8.5" />
      <path d="M12 3.5c-2.4 2.3-3.6 5.3-3.6 8.5s1.2 6.2 3.6 8.5" />
    </svg>
  );
}

/** Perangkat mobile dengan notch kecil — App Development */
export function IconDevice(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.4" />
      <path d="M10 5.2h4" />
      <circle cx="12" cy="18.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Kuas dengan ujung pena — Visual Branding */
export function IconBrush(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 19.5c-1-2.4.2-4.3 2.3-5l9-9.2a2 2 0 0 1 2.8 0l.1.1a2 2 0 0 1 0 2.8l-9.2 9c-.7 2.1-2.6 3.3-5 2.3Z" />
      <path d="M14.5 5.5l4 4" />
      <path d="M4.5 19.5c.6-.6 1.6-.7 2.3-.2" />
    </svg>
  );
}

/** Node terhubung membentuk simpul — Digital Solutions / AI Automation */
export function IconNodes(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="6" r="2.1" />
      <circle cx="18" cy="6" r="2.1" />
      <circle cx="12" cy="13" r="2.4" />
      <circle cx="6" cy="19" r="2.1" />
      <circle cx="18" cy="19" r="2.1" />
      <path d="M7.6 7.4l3 4" />
      <path d="M16.4 7.4l-3 4" />
      <path d="M10.4 14.8l-3 2.6" />
      <path d="M13.6 14.8l3 2.6" />
    </svg>
  );
}

/** Lampu pijar minimalis — Innovation Oriented */
export function IconSpark(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2.5c-3.6 0-6 2.7-6 5.9 0 2.4 1.3 3.9 2.5 5.1.5.5.8 1.1.8 1.8v1h5.4v-1c0-.7.3-1.3.8-1.8 1.2-1.2 2.5-2.7 2.5-5.1 0-3.2-2.4-5.9-6-5.9Z" />
      <path d="M9.7 19h4.6" />
      <path d="M10.4 21.4h3.2" />
    </svg>
  );
}

/** Sudut blueprint / cetak biru — Adaptive & Scalable */
export function IconBlueprint(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 20.5v-13l4-4.5" />
      <path d="M3.5 7.5h13l4.5 4" />
      <path d="M20.5 11.5v9" />
      <path d="M3.5 20.5h17" />
      <path d="M7 11v6" />
      <path d="M10.5 11v6" />
    </svg>
  );
}

/** Target dengan offset titik — Solution Focused */
export function IconTarget(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="13.6" cy="10.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Dua figur bertumpuk asimetris — Young & Creative Team */
export function IconDuo(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="7.5" r="2.6" />
      <path d="M3.8 19c.3-3 2.5-5 5.2-5s4.9 2 5.2 5" />
      <circle cx="17" cy="9.5" r="2" />
      <path d="M14.2 19c.2-2.4 1.6-4 3.3-4" />
    </svg>
  );
}

/** Gunung dengan jalur pendakian — NDakti / outdoor */
export function IconTrail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 19l6.2-11 3 5.2" />
      <path d="M11 14l2.4-4.2L21 19" />
      <path d="M3 19h18" />
      <path d="M9.2 9.5l.9-1.6" />
    </svg>
  );
}

/** Bentuk bintang asimetris empat sudut — Yho Agency */
export function IconFacet(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3c.5 3 2.2 5.3 5 6-2.8.7-4.5 3-5 6-.5-3-2.2-5.3-5-6 2.8-.7 4.5-3 5-6Z" />
      <path d="M19 16.5c.2 1.1.8 1.9 1.8 2.2-1 .3-1.6 1.1-1.8 2.2-.2-1.1-.8-1.9-1.8-2.2 1-.3 1.6-1.1 1.8-2.2Z" />
    </svg>
  );
}

/** Roket sederhana untuk ekspansi — International Expansion */
export function IconAscend(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2.6c2.6 2 4 5.2 4 8.4 0 2-.5 3.6-1.2 5l-2.8 3-2.8-3c-.7-1.4-1.2-3-1.2-5 0-3.2 1.4-6.4 4-8.4Z" />
      <circle cx="12" cy="9.5" r="1.5" />
      <path d="M9 16.4l-2.6 1.4.4-3" />
      <path d="M15 16.4l2.6 1.4-.4-3" />
    </svg>
  );
}

/** Roda gigi minim untuk pengembangan produk — Product & Startup Development */
export function IconGear(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.3M12 18.2v2.3M5 8l2 1.1M17 14.9l2 1.1M5 16l2-1.1M17 9.1l2-1.1M3.5 12h2.3M18.2 12h2.3" />
    </svg>
  );
}

/** Penanda lokasi — Alamat / Address */
export function IconPin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21c4-4 6.5-7.4 6.5-11A6.5 6.5 0 0 0 5.5 10c0 3.6 2.5 7 6.5 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

/** Sampul surat — Email */
export function IconMail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" />
    </svg>
  );
}

/** Gagang telepon — Phone */
export function IconPhone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 4.5h3.2l1.3 4-2 1.6c1 2.4 2.9 4.3 5.3 5.3l1.6-2 4 1.3V18a1.5 1.5 0 0 1-1.6 1.5C10.6 19 5 13.4 4.5 7.1A1.5 1.5 0 0 1 5 4.5Z" />
    </svg>
  );
}

/** Matahari — toggle tema terang */
export function IconSun(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.8v2.3M12 18.9v2.3M4.2 12H1.9M22.1 12h-2.3M6 6l-1.6-1.6M18 18l1.6 1.6M18 6l1.6-1.6M6 18l-1.6 1.6" />
    </svg>
  );
}

/** Bulan sabit asimetris — toggle tema gelap */
export function IconMoon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

/** Tanda panah kanan kecil untuk link/CTA */
export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 12h15" />
      <path d="M13.5 6l6 6-6 6" />
    </svg>
  );
}
