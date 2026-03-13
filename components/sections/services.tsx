import { services } from "@/data/site";
import { BriefcaseBusiness, LayoutTemplate, Megaphone, Rocket, ShieldCheck, Smartphone } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionShell } from "../ui/section-shell";

const iconMap = {
  rocket: Rocket,
  layout: LayoutTemplate,
  briefcase: BriefcaseBusiness,
  megaphone: Megaphone,
  smartphone: Smartphone,
  shield: ShieldCheck
};

export function ServicesSection() {
  return (
    <SectionShell id="servicos" className="pt-14">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Oferta"
            title="Escolha uma estrutura simples, forte e feita para converter"
            description="Em vez de um site carregado de paginas e texto, a proposta aqui e entregar o tipo de pagina certo para sua oferta vender melhor."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="group h-full rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/45">
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accentSoft">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-textMuted md:text-base">{service.description}</p>
                  <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accentSoft">
                    Projeto direto ao ponto
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}
