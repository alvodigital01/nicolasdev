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
  projectType: string;
  budget: string;
  deadline: string;
  instagram: string;
  details: string;
};

const initialForm: FormState = {
  name: "",
  business: "",
  projectType: "Landing page para anúncios",
  budget: "Ainda não sei",
  deadline: "O mais rápido possível",
  instagram: "",
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
      `📦 Tipo de projeto: ${form.projectType}`,
      `💰 Investimento estimado: ${form.budget}`,
      `📅 Prazo desejado: ${form.deadline || "Não informado"}`,
      `📸 Instagram: ${form.instagram || "Não informado"}`,
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
          <div className="relative overflow-hidden rounded-[32px] border border-[rgba(59,130,246,0.2)] bg-[rgba(8,14,24,0.58)] p-5 shadow-[0_0_0_1px_rgba(126,192,255,0.05),0_30px_90px_-42px_rgba(59,130,246,0.45)] backdrop-blur-[20px] sm:p-8 md:p-12">
            <div className="pointer-events-none absolute -left-14 top-0 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-10 h-36 w-36 rounded-full bg-accentSoft/18 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_34%)]" />

            <div className="relative grid gap-5 sm:gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-10">
              <div className="space-y-4 sm:space-y-6 lg:max-w-[29rem] lg:pr-2">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-accentSoft sm:px-4 sm:text-[11px] sm:tracking-[0.24em]">
                  <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  {"Orçamento direto no WhatsApp"}
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h2 className="font-display text-[1.75rem] font-semibold leading-[1.04] text-white sm:max-w-xl sm:text-3xl md:text-4xl">
                    <span className="sm:hidden">{"Envie seu projeto e receba o contato no WhatsApp."}</span>
                    <span className="hidden sm:inline">{"Se você quer um site mais claro, forte e pronto para vender, eu posso montar a"}<span className="bg-[linear-gradient(135deg,#8DD3FF_0%,#F4FBFF_55%,#9FD8FF_100%)] bg-clip-text text-transparent">{" direção certa para o seu projeto."}</span></span>
                  </h2>

                  <p className="max-w-lg text-sm leading-relaxed text-[#d6e6ff] sm:hidden">
                    {"Você preenche uma vez e eu já recebo tudo organizado para responder mais rápido."}
                  </p>

                  <p className="hidden max-w-lg text-sm leading-relaxed text-[#d6e6ff] sm:block md:text-base">
                    {"Preencha o formulário e eu abro sua mensagem no WhatsApp com o contexto do projeto já organizado para acelerar o primeiro contato."}
                  </p>
                </div>

                <div className="hidden flex-wrap gap-3 text-sm text-white/72 sm:flex">
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

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2 text-sm text-white/78">
                      <span>Tipo de projeto</span>
                      <select
                        required
                        value={form.projectType}
                        onChange={(event) => updateField("projectType", event.target.value)}
                        className="w-full rounded-2xl border border-white/[0.08] bg-[rgba(7,14,26,0.78)] px-4 py-3 text-white transition duration-300 focus:border-accentSoft/45 focus:bg-[rgba(9,18,32,0.92)]"
                      >
                        <option>Landing page para anúncios</option>
                        <option>Site comercial para serviços</option>
                        <option>Página de vendas / captura</option>
                        <option>Outro</option>
                      </select>
                    </label>

                    <label className="space-y-2 text-sm text-white/78">
                      <span>Investimento estimado</span>
                      <select
                        required
                        value={form.budget}
                        onChange={(event) => updateField("budget", event.target.value)}
                        className="w-full rounded-2xl border border-white/[0.08] bg-[rgba(7,14,26,0.78)] px-4 py-3 text-white transition duration-300 focus:border-accentSoft/45 focus:bg-[rgba(9,18,32,0.92)]"
                      >
                        <option>Até R$ 500</option>
                        <option>R$ 500 a R$ 1.000</option>
                        <option>R$ 1.000 a R$ 2.500</option>
                        <option>Acima de R$ 2.500</option>
                        <option>Ainda não sei</option>
                      </select>
                    </label>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2 text-sm text-white/78">
                      <span>Prazo desejado</span>
                      <select
                        value={form.deadline}
                        onChange={(event) => updateField("deadline", event.target.value)}
                        className="w-full rounded-2xl border border-white/[0.08] bg-[rgba(7,14,26,0.78)] px-4 py-3 text-white transition duration-300 focus:border-accentSoft/45 focus:bg-[rgba(9,18,32,0.92)]"
                      >
                        <option>O mais rápido possível</option>
                        <option>Nos próximos 15 dias</option>
                        <option>Sem pressa</option>
                      </select>
                    </label>

                    <label className="space-y-2 text-sm text-white/78">
                      <span>Instagram</span>
                      <input
                        type="text"
                        value={form.instagram}
                        onChange={(event) => updateField("instagram", event.target.value)}
                        className="w-full rounded-2xl border border-white/[0.08] bg-[rgba(7,14,26,0.78)] px-4 py-3 text-white transition duration-300 placeholder:text-white/40 focus:border-accentSoft/45 focus:bg-[rgba(9,18,32,0.92)]"
                        placeholder="@seuinstagram"
                        autoComplete="off"
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
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-accentSoft/50 bg-[linear-gradient(135deg,rgba(126,192,255,0.98),rgba(78,161,255,0.92))] px-6 py-3 text-sm font-semibold tracking-wide text-[#04101e] shadow-[0_0_0_1px_rgba(126,192,255,0.18),0_18px_60px_-22px_rgba(78,161,255,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,rgba(150,206,255,1),rgba(96,175,255,0.96))] hover:shadow-[0_0_0_1px_rgba(126,192,255,0.24),0_24px_80px_-26px_rgba(78,161,255,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8dd3ff]"
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
