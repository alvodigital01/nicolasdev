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
    description: "Clínica premium com página mais limpa, confiável e orientada a agendamento.",
    metrics: "+38% em contatos no primeiro mês",
    accent: "from-sky-400/30 via-cyan-300/10 to-transparent",
    href: "#cta"
  },
  {
    name: "Matriz Fitness",
    category: "Landing Page",
    description: "Campanha digital com oferta forte e leitura rápida para tráfego pago.",
    metrics: "Lead 29% mais barato",
    accent: "from-blue-400/30 via-indigo-300/10 to-transparent",
    href: "#cta"
  },
  {
    name: "Luna Arquitetura",
    category: "Portfólio",
    description: "Portfólio autoral com percepção premium e narrativa visual mais valorizada.",
    metrics: "Permanência 2.1x maior",
    accent: "from-cyan-300/24 via-slate-200/8 to-transparent",
    href: "#cta"
  }
];

function ProjectMockup({ accent }: { accent: string }) {
  return (
    <div className="relative h-52 overflow-hidden rounded-2xl bg-[#08111d] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute inset-x-6 top-5 h-5 rounded-full bg-white/[0.06]" />
      <div className="absolute left-6 top-16 h-24 w-[44%] rounded-2xl bg-white/[0.08]" />
      <div className="absolute right-6 top-16 h-12 w-[34%] rounded-2xl bg-white/[0.06]" />
      <div className="absolute right-6 top-34 h-6 w-[26%] rounded-full bg-accent/70" />
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
              Menos volume, mais prova visual.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-textMuted md:text-base">
              Em vez de uma galeria longa, a home mostra apenas alguns exemplos que deixam claro o nível de acabamento e foco comercial.
            </p>
          </div>
        </Reveal>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <Link href={project.href} className="group block h-full">
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
                      <ProjectMockup accent={project.accent} />
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
                    Referência sob solicitação
                    <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </motion.div>
      </Container>
    </SectionShell>
  );
}