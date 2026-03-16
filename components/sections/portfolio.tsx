"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionShell } from "../ui/section-shell";

const featuredProjects = [
  {
    name: "Aurora Odonto",
    category: "Institucional",
    description: "Clinica premium com pagina mais limpa, confiavel e orientada a agendamento.",
    metrics: "+38% em contatos no primeiro mes",
    accent: "from-sky-400/30 via-cyan-300/10 to-transparent",
    href: "#cta"
  },
  {
    name: "DR Drywall",
    category: "Institucional",
    description: "Site premium para drywall residencial e corporativo, com foco em autoridade visual e pedido de orcamento.",
    metrics: "Hero com CTA direto para orcamento",
    accent: "from-white/12 via-stone-300/10 to-transparent",
    href: "https://drywal-dr.vercel.app",
    variant: "drywall" as const
  },
  {
    name: "Luare Recreacoes",
    category: "Institucional",
    description: "Site comercial com CTA forte no WhatsApp, organizacao clara dos servicos e linguagem voltada para eventos.",
    metrics: "Hero com foco direto em orcamento",
    accent: "from-[#ffb320]/20 via-[#b9dfff]/22 to-transparent",
    href: "https://luarerecreacoes.com.br/",
    variant: "luare" as const
  }
];

function ProjectMockup({ accent, variant = "default" }: { accent: string; variant?: "default" | "luare" | "drywall" }) {
  if (variant === "luare") {
    return (
      <div className="relative h-52 overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#f7fbff_0%,#eef6ff_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
        <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
        <div className="absolute left-4 right-4 top-4 flex h-9 items-center justify-between rounded-full bg-white px-4 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
          <div className="h-4 w-16 rounded-full bg-[#0f4aa3]/15" />
          <div className="flex gap-2">
            <div className="h-3 w-10 rounded-full bg-[#0f4aa3]/10" />
            <div className="h-3 w-12 rounded-full bg-[#ffb320]/45" />
          </div>
        </div>
        <div className="absolute bottom-5 left-5 top-16 w-[47%] rounded-[24px] bg-white p-4 shadow-[0_18px_48px_rgba(37,99,235,0.12)]">
          <div className="h-5 w-24 rounded-full bg-[#d9e9ff]" />
          <div className="mt-3 h-6 w-36 rounded-full bg-[#0f4aa3]/14" />
          <div className="mt-3 space-y-2">
            <div className="h-3 w-full rounded-full bg-[#7c97bf]/18" />
            <div className="h-3 w-[88%] rounded-full bg-[#7c97bf]/18" />
            <div className="h-3 w-[72%] rounded-full bg-[#7c97bf]/18" />
          </div>
          <div className="mt-4 h-9 w-40 rounded-full bg-[#ffb320] shadow-[0_10px_30px_rgba(255,179,32,0.35)]" />
        </div>
        <div className="absolute bottom-5 right-5 top-10 w-[40%] rounded-[28px] bg-white p-3 shadow-[0_18px_48px_rgba(37,99,235,0.12)]">
          <div className="h-[72%] rounded-[22px] bg-[linear-gradient(135deg,#6ab7ff_0%,#d3ecff_32%,#9fd36a_100%)]" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-7 rounded-2xl bg-[#e8f1ff]" />
            <div className="h-7 rounded-2xl bg-[#e8f1ff]" />
            <div className="h-7 rounded-2xl bg-[#e8f1ff]" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "drywall") {
    return (
      <div className="relative h-52 overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#050608_0%,#0d1015_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
        <div className="absolute inset-x-0 top-0 h-11 border-b border-white/8 bg-black/40" />
        <div className="absolute left-4 top-3 flex items-center gap-3">
          <div className="h-6 w-6 rounded-full border border-white/10 bg-white/5" />
          <div>
            <div className="h-3 w-20 rounded-full bg-white/75" />
            <div className="mt-1 h-2 w-14 rounded-full bg-white/25" />
          </div>
        </div>
        <div className="absolute right-4 top-3 flex gap-2">
          <div className="h-3 w-10 rounded-full bg-white/10" />
          <div className="h-3 w-12 rounded-full bg-white/10" />
          <div className="h-3 w-16 rounded-full bg-white/10" />
        </div>
        <div className="absolute left-5 top-16 w-[44%]">
          <div className="h-3 w-32 rounded-full bg-white/35" />
          <div className="mt-4 h-8 w-44 rounded-full bg-white/85" />
          <div className="mt-3 h-8 w-40 rounded-full bg-white/80" />
          <div className="mt-3 h-8 w-48 rounded-full bg-white/80" />
          <div className="mt-5 space-y-2">
            <div className="h-2.5 w-full rounded-full bg-white/18" />
            <div className="h-2.5 w-[92%] rounded-full bg-white/18" />
            <div className="h-2.5 w-[78%] rounded-full bg-white/18" />
          </div>
          <div className="mt-5 flex gap-3">
            <div className="h-9 w-32 rounded-full bg-[#d9dde5]" />
            <div className="h-9 w-28 rounded-full border border-white/12 bg-white/[0.03]" />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 top-14 w-[39%] rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,#d8d7d4_0%,#8d8a84_100%)] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.35)]">
          <div className="h-full rounded-[20px] bg-[linear-gradient(135deg,#c8c6c1_0%,#8e8b84_45%,#65615b_100%)]" />
          <div className="absolute bottom-3 left-3 right-3 rounded-[18px] bg-black/70 p-3 backdrop-blur-sm">
            <div className="h-3 w-28 rounded-full bg-white/75" />
            <div className="mt-2 h-2.5 w-full rounded-full bg-white/20" />
            <div className="mt-1.5 h-2.5 w-[82%] rounded-full bg-white/20" />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 grid h-12 grid-cols-4 border-t border-white/8 bg-black/35">
          <div className="border-r border-white/8" />
          <div className="border-r border-white/8" />
          <div className="border-r border-white/8" />
          <div />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-52 overflow-hidden rounded-2xl bg-[#08111d] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute inset-x-6 top-5 h-5 rounded-full bg-white/[0.06]" />
      <div className="absolute left-6 top-16 h-24 w-[44%] rounded-2xl bg-white/[0.08]" />
      <div className="absolute right-6 top-16 h-12 w-[34%] rounded-2xl bg-white/[0.06]" />
      <div className="absolute right-6 top-[8.5rem] h-6 w-[26%] rounded-full bg-accent/70" />
      <div className="absolute bottom-5 left-6 right-6 grid grid-cols-3 gap-3">
        <div className="h-16 rounded-2xl bg-white/[0.06]" />
        <div className="h-16 rounded-2xl bg-white/[0.05]" />
        <div className="h-16 rounded-2xl bg-white/[0.07]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(4,8,16,0.18))]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(2,6,12,0.35)]" />
    </div>
  );
}

export function PortfolioSection() {
  return (
    <SectionShell id="portfolio" className="py-16 md:py-20">
      <Container className="space-y-10">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full border border-white/15 bg-white/[0.04] px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accentSoft">
              Projetos em destaque
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Exemplos de paginas pensadas para gerar mais valor percebido e{" "}
              <span className="bg-[linear-gradient(135deg,#8DD3FF_0%,#F4FBFF_55%,#9FD8FF_100%)] bg-clip-text text-transparent">
                trazer mais pedidos
              </span>
              .
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-textMuted md:text-base">
              Cada projeto mostra como design, oferta e CTA trabalham juntos para transformar visita em interesse comercial real.
            </p>
          </div>
        </Reveal>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const isExternal = project.href.startsWith("http");

            return (
              <Reveal key={project.name} delay={index * 0.06}>
                <Link
                  href={project.href}
                  className="group block h-full"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer noopener" : undefined}
                >
                  <motion.article
                    layout
                    whileHover={{ y: -8, rotateX: 1.4, rotateY: -1.4 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-full overflow-hidden rounded-3xl border border-white/[0.05] bg-[rgba(255,255,255,0.02)] p-5 backdrop-blur-[16px] [transform-style:preserve-3d] transition duration-300 group-hover:border-accent/40 group-hover:shadow-[0_24px_70px_-32px_rgba(59,130,246,0.28),inset_0_-1px_0_rgba(126,192,255,0.4)]"
                    style={{ perspective: 1200 }}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_35%)] opacity-90" />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(126,192,255,0.16),transparent_38%)]" />

                    <div className="relative overflow-hidden rounded-2xl transition duration-700 group-hover:scale-[1.01] group-hover:brightness-110">
                      <div className="transition duration-700 ease-out group-hover:scale-[1.05]">
                        <ProjectMockup accent={project.accent} variant={project.variant} />
                      </div>
                    </div>

                    <div className="relative mt-5 flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl text-white">{project.name}</h3>
                      <span className="rounded-full border border-white/12 bg-transparent px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/60">
                        {project.category}
                      </span>
                    </div>

                    <p className="relative mt-3 text-sm leading-relaxed text-textMuted md:text-base">{project.description}</p>

                    <div className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-[rgba(61,182,255,0.08)] px-3 py-1.5 text-sm font-medium text-[#9ddbff] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <TrendingUp className="h-4 w-4" />
                      <span className="bg-[linear-gradient(135deg,#8DD3FF_0%,#DDF4FF_100%)] bg-clip-text text-transparent">
                        {project.metrics}
                      </span>
                    </div>

                    <div className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/65 transition duration-300 group-hover:text-accentSoft">
                      Visitar site
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            );
          })}
        </motion.div>
      </Container>
    </SectionShell>
  );
}
