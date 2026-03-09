import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionShell } from "../ui/section-shell";

export function AboutSection() {
  return (
    <SectionShell id="sobre">
      <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Posicionamento"
            title="Desenvolvimento web com visão de marca, estratégia e resultado"
            description="Sou Nicolas Lucas, desenvolvedor web focado em criar experiências digitais profissionais para negócios que querem parecer grandes, transmitir confiança e converter melhor."
          />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-white/10 bg-panel/65 p-7 shadow-soft backdrop-blur-md">
            <p className="text-sm leading-relaxed text-textMuted md:text-base">
              Meu trabalho une direção visual premium, estrutura estratégica de conteúdo e desenvolvimento moderno para transformar sua presença digital em uma vitrine de autoridade. O objetivo não é apenas ter um site bonito, mas uma presença que fortalece sua marca e gera oportunidades reais.
            </p>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}

