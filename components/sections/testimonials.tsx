import { testimonials } from "@/data/site";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionShell } from "../ui/section-shell";

export function TestimonialsSection() {
  return (
    <SectionShell id="depoimentos">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Prova social"
            title="Empresas que fortaleceram sua marca com uma presença digital profissional"
            description="Estrutura pronta para inserir depoimentos reais e capturas de feedback de clientes do Instagram e WhatsApp."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <p className="text-sm leading-relaxed text-[#d6e6ff]">"{item.quote}"</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-textMuted">{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}