"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { MouseEvent, useState } from "react";
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
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width;
    const offsetY = (event.clientY - rect.top) / rect.height;
    const rotateY = (offsetX - 0.5) * 12;
    const rotateX = (0.5 - offsetY) * 12;

    setTilt({ rotateX, rotateY });
  };

  const resetTilt = () => setTilt({ rotateX: 0, rotateY: 0 });

  return (
    <section id="inicio" className="relative overflow-hidden pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade [background-size:46px_46px] opacity-[0.14]" />
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

        <motion.div
          className="relative lg:pl-4"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute left-6 top-12 h-32 w-32 rounded-full bg-accent/18 blur-[85px]" />
          <div className="pointer-events-none absolute right-6 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(77,191,255,0.38)_0%,rgba(78,161,255,0.22)_35%,transparent_72%)] blur-[110px]" />

          <div
            className="relative mx-auto w-full max-w-[420px] [perspective:1400px] lg:max-w-[520px] xl:max-w-[560px]"
            onMouseMove={handlePointerMove}
            onMouseLeave={resetTilt}
          >
            <motion.div
              className="relative rounded-[30px] bg-[rgba(255,255,255,0.02)] p-3 shadow-[0_0_60px_rgba(59,130,246,0.18),0_28px_90px_-40px_rgba(0,0,0,0.95)] backdrop-blur-[10px]"
              animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
              transition={{ type: "spring", stiffness: 140, damping: 14, mass: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative h-[420px] overflow-hidden rounded-[26px] bg-[#09111d] sm:h-[470px] lg:h-[520px] xl:h-[560px]" style={{ transform: "translateZ(24px)" }}>
                <Image
                  src="/images/hero-nicolas.png"
                  alt="Nicolas Lucas, desenvolvedor web"
                  width={2160}
                  height={2700}
                  priority
                  quality={100}
                  unoptimized
                  className="h-full w-full object-cover object-top"
                  sizes="(max-width: 1024px) 420px, (max-width: 1440px) 520px, 560px"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,22,0.08),rgba(6,10,18,0.72))]" />
                <div className="pointer-events-none absolute inset-0 rounded-[26px] shadow-[inset_0_0_80px_rgba(3,8,16,0.45)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(to_top,rgba(7,10,18,0.88),transparent)]" />
              </div>

              <div className="floating-glass absolute bottom-5 right-4 z-10 rounded-full border border-white/15 bg-[rgba(10,18,32,0.42)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-accentSoft shadow-[0_18px_45px_-24px_rgba(78,161,255,0.85)] backdrop-blur-2xl sm:right-5">
                Estrutura focada em venda
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}