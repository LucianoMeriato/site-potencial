export type Trail = {
  id: string;
  title: string;
  description: string;
  iconKey:
    | "graduationCap"
    | "scrollText"
    | "penLine"
    | "bookOpen"
    | "trendingUp"
    | "users";
  href: string;
};

export const trails: Trail[] = [
  {
    id: "enem",
    title: "ENEM",
    description: "Preparação completa e estratégica para o ENEM.",
    iconKey: "graduationCap",
    href: "#enem",
  },
  {
    id: "vestibulares",
    title: "Vestibulares",
    description: "UFMG, UFV, CEFET, Medicina e outras.",
    iconKey: "scrollText",
    href: "#vestibulares",
  },
  {
    id: "redacao",
    title: "Redação",
    description: "Da ideia à nota máxima: com método, treino e feedback real.",
    iconKey: "penLine",
    href: "#redacao",
  },
  {
    id: "ensino-medio",
    title: "Ensino Médio",
    description:
      "Conteúdos fortes para brilhar e construir o futuro com confiança.",
    iconKey: "bookOpen",
    href: "#ensino-medio",
  },
  {
    id: "fundamental",
    title: "Fundamental",
    description:
      "Bases sólidas desde cedo para chegar com força no futuro.",
    iconKey: "trendingUp",
    href: "#fundamental",
  },
  {
    id: "acompanhamento",
    title: "Acompanhamento",
    description:
      "Rotina, metas, disciplina e equilíbrio entre estudos e vida.",
    iconKey: "users",
    href: "#acompanhamento",
  },
];
