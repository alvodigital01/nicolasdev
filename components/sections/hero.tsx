"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "../ui/container";
import { PremiumButton } from "../ui/premium-button";

const headline = ["Seu negócio merece", "um site à altura", "da sua marca."];

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section id="inicio" className="relative overflow-hidden pt-32">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade [background-size:46px_46px] opacity-25" />
      <Container className="relative grid items-center gap-14 pb-24 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y }} className="space-y-8">
          <div className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-accentSoft">
            Desenvolvimento web premium
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.02] text-white sm:text-5xl md:text-6xl">
            {headline.map((line, index) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="max-w-xl text-base leading-relaxed text-textMuted md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.48 }}
          >
            Eu transformo negócios em presença digital profissional com páginas pensadas para conversão, autoridade e crescimento.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.62 }}
          >
            <PremiumButton href="#cta">
              Pedir orçamento <ArrowRight className="ml-2 h-4 w-4" />
            </PremiumButton>
            <PremiumButton href="#portfolio" variant="secondary">
              <Play className="mr-2 h-4 w-4" /> Ver projetos
            </PremiumButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-accentSoft/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel/70 p-4 shadow-soft backdrop-blur-xl">
            <div className="rounded-2xl border border-white/10 bg-background p-5">
              <div className="mb-4 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="space-y-4">
                <div className="h-36 rounded-xl border border-accent/30 bg-gradient-to-br from-accent/25 to-transparent p-4">
                  <div className="h-3 w-1/3 rounded-full bg-white/60" />
                  <div className="mt-3 h-2 w-3/4 rounded-full bg-white/25" />
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-white/20" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 rounded-xl border border-white/10 bg-white/[0.03]" />
                  <div className="h-24 rounded-xl border border-white/10 bg-white/[0.03]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

