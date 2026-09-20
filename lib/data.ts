export const WHATSAPP_NUMBER = "5521998351729";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_URL = "https://www.instagram.com/i9base";
export const CONTACT_EMAIL = "i9base.tech@gmail.com";

export function waLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export type Track = {
  id: string;
  name: string;
  desc: string;
};

export const TRACKS: Track[] = [
  {
    id: "presenca",
    name: "Presença digital",
    desc: "Sua marca visível e profissional em todo lugar que o cliente procura.",
  },
  {
    id: "atendimento",
    name: "Atendimento e vendas",
    desc: "Nenhum contato esfria: do primeiro oi ao pós-venda, tudo registrado.",
  },
  {
    id: "experiencias",
    name: "Experiências",
    desc: "Momentos que o cliente vive e compartilha, do convite até a festa.",
  },
  {
    id: "operacao",
    name: "Operação",
    desc: "Sistemas e automações que fazem o negócio rodar sem apagar incêndio.",
  },
];

export type Solution = {
  name: string;
  desc: string;
  msg: string;
  track: string;
};

export const SOLUTIONS: Solution[] = [
  {
    name: "Sites e Landing Pages",
    desc: "Site institucional, página de campanha ou hub que carrega rápido e converte visita em contato.",
    msg: "Oi! Quero um site para o meu negócio.",
    track: "presenca",
  },
  {
    name: "Identidade Visual",
    desc: "Logo e identidade que posicionam sua marca, do cartão ao Instagram.",
    msg: "Oi! Preciso de identidade visual para minha marca.",
    track: "presenca",
  },
  {
    name: "QR Code e NFC",
    desc: "Placa, cardápio, etiqueta ou cartão que leva o cliente direto ao seu digital.",
    msg: "Oi! Quero QR Code e NFC para o meu negócio.",
    track: "presenca",
  },
  {
    name: "Atendimento com IA",
    desc: "Agente que atende, qualifica o cliente e registra tudo no CRM, 24h por dia.",
    msg: "Oi! Quero um atendimento com IA no meu negócio.",
    track: "atendimento",
  },
  {
    name: "WhatsApp Automatizado",
    desc: "Seu WhatsApp como canal de venda, com funil, follow-up e histórico organizado.",
    msg: "Oi! Quero automatizar meu WhatsApp.",
    track: "atendimento",
  },
  {
    name: "CRM e Funil de Vendas",
    desc: "Pipeline, follow-up automático e histórico de cada cliente num só lugar.",
    msg: "Oi! Quero um CRM para organizar minhas vendas.",
    track: "atendimento",
  },
  {
    name: "Convites Interativos",
    desc: "Convite digital com confirmação, mapa e galeria de fotos em tempo real na festa.",
    msg: "Oi! Quero um convite como esse para meu evento.",
    track: "experiencias",
  },
  {
    name: "Experiências Digitais",
    desc: "Hubs de evento, galerias ao vivo e interações que conectam o físico ao digital.",
    msg: "Oi! Quero uma experiência digital para meu evento.",
    track: "experiencias",
  },
  {
    name: "Curadoria Digital",
    desc: "Você precisa, a gente resolve e entrega pronto: pesquisa, compra e implantação.",
    msg: "Oi! Preciso resolver uma questão digital.",
    track: "experiencias",
  },
  {
    name: "Sistemas Personalizados",
    desc: "Aplicação web, painel ou dashboard feito sob medida para a sua operação.",
    msg: "Oi! Preciso de um sistema para a minha operação.",
    track: "operacao",
  },
  {
    name: "Automação de Processos",
    desc: "Integrações e fluxos que tiram o trabalho manual do seu dia a dia.",
    msg: "Oi! Quero automatizar processos no meu negócio.",
    track: "operacao",
  },
  {
    name: "Gestão e Consultoria",
    desc: "Diagnóstico e organização digital: presença, processos e operação.",
    msg: "Oi! Quero um diagnóstico do meu negócio.",
    track: "operacao",
  },
];

export type CaseImage = { src: string; alt: string };

export type CaseItem = {
  slug: string;
  name: string;
  category: "Sites" | "Sistemas" | "Branding" | "Experiências";
  niche: string;
  desc: string;
  tags: string[];
  images: CaseImage[];
  result?: string;
};

const img = (src: string, alt: string): CaseImage => ({ src, alt });

