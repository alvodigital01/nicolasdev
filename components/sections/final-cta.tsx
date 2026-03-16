"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionShell } from "../ui/section-shell";

type FormState = {
  name: string;
  business: string;
  goal: string;
  reference: string;
  details: string;
};

const WHATSAPP_NUMBER = "5543988724786";

const initialForm: FormState = {
  name: "",
  business: "",
  goal: "",
  reference: "",
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
      "Olá, Nicolas! Quero pedir um orçamento para meu site.",
      `Nome: ${form.name}`,
      `Negócio: ${form.business}`,
      `Projeto: ${form.goal}`,
      form.reference ? `Instagram: ${form.reference}` : null,
      form.details ? `Resumo: ${form.details}` : null
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpening(false);
  }

  return (
    <SectionShell id="cta" className="pb-24 pt-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-[rgba(59,130,246,0.2)] bg-[rgba(8,14,24,0.58)] p-8 shadow-[0_0_0_1px_rgba(126,192,255,0.05),0_30px_90px_-42px_rgba(59,130,246,0.45)] backdrop-blur-[20px] md:p-12">
            <div className="pointer-events-none absolute -left-14 top-0 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-10 h-36 w-36 rounded-full bg-accentSoft/18 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_34%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-10">
              <div className="space-y-6 lg:max-w-[29rem] lg:pr-2">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-accentSoft">
                  <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Orçamento direto no WhatsApp
                </div>

                <div className="space-y-4">
                  <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                    Se você quer um site mais claro, forte e pronto para vender, eu posso montar a
                    <span className="bg-[linear-gradient(135deg,#8DD3FF_0%,#F4FBFF_55%,#9FD8FF_100%)] bg-clip-text text-transparent">
                      {" "}direção certa para o seu projeto.
                    </span>
                  </h2>

                  <p className="max-w-lg text-sm leading-relaxed text-[#d6e6ff] md:text-base">
                    Preencha o formulário e eu abro sua mensagem no WhatsApp com o contexto do projeto já organizado para acelerar o primeiro contato.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-white/72">
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Escopo mais claro</div>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Contato direto</div>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Mensagem pronta</div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(10,18,32,0.82),rgba(6,12,22,0.72))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_-34px_rgba(0,0,0,0.92)] backdrop-blur-[18px] md:p-7"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_36%)]" />

                <div className="relative space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accentSoft">Contato rápido</p>
                      <h3 className="mt-2 font-display text-2xl text-white">Receba seu orçamento no WhatsApp</h3>
                    </div>
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-[radial-gradient(circle_at_30%_30%,rgba(126,192,255,0.16),rgba(14,24,40,0.94))] text-accentSoft shadow-[inset_0_1px_10px_rgba(126,192,255,0.08)]">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2 text-sm text-white/78">
                      <span>Seu nome</span>
                      <input
                        required
                        value={form.name}
                        onChange={(event) => updateField("name", event.target.value)}
                        className="w-full rounded-2xl border border-white/[0.08] bg-[rgba(7,14,26,0.78)] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-white/28 focus:border-accentSoft/45 focus:bg-[rgba(9,18,32,0.92)]"
                        placeholder="Como posso te chamar?"
                      />
                    </label>

                    <label className="space-y-2 text-sm text-white/78">
                      <span>Seu negócio</span>
                      <input
                        required
                        value={form.business}
                        onChange={(event) => updateField("business", event.target.value)}
                        className="w-full rounded-2xl border border-white/[0.08] bg-[rgba(7,14,26,0.78)] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-white/28 focus:border-accentSoft/45 focus:bg-[rgba(9,18,32,0.92)]"
                        placeholder="Nome da empresa ou serviço"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[1fr_0.72fr]">
                    <label className="space-y-2 text-sm text-white/78">
                      <span>O que você precisa</span>
                      <input
                        required
                        value={form.goal}
                        onChange={(event) => updateField("goal", event.target.value)}
                        className="w-full rounded-2xl border border-white/[0.08] bg-[rgba(7,14,26,0.78)] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-white/28 focus:border-accentSoft/45 focus:bg-[rgba(9,18,32,0.92)]"
                        placeholder="Landing page, site comercial, redesign..."
                      />
                    </label>

                    <label className="space-y-2 text-sm text-white/78">
                      <span>Instagram</span>
                      <input
                        value={form.reference}
                        onChange={(event) => updateField("reference", event.target.value)}
                        className="w-full rounded-2xl border border-white/[0.08] bg-[rgba(7,14,26,0.78)] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-white/28 focus:border-accentSoft/45 focus:bg-[rgba(9,18,32,0.92)]"
                        placeholder="@suaempresa"
                      />
                    </label>
                  </div>

                  <label className="space-y-2 text-sm text-white/78">
                    <span>Detalhes rápidos</span>
                    <textarea
                      required
                      rows={5}
                      value={form.details}
                      onChange={(event) => updateField("details", event.target.value)}
                      className="w-full resize-none rounded-[24px] border border-white/[0.08] bg-[rgba(7,14,26,0.78)] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-white/28 focus:border-accentSoft/45 focus:bg-[rgba(9,18,32,0.92)]"
                      placeholder="Me conte o momento do seu negócio, o tipo de página e o que você espera melhorar."
                    />
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-accentSoft/50 bg-[linear-gradient(135deg,rgba(126,192,255,0.98),rgba(78,161,255,0.92))] px-6 py-3 text-sm font-semibold tracking-wide text-[#04101e] shadow-[0_0_0_1px_rgba(126,192,255,0.18),0_18px_60px_-22px_rgba(78,161,255,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,rgba(150,206,255,1),rgba(96,175,255,0.96))] hover:shadow-[0_0_0_1px_rgba(126,192,255,0.24),0_24px_80px_-26px_rgba(78,161,255,1)]"
                    >
                      {isOpening ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <p className="text-sm text-white/52">Ao clicar, o WhatsApp abre com sua mensagem pronta.</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}

