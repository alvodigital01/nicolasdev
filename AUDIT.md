# AUDIT.md — Auditoria Técnica: nicolasdev.online

**Data:** 22/04/2026  
**Stack:** Next.js 15 · React 19 · TypeScript (strict) · Tailwind CSS 3 · Framer Motion 12  
**Hospedagem:** nicolasdev.online  
**Escopo:** Single-page portfolio/comercial  

---

## 1. Estrutura e Arquitetura

### O que está bem

- App Router com RSC por padrão — `page.tsx` é um Server Component puro (só orquestra).
- Separação clara entre `components/sections/` (lógica de página) e `components/ui/` (primitivas reutilizáveis).
- Dados centralizados em `data/site.ts` com tipos TypeScript exportados.
- `Container`, `SectionShell`, `Reveal`, `PremiumButton`, `SectionHeading` — DRY bem aplicado.
- TypeScript `strict: true` ativo em todo o projeto.

### Problemas

| Gravidade | Arquivo | Problema |
|-----------|---------|---------|
| IMPORTANTE | raiz do projeto | GIFs (`fredpeçasgif.gif`, `drdrywallgif.gif`, `luaregif.gif`) e PNGs de avatar (`davidruandep.png`, etc.) na raiz em vez de `/public/images/` — anti-padrão, dificulta limpeza e deploy |
| IMPORTANTE | `components/sections/differentials.tsx.bak` | Arquivo `.bak` no repositório com encoding quebrado — código morto que deve ser deletado |
| IMPORTANTE | `data/site.ts` vs `testimonials.tsx` | Dois conjuntos de depoimentos com estrutura de tipos incompatível (`role` vs `business`) — o componente ignora `data/site.ts` completamente, gerando código morto |
| IMPORTANTE | `page.tsx` | `FaqSection`, `ProcessSection`, `BeforeAfterSection` importadas mas **não renderizadas** — código morto que infla bundle |
| NICE | `lib/utils.ts` | `cn()` reimplementado manualmente sem suporte a conflito de classes Tailwind — deveria usar `clsx` + `tailwind-merge` |
| NICE | `public/images/` | 15+ assets órfãos e duplicados (`.png` + `.jpg` do mesmo subject, `mascote-main.png`, `project-showcase/`, arquivos de iteração como `meupng.png`) inflando o repositório |
| NICE | raiz do projeto | `TEMP/` com arquivos do Telegram (`Telegram.exe`) — arquivos pessoais no diretório do projeto |

---

## 2. Performance

### O que está bem

- `next/font/google` para as 3 fontes (Sora, Plus Jakarta Sans, Playfair Display) — auto-hosting, `font-display: swap` automático, zero CLS de fonte.
- Imagem hero com `priority` — Next.js injeta `<link rel="preload">` correto.
- `sizes` prop na imagem hero — srcset responsivo funciona corretamente.
- GIFs do portfolio **só renderizados em desktop** (`hidden md:block`); mobile recebe mockup SVG/CSS — excelente decisão de performance.
- `{ passive: true }` no event listener do `BackToTopFab`.

### Problemas

| Gravidade | Arquivo | Linha | Problema |
|-----------|---------|-------|---------|
| **CRÍTICO** | `hero.tsx` | 95 | `unoptimized` + `quality={100}` numa imagem PNG de 2160×2700px servida num slot de ~560px. Estimativa: **500 KB+ sendo baixados onde <80 KB bastaria** em WebP otimizado. `quality={100}` sem efeito com `unoptimized` — combinação contraditória |
| **CRÍTICO** | `portfolio.tsx` | 263 | GIFs usados com `<Image unoptimized>` — sem conversão, sem compressão. GIFs podem ser **5–10× maiores** que vídeo MP4/WebM equivalente. Nome `fredpeçasgif.gif` contém `ç` — risco em servidores sem UTF-8 |
| IMPORTANTE | `layout.tsx` | 100 | `<link rel="preconnect" href="https://wa.me">` — `wa.me` é um redirector HTTP, não um servidor de recursos. Esse preconnect consome 1 TCP/TLS handshake sem nenhum benefício de performance |
| IMPORTANTE | `globals.css` | — | Múltiplos `will-change: transform` simultâneos (`.marquee-track`, `.hero-orb`, `.hero-orb-alt`, `.hero-beam`) — promovem várias compositor layers, podendo saturar GPU em mobile |
| IMPORTANTE | `globals.css` | — | **Sem `@media (prefers-reduced-motion: reduce)`** em nenhuma das dezenas de animações CSS `@keyframes` |
| IMPORTANTE | `hero.tsx` | 17–18 | `useScroll` + `useTransform` sem throttle/debounce — dispara a cada evento de scroll no componente que contém o `<h1>` |
| IMPORTANTE | `layout.tsx` | 11, 17 | Peso `500` carregado para Sora e Plus Jakarta Sans sem evidência de uso — adiciona download desnecessário de fonte |
| NICE | Múltiplos | — | `backdrop-filter: blur()` simultâneo em navbar, cards, FABs e overlays — múltiplas camadas de blur causam queda de FPS em hardware fraco |
| NICE | `package.json` | — | `framer-motion` v12 (~100 KB gzipped) para animações que poderiam ser CSS puro + `IntersectionObserver` |

