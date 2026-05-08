export type ContentItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  iconKey: "mic" | "flaskConical" | "penTool" | "lightbulb";
  accentImage: "podcast" | "exatas" | "redacao" | "vestibulares";
};

export const contents: ContentItem[] = [
  {
    id: "podcasts",
    title: "Podcasts",
    subtitle: "Nossa Potência",
    description: "Conversas que inspiram e trazem novos olhares.",
    iconKey: "mic",
    accentImage: "podcast",
  },
  {
    id: "exatas",
    title: "Exatas no Campo",
    description:
      "Ciência aplicada, exercícios e desafios que explicam o real.",
    iconKey: "flaskConical",
    accentImage: "exatas",
  },
  {
    id: "redacao",
    title: "Redação ENEM",
    description:
      "Dicas práticas e aulas focadas para alcançar a nota máxima.",
    iconKey: "penTool",
    accentImage: "redacao",
  },
  {
    id: "vestibulares",
    title: "Dicas de Vestibulares",
    description: "Estratégias e macetes para vencer cada prova.",
    iconKey: "lightbulb",
    accentImage: "vestibulares",
  },
];
