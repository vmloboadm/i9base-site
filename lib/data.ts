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
  badge: string;
};

export const SOLUTIONS: Solution[] = [
  {
    name: "Sites e Landing Pages",
    desc: "Site institucional, página de campanha ou hub que carrega rápido e converte visita em contato.",
    msg: "Oi! Quero um site para o meu negócio.",
    badge: "Do QR ao pedido em poucos toques",
    track: "presenca",
  },
  {
    name: "Identidade Visual",
    desc: "Logo e identidade que posicionam sua marca, do cartão ao Instagram.",
    msg: "Oi! Preciso de identidade visual para minha marca.",
    badge: "Marca que impõe respeito",
    track: "presenca",
  },
  {
    name: "QR Code e NFC",
    desc: "Placa, cardápio, etiqueta ou cartão que leva o cliente direto ao seu digital.",
    msg: "Oi! Quero QR Code e NFC para o meu negócio.",
    badge: "Do físico ao digital em 1 scan",
    track: "presenca",
  },
  {
    name: "Atendimento com IA",
    desc: "Agente que atende, qualifica o cliente e registra tudo no CRM, 24h por dia.",
    msg: "Oi! Quero um atendimento com IA no meu negócio.",
    badge: "Resposta em segundos, 24h",
    track: "atendimento",
  },
  {
    name: "WhatsApp Automatizado",
    desc: "Seu WhatsApp como canal de venda, com funil, follow-up e histórico organizado.",
    msg: "Oi! Quero automatizar meu WhatsApp.",
    badge: "Nenhum contato esfria",
    track: "atendimento",
  },
  {
    name: "CRM e Funil de Vendas",
    desc: "Pipeline, follow-up automático e histórico de cada cliente num só lugar.",
    msg: "Oi! Quero um CRM para organizar minhas vendas.",
    badge: "Todo cliente no funil",
    track: "atendimento",
  },
  {
    name: "Convites Interativos",
    desc: "Convite digital com confirmação, mapa e galeria de fotos em tempo real na festa.",
    msg: "Oi! Quero um convite como esse para meu evento.",
    badge: "Confirmação em 1 toque",
    track: "experiencias",
  },
  {
    name: "Experiências Digitais",
    desc: "Hubs de evento, galerias ao vivo e interações que conectam o físico ao digital.",
    msg: "Oi! Quero uma experiência digital para meu evento.",
    badge: "Festa que vira memória",
    track: "experiencias",
  },
  {
    name: "Curadoria Digital",
    desc: "Você precisa, a gente resolve e entrega pronto: pesquisa, compra e implantação.",
    msg: "Oi! Preciso resolver uma questão digital.",
    badge: "Você pede, a gente entrega",
    track: "experiencias",
  },
  {
    name: "Sistemas Personalizados",
    desc: "Aplicação web, painel ou dashboard feito sob medida para a sua operação.",
    msg: "Oi! Preciso de um sistema para a minha operação.",
    badge: "Sua operação num painel só",
    track: "operacao",
  },
  {
    name: "Automação de Processos",
    desc: "Integrações e fluxos que tiram o trabalho manual do seu dia a dia.",
    msg: "Oi! Quero automatizar processos no meu negócio.",
    badge: "Menos manual, mais venda",
    track: "operacao",
  },
  {
    name: "Gestão e Consultoria",
    desc: "Diagnóstico e organização digital: presença, processos e operação.",
    msg: "Oi! Quero um diagnóstico do meu negócio.",
    badge: "Decisão com número",
    track: "operacao",
  },
  {
    name: "E-commerce",
    desc: "Loja virtual com catálogo, pedido e pagamento para vender todo dia.",
    msg: "Oi! Quero uma loja virtual para o meu negócio.",
    badge: "Loja aberta todo dia",
    track: "operacao",
  },
  {
    name: "Aplicativos",
    desc: "App sob medida para o seu público, do pedido ao acompanhamento.",
    msg: "Oi! Quero um aplicativo para o meu negócio.",
    badge: "Seu negócio no bolso",
    track: "operacao",
  },
  {
    name: "Social Media e Tráfego",
    desc: "Conteúdo que posiciona e campanhas que trazem cliente novo.",
    msg: "Oi! Quero social media e tráfego para o meu negócio.",
    badge: "Cliente novo todo mês",
    track: "presenca",
  },
];

