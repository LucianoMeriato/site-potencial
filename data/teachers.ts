export type Teacher = {
  id: string;
  name: string;
  role: string;
  area: string;
  experience: string;
  rating: number;
  image?: string;
  /** marca quem aparece com destaque no hero (máx. 3) */
  hero?: boolean;
};

export const teachers: Teacher[] = [
  {
    id: "diego",
    name: "Prof. Diego Pereira",
    role: "Exatas",
    area: "Matemática, Física e Química",
    experience: "Referência em Exatas",
    rating: 5,
    image: "/images/professores/diego.jpg",
    hero: true,
  },
  {
    id: "rogerio",
    name: "Prof. Rogério Frogeri",
    role: "Redação & Português",
    area: "Produção Textual e Língua Portuguesa",
    experience: "Fundador do +Potencial",
    rating: 5,
    image: "/images/professores/Rogerio.jpg",
    hero: true,
  },
  {
    id: "leticia",
    name: "Profa. Letícia",
    role: "Inglês",
    area: "Língua Inglesa e Interpretação",
    experience: "Aulas com método e rotina",
    rating: 5,
    image: "/images/professores/leticia.jpg",
  },
  {
    id: "cristiane",
    name: "Profa. Cristiane",
    role: "Biologia",
    area: "Biologia e Ciências da Natureza",
    experience: "Conteúdo aplicado e revisão",
    rating: 5,
    image: "/images/professores/cristiane.jpg",
  },
  {
    id: "nicole",
    name: "Nicole Tavares",
    role: "Acompanhamento",
    area: "Orientação e apoio especializado",
    experience: "Suporte para aluno e família",
    rating: 5,
    image: "/images/professores/nicole.jpg",
  },
];

export const heroTeachers = teachers.filter((t) => t.hero);
