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

export type ProjectCategory = "Landing Page" | "Institucional" | "Portfolio" | "Conversao";

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

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Oferta", href: "#servicos" },
  { label: "Projetos", href: "#portfolio" },
  { label: "Contato", href: "#cta" }
];

export const services: Service[] = [
  {
    title: "Landing page para anuncio",
    description: "Pagina curta e forte para transformar clique em lead, conversa ou pedido de orcamento.",
    icon: "rocket",
    image: "/images/services/landing.png"
  },
  {
    title: "Site comercial para servico",
    description: "Estrutura enxuta para apresentar oferta, transmitir confianca e facilitar a decisao do cliente.",
    icon: "layout",
    image: "/images/services/institucional.png"
  },
  {
    title: "Pagina de vendas ou captura",
    description: "Blocos pensados para destacar valor, reduzir objecao e levar o visitante para a acao.",
    icon: "megaphone",
    image: "/images/services/vendas.png"
  }
];

export const differentials: Differential[] = [
  {
    title: "Menos texto, mais direcao",
    description: "A oferta aparece rapido e o visitante entende o que fazer sem atravessar uma pagina institucional."
  },
  {
    title: "CTA no momento certo",
    description: "Os pontos de contato entram cedo e se repetem com criterio para gerar mais conversa."
  },
  {
    title: "Prova visual primeiro",
    description: "Projetos e sinais de resultado sustentam valor sem depender de longas explicacoes."
  },
  {
    title: "Design premium com foco comercial",
    description: "O visual continua forte, mas agora trabalha para vender e nao so para parecer bonito."
  }
];

export const projects: Project[] = [
  {
    name: "Aurora Odonto",
    category: "Institucional",
    description: "Clinica premium com pagina mais limpa, confiavel e orientada a agendamento.",
    metrics: "+38% em contatos no primeiro mes",
    image: "/images/projects/aurora-odonto.svg",
    href: "#"
  },
  {
    name: "DR Drywall",
    category: "Institucional",
    description: "Site premium para drywall residencial e corporativo, com foco em autoridade visual e pedido de orcamento.",
    metrics: "Hero com CTA direto para orcamento",
    image: "/images/projects/dr-drywall.svg",
    href: "https://drywal-dr.vercel.app"
  },
  {
    name: "Luare Recreacoes",
    category: "Institucional",
    description: "Site comercial com visual leve, CTA forte no WhatsApp e foco em eventos infantis e corporativos.",
    metrics: "CTA principal logo na abertura",
    image: "/images/projects/luna-arquitetura.svg",
    href: "https://luarerecreacoes.com.br/"
  },
  {
    name: "Prime Legal",
    category: "Conversao",
    description: "Pagina juridica com prova social e CTA direto para solicitacao de consulta.",
    metrics: "+52% em solicitacoes",
    image: "/images/projects/prime-legal.svg",
    href: "#"
  },
  {
    name: "Vittori Imoveis",
    category: "Institucional",
    description: "Site comercial com vitrine premium e captura mais clara de leads.",
    metrics: "+44% de leads qualificados",
    image: "/images/projects/vittori-imoveis.svg",
    href: "#"
  },
  {
    name: "Creator Sprint",
    category: "Landing Page",
    description: "Estrutura de lancamento com narrativa persuasiva e CTA distribuido com precisao.",
    metrics: "Conversao de 8.7%",
    image: "/images/projects/creator-sprint.svg",
    href: "#"
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Briefing Estrategico",
    description: "Entendo objetivos, publico e momento do negocio para direcionar o projeto com clareza."
  },
  {
    title: "Arquitetura e Direcao",
    description: "Defino estrutura, narrativa e posicionamento visual para comunicar valor desde o primeiro bloco."
  },
  {
    title: "Design e Desenvolvimento",
    description: "Construo a interface com foco em percepcao premium, performance e experiencia responsiva."
  },
  {
    title: "Entrega e Ajustes",
    description: "Validacao final, refinamentos estrategicos e publicacao para seu site entrar em operacao forte."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Marina Costa",
    role: "CEO, Studio Moveis Planejados",
    quote: "O site elevou completamente nossa imagem. Hoje os clientes chegam dizendo que a marca parece outro nivel."
  },
  {
    name: "Rafael Mendes",
    role: "Gestor, Prime Car Detail",
    quote: "A estrutura foi pensada para converter de verdade. O volume de orcamentos aumentou ja na primeira semana."
  },
  {
    name: "Camila Torres",
    role: "Mentora de Negocios",
    quote: "Finalmente tenho uma presenca digital profissional que combina com o valor do meu servico."
  }
];

export const faqs: FAQ[] = [
  {
    question: "Quanto tempo leva para o site ficar pronto?",
    answer: "Depende do escopo, mas projetos de landing page normalmente levam de 7 a 14 dias e institucionais de 15 a 30 dias."
  },
  {
    question: "O site funciona bem no celular?",
    answer: "Sim. O desenvolvimento e mobile first para garantir leitura, performance e conversao em qualquer dispositivo."
  },
  {
    question: "Posso pedir alteracoes apos a entrega?",
    answer: "Sim. O projeto inclui rodada de ajustes estrategicos para garantir alinhamento com sua marca e objetivos."
  },
  {
    question: "Voce tambem faz landing pages?",
    answer: "Sim. Landing pages sao um dos focos principais para campanhas, trafego pago e captacao de leads."
  },
  {
    question: "Como funciona o orcamento?",
    answer: "Voce envia os objetivos do projeto e recebe uma proposta clara com escopo, prazo e investimento."
  }
];


