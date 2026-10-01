import { useMemo, useState } from "react"
import { ArrowUpRight, Github, Search, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { projectFilters, projects, type Project } from "@/data/projects"
import {
  Anchor,
  BareButton,
  Button,
  Container,
  Field,
  Reveal,
  SectionHeading,
} from "./ui"

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  return (
    <motion.article layout className="project-card group">
      <BareButton
        className="project-visual"
        onClick={onOpen}
        aria-label={`Ver detalhes de ${project.title}`}
      >
        <span className="font-mono text-xs text-subtle">{project.id}</span>
        <span className="project-monogram">{project.title.slice(-2)}</span>
        <ArrowUpRight
          className="absolute right-5 top-5 text-muted transition group-hover:text-accent-2"
          size={20}
        />
      </BareButton>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="tag">{project.category}</span>
          <span className="text-xs text-muted">
            <i
              className={`status-mini status-mini--${
                project.status === "online" ? "online" : "progress"
              }`}
            />
            {project.status}
          </span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 min-h-12 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span className="tech" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
          {project.github && (
            <Anchor
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              <Github size={15} /> GitHub
            </Anchor>
          )}
          {project.demo && (
            <Anchor
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Demo <ArrowUpRight size={14} />
            </Anchor>
          )}
          <Button variant="ghost" className="ml-auto text-sm" onClick={onOpen}>
            Detalhes
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  return (
    <motion.div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <motion.div
        className="modal-panel"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <Button
          variant="ghost"
          className="icon-button absolute right-5 top-5"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <X size={18} />
        </Button>
        <p className="eyebrow">Projeto • {project.category}</p>
        <h3 className="mt-3 pr-12 text-3xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="label">Problema</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.problem}
            </p>
          </div>
          <div>
            <h4 className="label">Solução</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.solution}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="label">Funcionalidades</h4>
          <ul className="mt-3 grid gap-2 text-sm text-muted">
            {project.features.map((feature) => (
              <li key={feature}>— {feature}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span className="tech" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState("Todos")
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<Project | null>(null)
  const filtered = useMemo(() => {
    const term = query.toLowerCase().trim()
    return projects.filter((project) => {
      const matchesFilter =
        filter === "Todos" ||
        project.category === filter ||
        project.technologies.includes(filter)
      const haystack = [
        project.title,
        project.description,
        project.category,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase()
      return matchesFilter && haystack.includes(term)
    })
  }, [filter, query])

  return (
    <section
      id="projetos"
      className="section border-y border-line bg-surface/40"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="03 / Projetos"
            title="Trabalho que resolve problemas."
            description="Uma seleção preparada para receber seus projetos reais. Filtre, busque e explore os detalhes."
          />
        </Reveal>
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((item) => (
              <Button
                key={item}
                variant={filter === item ? "primary" : "ghost"}
                onClick={() => setFilter(item)}
              >
                {item}
              </Button>
            ))}
          </div>
          <label className="search-box">
            <Search size={17} />
            <Field
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar projetos..."
              aria-label="Buscar projetos"
            />
          </label>
        </div>
        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        {!filtered.length && (
          <div className="empty-state">
            Nenhum projeto encontrado.
            <span>Tente outra busca ou categoria.</span>
          </div>
        )}
      </Container>
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
