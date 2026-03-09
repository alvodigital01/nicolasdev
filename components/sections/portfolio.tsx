"use client";

import Image from "next/image";
import { projects, ProjectCategory } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionShell } from "../ui/section-shell";

const categories: Array<ProjectCategory | "Todos"> = ["Todos", "Landing Page", "Institucional", "Portfólio", "Conversão"];

export function PortfolioSection() {
  const [active, setActive] = useState<(typeof categories)[number]>("Todos");

  const filteredProjects = useMemo(() => {
    if (active === "Todos") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <SectionShell id="portfolio">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Portfólio em destaque"
            title="Projetos que elevam presença digital e destravam novas oportunidades"
            description="Cada projeto abaixo foi pensado para unir sofisticação visual, clareza estratégica e foco em conversão."
          />
        </Reveal>

        <Reveal delay={0.08} className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                active === category
                  ? "border-accent/60 bg-accent/15 text-accentSoft"
                  : "border-white/15 bg-white/[0.03] text-textMuted hover:border-white/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
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
                Projeto disponível sob solicitação <ArrowUpRight className="h-4 w-4" />
              </span>
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent/0 transition group-hover:ring-accent/25" />
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </SectionShell>
  );
}
