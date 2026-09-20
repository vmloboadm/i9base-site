export type MidiaItem = {
  src: string;
  alt: string;
  kind: "video" | "foto";
  poster?: string;
};

// Mídia real de festas de clientes. Para adicionar: jogue mp4/jpg em
// public/convites/ e registre aqui. Vazio = placeholders somem sozinhos.
export const CONVITE_VIDEOS: MidiaItem[] = [
  {
    src: "/convites/festa.mp4",
    alt: "Abertura de convite de boteco",
    kind: "video",
    poster: "/convites/festa-poster.jpg",
  },
];

const FOTOS = [
  "Quinze anos: coroa e sapato da debutante",
  "Lista de presentes integrada no celular",
  "Detalhe da decoração da festa",
  "Mesa de doces e bolo",
  "Pista e iluminação",
  "Família celebrando",
  "Mesa dos convidados",
  "Lembrancinhas",
  "Cerimonial da festa",
  "Brinde dos noivos",
  "Pista cheia",
];

export const CONVITE_FOTOS: MidiaItem[] = FOTOS.map((alt, i) => ({
  src: `/convites/festa-${String(i + 1).padStart(2, "0")}.webp`,
  alt,
  kind: "foto",
}));
