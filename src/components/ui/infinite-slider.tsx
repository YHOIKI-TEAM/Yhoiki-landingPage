"use client";

import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";

type PropsInfiniteSlider = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: PropsInfiniteSlider) {
  const [durasiSaatIni, setDurasiSaatIni] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translasi = useMotionValue(0);
  const [isTransisi, setIsTransisi] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const ukuran = direction === "horizontal" ? width : height;
    const ukuranKonten = ukuran + gap;
    const dari = reverse ? -ukuranKonten / 2 : 0;
    const ke = reverse ? 0 : -ukuranKonten / 2;

    if (isTransisi) {
      controls = animate(translasi, [translasi.get(), ke], {
        ease: "linear",
        duration: durasiSaatIni * Math.abs((translasi.get() - ke) / ukuranKonten),
        onComplete: () => {
          setIsTransisi(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translasi, [dari, ke], {
        ease: "linear",
        duration: durasiSaatIni,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translasi.set(dari);
        },
      });
    }

    return controls?.stop;
  }, [key, translasi, durasiSaatIni, width, height, gap, isTransisi, direction, reverse]);

  const propsHover = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransisi(true);
          setDurasiSaatIni(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransisi(true);
          setDurasiSaatIni(duration);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal" ? { x: translasi } : { y: translasi }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...propsHover}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
