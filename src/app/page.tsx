import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BusinessUnits from "@/components/BusinessUnits";
import Team from "@/components/Team";
import FutureGoals from "@/components/FutureGoals";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0d0a]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BusinessUnits />
      <Team />
      <FutureGoals />
      <Contact />
    </main>
  );
}
