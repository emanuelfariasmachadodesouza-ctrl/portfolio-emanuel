import { ArrowUpRight, Check, Sparkles } from "lucide-react"
import { experience, labs, services, skillGroups } from "@/data/content"
import { profile } from "@/data/profile"
import { projects } from "@/data/projects"
import { Anchor, Container, Reveal, SectionHeading } from "./ui"

const focus = [
  "Desenvolvimento Web",
  "Sistemas",
  "Banco de Dados",
  "Inteligência Artificial",
  "Projetos próprios",
  "Aprendizado contínuo",
]
const strengths = [
  "Aprendizado rápido",
  "Curiosidade tecnológica",
  "Projetos próprios",
  "Resolução de problemas",
  "Organização",
  "Novas tecnologias",
]

export function About() {
  return (
    <section id="sobre" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="01 / Sobre"
            title="Curiosidade aplicada. Evolução constante."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal className="feature-card p-8 sm:p-10">
            <p className="text-2xl font-medium leading-snug tracking-tight">
              Olá, eu sou {profile.name}.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted">
              Sou estudante e desenvolvedor interessado em tecnologia,
              desenvolvimento de sistemas e criação de soluções digitais. Gosto
              de transformar ideias em projetos reais, explorar novas
              tecnologias e aprender através da prática.
            </p>
            <div className="mt-10 border-t border-line pt-8">
              <p className="label">Minha trajetória</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                [CONTE AQUI SUA EVOLUÇÃO, ESTUDOS E MARCOS REAIS.]
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6">
            <Reveal className="feature-card p-7">
              <p className="label">Foco atual</p>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {focus.map((item) => (
                  <li className="check-item" key={item}>
                    <Check size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="feature-card p-7">
              <p className="label">Diferenciais</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {strengths.map((item) => (
                  <span className="tech" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function Skills() {
  return (
    <section id="conhecimentos" className="section pt-0">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="02 / Conhecimentos"
            title="Tecnologia como meio, não como fim."
            description="Uma base versátil para desenvolver interfaces, serviços, integrações e experiências digitais completas."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map(({ title, icon: Icon, skills }, index) => (
            <Reveal key={title} className="skill-card">
              <div className="flex items-center justify-between">
                <span className="icon-box">
                  <Icon size={20} />
                </span>
                <span className="font-mono text-xs text-subtle">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-7 text-lg font-semibold">{title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span className="tech" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function Stats() {
  const stats = [
    {
      value: String(projects.length).padStart(2, "0"),
      label: "Projetos cadastrados",
    },
    {
      value: String(
        new Set(skillGroups.flatMap((group) => [...group.skills])).size,
      ).padStart(2, "0"),
      label: "Tecnologias listadas",
    },
    { value: "—", label: "Repositórios GitHub" },
    { value: "—", label: "Sistemas publicados" },
  ]
  return (
    <section className="border-b border-line">
      <Container className="grid grid-cols-2 divide-x divide-y divide-line lg:grid-cols-4 lg:divide-y-0">
        {stats.map((item) => (
          <div className="px-5 py-10 text-center" key={item.label}>
            <strong className="text-4xl font-semibold tracking-tight">
              {item.value}
            </strong>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted">
              {item.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experiencia" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="04 / Jornada"
            title="Construindo repertório, um projeto por vez."
            description="Uma timeline editável para registrar apenas experiências e marcos confirmados."
          />
        </Reveal>
        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal className="timeline-item" key={`${item.title}-${index}`}>
              <span className="timeline-index">0{index + 1}</span>
              <div>
                <span className="tag">{item.period}</span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function Services() {
  return (
    <section
      id="servicos"
      className="section border-y border-line bg-surface/40"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="05 / Serviços"
            title="Do conceito ao produto digital."
            description="Soluções digitais pensadas para necessidades reais, com clareza técnica e atenção aos detalhes."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map(({ title, description, icon: Icon }) => (
            <Reveal className="service-card group" key={title}>
              <span className="icon-box">
                <Icon size={21} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
              <ArrowUpRight
                className="ml-auto text-subtle transition group-hover:text-accent-2"
                size={19}
              />
            </Reveal>
          ))}
        </div>
        <Reveal className="nexbit-card">
          <div>
            <span className="eyebrow">nexbit</span>
            <h3 className="mt-3 text-2xl font-semibold">
              Também desenvolvo soluções através da nexbit.
            </h3>
            <p className="mt-2 text-sm text-muted">
              Consultoria técnica e manutenção de computadores, sem misturar a
              identidade empresarial ao portfólio pessoal.
            </p>
          </div>
          <Anchor
            href={profile.nexbit}
            className="button button--secondary shrink-0"
          >
            Conhecer nexbit <ArrowUpRight size={16} />
          </Anchor>
        </Reveal>
      </Container>
    </section>
  )
}

export function Lab() {
  return (
    <section id="lab" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="06 / Lab"
            title="O espaço entre aprender e lançar."
            description="Experimentos, protótipos e estudos que fazem parte do processo — mesmo antes de virarem produtos."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {labs.map(({ title, category, status, icon: Icon }) => (
            <Reveal className="lab-card" key={category}>
              <div className="flex items-center justify-between">
                <Icon size={22} className="text-accent-2" />
                <Sparkles size={15} className="text-subtle" />
              </div>
              <p className="mt-8 font-mono text-xs text-accent">{category}</p>
              <h3 className="mt-2 font-semibold">{title}</h3>
              <p className="mt-5 text-xs text-muted">
                <i className="status-mini status-mini--progress" />
                {status}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
