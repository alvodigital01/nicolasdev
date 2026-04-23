export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: "rocket" | "layout" | "briefcase" | "megaphone" | "smartphone" | "shield";
  image: string;
};

export type Differential = {
  title: string;
  description: string;
};

export type ProjectCategory = "Landing Page" | "Institucional" | "Portfólio" | "Conversão";

export type Project = {
  name: string;
  category: ProjectCategory;
  description: string;
  metrics: string;
  image: string;
  href: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Oferta", href: "#servicos" },
  { label: "Projetos", href: "#portfolio" },
  { label: "Contato", href: "#cta" }
];

export const services: Service[] = [
  {
    title: "Landing page para anúncio",
    description: "Página curta e forte para transformar clique em lead, conversa ou pedido de orçamento.",
    icon: "rocket",
    image: "/images/services/landing.png"
  },
  {
    title: "Site comercial para serviço",
    description: "Estrutura enxuta para apresentar oferta, transmitir confiança e facilitar a decisão do cliente.",
    icon: "layout",
    image: "/images/services/institucional.png"
  },
  {
    title: "Página de vendas ou captura",
    description: "Blocos pensados para destacar valor, reduzir objeção e levar o visitante para a ação.",
    icon: "megaphone",
    image: "/images/services/vendas.png"
  }
];

export const differentials: Differential[] = [
  {
    title: "Menos texto, mais direção",
    description: "A oferta aparece rápido e o visitante entende o que fazer sem atravessar uma página institucional."
  },
  {
    title: "CTA no momento certo",
    description: "Os pontos de contato entram cedo e se repetem com critério para gerar mais conversa."
  },
  {
    title: "Prova visual primeiro",
    description: "Projetos e sinais de resultado sustentam valor sem depender de longas explicações."
  },
  {
    title: "Design premium com foco comercial",
    description: "O visual continua forte, mas agora trabalha para vender e não só para parecer bonito."
  }
];

export const projects: Project[] = [
  {
    name: "Fred Peças",
    category: "Institucional",
    description: "Site comercial com CTA no WhatsApp, foco em estoque e atendimento para linha 12V e 24V.",
    metrics: "Catálogo e consultoria",
    image: "/images/projects/fred-pecas.svg",
    href: "https://fred-pe-as.vercel.app"
  },
  {
    name: "DR Drywall",
    category: "Institucional",
    description: "Site premium para drywall residencial e corporativo, com foco em autoridade visual e pedido de orçamento.",
    metrics: "Orçamento direto",
    image: "/images/projects/dr-drywall.svg",
    href: "https://www.drdrywall.online"
  },
  {
    name: "Luarê Recreações",
    category: "Institucional",
    description: "Site leve com CTA no WhatsApp e foco em eventos infantis e corporativos.",
    metrics: "WhatsApp em destaque",
    image: "/images/projects/luna-arquitetura.svg",
    href: "https://luarerecreacoes.com.br/"
  },
  {
    name: "Prime Legal",
    category: "Conversão",
    description: "Página jurídica com prova social e CTA direto para solicitação de consulta.",
    metrics: "+52% em solicitações",
    image: "/images/projects/prime-legal.svg",
    href: "#"
  },
  {
    name: "Vittori Imóveis",
    category: "Institucional",
    description: "Site comercial com vitrine premium e captura mais clara de leads.",
    metrics: "+44% de leads qualificados",
    image: "/images/projects/vittori-imoveis.svg",
    href: "#"
  },
  {
    name: "Creator Sprint",
    category: "Landing Page",
    description: "Estrutura de lançamento com narrativa persuasiva e CTA distribuído com precisão.",
    metrics: "Conversão de 8,7%",
    image: "/images/projects/creator-sprint.svg",
    href: "#"
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Briefing Estratégico",
    description: "Entendo objetivos, público e momento do negócio para direcionar o projeto com clareza."
  },
  {
    title: "Arquitetura e Direção",
    description: "Defino estrutura, narrativa e posicionamento visual para comunicar valor desde o primeiro bloco."
  },
  {
    title: "Design e Desenvolvimento",
    description: "Construo a interface com foco em percepção premium, performance e experiência responsiva."
  },
  {
    title: "Entrega e Ajustes",
    description: "Validação final, refinamentos estratégicos e publicação para seu site entrar em operação forte."
  }
];

export const faqs: FAQ[] = [
  {
    question: "Quanto tempo leva para o site ficar pronto?",
    answer: "Depende do escopo, mas projetos de landing page normalmente levam de 7 a 14 dias e institucionais de 15 a 30 dias."
  },
  {
    question: "O site funciona bem no celular?",
    answer: "Sim. O desenvolvimento é mobile first para garantir leitura, performance e conversão em qualquer dispositivo."
  },
  {
    question: "Posso pedir alterações após a entrega?",
    answer: "Sim. O projeto inclui rodada de ajustes estratégicos para garantir alinhamento com sua marca e objetivos."
  },
  {
    question: "Você também faz landing pages?",
    answer: "Sim. Landing pages são um dos focos principais para campanhas, tráfego pago e captação de leads."
  },
  {
    question: "Como funciona o orçamento?",
    answer: "Você envia os objetivos do projeto e recebe uma proposta clara com escopo, prazo e investimento."
  }
];
