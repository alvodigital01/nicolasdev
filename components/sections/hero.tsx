"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "../ui/container";
import { PremiumButton } from "../ui/premium-button";

const stats = [
  { value: "1 a 3", label: "dias para entrega" },
  { value: "visual", label: "premium em qualquer tela" },
  { value: "+ vendas", label: "mais impulso para fechar" }
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 360], [0, 36]);
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-20 lg:top-24">
        <Image
          src="/images/fundohero.png"
          alt=""
          fill
          priority
          quality={100}
          unoptimized
          className="object-cover object-[72%_18%] md:object-[74%_20%] lg:object-[76%_22%]"
          sizes="100vw"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-20 lg:top-24 bg-[linear-gradient(90deg,rgba(4,8,16,0.64)_0%,rgba(5,10,19,0.42)_30%,rgba(7,12,22,0.1)_58%,rgba(7,12,22,0.16)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-20 lg:top-24 bg-[radial-gradient(circle_at_18%_26%,rgba(126,192,255,0.08),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(126,192,255,0.06),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-20 lg:top-24 bg-grid-fade [background-size:46px_46px] opacity-[0.04]" />
      <Container className="relative grid gap-10 pb-14 lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-[0.94fr_0.9fr] lg:items-center xl:gap-12">
        <motion.div style={{ y }} className="relative space-y-6 lg:pr-4 xl:space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="hero-pill-border inline-flex rounded-full p-[1px] transition duration-300 hover:scale-[1.02]">
              <div className="glass-surface glass-outline rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-accentSoft">
                Sites para captar mais orçamentos
              </div>
            </div>
          </motion.div>

          <div className="space-y-4 xl:space-y-5">
            <h1 className="max-w-[13ch] font-display text-[clamp(2rem,3.3vw,3.2rem)] font-semibold leading-[0.96] text-white sm:max-w-none">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                Seu site precisa
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                passar confiança
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                e <span className="bg-[linear-gradient(135deg,#8DD3FF_0%,#F4FBFF_55%,#9FD8FF_100%)] bg-clip-text text-transparent">gerar orçamento.</span>
              </motion.span>
            </h1>

            <motion.p
              className="max-w-xl text-[15px] leading-relaxed text-textMuted md:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
            >
              Eu desenvolvo páginas que fortalecem sua imagem, aumentam o valor percebido e geram mais pedidos de orçamento.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.62 }}
          >
            <PremiumButton href="#cta" className="cta-pulse px-7 py-3.5 text-sm md:text-base">
              Pedir orçamento <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </PremiumButton>
            <PremiumButton href="#portfolio" variant="secondary" className="px-7 py-3.5 text-sm md:text-base">
              <MessageCircle className="mr-2 h-4 w-4 text-accentSoft" /> Ver exemplos
            </PremiumButton>
          </motion.div>

          <motion.div
            className="grid max-w-xl gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.72 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-[22px] border border-white/[0.05] bg-[rgba(255,255,255,0.03)] p-4 backdrop-blur-[16px] transition duration-300 hover:-translate-y-1 hover:border-white/[0.09] hover:bg-[rgba(255,255,255,0.08)] hover:shadow-[0_22px_55px_-28px_rgba(78,161,255,0.32)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(126,192,255,0.18),transparent_45%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <p className="relative text-[1.75rem] font-semibold leading-none text-white">{stat.value}</p>
                <p className="relative mt-2 text-sm leading-snug text-textMuted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </Container>
    </section>
  );
}