**Estimativa de Core Web Vitals (sem Lighthouse real):**

| Métrica | Estimativa | Principal fator negativo |
|---------|-----------|--------------------------|
| **LCP** | Ruim (>4s) | Imagem hero PNG 2160px sem otimização — `unoptimized` desabilita WebP/AVIF |
| **CLS** | Bom (<0.1) | Fontes via `next/font` eliminam FOIT/FOUT; imagem hero tem dimensões fixas |
| **INP** | Moderado | Muitos `motion` components e `useScroll` no componente crítico do caminho de renderização |

---

## 3. SEO

### O que está bem

- `metadata` do Next.js completo: `title`, `description`, `keywords`, `authors`, `metadataBase`, `canonical`.
- OpenGraph completo com `type`, `locale`, `url`, `siteName`, `images` (dimensões e alt).
- Twitter Card `summary_large_image` correto.
- `robots.ts` gerado pelo Next.js — `allow: "/"`, sitemap referenciado.
- `sitemap.ts` gerado pelo Next.js — URL correta, `changeFrequency: "monthly"`.
- Schema.org `Person` em JSON-LD no `<head>`.
- `lang="pt-BR"` no `<html>`.

### Problemas

| Gravidade | Arquivo | Linha | Problema |
|-----------|---------|-------|---------|
| IMPORTANTE | `layout.tsx` | 83–89 | Schema.org `sameAs` inclui `wa.me` — WhatsApp não é rede social reconhecida pelo Google para `sameAs`; adicionar LinkedIn/GitHub seria mais efetivo |
| IMPORTANTE | `layout.tsx` | 88 | `offers.url: "https://www.nicolasdev.online/#servicos"` — âncora absoluta está OK, mas o schema de `Offer` sem `price`/`priceCurrency` tem valor reduzido para rich snippets |
| IMPORTANTE | `layout.tsx` | — | Ausência de schema `Review`/`AggregateRating` para os depoimentos — oportunidade perdida de estrelas nos resultados de busca |
| IMPORTANTE | `sitemap.ts` | — | `lastModified: new Date()` gera data dinâmica a cada build — pode gerar recrawl desnecessário do Googlebot; preferir data do último commit ou data fixa |
| NICE | `layout.tsx` | — | `title` fixo sem `template` — se o projeto evoluir para rotas (`/blog`, `/projeto/x`), todas as páginas terão o mesmo título |
| NICE | `app/` | — | Sem `apple-icon.png` (180×180) — iOS usa screenshot genérico ao adicionar à home screen |
| NICE | `app/` | — | Sem `manifest.json` — Android "Add to Home Screen" sem ícone ou nome correto |

---

## 4. Acessibilidade (WCAG 2.1 AA)

### O que está bem

- `focus-visible` global em `globals.css` (linha 66–69): `outline: 2px solid #8dd3ff` para todos os elementos interativos.
- Links externos com `rel="noreferrer noopener"`.
- `aria-label` nos FABs de WhatsApp e BackToTop.
- `aria-label="Navegação principal"` na `<nav>`.
- `aria-label="Ir para o início"` no logo.
- Emojis decorativos com `aria-hidden="true"`.
- `suppressHydrationWarning` no `<html>` — correto.
- Formulário usa `<label>` como wrapper (`<label>...<input></label>`) — válido e acessível.

### Problemas

