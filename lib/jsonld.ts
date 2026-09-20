export const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://i9base.com.br/#org",
      name: "i9BASE",
      url: "https://i9base.com.br",
      slogan: "Sua base de tecnologia e inovação",
      sameAs: ["https://www.instagram.com/i9base"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://i9base.com.br/#local",
      name: "i9BASE",
      url: "https://i9base.com.br",
      telephone: "+55-21-99835-1729",
      priceRange: "R$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Campos dos Goytacazes",
        addressRegion: "RJ",
        addressCountry: "BR",
      },
      areaServed: "Campos dos Goytacazes e região",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "WebSite",
      url: "https://i9base.com.br",
      name: "i9BASE",
      inLanguage: "pt-BR",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Vocês atendem 24h mesmo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O WhatsApp da i9BASE tem atendimento automático todos os dias, a qualquer hora. O que precisa de gente cai para a equipe.",
          },
        },
        {
          "@type": "Question",
          name: "Como funciona o orçamento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Todo orçamento é personalizado depois de entender o caso. Chama no WhatsApp, conta o que você precisa e recebe a proposta.",
          },
        },
        {
          "@type": "Question",
          name: "Vocês atendem só em Campos dos Goytacazes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A base é em Campos dos Goytacazes e região, e atendemos projetos remotos de qualquer lugar do Brasil.",
          },
        },
        {
          "@type": "Question",
          name: "Vocês fazem parceria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Temos parceria oficial de produção física com a Peça Tech e modelo B2B para gráficas, lojas e profissionais que querem oferecer digital.",
          },
        },
        {
          "@type": "Question",
          name: "Com quanto tempo de antecedência peço meu convite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Quanto antes, melhor. Chama no WhatsApp com a data da festa que a gente confirma o prazo na hora.",
          },
        },
      ],
    },
  ],
};