export type CaseImage = { src: string; alt: string; placeholder?: boolean };

export const PANELA_PLACEHOLDER: CaseImage = {
  src: "",
  alt: "[INSERIR IMAGEM REAL DO CASE]",
  placeholder: true,
};

export type CaseItem = {
  slug: string;
  name: string;
  category: "Sites" | "Sistemas" | "Branding" | "Experiências" | "Materiais";
  niche: string;
  desc: string;
  tags: string[];
  images: CaseImage[];
  result?: string;
};

const img = (src: string, alt: string): CaseImage => ({ src, alt });

export const CASES: CaseItem[] = [
  {
    slug: "paga-facil",
    name: "Paga Fácil",
    category: "Sistemas",
    niche: "Cobrança e organização",
    desc: "Plataforma para organizar e cobrar dívidas informais sem constrangimento.",
    tags: ["Sistema web", "Cobrança", "Organização"],
    images: [
      img("/cases/paga-1.png", "Plataforma Paga Fácil"),
      img("/cases/paga-2.png", "Organização de dívidas Paga Fácil"),
      img("/cases/paga-3.png", "Cobrança Paga Fácil"),
    ],
  },
  {
    slug: "veloz",
    name: "Veloz Rastreamento",
    category: "Sistemas",
    niche: "Rastreamento veicular",
    desc: "Presença digital para empresa de rastreamento veicular.",
    tags: ["Site", "Branding", "Social media"],
    images: [
      img("/cases/veloz-1.png", "Veloz Rastreamento"),
      img("/cases/veloz-2.jpg", "Rastreamento veicular"),
      img("/cases/veloz-3.png", "Arte Veloz Rastreamento"),
      img("/cases/veloz-4.png", "Post Veloz Rastreamento"),
    ],
  },
  {
    slug: "ensaio",
    name: "Ensaio Fotográfico",
    category: "Branding",
    niche: "Fotografia",
    desc: "Identidade e peças para cobertura de ensaios fotográficos.",
    tags: ["Branding", "Social media"],
    images: [
      img("/cases/ensaio-1.jpg", "Ensaio fotográfico"),
      img("/cases/ensaio-2.png", "Post ensaio fotográfico"),
    ],
  },
  {
    slug: "tia-josy",
    name: "Transporte Tia Josy",
    category: "Branding",
    niche: "Transporte escolar",
    desc: "Identidade carinhosa e confiável para transporte escolar.",
    tags: ["Logo", "Identidade visual"],
    images: [img("/cases/tiajosy-1.jpg", "Transporte Escolar Tia Josy")],
  },
  {
    slug: "gengibre",
    name: "Gengibre",
    category: "Branding",
    niche: "Alimentação",
    desc: "Cartão e identidade para marca de gengibre.",
    tags: ["Branding", "Cartão"],
    images: [img("/cases/gengibre-1.png", "Cartão Gengibre")],
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
    niche: "Hot dog",
    desc: "Identidade, uniformes e materiais para o hot dog mais completo e quentinho da cidade.",
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
  {
    slug: "personalizados",
    name: "Papelaria e Personalizados",
    category: "Materiais",
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
    slug: "panela-da-roca",
    name: "Panela da Roça",
    category: "Sistemas",
    niche: "Restaurante",
    desc: "Avaliação via QR, gestão e atendimento conectando salão e digital.",
    tags: ["QR Code", "Gestão", "Avaliações"],
    images: [PANELA_PLACEHOLDER],
    result: "Avaliações virando desconto e retorno",
  },
];

export const METHOD = [
  {
    n: "01",
    name: "Diagnóstico estratégico",
    desc: "Analisamos posicionamento, público, concorrência e pontos fracos do seu negócio para construir uma base sólida.",
  },
  {
    n: "02",
    name: "Mapeamento territorial",
    desc: "Fluxo de pessoas, concorrentes próximos e oportunidades da região identificados com precisão.",
  },
  {
    n: "03",
    name: "Posicionamento de marca",
    desc: "Branding, identidade visual, comunicação e proposta de valor que diferencia e eleva seu negócio.",
  },
  {
    n: "04",
    name: "Presença digital estruturada",
    desc: "Site, redes sociais, Google e conteúdo com autoridade para dominar o ambiente digital local.",
  },
  {
    n: "05",
    name: "Experiência física da marca",
    desc: "Banners, copos, brindes, embalagens e materiais para eventos que reforçam sua identidade no mundo real.",
  },
  {
    n: "06",
    name: "Aquisição de clientes",
    desc: "Campanhas, tráfego pago, ações locais e parcerias para atrair novos clientes de forma consistente.",
  },
  {
    n: "07",
    name: "Parcerias estratégicas",
    desc: "Eventos, influenciadores locais e outros negócios para ampliar seu alcance e autoridade.",
  },
  {
    n: "08",
    name: "Retenção e fidelização",
    desc: "Experiência no atendimento, percepção de valor e indicações para transformar clientes em fãs.",
  },
];

export const TECHS = ["Vercel", "Next.js", "Supabase", "n8n", "OpenAI", "Node.js"];

export const OFERTAS = [
  "Sites Profissionais",
  "Sistemas Web",
  "Identidade Visual",
  "Branding",
  "Marketing Digital",
  "Social Media",
  "Tráfego Pago",
  "Landing Pages",
  "E-commerce",
  "Aplicativos",
  "Automação",
  "QR Code e NFC",
  "Convites Interativos",
  "Uniformes",
  "Brindes",
  "Embalagens",
  "Materiais Personalizados",
  "Eventos",
];

export const NAV = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#crm", label: "CRM" },
  { href: "/convites", label: "Convites" },
  { href: "#cases", label: "Cases" },
  { href: "#artes", label: "Artes" },
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

export type Arte = { src: string; alt: string };

export const ARTES: Arte[] = [
  { src: "/artes/alien-chef-com-rodap.png", alt: "Arte Alien Chef" },
  { src: "/artes/alien-mordida.png", alt: "Arte Alien Mordida" },
  { src: "/artes/alien-nova-estrategia.png", alt: "Nova estratégia Alien Burger" },
  { src: "/cases/gigidog-uniforme.png", alt: "Uniforme GigiDog" },
  { src: "/cases/gigidog-wind.png", alt: "Windbanner GigiDog" },
  { src: "/cases/oro-camiseta.jpg", alt: "Camiseta OroGenese" },
  { src: "/cases/oro-moletom.jpg", alt: "Moletom OroGenese" },
  { src: "/cases/oro-padrao.jpg", alt: "Padrão topográfico OroGenese" },
  { src: "/cases/s7ven-wind.png", alt: "Windbanner S7ven" },
  { src: "/cases/mahaflow-wind.png", alt: "Windbanner MahaFlow" },
  { src: "/artes/mockup-avental-churrasquinho-bom-sabor.jpg", alt: "Avental Churrasquinho Bom Sabor" },
  { src: "/artes/post-18-experiencia-cliente.jpg", alt: "Post experiência do cliente" },
  { src: "/artes/arte-instagram-com-logo.png", alt: "Arte para Instagram" },
  { src: "/artes/arte-instagram-self-service.png", alt: "Arte self service" },
];

export const DIFERENCIAL: { ruim: string; bom: string }[] = [
  {
    ruim: "Foco apenas em social media",
    bom: "Estratégia completa e integrada",
  },
  {
    ruim: "Só tráfego pago, sem estratégia",
    bom: "Marca forte e bem posicionada",
  },
  {
    ruim: "Sem diagnóstico do negócio",
    bom: "Presença digital estruturada",
  },
  {
    ruim: "Sem identidade de marca sólida",
    bom: "Experiência física da marca",
  },
  {
    ruim: "Sem visão de crescimento a longo prazo",
    bom: "Aquisição e fidelização de clientes",
  },
  {
    ruim: "Resultados fragmentados e inconsistentes",
    bom: "Crescimento real e mensurável",
  },
];

export const STATS: [string, string][] = [
  ["+40", "projetos entregues"],
  ["+10", "nichos atendidos"],
  ["8", "pilares do método"],
];

export const OFERTAS_STRIP = [
  "Sites e Landing Pages",
  "Sistemas e CRM",
  "Automação WhatsApp",
  "QR e NFC",
  "Identidade Visual",
  "IA para Conteúdo",
  "Convites Interativos",
  "Cardápio Digital",
  "Gestão de Academias",
  "Integração ERP",
];

export type Pacote = {
  id: string;
  name: string;
  desc: string;
  features: string[];
  destaque?: boolean;
};

export const PACOTES: Pacote[] = [
  {
    id: "essencial",
    name: "Essencial",
    desc: "O convite digital para celebrar sem complicação.",
    features: [
      "Convite digital personalizado",
      "Confirmação de presença",
      "Mapa e informações do evento",
      "Link direto no WhatsApp",
    ],
  },
  {
    id: "completo",
    name: "Completo",
    desc: "A experiência que o convidado vive do início ao fim.",
    features: [
      "Tudo do Essencial",
      "Música e contagem regressiva",
      "Galeria de fotos em tempo real",
      "Lista de presentes e PIX",
    ],
    destaque: true,
  },
  {
    id: "premium",
    name: "Premium",
    desc: "Do digital ao impresso, a festa inteira na mesma identidade.",
    features: [
      "Tudo do Completo",
      "Centro de mesa com QR",
      "Tag NFC da festa",
      "Impressos combinando",
    ],
  },
];

export const CONVITE_FEATURES = [
  { name: "Galeria em tempo real", desc: "Fotos dos convidados entram na hora." },
  { name: "Música", desc: "Trilha do evento no próprio convite." },
  { name: "RSVP em 1 toque", desc: "Confirmação sem cadastro e sem app." },
  { name: "Mapa", desc: "Como chegar, sem WhatsApp perdido." },
  { name: "Presentes e PIX", desc: "Lista e chave na mesma tela." },
  { name: "Contagem regressiva", desc: "Ansiedade boa até o grande dia." },
];

export const CONVITE_FLOW = [
  {
    n: "01",
    name: "QR no impresso",
    desc: "Centro de mesa, cardápio e tag com QR levam ao convite digital.",
  },
  {
    n: "02",
    name: "Confirmação em 1 toque",
    desc: "O convidado abre no celular e confirma. Você acompanha sem planilha.",
  },
  {
    n: "03",
    name: "Galeria ao vivo",
    desc: "Na festa, as fotos entram na galeria em tempo real para todos verem.",
  },
];

export type Depoimento = { nome: string; papel: string; texto: string };

export const DEPOIMENTOS: Depoimento[] = [];

export const VALORES_BASE = [
  { nome: 'Currículo Profissional Premium', base: 'R$ 79' },
  { nome: 'Otimização de LinkedIn + banner', base: 'R$ 97' },
  { nome: 'Currículo + LinkedIn (combo)', base: 'R$ 147' },
  { nome: 'Carta de Apresentação', base: 'R$ 57' },
  { nome: 'Portfólio Profissional (PDF)', base: 'R$ 197' },
  { nome: 'Convite Digital Imersivo', base: 'R$ 127' },
  { nome: 'Quadro Netflix Personalizado', base: 'R$ 32' },
  { nome: 'Combo Eterno (Netflix + Polaroids + Carta)', base: 'R$ 64' },
];
