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
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-background/70 backdrop-blur-xl" : "bg-transparent"
      )}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="#inicio" className="font-brand text-2xl font-semibold tracking-[0.06em] text-white">
          Nicolas <span className="bg-gradient-to-r from-accentSoft to-white bg-clip-text text-transparent">Lucas</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-textMuted transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <PremiumButton href="#cta" className="px-5 py-2.5 text-xs md:text-sm">
          Solicitar orçamento
        </PremiumButton>
      </Container>
    </motion.header>
  );
}

