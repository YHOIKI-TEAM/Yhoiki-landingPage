"use client";

import { useEffect, useRef } from "react";
import {
  Database,
  Cloud,
  Server,
  Triangle,
  GitBranch,
  PenTool,
  CreditCard,
  BrainCircuit,
} from "lucide-react";

import { InfiniteSlider } from "@/components/ui/infinite-slider";

interface LogoMitra {
  id: string;
  icon: typeof Cloud;
  label: string;
}

const daftarLogoMitra: LogoMitra[] = [
  { id: "google-cloud", icon: Cloud, label: "Google Cloud" },
  { id: "aws", icon: Server, label: "AWS" },
  { id: "vercel", icon: Triangle, label: "Vercel" },
  { id: "github", icon: GitBranch, label: "GitHub" },
  { id: "figma", icon: PenTool, label: "Figma" },
  { id: "stripe", icon: CreditCard, label: "Stripe" },
  { id: "openai", icon: BrainCircuit, label: "OpenAI" },
  { id: "supabase", icon: Database, label: "Supabase" },
];

function gunakanAnimasiMasuk(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const elemenFadeUp = ref.current?.querySelectorAll(".fade-up");
    const timer = setTimeout(() => {
      elemenFadeUp?.forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);
}

function LogoMitraItem({ mitra }: { mitra: LogoMitra }) {
  const Icon = mitra.icon;
  return (
    <div className="flex cursor-default items-center gap-3 text-[#4a7c59]/60 transition-colors hover:text-[#86efac]">
      <Icon size={44} />
      <span className="text-2xl font-bold tracking-wide whitespace-nowrap">{mitra.label}</span>
    </div>
  );
}

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiMasuk(sectionRef);

  return (
    <section ref={sectionRef} className="relative bg-[#0a0d0a] pb-8">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="relative h-25 w-full overflow-hidden">
          <InfiniteSlider className="flex h-full w-full items-center" duration={30} durationOnHover={50} gap={64}>
            {daftarLogoMitra.map((mitra) => (
              <LogoMitraItem key={mitra.id} mitra={mitra} />
            ))}
          </InfiniteSlider>

          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-linear-to-r from-[#0a0d0a] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-linear-to-l from-[#0a0d0a] to-transparent" />
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `,
        }}
      />
    </section>
  );
}