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
            eyebrow="Serviços"
            title="Soluções digitais para negócios que querem vender com mais autoridade"
            description="Projetos pensados para elevar percepção de valor, transmitir profissionalismo e gerar conversões com consistência."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="group h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/45">
                  <div className="mb-5 inline-flex rounded-xl border border-accent/30 bg-accent/10 p-3 text-accentSoft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-textMuted">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}

