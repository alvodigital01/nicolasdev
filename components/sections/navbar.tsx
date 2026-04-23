"use client";

import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "../ui/container";
import { PremiumButton } from "../ui/premium-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function closeMenu() { setMenuOpen(false); }

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 pt-3 transition-all duration-500 sm:pt-4"
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Container>
          <div className="relative rounded-[28px]">
            <div className="pointer-events-none absolute inset-[-2px] rounded-[28px]">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="header-flow-frame absolute inset-0 h-full w-full">
                <rect x="1" y="1" width="98" height="98" rx="27" ry="27" pathLength="100" className="header-flow-halo" />
                <rect x="1" y="1" width="98" height="98" rx="27" ry="27" pathLength="100" className="header-flow-stream-soft" />
                <rect x="1" y="1" width="98" height="98" rx="27" ry="27" pathLength="100" className="header-flow-stream" />
              </svg>
            </div>

            <div
              className={cn(
                "relative overflow-hidden rounded-[26px] border backdrop-blur-[22px] backdrop-saturate-150 transition-all duration-500",
                scrolled
                  ? "border-[rgba(126,192,255,0.22)] bg-[rgba(6,10,18,0.28)] shadow-[0_18px_60px_-34px_rgba(0,0,0,0.96),0_0_0_1px_rgba(126,192,255,0.08)]"
                  : "border-[rgba(126,192,255,0.16)] bg-[rgba(6,10,18,0.16)] shadow-[0_12px_42px_-30px_rgba(0,0,0,0.92),0_0_0_1px_rgba(126,192,255,0.05)]"
              )}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),transparent_36%)]" />
              <div className="pointer-events-none absolute -left-14 top-[-34px] h-28 w-52 rounded-full bg-[radial-gradient(circle,rgba(126,192,255,0.34)_0%,rgba(78,161,255,0.15)_40%,transparent_72%)] blur-3xl" />
              <div className="pointer-events-none absolute right-8 top-[-24px] h-24 w-40 rounded-full bg-[radial-gradient(circle,rgba(244,251,255,0.12)_0%,rgba(126,192,255,0.08)_38%,transparent_72%)] blur-3xl" />
              <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),rgba(126,192,255,0.3),transparent)]" />

              <div
                className={cn(
                  "relative flex items-center justify-between gap-3 px-3 sm:gap-6 sm:px-5 lg:px-6",
                  scrolled ? "h-[4.45rem]" : "h-[4.8rem]"
                )}
              >
                <Link href="#inicio" aria-label="Ir para o início" className="group inline-flex min-w-0 items-end gap-1.5 leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8dd3ff] sm:gap-2">
                  <span className="font-brand text-[1.6rem] font-semibold italic tracking-[0.02em] text-transparent drop-shadow-[0_10px_28px_rgba(126,192,255,0.18)] bg-[linear-gradient(135deg,#F7FBFF_0%,#D7EBFF_44%,#95CFFF_100%)] bg-clip-text sm:text-[2rem]">
                    Nicolas
                  </span>
                  <span className="pb-[0.18rem] font-display text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[#9ED3FF] transition duration-300 group-hover:text-white sm:pb-[0.26rem] sm:text-[0.78rem] sm:tracking-[0.34em]">
                    DEV
                  </span>
                </Link>

                <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-[rgba(219,233,248,0.78)] transition duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8dd3ff]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-drawer"
                    onClick={() => setMenuOpen((v) => !v)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:border-[rgba(126,192,255,0.3)] hover:bg-[rgba(126,192,255,0.08)] hover:text-accentSoft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8dd3ff] md:hidden"
                  >
                    {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </button>

                  <PremiumButton
                    href="#cta"
                    onClick={closeMenu}
                    className="shrink-0 whitespace-nowrap px-3 py-2 text-[11px] shadow-[0_0_0_1px_rgba(126,192,255,0.16),0_16px_40px_-24px_rgba(78,161,255,0.9)] sm:px-5 sm:py-2.5 sm:text-xs md:text-sm"
                  >
                    <span className="sm:hidden">Orçamento</span>
                    <span className="hidden sm:inline">Pedir orçamento</span>
                  </PremiumButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.22 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-[rgba(2,5,12,0.72)] backdrop-blur-sm md:hidden"
            />

            <motion.div
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: reduced ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(80vw,320px)] flex-col border-l border-[rgba(126,192,255,0.14)] bg-[rgba(5,10,20,0.96)] shadow-[-24px_0_60px_rgba(0,0,0,0.7)] backdrop-blur-[28px] md:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
                <Link
                  href="#inicio"
                  onClick={closeMenu}
                  aria-label="Ir para o início"
                  className="inline-flex items-end gap-1.5 leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8dd3ff]"
                >
                  <span className="font-brand text-[1.4rem] font-semibold italic tracking-[0.02em] text-transparent bg-[linear-gradient(135deg,#F7FBFF_0%,#D7EBFF_44%,#95CFFF_100%)] bg-clip-text">
                    Nicolas
                  </span>
                  <span className="pb-[0.14rem] font-display text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[#9ED3FF]">
                    DEV
                  </span>
                </Link>

                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={closeMenu}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8dd3ff]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav aria-label="Navegação mobile" className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={reduced ? false : { opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center rounded-2xl px-4 py-4 text-base font-medium text-[rgba(219,233,248,0.82)] transition duration-200 hover:bg-[rgba(126,192,255,0.07)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8dd3ff]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="border-t border-white/[0.07] px-4 py-5">
                <PremiumButton
                  href="#cta"
                  onClick={closeMenu}
                  className="w-full justify-center py-3.5 text-sm"
                >
                  Pedir orçamento
                </PremiumButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
