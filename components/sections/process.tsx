import { processSteps } from "@/data/site";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionShell } from "../ui/section-shell";

export function ProcessSection() {
  return (
    <SectionShell id="processo">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Processo"
            title="Um processo rapido para colocar no ar um site que apoia vendas e crescimento"
            description="Cada etapa existe para tirar seu projeto do papel com velocidade e transformar sua presenca digital em uma ferramenta de faturamento."
          />
        </Reveal>
        <div className="relative grid gap-5 md:grid-cols-2">
          <div className="pointer-events-none absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent md:block" />
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="relative rounded-2xl border border-white/10 bg-panel/75 p-6 backdrop-blur-sm">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/45 bg-accent/15 text-sm font-semibold text-accentSoft">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-xl text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-textMuted">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
