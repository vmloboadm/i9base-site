export const WHATSAPP_NUMBER = "5521998351729";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_URL = "https://www.instagram.com/i9base";
export const CONTACT_EMAIL = "i9base.tech@gmail.com";

export function waLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export type Solution = {
  name: string;
  desc: string;
  msg: string;
};

export const SOLUTIONS: Solution[] = [
  {
    name: "Sites e Landing Pages",
    desc: "Site institucional, página de campanha ou hub que carrega rápido e converte visita em contato.",
    msg: "Oi! Quero um site para o meu negócio.",
  },
  {
    name: "Sistemas Personalizados",
    desc: "Aplicação web, painel ou dashboard feito sob medida para a sua operação.",
    msg: "Oi! Preciso de um sistema para a minha operação.",
  },
  {
    name: "Automação de Processos",
    desc: "Integrações e fluxos que tiram o trabalho manual do seu dia a dia.",
    msg: "Oi! Quero automatizar processos no meu negócio.",
  },
  {
    name: "Atendimento com IA",
    desc: "Agente que atende, qualifica o cliente e registra tudo no CRM, 24h por dia.",
    msg: "Oi! Quero um atendimento com IA no meu negócio.",
  },
  {
    name: "WhatsApp Automatizado",
    desc: "Seu WhatsApp como canal de venda, com funil, follow-up e histórico organizado.",
    msg: "Oi! Quero automatizar meu WhatsApp.",
  },
  {
    name: "CRM e Funil de Vendas",
    desc: "Pipeline, follow-up automático e histórico de cada cliente num só lugar.",
    msg: "Oi! Quero um CRM para organizar minhas vendas.",
  },
  {
    name: "QR Code e NFC",
    desc: "Placa, cardápio, etiqueta ou cartão que leva o cliente direto ao seu digital.",
    msg: "Oi! Quero QR Code e NFC para o meu negócio.",
  },
  {
    name: "Convites Interativos",
    desc: "Convite digital com confirmação, mapa e galeria de fotos em tempo real na festa.",
    msg: "Oi! Quero um convite como esse para meu evento.",
  },
  {
    name: "Experiências Digitais",
    desc: "Hubs de evento, galerias ao vivo e interações que conectam o físico ao digital.",
    msg: "Oi! Quero uma experiência digital para meu evento.",
  },
  {
    name: "Identidade Visual",
    desc: "Logo e identidade que posicionam sua marca, do cartão ao Instagram.",
    msg: "Oi! Preciso de identidade visual para minha marca.",
  },
  {
    name: "Curadoria Digital",
    desc: "Você precisa, a gente resolve e entrega pronto: pesquisa, compra e implantação.",
    msg: "Oi! Preciso resolver uma questão digital.",
  },
  {
    name: "Gestão e Consultoria",
    desc: "Diagnóstico e organização digital: presença, processos e operação.",
    msg: "Oi! Quero um diagnóstico do meu negócio.",
  },
];

export type CaseItem = {
  slug: string;
  name: string;
  category: "Sites" | "Sistemas" | "Branding" | "Experiências";
  niche: string;
  desc: string;
  tags: string[];
  image: string;
};

