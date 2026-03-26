import { MessageCircle, MoveRight, Rocket, Target } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionShell } from "../ui/section-shell";

const steps = [
  {
    title: "Você me conta o projeto",
    description: "Preenche o formulário e eu recebo tudo organizado pelo WhatsApp.",
    icon: MessageCircle
  },
  {
    title: "Eu monto a estratégia",
    description: "Layout e copy pensados para transmitir confiança e gerar mais pedidos de orçamento.",
    icon: Target
  },
  {
    title: "Site no ar em até 3 dias",
    description: "Você recebe o projeto pronto para receber clientes e fechar mais negócios.",
    icon: Rocket
  }
];

export function TrustMarqueeSection() {
  return (
    <SectionShell className="py-4 md:py-6">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(7,14,26,0.72),rgba(7,14,26,0.4))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_24px_60px_-40px_rgba(0,0,0,0.82)] backdrop-blur-[16px] md:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,192,255,0.12),transparent_36%)]" />
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(126,192,255,0.18),rgba(255,255,255,0.32),rgba(126,192,255,0.18),transparent)]" />
            <div className="pointer-events-none absolute left-10 top-8 h-24 w-24 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-4 right-10 h-24 w-24 rounded-full bg-accentSoft/10 blur-3xl" />

            <div className="relative mb-4 flex items-center justify-between gap-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[rgba(188,210,232,0.62)]">
                Etapas simples para tirar seu projeto do papel
              </p>
              <div className="hidden rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-accentSoft shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_20px_rgba(126,192,255,0.06)] md:inline-flex">
                Como funciona
              </div>
            </div>

            <div className="relative grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === steps.length - 1;

                return (
                  <>
                    <article
                      key={step.title}
                      className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.06] bg-[rgba(255,255,255,0.03)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_18px_40px_-30px_rgba(0,0,0,0.65)] backdrop-blur-[12px] transition duration-300 hover:border-[rgba(126,192,255,0.24)] hover:bg-[rgba(11,22,42,0.5)] hover:shadow-[0_20px_50px_-30px_rgba(78,161,255,0.22),inset_0_1px_0_rgba(255,255,255,0.05)]"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_38%)] opacity-80" />
                      <div className="pointer-events-none absolute -right-6 top-0 h-20 w-20 rounded-full bg-accentSoft/10 blur-2xl transition duration-300 group-hover:bg-accentSoft/16" />

                      <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/15 bg-[radial-gradient(circle_at_30%_30%,rgba(126,192,255,0.16),rgba(14,24,40,0.92))] text-accentSoft shadow-[inset_0_1px_10px_rgba(126,192,255,0.08),0_0_24px_rgba(126,192,255,0.08)] transition duration-300 group-hover:border-accentSoft/30 group-hover:text-white group-hover:shadow-[inset_0_1px_10px_rgba(126,192,255,0.12),0_0_32px_rgba(126,192,255,0.14)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="relative mt-4 font-display text-xl text-white">{step.title}</h3>
                      <p className="relative mt-3 text-sm leading-relaxed text-textMuted md:text-base">{step.description}</p>
                    </article>

                    {!isLast ? (
                      <div
                        key={`${step.title}-connector`}
                        aria-hidden="true"
                        className="flex items-center justify-center text-accentSoft/60 max-md:hidden"
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-px w-8 bg-[linear-gradient(90deg,rgba(126,192,255,0.08),rgba(126,192,255,0.42))] shadow-[0_0_12px_rgba(126,192,255,0.12)]" />
                          <MoveRight className="h-4 w-4 drop-shadow-[0_0_10px_rgba(126,192,255,0.18)]" />
                          <div className="h-px w-8 bg-[linear-gradient(90deg,rgba(126,192,255,0.42),rgba(126,192,255,0.08))] shadow-[0_0_12px_rgba(126,192,255,0.12)]" />
                        </div>
                      </div>
                    ) : null}
                  </>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
