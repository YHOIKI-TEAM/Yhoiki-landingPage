import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0d0a]">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <WhyChooseUs />
      <Services />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}
