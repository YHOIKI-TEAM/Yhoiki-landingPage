"use client";

interface KonfigurasiGaris {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  strokeWidth: number;
}

const daftarGaris: KonfigurasiGaris[] = [
  { x1: -200, y1: 200, x2: 1640, y2: 700, strokeWidth: 1.5 },
  {
    x1: -200,
    y1: 400,
    x2: 1640,
    y2: 100,
    strokeWidth: 1,
  },
  {
    x1: 400,
    y1: -100,
    x2: 1040,
    y2: 1000,
    strokeWidth: 1,
  },
  {
    x1: 800,
    y1: -100,
    x2: 640,
    y2: 1000,
    strokeWidth: 0.8,
  },
  {
    x1: -200,
    y1: 600,
    x2: 1640,
    y2: 300,
    strokeWidth: 1.2,
  },
];

function GarisAnimasi({ garis }: { garis: KonfigurasiGaris }) {
  return (
    <line
      x1={garis.x1}
      y1={garis.y1}
      x2={garis.x2}
      y2={garis.y2}
      stroke="var(--warna-brand)"
      strokeWidth={garis.strokeWidth}
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
        {daftarGaris.map((garis, index) => (
          <GarisAnimasi key={index} garis={garis} />
        ))}
      </svg>
    </div>
  );
}
