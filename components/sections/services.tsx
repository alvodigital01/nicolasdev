"use client";

import Link from "next/link";
import { MouseEvent } from "react";
import { ArrowRight, LayoutTemplate, Megaphone, Rocket } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionShell } from "../ui/section-shell";

const offers = [
  {
    title: "Landing pages para anúncios",
    description: "Páginas estratégicas para transformar clique em lead, conversa ou pedido de orçamento.",
    detail: "Ideal para quem roda anúncios e quer transformar clique em conversa.",
    icon: Rocket,
    href: "#cta"
  },
  {
    title: "Sites comerciais para serviços",
    description: "Sites pensados para valorizar sua oferta, acelerar a decisão e gerar mais pedidos.",
    detail: "Perfeito para quem quer passar mais confiança e justificar um preço maior.",
    icon: LayoutTemplate,
    href: "#cta"
  },
  {
    title: "Páginas de vendas e captura",
    description: "Blocos criados para aumentar desejo, reduzir objeção e puxar o visitante para a ação.",
    detail: "Indicado para lançamentos, infoprodutos ou ofertas que precisam converter direto.",
    icon: Megaphone,
    href: "#cta"
  }
];

export function ServicesSection() {
  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--spotlight-x", `${x}px`);
    card.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <SectionShell id="servicos" className="bg-transparent py-16 md:py-20">
      <Container className="space-y-12">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full border border-white/15 bg-white/[0.04] px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accentSoft">
              Oferta
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Sites feitos para atrair mais pedidos, aumentar seu valor percebido e{" "}
              <span className="bg-[linear-gradient(135deg,#8DD3FF_0%,#F4FBFF_55%,#9FD8FF_100%)] bg-clip-text text-transparent">
                ajudar você a faturar mais
              </span>
              .
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-textMuted md:text-base">
              Seu site não pode só existir. Ele precisa vender sua oferta, transmitir confiança rápido e fazer mais gente chegar pronta para pedir orçamento.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {offers.map((offer, index) => {
            const Icon = offer.icon;

            return (
              <Reveal key={offer.title} delay={index * 0.07}>
                <article
                  onMouseMove={handlePointerMove}
                  className="group relative isolate overflow-hidden rounded-[30px] border border-white/[0.05] bg-[rgba(255,255,255,0.02)] p-7 backdrop-blur-[16px] transition-all duration-400 hover:-translate-y-2 hover:border-[rgba(59,130,246,0.4)] hover:shadow-[0_24px_70px_-32px_rgba(59,130,246,0.45)]"
                  style={{
                    ["--spotlight-x" as string]: "50%",
                    ["--spotlight-y" as string]: "50%"
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[30px] opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(420px circle at var(--spotlight-x) var(--spotlight-y), rgba(126,192,255,0.18), transparent 42%)" }} />
                  <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_32%)] opacity-80" />

                  <div className="relative flex h-full flex-col">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-[rgba(38,73,126,0.3)] text-accentSoft shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-display text-[1.65rem] leading-tight text-white">{offer.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-textMuted md:text-base">{offer.description}</p>
                    <p className="mt-3 text-xs leading-relaxed text-white/60 md:text-sm">{offer.detail}</p>

                    <Link href={offer.href} className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55 transition duration-300 group-hover:text-accentSoft">
                      Quero vender mais
                      <ArrowRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1" />
                    </Link>
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
