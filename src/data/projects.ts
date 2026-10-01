export type Project = {
  id: string
  title: string
  description: string
  category: string
  status: "online" | "em desenvolvimento" | "conceito"
  technologies: string[]
  image?: string
  github?: string
  demo?: string
  vercel?: string
  supabase?: string
  problem: string
  solution: string
  features: string[]
}

export const projects: Project[] = [
  {
    id: "projeto-01",
    title: "Projeto Exemplo 01",
    description:
      "Substitua por uma descrição objetiva do projeto, contexto e principal resultado.",
    category: "Web",
    status: "conceito",
    technologies: ["React", "TypeScript", "Supabase"],
    github: "https://github.com/SEU-USUARIO",
    demo: "https://SEU-PROJETO.vercel.app",
    problem: "[DESCREVA O PROBLEMA]",
    solution: "[DESCREVA A SOLUÇÃO]",
    features: [
      "[FUNCIONALIDADE 01]",
      "[FUNCIONALIDADE 02]",
      "[FUNCIONALIDADE 03]",
    ],
  },
  {
    id: "projeto-02",
    title: "Projeto Exemplo 02",
    description:
      "Use este espaço para contar o que você construiu e quais decisões técnicas tomou.",
    category: "Sistemas",
    status: "em desenvolvimento",
    technologies: ["Next.js", "PostgreSQL", "APIs"],
    github: "https://github.com/SEU-USUARIO",
    problem: "[DESCREVA O PROBLEMA]",
    solution: "[DESCREVA A SOLUÇÃO]",
    features: ["[FUNCIONALIDADE 01]", "[FUNCIONALIDADE 02]"],
  },
  {
    id: "projeto-03",
    title: "Projeto Exemplo 03",
    description:
      "Apresente aqui um experimento, automação ou aplicação relevante do seu portfólio.",
    category: "Python",
    status: "conceito",
    technologies: ["Python", "IA", "REST"],
    github: "https://github.com/SEU-USUARIO",
    problem: "[DESCREVA O PROBLEMA]",
    solution: "[DESCREVA A SOLUÇÃO]",
    features: ["[FUNCIONALIDADE 01]", "[FUNCIONALIDADE 02]"],
  },
]

export const projectFilters = [
  "Todos",
  "Web",
  "Sistemas",
  "Python",
  "PHP",
  "JavaScript",
  "React",
  "Experimentos",
]
