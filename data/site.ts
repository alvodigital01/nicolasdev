export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: "rocket" | "layout" | "briefcase" | "megaphone" | "smartphone" | "shield";
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
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" }
];

export const services: Service[] = [
  {
    title: "Landing Pages",
    description: "Páginas estratégicas para campanhas, lançamentos e captação de leads com foco total em conversão.",
    icon: "rocket"
  },
  {
    title: "Sites Institucionais",
    description: "Estrutura profissional para empresas que precisam transmitir credibilidade e vender mais no digital.",
    icon: "layout"
  },
  {
    title: "Portfólios Profissionais",
    description: "Apresentações premium para marcas pessoais e especialistas que querem parecer referência no mercado.",
    icon: "briefcase"
  },
  {
    title: "Páginas de Campanha",
    description: "Páginas de alta performance com copy orientada a resultado e design pensado para ação.",
    icon: "megaphone"
  },
  {
    title: "Sites Responsivos",
    description: "Experiência impecável em celular, tablet e desktop com carregamento otimizado e visual moderno.",
    icon: "smartphone"
  },
  {
    title: "Pagina de Vendas",
    description: "Estruturas de oferta com copy, prova e CTA para aumentar pedidos de orcamento.",
    icon: "shield"
  }
];


export const differentials: Differential[] = [
  {
    title: "Design que transmite autoridade",
    description: "Cada layout e construido para valorizar marca, posicionamento e percepcao premium."
  },
  {
    title: "Estrategia orientada a conversao",
    description: "Arquitetura de conteudo e CTAs para gerar mais contatos e oportunidades reais."
  },
  {
    title: "Performance e experiencia",
    description: "Sites rapidos, responsivos e fluidos para nao perder atencao nem vendas."
  },
  {
    title: "Acabamento de alto nivel",
    description: "Microinteracoes, hierarquia visual e detalhes sofisticados que elevam o valor percebido."
  }
];
export const projects: Project[] = [
  {
    name: "Aurora Odonto",
    category: "Institucional",
    description: "Reposicionamento digital para clínica premium com agendamento simplificado.",
    metrics: "+38% em contatos no primeiro mês"
  },
  {
    name: "Matriz Fitness",
    category: "Landing Page",
    description: "Landing de campanha para plano anual com estrutura focada em tráfego pago.",
    metrics: "Custo por lead 29% menor"
  },
  {
    name: "Luna Arquitetura",
    category: "Portfólio",
    description: "Portfólio minimalista para estúdio autoral reforçando percepção de exclusividade.",
    metrics: "Tempo de permanência 2.1x maior"
  },
  {
    name: "Prime Legal",
    category: "Conversão",
    description: "Página de aquisição para escritório com prova social e funil de atendimento.",
    metrics: "+52% em solicitações de consulta"
  },
  {
    name: "Vittori Imóveis",
    category: "Institucional",
    description: "Site moderno para imobiliária com vitrine premium e captura inteligente de leads.",
    metrics: "+44% de leads qualificados"
  },
  {
    name: "Creator Sprint",
    category: "Landing Page",
    description: "Lançamento digital com narrativa persuasiva e blocos de objeção/resposta.",
    metrics: "Taxa de conversão de 8.7%"
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

export const testimonials: Testimonial[] = [
  {
    name: "Marina Costa",
    role: "CEO, Studio Móveis Planejados",
    quote: "O site elevou completamente nossa imagem. Hoje os clientes chegam dizendo que a marca parece outro nível."
  },
  {
    name: "Rafael Mendes",
    role: "Gestor, Prime Car Detail",
    quote: "A estrutura foi pensada para converter de verdade. O volume de orçamentos aumentou já na primeira semana."
  },
  {
    name: "Camila Torres",
    role: "Mentora de Negócios",
    quote: "Finalmente tenho uma presença digital profissional que combina com o valor do meu serviço."
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

