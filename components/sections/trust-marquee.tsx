import { Atom, BarChart3, CreditCard, Figma, MousePointerClick, SearchCheck } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionShell } from "../ui/section-shell";

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
    <SectionShell className="py-4 md:py-6">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(7,14,26,0.72),rgba(7,14,26,0.4))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_24px_60px_-40px_rgba(0,0,0,0.82)] backdrop-blur-[16px] md:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,192,255,0.12),transparent_36%)]" />

            <div className="relative mb-4 flex items-center justify-between gap-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[rgba(188,210,232,0.62)]">
                Integrado com as ferramentas que puxam conversão
              </p>
              <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/48 md:inline-flex">
                Stack comercial
              </div>
            </div>

            <div className="marquee-mask relative overflow-hidden">
              <div className="marquee-track flex w-max items-center gap-4 hover:[animation-play-state:paused]">
                {marqueeTools.map((tool, index) => {
                  const Icon = tool.icon;

                  return (
                    <div
                      key={`${tool.label}-${index}`}
                      className="group flex min-w-max items-center gap-3 rounded-full border border-white/[0.06] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-[rgba(226,232,240,0.58)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-[12px] transition duration-300 hover:border-[rgba(126,192,255,0.24)] hover:bg-[rgba(11,22,42,0.5)] hover:text-white"
                    >
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/15 bg-[radial-gradient(circle_at_30%_30%,rgba(126,192,255,0.16),rgba(14,24,40,0.92))] text-accentSoft shadow-[inset_0_1px_10px_rgba(126,192,255,0.08)] transition duration-300 group-hover:border-accentSoft/30 group-hover:text-white">
                        <Icon className={`h-4 w-4 transition duration-300 ${tool.hoverClass}`} />
                      </div>
                      <span className={`text-sm font-medium tracking-[0.08em] transition duration-300 ${tool.hoverClass}`}>
                        {tool.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
