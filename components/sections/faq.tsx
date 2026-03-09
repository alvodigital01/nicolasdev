"use client";

import { faqs } from "@/data/site";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { SectionShell } from "../ui/section-shell";

export function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <SectionShell id="faq">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Perguntas comuns antes de iniciar seu projeto"
            description="Respostas rápidas para reduzir objeções e facilitar sua decisão de investir em uma presença digital forte."
          />
        </Reveal>
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={item.question} delay={index * 0.05}>
                <article className="overflow-hidden rounded-2xl border border-white/10 bg-panel/70">
                  <button
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="font-medium text-white">{item.question}</span>
                    <ChevronDown className={`h-4 w-4 text-accentSoft transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-textMuted">{item.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}

