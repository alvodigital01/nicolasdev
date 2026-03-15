import { Atom, BarChart3, CreditCard, Figma, MousePointerClick, SearchCheck } from "lucide-react";
import { Container } from "../ui/container";

const tools = [
  { label: "Figma", icon: Figma, hoverClass: "group-hover:text-[#f5f7ff]" },
  { label: "React", icon: Atom, hoverClass: "group-hover:text-[#7dd3fc]" },
  { label: "Meta Ads", icon: MousePointerClick, hoverClass: "group-hover:text-[#60a5fa]" },
  { label: "Google Analytics", icon: BarChart3, hoverClass: "group-hover:text-[#f59e0b]" },
  { label: "Stripe", icon: CreditCard, hoverClass: "group-hover:text-[#a78bfa]" },
  { label: "Search Console", icon: SearchCheck, hoverClass: "group-hover:text-[#86efac]" }
];

const marqueeTools = [...tools, ...tools];

export function TrustMarqueeSection() {
  return (
    <section className="relative py-8">
      <Container className="space-y-5">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.36em] text-[rgba(168,178,204,0.56)]">
          Integrado com as melhores ferramentas de conversão
        </p>

        <div className="marquee-mask relative overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-4 hover:[animation-play-state:paused]">
            {marqueeTools.map((tool, index) => {
              const Icon = tool.icon;

              return (
                <div
                  key={`${tool.label}-${index}`}
                  className="group flex min-w-max items-center gap-3 rounded-full border border-white/[0.05] bg-white/[0.025] px-5 py-3 text-[rgba(226,232,240,0.46)] backdrop-blur-[10px] transition duration-300 hover:border-white/[0.09] hover:bg-white/[0.04] hover:text-white"
                >
                  <Icon className={`h-4 w-4 transition duration-300 ${tool.hoverClass}`} />
                  <span className={`text-sm font-medium tracking-[0.08em] transition duration-300 ${tool.hoverClass}`}>
                    {tool.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}