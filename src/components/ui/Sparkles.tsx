"use client";

import { useEffect, useRef } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

const generateSparkles = (count: number): Sparkle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.7 + 0.3,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 4,
  }));

export default function Sparkles({ count = 40 }: { count?: number }) {
  const sparkles = generateSparkles(count);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: s.id % 3 === 0 ? "#86efac" : s.id % 3 === 1 ? "#4a7c59" : "#d1fae5",
            opacity: s.opacity,
            animation: `pulse ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
