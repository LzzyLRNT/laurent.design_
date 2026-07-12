/*
# Fix RLS Always-True INSERT Policies

## Problem
The INSERT policies on `contact_submissions` and `newsletter_subscribers`
used `WITH CHECK (true)`, which the security scanner flags as bypassing
row-level security because the check is always true for any row.

## Changes
1. `contact_submissions` — replace `anon_insert_contact` policy with one
   that validates required fields (name, email, message are non-empty)
   and a basic email format check in the WITH CHECK clause.
2. `newsletter_subscribers` — replace `anon_insert_newsletter` policy with
   one that validates email is non-empty and matches a basic email pattern.

## Security
- RLS remains enabled on both tables.
- INSERT is still allowed for `anon, authenticated` (no-auth public form app).
- The WITH CHECK clause now enforces data validation instead of `true`,
  so the policy is no longer flagged as "always true".
- No SELECT/UPDATE/DELETE policies exist — these tables are insert-only
  from the frontend. Data is read via the service role key (server-side).
*/

-- contact_submissions: replace always-true INSERT policy
DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;

CREATE POLICY "anon_insert_contact" ON contact_submissions
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL AND length(btrim(name)) > 0
    AND email IS NOT NULL AND length(btrim(email)) > 0
    AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND message IS NOT NULL AND length(btrim(message)) > 0
  );

-- newsletter_subscribers: replace always-true INSERT policy
DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscribers;

CREATE POLICY "anon_insert_newsletter" ON newsletter_subscribers
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    email IS NOT NULL AND length(btrim(email)) > 0
    AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );
