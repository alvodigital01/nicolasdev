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
  const mesAtual = new Date().toLocaleString("pt-BR", { month: "long" });
  const mesCapitalizado = mesAtual.charAt(0).toUpperCase() + mesAtual.slice(1);

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-24 lg:pt-28">
      <Container className="relative grid gap-8 pb-10 sm:gap-10 sm:pb-14 lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-[0.94fr_0.9fr] lg:items-center xl:gap-12">
        <motion.div style={{ y }} className="relative space-y-5 sm:space-y-6 lg:pr-4 xl:space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="inline-flex max-w-full rounded-full border border-[rgba(126,192,255,0.34)] bg-[linear-gradient(180deg,rgba(126,192,255,0.18),rgba(78,161,255,0.08))] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d9eeff] shadow-[0_0_0_1px_rgba(126,192,255,0.08),0_12px_30px_-18px_rgba(78,161,255,0.55)] transition duration-300 hover:scale-[1.02] sm:text-[11px] sm:tracking-[0.24em]">
              Lucre mais com um site que vende
            </div>
          </motion.div>

          <div className="space-y-3 sm:space-y-4 xl:space-y-5">
            <h1 className="font-display font-semibold text-white">
              <span className="block max-w-[10ch] text-[clamp(2.45rem,11.5vw,3.2rem)] leading-[0.92] sm:hidden">
                Lucre mais com um site
                <span className="block bg-[linear-gradient(135deg,#8DD3FF_0%,#F4FBFF_55%,#9FD8FF_100%)] bg-clip-text text-transparent">
                  profissional
                </span>
                que vende.
              </span>
              <span className="hidden sm:block sm:max-w-none sm:text-[clamp(2rem,3.3vw,3.2rem)] sm:leading-[0.96]">
                <motion.span className="block" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
                  Lucre muito mais
                </motion.span>
                <motion.span className="block" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}>
                  com um site
                </motion.span>
                <motion.span className="block" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}>
                  <span className="bg-[linear-gradient(135deg,#8DD3FF_0%,#F4FBFF_55%,#9FD8FF_100%)] bg-clip-text text-transparent">{"profissional e estratégico."}</span>
                </motion.span>
              </span>
            </h1>

            <motion.p className="max-w-[32ch] text-base leading-relaxed text-textMuted sm:max-w-xl sm:text-[15px] md:text-lg" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.45 }}>
              Eu desenvolvo páginas que fortalecem sua imagem, aumentam o valor percebido e geram mais pedidos de orçamento.
            </motion.p>
          </div>

          <motion.div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:gap-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.62 }}>
            <div className="w-full">
              <div className="inline-flex w-full rounded-[22px] border border-[rgba(248,113,113,0.26)] bg-[linear-gradient(180deg,rgba(127,29,29,0.22),rgba(120,53,15,0.14))] px-4 py-3 text-[13px] font-medium leading-snug text-[#ffd8d1] shadow-[0_10px_30px_-20px_rgba(248,113,113,0.55)] sm:w-auto sm:rounded-full sm:px-4 sm:py-2 sm:text-xs">
                <span aria-hidden="true" className="mr-2">🔥</span>
                Apenas 4 vagas abertas para {mesCapitalizado} - agenda quase cheia.
              </div>
            </div>
            <PremiumButton href="#cta" className="cta-pulse w-full px-7 py-3.5 text-base sm:w-auto sm:text-sm md:text-base">
              Pedir orçamento <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </PremiumButton>
            <PremiumButton href="#portfolio" variant="secondary" className="w-full px-7 py-3.5 text-base sm:w-auto sm:text-sm md:text-base">
              <MessageCircle className="mr-2 h-4 w-4 text-accentSoft" /> Ver projetos reais
            </PremiumButton>
          </motion.div>

          <motion.div className="hidden max-w-xl gap-3 sm:grid sm:grid-cols-3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.72 }}>
            {stats.map((stat) => (
              <div key={stat.label} className="group relative overflow-hidden rounded-[24px] border border-[rgba(126,192,255,0.14)] bg-[linear-gradient(180deg,rgba(12,22,38,0.88),rgba(7,14,26,0.92))] p-4 shadow-[0_16px_38px_-24px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-[18px] transition duration-300 hover:-translate-y-1 hover:border-[rgba(126,192,255,0.3)] hover:shadow-[0_22px_55px_-28px_rgba(78,161,255,0.34),inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%)] opacity-90" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(126,192,255,0.2),transparent_42%)] opacity-70 transition duration-300 group-hover:opacity-100" />
                <p className="relative text-[1.75rem] font-semibold leading-none text-[#f3f8ff]">{stat.value}</p>
                <p className="relative mt-2 text-sm leading-snug text-[rgba(214,226,245,0.78)]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="relative lg:pl-4" initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
          <div className="pointer-events-none absolute left-6 top-12 h-32 w-32 rounded-full bg-accent/18 blur-[85px]" />
          <div className="pointer-events-none absolute right-6 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(77,191,255,0.38)_0%,rgba(78,161,255,0.22)_35%,transparent_72%)] blur-[110px]" />

          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[520px] xl:max-w-[560px]">
            <div className="relative rounded-[30px] bg-[rgba(255,255,255,0.02)] p-3 shadow-[0_0_60px_rgba(59,130,246,0.18),0_28px_90px_-40px_rgba(0,0,0,0.95)] backdrop-blur-[10px]">
              <div className="relative h-[420px] overflow-hidden rounded-[26px] bg-[#09111d] sm:h-[470px] lg:h-[520px] xl:h-[560px]">
                <Image src="/images/hero-nicolas.png" alt="Nicolas Lucas, desenvolvedor web" width={2160} height={2700} priority quality={100} unoptimized className="h-full w-full object-cover object-top" sizes="(max-width: 1024px) 420px, (max-width: 1440px) 520px, 560px" />
              </div>

              <div className="floating-glass absolute bottom-5 right-4 z-10 rounded-full border border-white/15 bg-[rgba(10,18,32,0.42)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-accentSoft shadow-[0_18px_45px_-24px_rgba(78,161,255,0.85)] backdrop-blur-2xl sm:right-5">
                Estrutura focada em venda
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

