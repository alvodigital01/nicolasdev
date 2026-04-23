import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
                    <p className="inline-flex items-end gap-2 leading-none">
            <span className="font-brand text-[1.9rem] font-semibold italic tracking-[0.02em] text-transparent bg-[linear-gradient(135deg,#F7FBFF_0%,#D7EBFF_44%,#95CFFF_100%)] bg-clip-text">
              Nicolas
            </span>
            <span className="pb-[0.22rem] font-display text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#9ED3FF]">
              DEV
            </span>
          </p>
          <p className="mt-2 text-sm text-textMuted">Páginas mais objetivas, visuais e pensadas para gerar conversa.</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
          <Link href="#portfolio" className="transition duration-300 hover:text-accentSoft hover:opacity-100">
            Projetos
          </Link>
          <Link href="#cta" className="transition duration-300 hover:text-accentSoft hover:opacity-100">
            Contato
          </Link>
          <Link href="https://instagram.com/nicolasdev_oficial" target="_blank" rel="noreferrer" className="transition duration-300 hover:text-accentSoft hover:opacity-100">
            Instagram
          </Link>
          <Link href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, Nicolas. Vim pelo seu site e quero um orçamento para criar um site profissional para o meu negócio.")}`} target="_blank" rel="noreferrer" className="transition duration-300 hover:text-accentSoft hover:opacity-100">
            WhatsApp
          </Link>
        </div>
      </Container>
    </footer>
  );
}

