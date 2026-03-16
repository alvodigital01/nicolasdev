import Image from "next/image";
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
            title="Seu site pode aumentar seu valor percebido antes mesmo da primeira conversa"
            description="Sou Nicolas Lucas, desenvolvedor web focado em criar paginas que fazem sua marca parecer mais forte, transmitir confianca e ajudar seu negocio a vender melhor."
          />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-white/10 bg-panel/65 p-4 shadow-soft backdrop-blur-md">
            <div className="grid gap-5 md:grid-cols-[0.72fr_1.28fr] md:items-center">
              <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/10 md:max-w-none">
                <Image
                  src="/images/sobre-nicolas.jpg"
                  alt="Nicolas Lucas em ambiente de trabalho"
                  width={1600}
                  height={1600}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 240px, 28vw"
                />
              </div>
              <p className="text-sm leading-relaxed text-textMuted md:text-base">
                Meu trabalho une direcao visual premium, oferta bem apresentada e desenvolvimento moderno para transformar seu site em uma ferramenta de autoridade e vendas. A ideia nao e so ficar bonito, mas fazer o cliente enxergar mais valor e chegar mais pronto para fechar.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
