"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface DataTestimoni {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const daftarTestimoni: DataTestimoni[] = [
  {
    id: 1,
    name: "Ahmad Riyadi",
    role: "Direktur Operasional",
    company: "PT Logistik Nusantara",
    content:
      "Transformasi digital yang dilakukan oleh tim Yhoiki sangat luar biasa. Sistem otomatisasi yang mereka bangun berhasil memangkas biaya operasional kami secara signifikan.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: "CEO",
    company: "TechFin Solutions",
    content:
      "Kami mencari partner IT yang tidak hanya bisa ngoding, tapi paham bisnis. Yhoiki memberikan solusi SaaS yang benar-benar menyesuaikan dengan alur kerja perusahaan kami.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Founder",
    company: "EduTech Indonesia",
    content:
      "Website dan aplikasi yang dikembangkan sangat responsif dan stabil meski diakses ribuan user bersamaan. Pelayanan pasca-rilisnya juga sangat responsif.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonial() {
  return (
    <AnimatedTestimonials
      title="Dipercaya oleh Klien Kami"
      subtitle="Jangan hanya mendengar dari kami. Lihat apa kata mereka tentang solusi digital dan ekosistem yang telah kami bangun."
      testimonials={daftarTestimoni}
    />
  );
}