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
  /** Mensagem que será pré-preenchida no WhatsApp ao clicar em "Saber mais" */
  whatsappMessage: string;
};

export const trails: Trail[] = [
  {
    id: "enem",
    title: "ENEM",
    description: "Preparação completa e estratégica para o ENEM.",
    iconKey: "graduationCap",
    whatsappMessage:
      "Olá, +Potencial! Vim pelo site e quero saber mais sobre a preparação para o ENEM.",
  },
  {
    id: "vestibulares",
    title: "Vestibulares",
    description: "UFLA, UFMG, UFV, CEFET, Medicina e outras.",
    iconKey: "scrollText",
    whatsappMessage:
      "Olá, +Potencial! Vim pelo site e quero saber mais sobre a preparação para vestibulares (UFLA, UFMG, UFV, CEFET, Medicina, etc.).",
  },
  {
    id: "redacao",
    title: "Redação",
    description: "Da ideia à nota máxima: com método, treino e feedback real.",
    iconKey: "penLine",
    whatsappMessage:
      "Olá, +Potencial! Vim pelo site e quero saber mais sobre as aulas de Redação.",
  },
  {
    id: "ensino-medio",
    title: "Ensino Médio",
    description:
      "Conteúdos fortes para brilhar e construir o futuro com confiança.",
    iconKey: "bookOpen",
    whatsappMessage:
      "Olá, +Potencial! Vim pelo site e quero saber mais sobre o acompanhamento para o Ensino Médio.",
  },
  {
    id: "fundamental",
    title: "Fundamental",
    description:
      "Bases sólidas desde cedo para chegar com força no futuro.",
    iconKey: "trendingUp",
    whatsappMessage:
      "Olá, +Potencial! Vim pelo site e quero saber mais sobre o reforço para o Ensino Fundamental.",
  },
  {
    id: "acompanhamento",
    title: "Acompanhamento",
    description:
      "Rotina, metas, disciplina e equilíbrio entre estudos e vida.",
    iconKey: "users",
    whatsappMessage:
      "Olá, +Potencial! Vim pelo site e quero saber mais sobre o acompanhamento e a rotina de estudos.",
  },
];
