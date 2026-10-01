import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  MapPin,
  Terminal,
} from "lucide-react"
import { motion } from "motion/react"
import { profile } from "@/data/profile"
import { Anchor, Container, DisplayTitle } from "./ui"

export default function Hero() {
  const [photoAvailable, setPhotoAvailable] = useState(true)
  return (
    <section
      id="top"
      className="hero relative overflow-hidden border-b border-line pt-32"
    >
      <div className="hero-grid absolute inset-0 opacity-40" />
      <Container className="relative grid min-h-[46rem] items-center gap-14 pb-20 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="status-pill">
            <span className="status-dot" /> Disponível para projetos
          </div>
          <p className="mt-8 font-mono text-sm text-accent-2">
            &lt; desenvolvendo ideias /&gt;
          </p>
          <DisplayTitle className="mt-5 text-balance text-5xl font-semibold leading-[.96] tracking-[-0.055em] sm:text-7xl lg:text-[5.5rem]">
            Olá, eu sou <span className="block text-muted">{profile.name}</span>
          </DisplayTitle>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Anchor href="#projetos" className="button button--primary">
              Ver projetos <ArrowDownRight size={17} />
            </Anchor>
            <Anchor
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="button button--secondary"
            >
              <Github size={17} /> GitHub <ArrowUpRight size={15} />
            </Anchor>
          </div>
          <div className="mt-12 flex flex-wrap gap-6 border-t border-line pt-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <MapPin size={15} /> {profile.location}
            </span>
            <span className="flex items-center gap-2">
              <Terminal size={15} /> Full stack • Web • Sistemas
            </span>
          </div>
        </motion.div>
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.65 }}
        >
          <div className="portrait-shell">
            {photoAvailable ? (
              <img
                className="portrait-photo"
                src={profile.photo}
                alt={`Foto profissional de ${profile.name}`}
                loading="eager"
                onError={() => setPhotoAvailable(false)}
              />
            ) : (
              <div className="portrait-placeholder">
                <span className="text-5xl font-semibold text-accent">
                  {profile.initials}
                </span>
                <span className="mt-4 text-sm text-muted">
                  Sua foto profissional
                </span>
                <span className="mt-1 font-mono text-xs text-subtle">
                  /public/profile/foto.jpg
                </span>
              </div>
            )}
          </div>
          <div className="terminal-card">
            <div className="mb-4 flex gap-1.5">
              <i />
              <i />
              <i />
            </div>
            <p>
              <span>$</span> whoami
            </p>
            <p className="text-muted">&gt; {profile.role.toLowerCase()}</p>
            <p className="mt-3">
              <span>$</span> status
            </p>
            <p className="text-muted">&gt; construindo projetos...</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
import { useState } from "react"
