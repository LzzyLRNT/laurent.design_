/*
# Create contact submissions and newsletter tables

1. New Tables
- `contact_submissions` — stores quote requests and contact form submissions
  - id (uuid, primary key)
  - name (text, not null)
  - email (text, not null)
  - company (text, nullable)
  - service (text, nullable) — which service the user is interested in
  - budget (text, nullable) — budget range
  - message (text, not null)
  - status (text, default 'new') — new, read, contacted, archived
  - created_at (timestamptz, default now())
- `newsletter_subscribers` — stores email addresses for newsletter signup
  - id (uuid, primary key)
  - email (text, unique, not null)
  - source (text, nullable) — where the signup came from
  - created_at (timestamptz, default now())
2. Security
- Enable RLS on both tables.
- Allow anon + authenticated INSERT only (public can submit forms).
- No public SELECT/UPDATE/DELETE (only service role can read/manage data).
3. Notes
- This is a single-tenant app with no sign-in. The public only needs to submit forms.
- All read/management operations are done via the service role key server-side.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  service text,
  budget text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscribers;
CREATE POLICY "anon_insert_newsletter" ON newsletter_subscribers
  FOR INSERT TO anon, authenticated WITH CHECK (true);
