import Image from "next/image";
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
            <div className="relative grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.2em] text-accentSoft">Agenda enxuta do mes</p>
                <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                  Se o site atual informa demais e vende de menos, a solucao e simplificar a estrutura.
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-[#d6e6ff] md:text-base">
                  Eu monto uma proposta com escopo, prazo e direcao visual para deixar sua pagina mais clara, mais forte e mais pronta para gerar orcamentos.
                </p>
                <div className="flex flex-wrap gap-4">
                  <PremiumButton href="https://wa.me/5543988724786?text=Ol%C3%A1%2C%20Nicolas.%20Vim%20pelo%20seu%20site%20e%20quero%20um%20or%C3%A7amento%20para%20criar%20um%20site%20profissional%20para%20o%20meu%20neg%C3%B3cio.">
                    Solicitar orcamento <ArrowRight className="ml-2 h-4 w-4" />
                  </PremiumButton>
                  <PremiumButton href="https://instagram.com/nicolasdev_oficial" variant="secondary">
                    Falar pelo Instagram
                  </PremiumButton>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] p-2">
                <Image
                  src="/images/cta-nicolas.jpg"
                  alt="Nicolas Lucas convidando para contato"
                  width={500}
                  height={500}
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
