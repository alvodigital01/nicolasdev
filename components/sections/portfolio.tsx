"use client";

import Image from "next/image";
import { projects } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionShell } from "../ui/section-shell";

export function PortfolioSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <SectionShell id="portfolio">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Projetos em destaque"
            title="Menos volume, mais prova visual"
            description="Em vez de uma galeria longa, a home mostra apenas alguns exemplos que deixam claro o nivel de acabamento e foco comercial."
          />
        </Reveal>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, rotateX: 1.6, rotateY: -1.6 }}
              className="group relative rounded-2xl border border-white/10 bg-panel/70 p-5 shadow-soft [transform-style:preserve-3d] transition duration-300"
              style={{ perspective: 1000 }}
            >
              <div className="mb-4 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={project.image}
                  alt={`Mockup do projeto ${project.name}`}
                  width={1200}
                  height={800}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-lg text-white">{project.name}</h3>
                <span className="rounded-full border border-white/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-textMuted">
                  {project.category}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-textMuted">{project.description}</p>
              <p className="mt-4 text-sm font-medium text-accentSoft">{project.metrics}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-textMuted">
                Referencia sob solicitacao <ArrowUpRight className="h-4 w-4" />
              </span>
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent/0 transition group-hover:ring-accent/25" />
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </SectionShell>
  );
}
