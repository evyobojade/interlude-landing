-- Newsletter subscribers for getinterlude.app, with proof of express consent under CASL.
-- Run in the Supabase SQL editor for the same project the app uses. Written by the landing
-- site's /api/subscribe route with the service role key; no public access.

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (email = lower(email) and length(email) <= 254),

  -- Proof of consent: the exact wording shown, its version, when, where and from which IP
  consent_text text not null,
  consent_version text not null,
  consented_at timestamptz not null,
  source_page text,
  ip_address inet,
  user_agent text,

  -- Double opt-in, for later: send confirmation_token by email, set confirmed_at when clicked.
  -- Rows with confirmed_at null are single opt-in (express consent via the checkbox).
  confirmation_token uuid unique default gen_random_uuid(),
  confirmed_at timestamptz,

  -- CASL requires honouring unsubscribes within 10 business days; never delete the row, so the
  -- consent history is kept
  unsubscribed_at timestamptz,

  created_at timestamptz not null default now()
);

-- Only the service role (the signup route) may touch this table
alter table public.newsletter_subscribers enable row level security;
revoke all on public.newsletter_subscribers from anon, authenticated;
