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
  base: string;
};

export const SOLUTIONS: Solution[] = [
  {
    name: "Sites e Landing Pages",
    desc: "Site institucional, página de campanha ou hub que carrega rápido e converte visita em contato.",
    base: "a partir de R$ 300",
  },
  {
    name: "Sistemas Personalizados",
    desc: "Aplicação web, painel ou dashboard feito sob medida para a sua operação.",
    base: "a partir de R$ 1.500",
  },
  {
    name: "Automação de Processos",
    desc: "Integrações e fluxos que tiram o trabalho manual do seu dia a dia.",
    base: "a partir de R$ 300",
  },
  {
    name: "Atendimento com IA",
    desc: "Agente que atende, qualifica o cliente e registra tudo no CRM, 24h por dia.",
    base: "a partir de R$ 250/mês",
  },
  {
    name: "WhatsApp Automatizado",
    desc: "Seu WhatsApp como canal de venda, com funil, follow-up e histórico organizado.",
    base: "a partir de R$ 400/mês",
  },
  {
    name: "QR Code e NFC",
    desc: "Placa, cardápio, etiqueta ou cartão que leva o cliente direto ao seu digital.",
    base: "a partir de R$ 300",
  },
  {
    name: "Experiências Digitais",
    desc: "Convites interativos e galeria de fotos em tempo real para eventos.",
    base: "a partir de R$ 120",
  },
  {
    name: "Gestão e Consultoria",
    desc: "Diagnóstico e organização digital: presença, processos e operação.",
    base: "a partir de R$ 300",
  },
];

export type CaseItem = {
  slug: string;
  name: string;
  category: "Sites" | "Sistemas" | "Branding";
  niche: string;
  desc: string;
  tags: string[];
  image: string;
};

export const CASES: CaseItem[] = [
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

export const NAV = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#cases", label: "Cases" },
  { href: "#metodo", label: "Método" },
  { href: "#contato", label: "Contato" },
];
