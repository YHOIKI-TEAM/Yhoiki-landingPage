import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OrganizationStructure from "@/components/OrganizationStructure";
import LegalInfo from "@/components/LegalInfo";
import BusinessUnits from "@/components/BusinessUnits";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import FutureGoals from "@/components/FutureGoals";
import CTA from "@/components/CTA";
import Portofolio from "@/components/Portofolio";
import FAQ from "@/components/FAQ";
import PartnerKolaborasi from "@/components/PartnerKolaborasi";
import Community from "@/components/Community";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--warna-bg-dasar)" }}>
      <Navbar />
      {/* 1. Hook — kenalkan Yhoiki & value proposition utama */}
      <Hero />
      {/* 2. Apa yang kami tawarkan — dijelaskan lebih awal, bukan ditumpuk di bawah */}
      <Services />
      <BusinessUnits />
      <WhyChooseUs />
      {/* 3. Bukti nyata sebelum klaim tentang perusahaan */}
      <Portofolio />
      {/* 4. Kenal lebih dekat — siapa & bagaimana Yhoiki bekerja */}
      <About />
      <OrganizationStructure />
      <LegalInfo />
      <FutureGoals />
      {/* 5. Bukti sosial tambahan — ajakan kolaborasi & komunitas */}
      <PartnerKolaborasi />
      <Community />
      {/* 6. Jawab keraguan sebelum ajakan aksi */}
      <FAQ />
      {/* 7. Ajakan aksi */}
      <CTA />
      <Footer />
    </main>
  );
}
