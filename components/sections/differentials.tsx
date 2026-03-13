import { CircleGauge, Eye, MousePointerSquareDashed, Sparkles } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionShell } from "../ui/section-shell";

const benefits = [
  {
    title: "Menos texto, mais direção",
    description: "A oferta aparece rápido e o visitante entende o que fazer sem atravessar uma página institucional.",
    icon: CircleGauge
  },
  {
    title: "CTA no momento certo",
    description: "Os pontos de contato entram cedo e se repetem com critério para gerar mais conversa.",
    icon: MousePointerSquareDashed
  },
  {
    title: "Prova visual primeiro",
    description: "Projetos e sinais de resultado sustentam valor sem depender de longas explicações.",
    icon: Eye
  },
  {
    title: "Design premium com foco comercial",
    description: "O visual continua forte, mas agora trabalha para vender e não só para parecer bonito.",
    icon: Sparkles
  }
];

export function DifferentialsSection() {
  return (
    <SectionShell id="diferenciais" className="py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,84,160,0.16),transparent_48%)]" />
      <Container className="space-y-10">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full border border-white/12 bg-white/[0.04] px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accentSoft">
              Por que vende melhor
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              A estrutura foi enxugada para o visitante{" "}
              <span className="bg-[linear-gradient(135deg,#8DD3FF_0%,#F4FBFF_55%,#9FD8FF_100%)] bg-clip-text text-transparent">
                entender, confiar e agir
              </span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-textMuted md:text-base">
              Essa nova organização prioriza leitura rápida, menos distração e mais intenção de contato.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal key={benefit.title} delay={index * 0.07}>
                <article className="group relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-[rgba(255,255,255,0.02)] p-6 backdrop-blur-[10px] transition-all duration-300 hover:border-[rgba(126,192,255,0.3)] hover:shadow-[0_24px_70px_-36px_rgba(78,161,255,0.35)]">
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(126,192,255,0.14),transparent_38%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" />

                  <div className="relative flex gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/15 bg-[radial-gradient(circle_at_30%_30%,rgba(126,192,255,0.18),rgba(14,24,40,0.9))] text-accentSoft shadow-[inset_0_1px_10px_rgba(126,192,255,0.08)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-display text-xl text-white">{benefit.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-textMuted md:text-base">{benefit.description}</p>
                    </div>
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