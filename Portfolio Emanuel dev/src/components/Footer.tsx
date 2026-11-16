import { ArrowUp } from "lucide-react"
import { navItems, profile } from "@/data/profile"
import { Anchor, Container } from "./ui"

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xl font-semibold">{profile.name}</p>
          <p className="mt-2 text-sm text-muted">
            Desenvolvedor • Tecnologia • Projetos
          </p>
          <p className="mt-6 text-xs text-subtle">
            © 2026 {profile.name}. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {navItems.slice(0, 4).map((item) => (
            <Anchor
              key={item.href}
              href={item.href}
              className="text-xs text-muted hover:text-main"
            >
              {item.label}
            </Anchor>
          ))}
          <Anchor
            href="#top"
            className="icon-button grid place-items-center"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={17} />
          </Anchor>
        </div>
      </Container>
    </footer>
  )
}
