import Link from "next/link";
import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-brand text-2xl font-semibold tracking-[0.04em] text-white">Nicolas Dev</p>
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
          <Link href="https://wa.me/5543988724786?text=Olá%2C%20Nicolas.%20Vim%20pelo%20seu%20site%20e%20quero%20um%20orçamento%20para%20criar%20um%20site%20profissional%20para%20o%20meu%20negócio." className="transition duration-300 hover:text-accentSoft hover:opacity-100">
            WhatsApp
          </Link>
        </div>
      </Container>
    </footer>
  );
}