export const CASES: CaseItem[] = [
  {
    slug: "panela-da-roca",
    name: "Panela da Roça",
    category: "Sistemas",
    niche: "Restaurante",
    desc: "Avaliação via QR, gestão e atendimento conectando salão e digital.",
    tags: ["QR Code", "Gestão", "Avaliações"],
    images: [img("/cases/panela-da-roca.png", "Peça de avaliação via QR da Panela da Roça")],
    result: "Avaliações virando desconto e retorno",
  },
  {
    slug: "afranio-tattoo",
    name: "Afranio Tattoo",
    category: "Sistemas",
    niche: "Estúdio de tatuagem",
    desc: "Site com portfólio e orçamento inteligente para tatuador em Campos.",
    tags: ["Site", "Portfólio", "Orçamento inteligente"],
    images: [
      img("/cases/afranio-hero.png", "Site do estúdio Afranio Tattoo"),
      img("/cases/afranio-port.png", "Portfólio de tatuagens do estúdio"),
      img("/cases/afranio-cta.png", "Chamada para orçamento do estúdio"),
      img("/cases/afranio-logo.png", "Logo do estúdio Afranio Tattoo"),
    ],
  },
  {
    slug: "s7ven",
    name: "S7ven Perfumaria",
    category: "Branding",
    niche: "Perfumaria",
    desc: "Identidade e campanha para perfumaria: fragrância como posicionamento.",
    tags: ["Branding", "Campanha", "Identidade visual"],
    images: [
      img("/cases/s7ven-banner.png", "Campanha da perfumaria S7ven"),
      img("/cases/s7ven-cartao.png", "Cartão de visita S7ven"),
      img("/cases/s7ven-wind.png", "Windbanner S7ven"),
    ],
  },
  {
    slug: "personalizados",
    name: "Papelaria e Personalizados",
    category: "Branding",
    niche: "Produção física",
    desc: "Canecas, travesseiros, adesivos e velas com identidade, via parceira Peça Tech.",
    tags: ["Brindes", "Papelaria", "Parceria Peça Tech"],
    images: [
      img("/cases/pers-caneca.jpg", "Caneca personalizada"),
      img("/cases/pers-travesseiro.jpg", "Travesseiro personalizado"),
      img("/cases/pers-adesivo.png", "Adesivo personalizado"),
      img("/cases/pers-vela.jpg", "Vela aromática personalizada"),
    ],
  },
  {
    slug: "alien-burger",
    name: "Alien Burger",
    category: "Sites",
    niche: "Hamburgueria",
    desc: "Site de pedidos com identidade ousada e social media com personalidade própria.",
    tags: ["Site de pedidos", "Identidade visual", "Social media"],
    images: [
      img("/cases/alien-burger.png", "Site de pedidos Alien Burger"),
      img("/cases/alien-chef.png", "Arte Alien Chef"),
      img("/cases/alien-mordida.png", "Arte Alien Mordida"),
      img("/cases/alien-design.png", "Design criativo Alien Burger"),
    ],
  },
  {
    slug: "connectink",
    name: "ConnectINK",
    category: "Sistemas",
    niche: "Estúdios de tatuagem",
    desc: "Plataforma de agendamento, portfólio e orçamento inteligente para tatuadores.",
    tags: ["Plataforma web", "Branding", "UX"],
    images: [img("/cases/connectink.jpg", "Plataforma ConnectINK para tatuadores")],
  },
  {
    slug: "quintal-tia-vi",
    name: "Quintal da Tia Vi",
    category: "Sites",
    niche: "Espaço infantil",
    desc: "Site e identidade completa para espaço de contraturno escolar sem telas.",
    tags: ["Site", "Branding", "Social media"],
    images: [
      img("/cases/quintal-tia-vi.png", "Site do Quintal da Tia Vi"),
      img("/cases/quintal-2.png", "Identidade Quintal da Tia Vi"),
    ],
  },
  {
    slug: "design-vita",
    name: "Design Vita",
    category: "Branding",
    niche: "Clínica odontológica",
    desc: "Identidade visual e presença digital para clínica de alto padrão.",
    tags: ["Logo", "Identidade visual", "Social media"],
    images: [img("/cases/design-vita.png", "Identidade Design Vita")],
  },
  {
    slug: "inspire-run",
    name: "Inspire Run",
    category: "Branding",
    niche: "Evento de corrida",
    desc: "Branding completo para evento: energia e pertencimento desde o primeiro olhar.",
    tags: ["Branding", "Identidade visual", "Materiais"],
    images: [img("/cases/inspire-run.png", "Branding Inspire Run")],
  },
  {
    slug: "mahaflow",
    name: "MahaFlow",
    category: "Sistemas",
    niche: "Gestão",
    desc: "Sistema de gestão e automação de fluxos, do digital ao material impresso.",
    tags: ["Sistema de gestão", "Automação", "Identidade visual"],
    images: [
      img("/cases/mahaflow.png", "Sistema MahaFlow"),
      img("/cases/mahaflow-wind.png", "Windbanner MahaFlow"),
      img("/cases/mahaflow-cartao.png", "Cartão de visita MahaFlow"),
      img("/cases/mahaflow-chaveiro.png", "Chaveiro MahaFlow"),
    ],
  },
  {
    slug: "liliana",
    name: "Liliana Cerimonialista",
    category: "Branding",
    niche: "Eventos",
    desc: "Identidade e presença digital elegante para cerimonialista referência na região.",
    tags: ["Branding", "Site", "Social media"],
    images: [
      img("/cases/liliana.png", "Site Liliana Cerimonialista"),
      img("/cases/liliana-agenda.png", "Agenda Liliana Cerimonialista"),
      img("/cases/liliana-cartaz.png", "Cartaz Liliana Cerimonialista"),
      img("/cases/liliana-cartao.png", "Cartão de visita Liliana"),
    ],
  },
  {
    slug: "roots-vibe",
    name: "Roots Vibe",
    category: "Branding",
    niche: "Lifestyle",
    desc: "Branding completo e site para marca com propósito e estética própria.",
    tags: ["Branding completo", "Site", "Identidade visual"],
    images: [
      img("/cases/roots-vibe.png", "Landing page Roots Vibe"),
      img("/cases/roots-carrossel.png", "Carrossel Roots Vibe"),
      img("/cases/roots-logo.png", "Logo Roots Vibe"),
    ],
  },
  {
    slug: "gigidog",
    name: "GigiDog",
    category: "Branding",
    niche: "Pet shop",
    desc: "Identidade, uniformes e materiais promocionais para pet shop.",
    tags: ["Logo", "Identidade visual", "Materiais"],
    images: [
      img("/cases/gigidog.png", "Combo GigiDog"),
      img("/cases/gigidog-uniforme.png", "Uniforme GigiDog"),
      img("/cases/gigidog-wind.png", "Windbanner GigiDog"),
      img("/cases/gigidog-cardapio.png", "Cardápio GigiDog"),
    ],
  },
  {
    slug: "rota-facil",
    name: "Rota Fácil",
    category: "Sistemas",
    niche: "Transporte escolar",
    desc: "Gestão de rotas com check-in por QR Code e painel administrativo completo.",
    tags: ["Sistema web", "App", "QR Code"],
    images: [
      img("/cases/rota-facil.png", "Apresentação Rota Fácil"),
      img("/cases/rota-checkin.png", "Check-in por QR Code Rota Fácil"),
    ],
  },
  {
    slug: "rancho-da-ilha",
    name: "Rancho da Ilha",
    category: "Sites",
    niche: "Restaurante",
    desc: "Branding e experiência digital para restaurante premium.",
    tags: ["Branding", "Site", "Identidade visual"],
    images: [
      img("/cases/rancho-da-ilha.png", "Rancho da Ilha"),
      img("/cases/rancho-kitexclusivo.png", "Kit exclusivo Rancho da Ilha"),
    ],
  },
  {
    slug: "orogenese",
    name: "OroGenese",
    category: "Branding",
    niche: "Vestuário",
    desc: "Identidade com padrão exclusivo para marca de vestuário outdoor.",
    tags: ["Logo", "Identidade visual", "Vestuário"],
    images: [
      img("/cases/orogenese.jpg", "Logo OroGenese"),
      img("/cases/oro-camiseta.jpg", "Camiseta OroGenese"),
      img("/cases/oro-moletom.jpg", "Moletom OroGenese"),
      img("/cases/oro-padrao.jpg", "Padrão topográfico OroGenese"),
    ],
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

export const SLOGAN = "Sua base de tecnologia e inovação";

export const INVITES = [
  {
    name: "15 anos · Ana Carolina",
    url: "https://ana-carolina-15-anos.vercel.app/",
  },
  {
    name: "1 ano · Vicente",
    url: "https://vicente-1-ano.vercel.app/",
  },
];