| Gravidade | Arquivo | Linhas | Problema |
|-----------|---------|--------|---------|
| **CRÍTICO** | `final-cta.tsx` | 127–213 | Todos os inputs têm `outline-none` que **sobrescreve** o `focus-visible` global — a alternativa (`focus:border-accentSoft/45`) é muito sutil para baixa visão. WCAG 2.4.7 exige foco visivelmente identificável. Solução: trocar `outline-none` por `focus-visible:outline-2 focus-visible:outline-accentSoft` |
| **CRÍTICO** | `navbar.tsx` | 66 | `<nav className="hidden ... md:flex">` — **sem menu mobile**. Em viewport < 768px, o único elemento interativo do nav é o botão "Orçamento". Seções intermediárias (`#servicos`, `#portfolio`, `#sobre`) ficam sem navegação direta por teclado |
| **CRÍTICO** | `globals.css` | — | **Nenhum `@media (prefers-reduced-motion: reduce)`** em qualquer animação — violação WCAG 2.3.3. Usuários com vestibular disorders ou epilepsia fotossensível são afetados |
| **CRÍTICO** | `faq.tsx` | 31–37 | Botão de accordion sem `aria-expanded`, sem `aria-controls`, sem `type="button"` — leitores de tela não conseguem comunicar o estado aberto/fechado (WCAG 4.1.2) |
| IMPORTANTE | Múltiplos | — | Contraste possivelmente insuficiente: `text-white/52` (~3.5:1), `text-white/55`, `text-white/60`, `text-white/65` sobre fundos escuros — abaixo de 4.5:1 para texto normal (WCAG 1.4.3) |
| IMPORTANTE | `framer-motion` | — | Nenhuma checagem de `useReducedMotion()` nos componentes com animações — complementar ao fix no CSS |
| IMPORTANTE | `testimonials.tsx` | 3–5 | Avatares importados como módulos ES (`.src`) — perda de otimização automática do `next/image` |
| NICE | `footer.tsx` | 29–32 | Links para Instagram e WhatsApp sem `target="_blank"` — abrem na mesma aba, interrompendo a navegação |

---

## 5. Responsividade e UX

### O que está bem

- Hero tem dois layouts distintos: mobile (`sm:hidden`) e desktop (`hidden sm:block`) com animações escalonadas diferentes.
- `Container` com `px-4 sm:px-6 lg:px-8` — padding lateral responsivo.
- Grid do portfolio: `md:grid-cols-2 xl:grid-cols-3` — progressão correta.
- `min-h-[calc(100svh-5.5rem)]` usando `svh` — exclui barra do browser em mobile.
- `BackToTopFab` aparece apenas quando próximo do final — não intrusivo.
- `WhatsAppFab` com `aria-label` e animação de pulso.

### Problemas

| Gravidade | Arquivo | Linha | Problema |
|-----------|---------|-------|---------|
| **CRÍTICO** | `navbar.tsx` | 66 | Sem menu mobile — repetido por gravidade de UX além de acessibilidade |
| IMPORTANTE | `hero.tsx` | 65 | **"Apenas 4 vagas abertas para Abril"** — mês hardcoded no JSX. Em qualquer outro mês o texto está desatualizado e mina credibilidade |
| IMPORTANTE | `hero.tsx` | 36 | `text-[clamp(2.45rem,11.5vw,3.2rem)]` — em 768px resulta em ~88px; pode quebrar layout intermediário. Testar entre 600px–900px |
| IMPORTANTE | `portfolio.tsx` | — | 3 dos 6 projetos com `href: "#"` (Prime Legal, Vittori Imóveis, Creator Sprint) — links mortos com métricas de conversão não verificáveis |
| NICE | `data/site.ts` | — | Métricas de projetos sem URL verificável ("+52% em solicitações") — potencial percepção de portfolio inflado |
| NICE | Múltiplos | — | Sem política de privacidade — formulário coleta dados (nome, empresa, Instagram, descrição do projeto) mesmo que não vá a servidor |

---

## 6. Conteúdo e Conversão

### O que está bem

- Copy acima da dobra comunica proposta de valor em <5s: "Lucre mais com um site profissional e estratégico."
- Múltiplos CTAs: navbar, hero (primário), FAB WhatsApp, seção final.
- Formulário gera mensagem pré-formatada no WhatsApp — zero fricção de contato.
- Depoimentos com nome real, foto e empresa — credibilidade verificável.
- Portfolio com links reais para 3 projetos funcionais.
- Seção "Como funciona" reduz ansiedade sobre o processo.

