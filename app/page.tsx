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
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_16%,rgba(78,161,255,0.22),transparent_28%),radial-gradient(circle_at_12%_68%,rgba(126,192,255,0.16),transparent_26%),radial-gradient(circle_at_46%_38%,rgba(35,104,255,0.12),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[linear-gradient(180deg,rgba(96,170,255,0.08),transparent)]" />
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