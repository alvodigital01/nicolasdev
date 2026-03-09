import { differentials } from "@/data/site";
import { CheckCircle2 } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionShell } from "../ui/section-shell";

export function DifferentialsSection() {
  return (
    <SectionShell id="diferenciais" className="py-14">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Diferenciais"
            title="Sites modernos com acabamento premium e foco real em resultado"
            description="Cada etapa é pensada para combinar design sofisticado, experiência responsiva e performance otimizada."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="flex gap-4 rounded-2xl border border-white/10 bg-panel/70 p-5 backdrop-blur-sm transition duration-300 hover:border-accent/40">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accentSoft" />
                <div>
                  <h3 className="font-display text-lg text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-textMuted">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}

