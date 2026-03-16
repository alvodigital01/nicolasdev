import Link from "next/link";
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
          <Link href="#servicos" className="transition duration-300 hover:text-accentSoft hover:opacity-100">
            Oferta
          </Link>
          <Link href="#portfolio" className="transition duration-300 hover:text-accentSoft hover:opacity-100">
            Projetos
          </Link>
          <Link href="#cta" className="transition duration-300 hover:text-accentSoft hover:opacity-100">
            Contato
          </Link>
          <Link href="https://instagram.com/nicolasdev_oficial" className="transition duration-300 hover:text-accentSoft hover:opacity-100">
            Instagram
          </Link>
          <Link href="https://wa.me/5543988724786?text=Ol%C3%A1%2C%20Nicolas.%20Vim%20pelo%20seu%20site%20e%20quero%20um%20or%C3%A7amento%20para%20criar%20um%20site%20profissional%20para%20o%20meu%20neg%C3%B3cio." className="transition duration-300 hover:text-accentSoft hover:opacity-100">
            WhatsApp
          </Link>
        </div>
      </Container>
    </footer>
  );
}


