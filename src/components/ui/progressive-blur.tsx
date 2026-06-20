"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

export const SUDUT_GRADIENT = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

export type PropsProgressiveBlur = {
  direction?: keyof typeof SUDUT_GRADIENT;
  blurLayers?: number;
  className?: string;
  blurIntensity?: number;
} & HTMLMotionProps<"div">;

function buatGradientLapisan(index: number, segmentSize: number, sudut: number) {
  const titikGradient = [
    index * segmentSize,
    (index + 1) * segmentSize,
    (index + 2) * segmentSize,
    (index + 3) * segmentSize,
  ].map(
    (posisi, posisiIndex) =>
      `rgba(0, 0, 0, ${posisiIndex === 1 || posisiIndex === 2 ? 1 : 0}) ${posisi * 100}%`
  );

  return `linear-gradient(${sudut}deg, ${titikGradient.join(", ")})`;
}

export function ProgressiveBlur({
  direction = "bottom",
  blurLayers = 8,
  className,
  blurIntensity = 0.25,
  ...props
}: PropsProgressiveBlur) {
  const jumlahLapisan = Math.max(blurLayers, 2);
  const ukuranSegmen = 1 / (blurLayers + 1);

  return (
    <div className={cn("relative", className)}>
      {Array.from({ length: jumlahLapisan }).map((_, index) => {
        const gradient = buatGradientLapisan(index, ukuranSegmen, SUDUT_GRADIENT[direction]);

        return (
          <motion.div
            key={index}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              maskImage: gradient,
              WebkitMaskImage: gradient,
              backdropFilter: `blur(${index * blurIntensity}px)`,
            }}
            {...props}
          />
        );
      })}
    </div>
  );
}