### Problemas

| Gravidade | Arquivo | Problema |
|-----------|---------|---------|
| IMPORTANTE | `page.tsx` | `FaqSection` implementada e não renderizada — 5 perguntas reais que reduzem objeções pré-venda e beneficiam SEO |
| IMPORTANTE | `portfolio.tsx` | 3 projetos com `href: "#"` — sem destino verificável, métricas parecem fabricadas |
| IMPORTANTE | `hero.tsx` | Badge de urgência com mês fixo "Abril" — perde credibilidade automaticamente em outros meses |
| NICE | `hero.tsx` | Prova social limitada ("mais de 1 ano de experiência", "+10 projetos") — logos de clientes ou reviews do Google aumentariam conversão |

---

## 7. Qualidade de Código

### O que está bem

- TypeScript `strict: true` — tipagem rigorosa.
- Props tipadas em todos os componentes UI.
- `Reveal`, `SectionShell`, `Container` eliminam repetição.
- `page.tsx` como orquestrador puro sem lógica — correto para RSC.
- `dangerouslySetInnerHTML` usado apenas para o script JSON-LD — contexto justificável.

### Problemas

| Gravidade | Arquivo | Linhas | Problema |
|-----------|---------|--------|---------|
| IMPORTANTE | `data/site.ts` vs `testimonials.tsx` | — | Tipo `Testimonial` definido em dois lugares com campos diferentes (`role` vs `business`) — inconsistência de modelo de dados |
| IMPORTANTE | Múltiplos | — | Número de WhatsApp `5543988724786` hardcoded em 4 arquivos: `layout.tsx:83`, `final-cta.tsx:19`, `footer.tsx:32`, `whatsapp-fab.tsx:6` — deveria ser constante centralizada |
| IMPORTANTE | `trust-marquee.tsx` | 50–78 | `<>` Fragment em `.map()` sem `key` — o Fragment não aceita `key`, gerando React warning de listas |
| NICE | `services.tsx` | 77 | `["--spotlight-x" as string]: "50%"` — hack de tipo para CSS custom properties em `style` inline |
| NICE | `portfolio.tsx` | 240 | `key={\`${project.name}-${index}\`}` — index desnecessário na key quando `project.name` já é único |
| NICE | `portfolio.tsx` | 50–212 | `ProjectMockup` com ~160 linhas de JSX hardcoded — candidato a arquivo separado |

---

## 8. Segurança e Boas Práticas

### O que está bem

- Formulário não envia dados a servidor — abre WhatsApp diretamente, sem surface de ataque de backend.
- `rel="noreferrer noopener"` em todos os links externos.
- `window.open(..., "noopener,noreferrer")` no submit — correto.
- `lang="pt-BR"` e `charset` implícito via Next.js.

### Problemas

