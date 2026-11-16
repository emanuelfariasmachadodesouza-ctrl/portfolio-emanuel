import { useState, type FormEvent } from "react"
import {
  Check,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Send,
} from "lucide-react"
import { profile } from "@/data/profile"
import { supabase } from "@/lib/supabase"
import {
  Anchor,
  Button,
  Container,
  Field,
  Reveal,
  SectionHeading,
  TextArea,
} from "./ui"

export default function Contact() {
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle")
  const [copied, setCopied] = useState(false)

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) return
    if (!supabase) {
      setStatus("error")
      return
    }
    setStatus("loading")
    const data = new FormData(form)
    const { error } = await supabase.from("leads").insert({
      nome: String(data.get("name")),
      email: String(data.get("email")),
      assunto: String(data.get("subject")),
      mensagem: String(data.get("message")),
    })
    if (error) {
      setStatus("error")
      return
    }
    setStatus("success")
    form.reset()
  }
  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section
      id="contato"
      className="section border-t border-line bg-surface/40"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="07 / Contato"
            title="Tem uma ideia? Vamos torná-la real."
            description="Conte um pouco sobre o desafio. Preencha o formulário e eu respondo o mais breve possível."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal className="contact-panel">
            <p className="label">Canais diretos</p>
            <div className="mt-6 grid gap-3">
              <Button
                variant="secondary"
                className="justify-between"
                onClick={copyEmail}
              >
                <span className="flex items-center gap-2">
                  <Mail size={17} />
                  {profile.email}
                </span>
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </Button>
              <Anchor className="social-link" href={profile.github}>
                <Github size={17} /> GitHub
              </Anchor>
              <Anchor className="social-link" href={profile.linkedin}>
                <Linkedin size={17} /> LinkedIn
              </Anchor>
              <Anchor className="social-link" href={profile.instagram}>
                <Instagram size={17} /> Instagram
              </Anchor>
            </div>
            <p className="mt-10 text-sm leading-relaxed text-muted">
              Substitua os placeholders em <code>src/data/profile.ts</code>.
              Nenhuma informação será armazenada sem configuração explícita.
            </p>
          </Reveal>
          <Reveal>
            <form
              className="feature-card grid gap-5 p-7 sm:p-9"
              onSubmit={submit}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-label">
                  Nome
                  <Field name="name" required placeholder="Seu nome" />
                </label>
                <label className="form-label">
                  Email
                  <Field
                    name="email"
                    type="email"
                    required
                    placeholder="voce@email.com"
                  />
                </label>
              </div>
              <label className="form-label">
                Assunto
                <Field
                  name="subject"
                  required
                  placeholder="Como posso ajudar?"
                />
              </label>
              <label className="form-label">
                Mensagem
                <TextArea
                  name="message"
                  required
                  minLength={10}
                  placeholder="Conte um pouco sobre sua ideia..."
                />
              </label>
              {status === "success" && (
                <p className="success-message" role="status">
                  <Check size={16} /> Mensagem enviada! Obrigado pelo contato.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500" role="alert">
                  Não foi possível enviar. Tente novamente.
                </p>
              )}
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Enviando..." : "Enviar mensagem"}{" "}
                <Send size={16} />
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}