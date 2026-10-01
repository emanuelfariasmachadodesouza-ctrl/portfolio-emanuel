-- Execute no SQL Editor do Supabase quando quiser migrar o conteúdo local.
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table contact_messages enable row level security;

-- Defina uma política adequada ao seu fluxo (Edge Function/captcha) antes de
-- permitir inserts públicos. Não use a service role key no frontend.
