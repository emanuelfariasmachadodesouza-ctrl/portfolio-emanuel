# Portfólio profissional

Portfólio premium e responsivo para apresentar identidade, conhecimentos, projetos, jornada, serviços, experimentos e contato. O projeto usa dados centralizados e está preparado para uma migração futura ao Supabase.

## Tecnologias

React 19, TypeScript, Vite, Tailwind CSS v4, Motion, Lucide Icons e Supabase.

## Funcionalidades

- Tema claro/escuro com preferência persistida
- Navegação responsiva e indicador de seção
- Busca, filtros e modal de projetos
- Animações discretas e suporte a `prefers-reduced-motion`
- Formulário acessível em modo demonstrativo
- Dados centralizados, SEO básico e layout responsivo

## Estrutura

```text
src/
├── components/   # Seções e componentes reutilizáveis
├── data/         # Perfil, projetos e conteúdo editável
├── lib/          # Cliente opcional do Supabase
├── App.tsx
└── index.css
supabase/schema.sql
```

## Executar

```bash
npm install
npm run dev
```

Para produção:

```bash
npm run build
npm run preview
```

## Personalização

- Nome, email e redes: `src/data/profile.ts`
- Projetos: `src/data/projects.ts`
- Conhecimentos, jornada, serviços e Lab: `src/data/content.ts`
- Foto: crie `public/profile/foto.jpg` e substitua o placeholder de `src/components/Hero.tsx` por uma imagem. Use uma foto profissional otimizada.
- Cores e tema: variáveis no início de `src/index.css`

## Supabase

1. Crie um projeto no Supabase.
2. Execute `supabase/schema.sql` no SQL Editor.
3. Copie `.env.example` para `.env.local`.
4. Preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.
5. Implemente o envio com política RLS segura ou uma Edge Function.

Nunca exponha `SUPABASE_SERVICE_ROLE_KEY` no frontend. O portfólio não armazena mensagens por padrão.

## Deploy na Vercel

1. Crie um repositório no GitHub e envie o projeto.
2. Importe o repositório na Vercel.
3. Use `npm run build` como comando e `dist` como diretório de saída.
4. Configure as variáveis públicas do Supabase apenas se a integração estiver ativa.
5. Faça o deploy. Um domínio próprio, como `seunome.dev`, pode ser conectado nas configurações do projeto.

## Roadmap

- V1 — Portfólio estático
- V2 — Supabase
- V3 — Painel administrativo
- V4 — Integração GitHub
- V5 — Analytics opcional e não invasivo
- V6 — CMS completo

## Autor

`[SEU NOME]` — substitua os placeholders antes da publicação.