| Gravidade | Arquivo | Problema |
|-----------|---------|---------|
| IMPORTANTE | `next.config.mjs` | Sem `headers()` com CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` |
| IMPORTANTE | `next.config.mjs` | Sem `poweredByHeader: false` — header `X-Powered-By: Next.js` expõe stack tecnológica |
| NICE | `.gitignore` | Pasta `TEMP/` com `Telegram.exe` rastreada no histórico — checar se dados sensíveis foram comitados |

---

## 9. Dark Mode · i18n · PWA

| Tópico | Status | Recomendação |
|--------|--------|-------------|
| **Dark mode** | Projeto é 100% dark — `color-scheme: dark` no CSS. Sem toggle. | Para o público-alvo (negócios locais BR), manter exclusivamente dark é aceitável. Não prioritário. |
| **i18n** | Apenas PT-BR | Público-alvo é nacional. Não prioritário agora. |
| **PWA** | Sem `manifest.json`, sem service worker | Adicionar manifest básico (ícone, nome, cor) é NICE-TO-HAVE — sem impacto direto na conversão atual. |

---

## 10. Resumo Priorizado

### 🔴 CRÍTICO — Resolver antes do próximo deploy

| ID | Arquivo | Problema | Esforço | Status |
|----|---------|---------|---------|--------|
| C1 | `hero.tsx:95` | Imagem hero PNG 2160px com `unoptimized` — LCP destruído (~500 KB sem compressão) | S | ✅ Resolvido |
| C2 | `portfolio.tsx:263` | GIFs sem otimização — peso excessivo em desktop, nome de arquivo com caractere especial | M | Pendente |
| C3 | `final-cta.tsx:127–213` | `outline-none` em inputs sem substituto acessível — foco invisível para teclado | S | ✅ Resolvido |
| C4 | `faq.tsx:31–37` | Accordion sem `aria-expanded`, `aria-controls`, `type="button"` | S | ✅ Resolvido |
| C5 | `navbar.tsx:66` | Sem menu mobile — navegação inacessível em < 768px | M | Pendente (Fase B) |
| C6 | `globals.css` | Zero `prefers-reduced-motion` — violação WCAG 2.3.3 | S | ✅ Resolvido |
| C7 | `hero.tsx:65` | "Abril" hardcoded no badge de urgência | S | ✅ Resolvido |

### 🟡 IMPORTANTE — Resolver no próximo sprint

| ID | Arquivo | Problema | Esforço | Status |
|----|---------|---------|---------|--------|
| I1 | `next.config.mjs` | Sem security headers (CSP, X-Frame-Options, etc.) + `poweredByHeader: false` | S | ✅ Resolvido |
| I2 | `layout.tsx:100` | `preconnect` inútil para `wa.me` — remover | S | ✅ Resolvido |
| I3 | `layout.tsx:11,17` | Peso 500 carregado sem uso para Sora e Jakarta | S | ✅ Resolvido |
| I4 | Raiz do projeto | GIFs e avatares fora de `/public` | S | Pendente |
| I5 | `page.tsx` | `FaqSection` não renderizada — conteúdo de conversão e SEO desperdiçado | S | ✅ Resolvido |
| I6 | `portfolio.tsx` | 3 projetos com `href: "#"` — links mortos com métricas não verificáveis | M | Pendente |
| I7 | Múltiplos | WhatsApp number hardcoded em 4 arquivos | S | ✅ Resolvido (`lib/constants.ts`) |
| I8 | `data/site.ts` | Tipo `Testimonial` e dados de depoimentos duplicados/inconsistentes | S | Pendente |
| I9 | `trust-marquee.tsx:50–78` | Fragment sem key em lista — React warning | S | ✅ Resolvido |
| I10 | `globals.css` | `will-change` em múltiplos elementos simultâneos — pressão desnecessária na GPU | S | Pendente |
| I11 | Múltiplos | Contraste `text-white/52` a `text-white/65` possivelmente abaixo de 4.5:1 | M | Pendente |
| I12 | `layout.tsx:83` | Schema.org `sameAs` com `wa.me` em vez de LinkedIn/GitHub | S | Pendente |
| I13 | `data/site.ts` | Código morto: depoimentos fictícios, serviços com imagens não usadas | S | Pendente |

### 🟢 NICE-TO-HAVE — Backlog de qualidade

| ID | Arquivo | Sugestão | Esforço |
|----|---------|---------|---------|
| N1 | `lib/utils.ts` | Substituir `cn()` manual por `clsx` + `tailwind-merge` | S |
| N2 | `package.json` | Avaliar substituição de `framer-motion` por CSS + IntersectionObserver | L |
| N3 | `app/` | `apple-icon.png` + `manifest.json` para PWA básico | S |
| N4 | `sitemap.ts` | `lastModified` com data fixa em vez de `new Date()` | S |
| N5 | `tsconfig.json` | `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes` | S |
| N6 | Raiz/repo | Remover `.bak`, `TEMP/`, imagens de iteração da raiz | S |
| N7 | `portfolio.tsx:50–212` | Extrair `ProjectMockup` para arquivo separado | S |
| N8 | `footer.tsx` | `target="_blank"` nos links de Instagram e WhatsApp | S |
| N9 | `final-cta.tsx` | Indicação visual de campos obrigatórios + feedback de erro inline | M |
| N10 | `layout.tsx` | Schema `Review`/`AggregateRating` para depoimentos — rich snippets de estrelas | M |

---

*Legenda de esforço — S: < 30 min · M: 1–3 h · L: 3+ h ou decisão arquitetural*

---

> **Fase 2 (plano de execução) disponível a pedido.**  
> Nenhum código foi alterado nesta fase.
