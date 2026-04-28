"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionShell } from "../ui/section-shell";

type FormState = {
  name: string;
  business: string;
  details: string;
};

const initialForm: FormState = {
  name: "",
  business: "",
  details: ""
};

export function FinalCtaSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isOpening, setIsOpening] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsOpening(true);

    const message = [
      "Olá, Nicolas! Vim pelo seu site e quero um orçamento.",
      `👤 Nome: ${form.name}`,
      `🏢 Negócio: ${form.business}`,
      `📝 Detalhes: ${form.details || "Não informado"}`
    ].join("\n");

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpening(false);
  }

  return (
    <SectionShell id="cta" className="pb-16 pt-12 sm:pb-24 sm:pt-16">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(10,18,32,0.82),rgba(6,12,22,0.72))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_-34px_rgba(0,0,0,0.92)] backdrop-blur-[18px] sm:p-6 md:p-7"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_36%)]" />

              <div className="relative space-y-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accentSoft">Contato rápido</p>
                    <h3 className="mt-2 font-display text-2xl leading-tight text-white sm:text-3xl">Receba seu orçamento no WhatsApp</h3>
                  </div>
                  <div aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-[radial-gradient(circle_at_30%_30%,rgba(126,192,255,0.16),rgba(14,24,40,0.94))] text-accentSoft shadow-[inset_0_1px_10px_rgba(126,192,255,0.08)]">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                </div>

                <div className="inline-flex rounded-full border border-[rgba(248,113,113,0.24)] bg-[linear-gradient(180deg,rgba(127,29,29,0.18),rgba(120,53,15,0.12))] px-4 py-2 text-xs font-medium text-[#ffd8d1] shadow-[0_10px_30px_-22px_rgba(248,113,113,0.45)]">
                  <span aria-hidden="true" className="mr-2">🔴</span>
                  Agenda com poucas vagas para novos projetos este mês.
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2 text-sm text-white/78">
                    <span>Nome</span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      className="w-full rounded-2xl border border-white/[0.08] bg-[rgba(7,14,26,0.78)] px-4 py-3 text-white transition duration-300 placeholder:text-white/40 focus:border-accentSoft/45 focus:bg-[rgba(9,18,32,0.92)]"
                      placeholder="Seu nome"
                      autoComplete="name"
                    />
                  </label>

                  <label className="space-y-2 text-sm text-white/78">
                    <span>Negócio</span>
                    <input
                      type="text"
                      required
                      value={form.business}
                      onChange={(event) => updateField("business", event.target.value)}
                      className="w-full rounded-2xl border border-white/[0.08] bg-[rgba(7,14,26,0.78)] px-4 py-3 text-white transition duration-300 placeholder:text-white/40 focus:border-accentSoft/45 focus:bg-[rgba(9,18,32,0.92)]"
                      placeholder="Nome do seu negócio"
                      autoComplete="organization"
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm text-white/78">
                  <span>Detalhes adicionais</span>
                  <textarea
                    rows={5}
                    value={form.details}
                    onChange={(event) => updateField("details", event.target.value)}
                    className="w-full resize-none rounded-[24px] border border-white/[0.08] bg-[rgba(7,14,26,0.78)] px-4 py-3 text-white transition duration-300 placeholder:text-white/40 focus:border-accentSoft/45 focus:bg-[rgba(9,18,32,0.92)]"
                    placeholder="Conte um pouco mais sobre o projeto..."
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-accentSoft/50 bg-[linear-gradient(135deg,rgba(126,192,255,0.98),rgba(78,161,255,0.92))] px-6 py-3 text-sm font-semibold tracking-wide text-[#04101e] shadow-[0_0_0_1px_rgba(126,192,255,0.18),0_18px_60px_-22px_rgba(78,161,255,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,rgba(150,206,255,1),rgba(96,175,255,0.96))] hover:shadow-[0_0_0_1px_rgba(126,192,255,0.24),0_24px_80px_-26px_rgba(78,161,255,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8dd3ff] sm:w-auto"
                  >
                    {isOpening ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p className="text-sm text-white/52">Ao clicar, o WhatsApp abre com sua mensagem pronta.</p>
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
