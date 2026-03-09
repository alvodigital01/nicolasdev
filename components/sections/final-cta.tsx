import { ArrowRight } from "lucide-react";
import { Container } from "../ui/container";
import { PremiumButton } from "../ui/premium-button";
import { Reveal } from "../ui/reveal";
import { SectionShell } from "../ui/section-shell";

export function FinalCtaSection() {
  return (
    <SectionShell id="cta" className="pb-24 pt-14">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/20 via-panel to-background p-8 md:p-12">
            <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-12 h-28 w-28 rounded-full bg-accentSoft/25 blur-3xl" />
            <div className="relative space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-accentSoft">Últimas vagas do mês</p>
              <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                Se sua marca precisa parecer profissional para vender mais, este é o momento de construir seu novo site.
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-[#d6e6ff] md:text-base">
                Receba uma proposta estratégica com escopo, prazo e direção visual para transformar sua presença digital em um ativo de autoridade e conversão.
              </p>
              <div className="flex flex-wrap gap-4">
                <PremiumButton href="https://wa.me/5500000000000">
                  Solicitar orçamento <ArrowRight className="ml-2 h-4 w-4" />
                </PremiumButton>
                <PremiumButton href="https://instagram.com" variant="secondary">
                  Falar pelo Instagram
                </PremiumButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}

