import Link from "next/link";
import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-brand text-2xl font-semibold tracking-[0.04em] text-white">Nicolas Lucas</p>
          <p className="mt-2 text-sm text-textMuted">Desenvolvedor web para marcas que querem presença digital profissional.</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-textMuted">
          <Link href="#servicos" className="transition hover:text-white">
            Serviços
          </Link>
          <Link href="#portfolio" className="transition hover:text-white">
            Portfólio
          </Link>
          <Link href="#processo" className="transition hover:text-white">
            Processo
          </Link>
          <Link href="https://instagram.com/nicolasdev_oficial" className="transition hover:text-white">
            Instagram
          </Link>
          <Link href="https://wa.me/5543988724786?text=Ol%C3%A1%2C%20Nicolas.%20Vim%20pelo%20seu%20site%20e%20quero%20um%20or%C3%A7amento%20para%20criar%20um%20site%20profissional%20para%20o%20meu%20neg%C3%B3cio." className="transition hover:text-white">
            WhatsApp
          </Link>
        </div>
      </Container>
    </footer>
  );
}

