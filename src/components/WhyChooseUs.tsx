"use client";

import { useEffect, useRef } from "react";

interface DataKeuntungan {
  number: string;
  title: string;
  desc: string;
}

const daftarKeuntungan: DataKeuntungan[] = [
  {
    number: "01",
    title: "Bekerja menjadi lebih efisien",
    desc: "Adopsi teknologi digital yang tepat dapat membantu Anda menghemat waktu, menghilangkan pemborosan biaya, dan menyelesaikan tugas lebih cepat dibandingkan proses manual.",
  },
  {
    number: "02",
    title: "Meningkatkan produktivitas",
    desc: "Sederhanakan seluruh proses dan alur kerja yang kompleks melalui aktivitas otomatisasi menggunakan teknologi digital yang dapat meningkatkan produktivitas.",
  },
  {
    number: "03",
    title: "Membantu mendapatkan data",
    desc: "Dapatkan data real time seputar kebutuhan internal dan eksternal dari bisnis Anda seperti analisa penjualan, kebiasaan pelanggan, hingga tren terkini untuk meningkatkan potensi bisnis Anda.",
  },
];

function gunakanAnimasiFadeUp(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elemenFadeUp = ref.current?.querySelectorAll(".fade-up");
    elemenFadeUp?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function HeadingKiri() {
  return (
    <div className="flex h-fit flex-col lg:sticky lg:top-32">
      <h2 className="fade-up mb-8 text-4xl leading-tight font-bold text-[#f0fdf4] md:text-5xl lg:text-6xl">
        Mereka Percaya <br />
        <span className="text-[#86efac]">dengan Kami</span>
      </h2>

      <p className="fade-up mb-6 text-base leading-relaxed text-[#a7c9b4] md:text-lg">
        Dengan pengalaman lebih dari 5 tahun dalam merancang, mengembangkan, dan memelihara perangkat lunak, kami dapat menjadi mitra yang ideal bagi Anda untuk mencapai tujuan bisnis melalui penerapan teknologi digital.
      </p>

      <p className="fade-up text-base leading-relaxed text-[#a7c9b4] md:text-lg">
        Di antaranya kami dapat membantu Anda dalam beberapa hal berikut:
      </p>
    </div>
  );
}

function ItemKeuntungan({ data, index }: { data: DataKeuntungan; index: number }) {
  return (
    <div
      className="fade-up group flex flex-col gap-6 sm:flex-row sm:gap-8"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="shrink-0 text-6xl font-black text-[#4a7c59]/40 transition-colors duration-500 group-hover:text-[#86efac] md:text-7xl">
        {data.number}
      </div>

      <div className="border-[#4a7c59]/20 transition-colors duration-500 group-hover:border-[#86efac]/50 sm:border-l-2 sm:pl-8">
        <h3 className="mb-3 text-xl font-bold text-[#f0fdf4] md:text-2xl">{data.title}</h3>
        <p className="leading-relaxed text-[#a7c9b4]">{data.desc}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  gunakanAnimasiFadeUp(sectionRef);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-[#4a7c59]/10 bg-[#0a0d0a] py-24 lg:py-32"
    >
      <div className="bg-dots absolute inset-0 opacity-10" />
      <div
        className="pointer-events-none absolute top-0 right-0 h-150 w-150"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(74,124,89,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <HeadingKiri />

          <div className="flex flex-col gap-12 lg:gap-16">
            {daftarKeuntungan.map((data, index) => (
              <ItemKeuntungan key={data.number} data={data} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .bg-dots {
          background-image: radial-gradient(rgba(134, 239, 172, 0.15) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `,
        }}
      />
    </section>
  );
}