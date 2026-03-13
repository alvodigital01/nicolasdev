import { DifferentialsSection } from "@/components/sections/differentials";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ServicesSection } from "@/components/sections/services";
import { TrustMarqueeSection } from "@/components/sections/trust-marquee";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(78,161,255,0.14),transparent_32%),radial-gradient(circle_at_15%_70%,rgba(126,192,255,0.12),transparent_30%)]" />
        <HeroSection />
        <TrustMarqueeSection />
        <ServicesSection />
        <DifferentialsSection />
        <PortfolioSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}