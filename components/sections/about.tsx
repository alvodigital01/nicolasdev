import Image from "next/image";
import { Bolt, CalendarDays, CircleCheckBig } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionShell } from "../ui/section-shell";

const credentials = [
  {
    label: "+10 projetos entregues",
    icon: Bolt
  },
  {
    label: "Prazo médio de 3 dias",
    icon: CalendarDays
  },
  {
    label: "100% dos clientes indicam",
    icon: CircleCheckBig
  }
];

export function AboutSection() {
  return (
    <SectionShell id="sobre" className="py-16 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[rgba(255,255,255,0.02)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_24px_60px_-40px_rgba(0,0,0,0.82)] backdrop-blur-[16px]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_32%)]" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(7,14,26,0.6)]">
              <Image
                src="/images/nicolasfotosobremesa.png"
                alt="Nicolas Lucas, desenvolvedor web"
                width={400}
                height={500}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-white/15 bg-white/[0.04] px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accentSoft">
                Quem faz
              </span>
              <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                Dev focado em resultado, não em enrolação.
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-textMuted md:text-base">
                Sou Nicolas Lucas, desenvolvedor web com mais de 1 ano de experiência entregando sites e landing pages para negócios reais. Já entreguei mais de 10 projetos com foco em clareza, conversão e prazo.
              </p>
              <p className="text-sm leading-relaxed text-textMuted md:text-base">
                Não trabalho com template genérico, nem entrego site bonito que não vende. Cada página que crio é pensada para o negócio do cliente, do copy ao CTA.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-white/72">
              {credentials.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                    <Icon className="h-4 w-4 text-accentSoft" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}


