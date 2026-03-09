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
          <Link href="https://instagram.com" className="transition hover:text-white">
            Instagram
          </Link>
          <Link href="https://wa.me/5500000000000" className="transition hover:text-white">
            WhatsApp
          </Link>
        </div>
      </Container>
    </footer>
  );
}

