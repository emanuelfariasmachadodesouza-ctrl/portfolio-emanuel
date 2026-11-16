import {
  Braces,
  Code2,
  Database,
  Figma,
  Github,
  Globe2,
  Server,
  Sparkles,
  TerminalSquare,
  Wrench,
  Cpu,
  Layers3,
  Cloud,
  Boxes,
  Bot,
  Gamepad2,
  FlaskConical,
} from "lucide-react"

export const skillGroups = [
  {
    title: "Front-end",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Back-end",
    icon: Server,
    skills: ["Node.js", "Python", "PHP", "APIs", "REST"],
  },
  {
    title: "Banco de dados",
    icon: Database,
    skills: ["Supabase", "PostgreSQL", "MySQL"],
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "VS Code", "PyCharm", "Figma"],
  },
] as const

export const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Sites modernos, responsivos e rápidos, construídos com foco no produto.",
    icon: Globe2,
  },
  {
    title: "Sistemas",
    description:
      "Soluções personalizadas para organizar processos e transformar necessidades em software.",
    icon: Boxes,
  },
  {
    title: "Banco de Dados",
    description:
      "Modelagem, estruturação e integração de dados para aplicações web.",
    icon: Database,
  },
  {
    title: "Tecnologia",
    description: "Consultoria, manutenção e suporte técnico através da nexbit.",
    icon: Cpu,
  },
] as const

export const experience = [
  {
    period: "[ANO]",
    title: "Desenvolvimento de projetos próprios",
    description:
      "Adicione aqui projetos, aprendizados e marcos reais da sua jornada.",
  },
  {
    period: "[ANO]",
    title: "Desenvolvimento Web",
    description: "Registre sua evolução com interfaces, aplicações e sistemas.",
  },
  {
    period: "[ANO]",
    title: "Formação / Estudos",
    description: "Preencha com informações confirmadas sobre sua formação.",
  },
] as const

export const labs = [
  {
    title: "Inteligência Artificial",
    category: "IA",
    status: "Experimento",
    icon: Bot,
  },
  {
    title: "Game development",
    category: "GAME DEV",
    status: "Em desenvolvimento",
    icon: Gamepad2,
  },
  {
    title: "Tecnologias Web",
    category: "WEB",
    status: "Experimento",
    icon: Layers3,
  },
  {
    title: "Ideias & protótipos",
    category: "EXPERIMENTOS",
    status: "Experimento",
    icon: FlaskConical,
  },
] as const

export const iconSet = {
  Braces,
  Figma,
  Github,
  Sparkles,
  TerminalSquare,
  Cloud,
}
