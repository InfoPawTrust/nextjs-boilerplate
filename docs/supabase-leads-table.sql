-- Tabelle "leads" für den PawTrust Lead-Funnel
-- Im Supabase Dashboard: SQL Editor → New Query → einfügen und ausführen

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  tierart text not null,
  tiername text not null,
  alter text not null,
  geschlecht text default '',
  rasse text default '',
  gewicht text default '',
  plz text not null,
  vorerkrankung text default '',
  email text not null,
  telefon text not null,
  name text default '',
  consent boolean not null default false
);

-- Optional: RLS aktivieren und Policy, damit nur der Service (anon key) inserten darf
alter table public.leads enable row level security;

create policy "Allow anonymous insert for leads"
  on public.leads
  for insert
  to anon
  with check (true);

-- Lese-Zugriff z.B. nur für authentifizierte User oder Service Role – je nach Bedarf anpassen
