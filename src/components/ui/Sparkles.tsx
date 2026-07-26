"use client";

interface Kerlip {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

const buatDaftarKerlip = (jumlah: number): Kerlip[] =>
  Array.from({ length: jumlah }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.7 + 0.3,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 4,
  }));

function warnaKerlip(id: number): string {
  if (id % 3 === 0) return "#86efac";
  if (id % 3 === 1) return "#4a7c59";
  return "#d1fae5";
}

function TitikKerlip({ kerlip }: { kerlip: Kerlip }) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        left: `${kerlip.x}%`,
        top: `${kerlip.y}%`,
        width: `${kerlip.size}px`,
        height: `${kerlip.size}px`,
        backgroundColor: warnaKerlip(kerlip.id),
        opacity: kerlip.opacity,
        animation: `pulse ${kerlip.duration}s ease-in-out ${kerlip.delay}s infinite`,
      }}
    />
  );
}

export default function Sparkles({ count = 40 }: { count?: number }) {
  const daftarKerlip = buatDaftarKerlip(count);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {daftarKerlip.map((kerlip) => (
        <TitikKerlip key={kerlip.id} kerlip={kerlip} />
      ))}
    </div>
  );
}
