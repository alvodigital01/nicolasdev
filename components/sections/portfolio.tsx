"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionShell } from "../ui/section-shell";

const featuredProjects = [
  {
    name: "Fred Peças",
    category: "Institucional",
    description: "Vitrine técnica para peças elétricas automotivas, com leitura rápida da atuação em linhas 12V e 24V e caminho direto para cotação.",
    accent: "from-[#ef4444]/20 via-[#1d4ed8]/16 to-transparent",
    href: "https://www.fredpecasetricas.online",
    image: "/images/portfolio/fredpecas.webp",
    mobileImage: "/images/portfolio/sitefred.webp",
    alt: "Preview do site Fred Peças"
  },
  {
    name: "DR Drywall",
    category: "Institucional",
    description: "Presença digital mais premium para serviços de drywall, destacando aplicações em obras residenciais e comerciais antes do pedido de orçamento.",
    accent: "from-white/12 via-stone-300/10 to-transparent",
    href: "https://www.drdrywall.online",
    image: "/images/portfolio/drdrywall.webp",
    mobileImage: "/images/portfolio/sitedr.webp",
    alt: "Preview do site DR Drywall"
  },
  {
    name: "Luarê Recreações",
    category: "Institucional",
    description: "Página com linguagem leve para festas e eventos infantis, organizando a proposta da recreação e passando segurança para pais e empresas.",
    accent: "from-[#ffb320]/20 via-[#b9dfff]/22 to-transparent",
    href: "https://luarerecreacoes.com.br/",
    image: "/images/portfolio/luare.webp",
    mobileImage: "/images/portfolio/siteluare.webp",
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
              Portfólio
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Interfaces que transformam visita em{" "}
              <span className="bg-[linear-gradient(135deg,#8DD3FF_0%,#F4FBFF_55%,#9FD8FF_100%)] bg-clip-text text-transparent">
                pedido de orçamento
              </span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-textMuted md:text-base">
              Cada site abaixo foi pensado para resolver um problema comercial diferente: explicar a oferta, reduzir dúvidas e deixar o contato fácil.
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
                        className="h-52 w-full object-cover object-top md:hidden"
                      />

                      <Image
                        src={project.image}
                        alt={project.alt}
                        width={1200}
                        height={630}
                        unoptimized
                        className="hidden h-52 w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.05] md:block"
                      />
                    </div>

                    <div className="relative mt-5 flex flex-1 flex-col">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <h3 className="font-display text-xl text-white">{project.name}</h3>
                        <span className="w-fit rounded-full border border-white/12 bg-transparent px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/60">
                          {project.category}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-textMuted md:text-base">
                        {project.description}
                      </p>

                      <Link
                        href={project.href}
                        className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-medium text-white/65 transition duration-300 hover:text-accentSoft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8dd3ff] group-hover:text-accentSoft"
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer noopener" : undefined}
                      >
                        Visitar site
                        <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </div>
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