export const CASES: CaseItem[] = [
  {
    slug: "convite-ana",
    name: "15 anos Ana Carolina",
    category: "Experiências",
    niche: "Convite interativo",
    desc: "Convite digital com save the date, confirmação e galeria em tempo real na festa.",
    tags: ["Convite digital", "Galeria realtime", "QR Code"],
    image: "/cases/convite-ana.jpg",
  },
  {
    slug: "panela-da-roca",
    name: "Panela da Roça",
    category: "Sistemas",
    niche: "Restaurante",
    desc: "Avaliação via QR, gestão e atendimento conectando salão e digital.",
    tags: ["QR Code", "Gestão", "Avaliações"],
    image: "/cases/panela-da-roca.png",
  },
  {
    slug: "gymfitness",
    name: "GymFitness Campos",
    category: "Sistemas",
    niche: "Academia",
    desc: "Check-in digital e gestão pensados para a rotina da academia.",
    tags: ["Check-in", "Gestão", "App"],
    image: "/cases/gymfitness.png",
  },
  {
    slug: "alien-burger",
    name: "Alien Burger",
    category: "Sites",
    niche: "Hamburgueria",
    desc: "Site de pedidos com identidade ousada e social media com personalidade própria.",
    tags: ["Site de pedidos", "Identidade visual", "Social media"],
    image: "/cases/alien-burger.png",
  },
  {
    slug: "connectink",
    name: "ConnectINK",
    category: "Sistemas",
    niche: "Estúdios de tatuagem",
    desc: "Plataforma de agendamento, portfólio e orçamento inteligente para tatuadores.",
    tags: ["Plataforma web", "Branding", "UX"],
    image: "/cases/connectink.jpg",
  },
  {
    slug: "quintal-tia-vi",
    name: "Quintal da Tia Vi",
    category: "Sites",
    niche: "Espaço infantil",
    desc: "Site e identidade completa para espaço de contraturno escolar sem telas.",
    tags: ["Site", "Branding", "Social media"],
    image: "/cases/quintal-tia-vi.png",
  },
  {
    slug: "design-vita",
    name: "Design Vita",
    category: "Branding",
    niche: "Clínica odontológica",
    desc: "Identidade visual e presença digital para clínica de alto padrão.",
    tags: ["Logo", "Identidade visual", "Social media"],
    image: "/cases/design-vita.png",
  },
  {
    slug: "inspire-run",
    name: "Inspire Run",
    category: "Branding",
    niche: "Evento de corrida",
    desc: "Branding completo para evento: energia e pertencimento desde o primeiro olhar.",
    tags: ["Branding", "Identidade visual", "Materiais"],
    image: "/cases/inspire-run.png",
  },
  {
    slug: "mahaflow",
    name: "MahaFlow",
    category: "Sistemas",
    niche: "Gestão",
    desc: "Sistema de gestão e automação de fluxos, do digital ao material impresso.",
    tags: ["Sistema de gestão", "Automação", "Identidade visual"],
    image: "/cases/mahaflow.png",
  },
  {
    slug: "liliana",
    name: "Liliana Cerimonialista",
    category: "Branding",
    niche: "Eventos",
    desc: "Identidade e presença digital elegante para cerimonialista referência na região.",
    tags: ["Branding", "Site", "Social media"],
    image: "/cases/liliana.png",
  },
  {
    slug: "roots-vibe",
    name: "Roots Vibe",
    category: "Branding",
    niche: "Lifestyle",
    desc: "Branding completo e site para marca com propósito e estética própria.",
    tags: ["Branding completo", "Site", "Identidade visual"],
    image: "/cases/roots-vibe.png",
  },
  {
    slug: "gigidog",
    name: "GigiDog",
    category: "Branding",
    niche: "Pet shop",
    desc: "Identidade, uniformes e materiais promocionais para pet shop.",
    tags: ["Logo", "Identidade visual", "Materiais"],
    image: "/cases/gigidog.png",
  },
  {
    slug: "rota-facil",
    name: "Rota Fácil",
    category: "Sistemas",
    niche: "Transporte escolar",
    desc: "Gestão de rotas com check-in por QR Code e painel administrativo completo.",
    tags: ["Sistema web", "App", "QR Code"],
    image: "/cases/rota-facil.png",
  },
  {
    slug: "rancho-da-ilha",
    name: "Rancho da Ilha",
    category: "Sites",
    niche: "Restaurante",
    desc: "Branding e experiência digital para restaurante premium.",
    tags: ["Branding", "Site", "Identidade visual"],
    image: "/cases/rancho-da-ilha.png",
  },
  {
    slug: "orogenese",
    name: "OroGenese",
    category: "Branding",
    niche: "Vestuário",
    desc: "Identidade com padrão exclusivo para marca de vestuário outdoor.",
    tags: ["Logo", "Identidade visual", "Vestuário"],
    image: "/cases/orogenese.jpg",
  },
];

export const METHOD = [
  {
    n: "01",
    name: "Diagnóstico estratégico",
    desc: "Entendemos posicionamento, público e os pontos que travam o seu negócio.",
  },
  {
    n: "02",
    name: "Mapeamento territorial",
    desc: "Fluxo de pessoas, concorrentes e oportunidades da sua região.",
  },
  {
    n: "03",
    name: "Posicionamento de marca",
    desc: "Identidade e comunicação que diferenciam e elevam o seu negócio.",
  },
  {
    n: "04",
    name: "Presença digital estruturada",
    desc: "Site, redes, Google e conteúdo com autoridade no digital local.",
  },
  {
    n: "05",
    name: "Experiência física da marca",
    desc: "QR, NFC, embalagens e materiais que reforçam a marca no mundo real.",
  },
  {
    n: "06",
    name: "Aquisição de clientes",
    desc: "Campanhas, tráfego e ações locais para atrair cliente novo.",
  },
  {
    n: "07",
    name: "Parcerias estratégicas",
    desc: "Eventos, influenciadores e negócios parceiros para ampliar alcance.",
  },
  {
    n: "08",
    name: "Retenção e fidelização",
    desc: "Atendimento, follow-up e experiência que transformam cliente em fã.",
  },
];

export const TECHS = ["Vercel", "Next.js", "Supabase", "n8n", "OpenAI", "Node.js"];

export const NICHES = [
  "Restaurantes",
  "Academias",
  "Eventos",
  "Salões de festa",
  "Clínicas",
  "Pet shops",
  "Lojas locais",
  "Cerimonialistas",
  "Transporte escolar",
  "Profissionais autônomos",
];

export const NAV = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#convites", label: "Convites" },
  { href: "#cases", label: "Cases" },
  { href: "#metodo", label: "Método" },
  { href: "#contato", label: "Contato" },
];
