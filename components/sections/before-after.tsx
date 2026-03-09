import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionShell } from "../ui/section-shell";

export function BeforeAfterSection() {
  return (
    <SectionShell id="transformacao" className="py-14">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Transformação"
            title="Antes parecia amador. Depois, presença digital de marca forte."
            description="Uma estrutura visual estratégica muda como seu negócio é percebido, aumentando confiança e intenção de compra."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-3xl border border-red-300/20 bg-red-300/5 p-6">
              <span className="text-xs uppercase tracking-[0.2em] text-red-200/80">Antes</span>
              <h3 className="mt-3 font-display text-2xl text-white">Presença genérica e sem confiança</h3>
              <ul className="mt-4 space-y-2 text-sm text-textMuted">
                <li>Visual comum que não diferencia da concorrência</li>
                <li>Comunicação sem estratégia para vender</li>
                <li>Experiência fraca no celular e baixa retenção</li>
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="rounded-3xl border border-accent/30 bg-accent/10 p-6 shadow-glow">
              <span className="text-xs uppercase tracking-[0.2em] text-accentSoft">Depois</span>
              <h3 className="mt-3 font-display text-2xl text-white">Imagem profissional que gera autoridade</h3>
              <ul className="mt-4 space-y-2 text-sm text-[#d6e6ff]">
                <li>Design premium alinhado ao posicionamento da marca</li>
                <li>Narrativa e estrutura pensadas para conversão</li>
                <li>Experiência fluida e confiável em todos os dispositivos</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </Container>
    </SectionShell>
  );
}

