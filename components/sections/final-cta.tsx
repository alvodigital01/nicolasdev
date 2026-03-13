import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/container";
import { PremiumButton } from "../ui/premium-button";
import { Reveal } from "../ui/reveal";
import { SectionShell } from "../ui/section-shell";

export function FinalCtaSection() {
  return (
    <SectionShell id="cta" className="pb-24 pt-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-[rgba(59,130,246,0.2)] bg-[rgba(8,14,24,0.58)] p-8 shadow-[0_0_0_1px_rgba(126,192,255,0.05),0_30px_90px_-42px_rgba(59,130,246,0.45)] backdrop-blur-[20px] md:p-12">
            <div className="pointer-events-none absolute -left-14 top-0 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-10 h-36 w-36 rounded-full bg-accentSoft/18 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_34%)]" />

            <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-accentSoft">
                  <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Agenda enxuta do mês
                </div>

                <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                  Se o site atual informa demais e vende de menos, a{" "}
                  <span className="bg-[linear-gradient(135deg,#8DD3FF_0%,#F4FBFF_55%,#9FD8FF_100%)] bg-clip-text text-transparent">
                    solução é simplificar a estrutura.
                  </span>
                </h2>

                <p className="max-w-2xl text-sm leading-relaxed text-[#d6e6ff] md:text-base">
                  Eu monto uma proposta com escopo, prazo e direção visual para deixar sua página mais clara, mais forte e mais pronta para gerar orçamentos.
                </p>

                <div className="flex flex-wrap gap-4">
                  <PremiumButton
                    href="https://wa.me/5543988724786?text=Olá%2C%20Nicolas.%20Vim%20pelo%20seu%20site%20e%20quero%20um%20orçamento%20para%20criar%20um%20site%20profissional%20para%20o%20meu%20negócio."
                    className="cta-shimmer px-7 py-3.5 text-sm md:text-base shadow-[0_0_0_1px_rgba(126,192,255,0.16),0_18px_50px_-22px_rgba(78,161,255,0.95)] hover:shadow-[0_0_26px_rgba(126,192,255,0.42),0_24px_70px_-24px_rgba(78,161,255,1)]"
                  >
                    Solicitar orçamento <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </PremiumButton>
                  <PremiumButton
                    href="https://instagram.com/nicolasdev_oficial"
                    variant="secondary"
                    className="px-7 py-3.5 text-sm md:text-base hover:bg-[rgba(10,22,42,0.92)] hover:border-accentSoft/55"
                  >
                    Falar pelo Instagram
                  </PremiumButton>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[260px] md:max-w-[320px]">
                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(78,161,255,0.22),transparent_68%)] blur-2xl" />
                <div className="cta-image-fade relative overflow-hidden rounded-[28px] bg-transparent">
                  <Image
                    src="/images/cta-nicolas.jpg"
                    alt="Nicolas Lucas convidando para contato"
                    width={700}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}