export type MethodologyStep = {
  number: string;
  title: string;
  description: string;
  iconKey:
    | "fileSearch"
    | "calendar"
    | "lightbulb"
    | "target"
    | "messageCircle"
    | "users";
};

export const methodologySteps: MethodologyStep[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos seu ponto de partida com precisão.",
    iconKey: "fileSearch",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Plano personalizado com metas reais e prazos definidos.",
    iconKey: "calendar",
  },
  {
    number: "03",
    title: "Aulas que transformam",
    description: "Conteúdo dinâmico com professores que inspiram.",
    iconKey: "lightbulb",
  },
  {
    number: "04",
    title: "Prática e revisão",
    description: "Exercícios certeiros e simulados que fazem a diferença.",
    iconKey: "target",
  },
  {
    number: "05",
    title: "Feedback constante",
    description: "Ajustes e orientação para manter o foco e a evolução.",
    iconKey: "messageCircle",
  },
  {
    number: "06",
    title: "Resultado com presença",
    description: "Acompanhamos você até a aprovação e além.",
    iconKey: "users",
  },
];
