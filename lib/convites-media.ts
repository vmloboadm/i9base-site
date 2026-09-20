export type MidiaItem = {
  src: string;
  alt: string;
  kind: "video" | "foto";
};

// Alimentado pela pasta public/convites/. Vinicius: jogue mp4 (h264) e
// jpg/png em public/convites/ e avise no chat que eu registro aqui.
// Vazio = a página mostra placeholders e o aviso some sozinho.
export const CONVITE_VIDEOS: MidiaItem[] = [];

export const CONVITE_FOTOS: MidiaItem[] = [];
