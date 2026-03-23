"use client";

import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "../ui/container";
import { PremiumButton } from "../ui/premium-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
              <Link href="#inicio" className="group inline-flex min-w-0 items-end gap-1.5 leading-none sm:gap-2">
                <span className="font-brand text-[1.6rem] font-semibold italic tracking-[0.02em] text-transparent drop-shadow-[0_10px_28px_rgba(126,192,255,0.18)] bg-[linear-gradient(135deg,#F7FBFF_0%,#D7EBFF_44%,#95CFFF_100%)] bg-clip-text sm:text-[2rem]">
                  Nicolas
                </span>
                <span className="pb-[0.18rem] font-display text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[#9ED3FF] transition duration-300 group-hover:text-white sm:pb-[0.26rem] sm:text-[0.78rem] sm:tracking-[0.34em]">
                  DEV
                </span>
              </Link>

              <nav className="hidden items-center gap-7 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-[rgba(219,233,248,0.78)] transition duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <PremiumButton
                href="#cta"
                className="shrink-0 whitespace-nowrap px-3 py-2 text-[11px] shadow-[0_0_0_1px_rgba(126,192,255,0.16),0_16px_40px_-24px_rgba(78,161,255,0.9)] sm:px-5 sm:py-2.5 sm:text-xs md:text-sm"
              >
                <span className="sm:hidden">Orçamento</span>
                <span className="hidden sm:inline">Pedir orçamento</span>
              </PremiumButton>
            </div>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
