"use client";

interface KonfigurasiGaris {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  gradientId: string;
  strokeWidth: number;
  durasiAnimasi: string;
  delayAnimasi?: string;
}

const daftarGaris: KonfigurasiGaris[] = [
  { x1: -200, y1: 200, x2: 1640, y2: 700, gradientId: "beam1", strokeWidth: 1.5, durasiAnimasi: "4s" },
  { x1: -200, y1: 400, x2: 1640, y2: 100, gradientId: "beam2", strokeWidth: 1, durasiAnimasi: "6s", delayAnimasi: "1s" },
  { x1: 400, y1: -100, x2: 1040, y2: 1000, gradientId: "beam1", strokeWidth: 1, durasiAnimasi: "5s", delayAnimasi: "2s" },
  { x1: 800, y1: -100, x2: 640, y2: 1000, gradientId: "beam3", strokeWidth: 0.8, durasiAnimasi: "7s", delayAnimasi: "0.5s" },
  { x1: -200, y1: 600, x2: 1640, y2: 300, gradientId: "beam2", strokeWidth: 1.2, durasiAnimasi: "5.5s", delayAnimasi: "3s" },
];

function DefinisiGradient() {
  return (
    <defs>
      <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(74,124,89,0)" />
        <stop offset="50%" stopColor="rgba(74,124,89,0.4)" />
        <stop offset="100%" stopColor="rgba(74,124,89,0)" />
      </linearGradient>
      <linearGradient id="beam2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(134,239,172,0)" />
        <stop offset="50%" stopColor="rgba(134,239,172,0.25)" />
        <stop offset="100%" stopColor="rgba(134,239,172,0)" />
      </linearGradient>
      <linearGradient id="beam3" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(74,124,89,0)" />
        <stop offset="50%" stopColor="rgba(74,124,89,0.2)" />
        <stop offset="100%" stopColor="rgba(74,124,89,0)" />
      </linearGradient>
      <filter id="blur">
        <feGaussianBlur stdDeviation="2" />
      </filter>
    </defs>
  );
}

function GarisAnimasi({ garis }: { garis: KonfigurasiGaris }) {
  return (
    <line
      x1={garis.x1}
      y1={garis.y1}
      x2={garis.x2}
      y2={garis.y2}
      stroke={`url(#${garis.gradientId})`}
      strokeWidth={garis.strokeWidth}
      className="animate-pulse"
      style={{ animationDuration: garis.durasiAnimasi, animationDelay: garis.delayAnimasi }}
    />
  );
}

export default function BackgroundBeams() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <DefinisiGradient />

        {daftarGaris.map((garis, index) => (
          <GarisAnimasi key={index} garis={garis} />
        ))}

        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(74,124,89,0.15)" />
          <stop offset="100%" stopColor="rgba(74,124,89,0)" />
        </radialGradient>
        <rect width="1440" height="900" fill="url(#centerGlow)" />
      </svg>

      <div className="bg-grid absolute inset-0 opacity-40" />

      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, #0a0d0a 80%)",
        }}
      />
    </div>
  );
}