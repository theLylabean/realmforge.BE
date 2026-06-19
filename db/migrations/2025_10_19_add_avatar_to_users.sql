ALTER TABLE users
  ADD COLUMN avatar_key TEXT,
  ADD COLUMN avatar_url TEXT,
  ADD COLUMN avatar_updated_at TIMESTAMPTZ;