import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { navItems, profile } from "@/data/profile"
import { Anchor, Button, Container } from "./ui"

type Theme = "dark" | "light" | "system"
const themes: Theme[] = ["dark", "light", "system"]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(
    () => localStorage.getItem("theme") as Theme || "dark",
  )
  const [active, setActive] = useState("sobre")

  useEffect(() => {
    const resolved =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark"
        : theme
    document.documentElement.dataset.theme = resolved
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { rootMargin: "-35% 0px -55%" },
    )
    navItems.forEach(({ href }) => {
      const element = document.querySelector(href)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Anchor
          href="#top"
          className="flex items-center gap-3 font-semibold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-accent text-sm text-white">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Anchor>
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <Anchor
              key={item.href}
              href={item.href}
              className={`nav-link ${
                active === item.href.slice(1) ? "nav-link--active" : ""
              }`}
            >
              {item.label}
            </Anchor>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="icon-button"
            onClick={() =>
              setTheme(themes[(themes.indexOf(theme) + 1) % themes.length])
            }
            aria-label={`Tema atual: ${theme}. Alternar tema`}
            title={`Tema: ${theme}`}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </Button>
          <Anchor
            href="#contato"
            className="button button--secondary hidden sm:flex"
          >
            Vamos conversar
          </Anchor>
          <Button
            variant="ghost"
            className="icon-button lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Abrir menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="border-t border-line bg-canvas p-4 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Anchor
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="nav-link py-3"
                >
                  {item.label}
                </Anchor>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
