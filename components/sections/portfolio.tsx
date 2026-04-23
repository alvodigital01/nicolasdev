"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionShell } from "../ui/section-shell";

const featuredProjects = [
  {
    name: "Fred Peças",
    category: "Institucional",
    description: "Site comercial com CTA no WhatsApp, foco em estoque e atendimento para linha 12V e 24V.",
    metrics: "Catálogo e consultoria",
    accent: "from-[#ef4444]/20 via-[#1d4ed8]/16 to-transparent",
    href: "https://fred-pe-as.vercel.app",
    image: "/images/portfolio/fredpecas.gif",
    mobileImage: "/images/projects/fred-pecas.svg",
    alt: "Preview do site Fred Peças"
  },
  {
    name: "DR Drywall",
    category: "Institucional",
    description: "Site premium para drywall residencial e corporativo, com foco em autoridade visual e pedido de orçamento.",
    metrics: "Orçamento direto",
    accent: "from-white/12 via-stone-300/10 to-transparent",
    href: "https://www.drdrywall.online",
    image: "/images/portfolio/drdrywall.gif",
    mobileImage: "/images/projects/dr-drywall.svg",
    alt: "Preview do site DR Drywall"
  },
  {
    name: "Luarê Recreações",
    category: "Institucional",
    description: "Site leve com CTA no WhatsApp e foco em eventos infantis e corporativos.",
    metrics: "WhatsApp em destaque",
    accent: "from-[#ffb320]/20 via-[#b9dfff]/22 to-transparent",
    href: "https://luarerecreacoes.com.br/",
    image: "/images/portfolio/luare.gif",
    mobileImage: "/images/projects/luna-arquitetura.svg",
    alt: "Preview do site Luarê Recreações"
  }
];

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
              Projetos reais, entregues para{" "}
              <span className="bg-[linear-gradient(135deg,#8DD3FF_0%,#F4FBFF_55%,#9FD8FF_100%)] bg-clip-text text-transparent">
                clientes reais
              </span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-textMuted md:text-base">
              Cada site foi desenvolvido para um negócio específico, com foco em clareza, confiança e mais pedidos de orçamento.
            </p>
          </div>
        </Reveal>

        <motion.div layout className="grid gap-5 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const isExternal = project.href.startsWith("http");

            return (
              <Reveal key={project.name} className="h-full" delay={index * 0.06}>
                <div className="group block h-full">
                  <motion.article
                    layout
                    whileHover={{ y: -8, rotateX: 1.4, rotateY: -1.4 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.05] bg-[rgba(255,255,255,0.02)] p-5 backdrop-blur-[16px] [transform-style:preserve-3d] transition duration-300 group-hover:border-accent/40 group-hover:shadow-[0_24px_70px_-32px_rgba(59,130,246,0.28),inset_0_-1px_0_rgba(126,192,255,0.4)]"
                    style={{ perspective: 1200 }}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_35%)] opacity-90" />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(126,192,255,0.16),transparent_38%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="relative overflow-hidden rounded-2xl transition duration-700 group-hover:scale-[1.01] group-hover:brightness-110">
                      <div className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-br ${project.accent}`} />

                      <Image
                        src={project.mobileImage}
                        alt={project.alt}
                        width={1200}
                        height={630}
                        className="h-52 w-full object-cover object-center md:hidden"
                      />

                      <Image
                        src={project.image}
                        alt={project.alt}
                        width={1200}
                        height={630}
                        unoptimized
                        className="hidden h-52 w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.05] md:block"
                      />

                      <div className="absolute bottom-3 right-3 z-20 rounded-full border border-white/12 bg-[rgba(8,14,24,0.72)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 md:hidden">
                        Preview leve no mobile
                      </div>
                    </div>

                    <div className="relative mt-5 flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl text-white">{project.name}</h3>
                      <span className="rounded-full border border-white/12 bg-transparent px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/60">
                        {project.category}
                      </span>
                    </div>

                    <p
                      className="relative mt-3 min-h-[72px] text-sm leading-relaxed text-textMuted md:min-h-[78px] md:text-base"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden"
                      }}
                    >
                      {project.description}
                    </p>

                    <div className="relative mt-4 inline-flex max-w-full items-center gap-2 rounded-full bg-[rgba(61,182,255,0.08)] px-3 py-1.5 text-sm font-medium text-[#9ddbff] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <TrendingUp className="h-4 w-4 shrink-0" />
                      <span className="truncate whitespace-nowrap bg-[linear-gradient(135deg,#8DD3FF_0%,#DDF4FF_100%)] bg-clip-text text-transparent">
                        {project.metrics}
                      </span>
                    </div>

                    <Link
                      href={project.href}
                      className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/65 transition duration-300 hover:text-accentSoft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8dd3ff] group-hover:text-accentSoft"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer noopener" : undefined}
                    >
                      Visitar site
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </motion.article>
                </div>
              </Reveal>
            );
          })}
        </motion.div>
      </Container>
    </SectionShell>
  );
}
