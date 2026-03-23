import { DifferentialsSection } from "@/components/sections/differentials";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ServicesSection } from "@/components/sections/services";
import { TrustMarqueeSection } from "@/components/sections/trust-marquee";

type DividerVariant = "hero" | "arc" | "ribbon" | "pulse" | "horizon";

const dividerPaths: Record<DividerVariant, string> = {
  hero: "M20 50C132 50 150 18 260 18C370 18 420 50 600 50C780 50 830 18 940 18C1050 18 1068 50 1180 50",
  arc: "M16 44C164 44 186 18 320 18C454 18 470 58 600 58C730 58 746 18 880 18C1014 18 1036 44 1184 44",
  ribbon: "M18 38C90 38 126 58 198 58C290 58 322 16 430 16C518 16 540 54 600 54C660 54 682 16 770 16C878 16 910 58 1002 58C1074 58 1110 38 1182 38",
  pulse: "M20 46C150 46 190 26 300 26C430 26 470 58 600 58C730 58 770 26 900 26C1010 26 1050 46 1180 46",
  horizon: "M14 40C170 40 208 30 320 30C432 30 468 50 600 50C732 50 768 30 880 30C992 30 1030 40 1186 40"
};

function SectionDivider({
  variant,
  className = "-mt-3 mb-2"
}: {
  variant: DividerVariant;
  className?: string;
}) {
  const path = dividerPaths[variant];
  const glowId = `${variant}-divider-glow`;
  const strokeId = `${variant}-divider-stroke`;

  return (
    <div aria-hidden="true" className={`pointer-events-none relative z-10 ${className}`}>
      <svg
        viewBox="0 0 1200 72"
        className="section-divider-flow h-14 w-full drop-shadow-[0_0_18px_rgba(126,192,255,0.2)] md:h-16"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={glowId} x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="rgba(255,255,255,0)" />
            <stop offset="0.18" stopColor="rgba(126,192,255,0.2)" />
            <stop offset="0.5" stopColor="rgba(255,255,255,0.34)" />
            <stop offset="0.82" stopColor="rgba(78,161,255,0.22)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id={strokeId} x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="rgba(255,255,255,0)" />
            <stop offset="0.16" stopColor="#4EA1FF" />
            <stop offset="0.5" stopColor="#FFFFFF" />
            <stop offset="0.84" stopColor="#7EC0FF" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id={`${variant}-divider-flow`} x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="rgba(255,255,255,0)" />
            <stop offset="0.42" stopColor="rgba(255,255,255,0)" />
            <stop offset="0.5" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="0.58" stopColor="rgba(126,192,255,0.58)" />
            <stop offset="0.7" stopColor="rgba(255,255,255,0)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <path d={path} className="section-divider-halo" stroke={`url(#${glowId})`} strokeWidth="8" strokeLinecap="round" />
        <path d={path} className="section-divider-stroke" stroke={`url(#${strokeId})`} strokeWidth="2" strokeLinecap="round" />
        <path
          d={path}
          className="section-divider-stream"
          stroke={`url(#${variant}-divider-flow)`}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <HeroSection />
        <SectionDivider variant="hero" />
        <TrustMarqueeSection />
        <ServicesSection />
        <SectionDivider variant="arc" />
        <DifferentialsSection />
        <SectionDivider variant="ribbon" />
        <PortfolioSection />
        <SectionDivider variant="pulse" />
        <FinalCtaSection />
      </main>
      <SectionDivider variant="horizon" className="-mt-2 mb-0" />
      <Footer />
    </>
  );
}




