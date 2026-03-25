import Image from "next/image";
import davidRuanAvatar from "../../davidruandep.png";
import tioMiojoAvatar from "../../tiomiojodep.png";
import lucasFredAvatar from "../../lucasfreddep.png";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionShell } from "../ui/section-shell";

type Testimonial = {
  name: string;
  business: string;
  quote: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Lucas Alexandre",
    business: "Fred Peças Elétricas",
    quote:
      "Agora ficou muito mais fácil mostrar nossas peças e passar confiança no atendimento. O cliente entra no site, entende melhor o que a empresa faz e já chama no WhatsApp para pedir orçamento.",
    avatar: lucasFredAvatar.src
  },
  {
    name: "David Ruan",
    business: "DR Drywall",
    quote:
      "O site deixou nossa empresa com uma imagem bem mais profissional. Ficou mais fácil passar confiança no primeiro contato e receber pedidos de orçamento.",
    avatar: davidRuanAvatar.src
  },
  {
    name: "Tio Miojo",
    business: "Luarê Recreações",
    quote:
      "Ficou muito mais fácil mostrar nossos eventos infantis e corporativos sem depender só do Instagram. O site passa confiança e ajuda bastante quando alguém pede o link.",
    avatar: tioMiojoAvatar.src
  }
];

export function TestimonialsSection() {
  return (
    <SectionShell id="depoimentos" className="py-16 md:py-20">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Quem já confia"
            title="O que dizem os clientes"
            description="Negócios reais que apostaram em um site profissional."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-[28px] border border-[rgba(126,192,255,0.12)] bg-[linear-gradient(180deg,rgba(10,18,32,0.92),rgba(6,12,22,0.84))] p-6 shadow-[0_0_0_1px_rgba(126,192,255,0.04),inset_0_1px_0_rgba(255,255,255,0.05),0_24px_60px_-36px_rgba(0,0,0,0.9)] backdrop-blur-[16px] transition duration-300 hover:-translate-y-1 hover:border-accentSoft/28 hover:shadow-[0_0_0_1px_rgba(126,192,255,0.08),0_28px_70px_-34px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="pointer-events-none absolute -left-10 top-0 h-28 w-28 rounded-full bg-accent/12 blur-3xl transition duration-500 group-hover:bg-accent/18" />
                <div className="pointer-events-none absolute right-0 top-10 h-24 w-24 rounded-full bg-accentSoft/10 blur-3xl transition duration-500 group-hover:bg-accentSoft/16" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_38%)]" />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-2 font-display text-[5.5rem] italic leading-none text-accentSoft/[0.08] transition duration-300 group-hover:text-accentSoft/[0.14]"
                >
                  “
                </span>

                <div className="relative flex items-center gap-4">
                  <Image
                    src={item.avatar ?? `https://i.pravatar.cc/60?img=${index + 1}`}
                    alt={`Foto de ${item.name}, ${item.business}`}
                    width={60}
                    height={60}
                    className="h-[60px] w-[60px] rounded-full border border-white/10 object-cover"
                  />

                  <div>
                    <p className="font-display text-lg text-white">{item.name}</p>
                    <p className="text-sm text-white/70">{item.business}</p>
                  </div>
                </div>

                <div className="relative mt-6 border-t border-white/8 pt-5">
                  <p className="text-[15px] italic leading-7 text-[#d8dee7]">“{item.quote}”</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
